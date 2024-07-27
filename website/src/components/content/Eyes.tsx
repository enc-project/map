import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import useScrollPercentage from '../../hooks/useScrollPercentage';

const Eyes: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollPercentage = useScrollPercentage(containerRef, contentRef);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;

    const mouseThreshold = 0.3;
    const devicePixelRatio = Math.min(window.devicePixelRatio, 2);

    const mouse = {
      x: 0.5 * window.innerWidth,
      y: 0.5 * window.innerHeight,
      tX: 0.5 * window.innerWidth,
      tY: 0.5 * window.innerHeight,
    };

    const params = {
      scale: 0.2,
      speed: 0.3,
      saturation: 0.7,
      blueRatio: 0.5,
      redness: 0.25,
    };

    let uniforms: { [key: string]: WebGLUniformLocation | null } = {};
    const gl = canvasEl.getContext('webgl') as WebGLRenderingContext;

    if (!gl) {
      console.error("WebGL is not supported by your browser.");
      return;
    }

    function initShader() {
      const vsSource = document.getElementById('vertShader')?.innerHTML;
      const fsSource = document.getElementById('fragShader')?.innerHTML;

      if (!vsSource || !fsSource) {
        console.error('Shader source not found');
        return null;
      }

      function createShader(gl: WebGLRenderingContext, sourceCode: string, type: number): WebGLShader | null {
        const shader = gl.createShader(type);
        if (!shader) return null;
        gl.shaderSource(shader, sourceCode);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
          gl.deleteShader(shader);
          return null;
        }

        return shader;
      }

      const vertexShader = createShader(gl, vsSource, gl.VERTEX_SHADER);
      const fragmentShader = createShader(gl, fsSource, gl.FRAGMENT_SHADER);

      if (!vertexShader || !fragmentShader) return null;

      function createShaderProgram(gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram | null {
        const program = gl.createProgram();
        if (!program) return null;
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
          console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(program));
          return null;
        }

        return program;
      }

      const shaderProgram = createShaderProgram(gl, vertexShader, fragmentShader);
      if (!shaderProgram) return null;

      uniforms = getUniforms(gl, shaderProgram);

      function getUniforms(gl: WebGLRenderingContext, program: WebGLProgram): { [key: string]: WebGLUniformLocation | null } {
        let uniforms: { [key: string]: WebGLUniformLocation | null } = {};
        const uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        for (let i = 0; i < uniformCount; i++) {
          const uniformInfo = gl.getActiveUniform(program, i);
          if (uniformInfo) {
            uniforms[uniformInfo.name] = gl.getUniformLocation(program, uniformInfo.name);
          }
        }
        return uniforms;
      }

      const vertices = new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0]);

      const vertexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

      gl.useProgram(shaderProgram);

      const positionLocation = gl.getAttribLocation(shaderProgram, 'a_position');
      gl.enableVertexAttribArray(positionLocation);

      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      gl.uniform1f(uniforms.u_scale, params.scale);
      gl.uniform1f(uniforms.u_speed, params.speed);
      gl.uniform1f(uniforms.u_saturation, params.saturation);
      gl.uniform1f(uniforms.u_redness, params.redness);
      gl.uniform1f(uniforms.u_blue_ratio, params.blueRatio);

      return shaderProgram;
    }

    const shaderProgram = initShader();
    if (!shaderProgram) return;

    function render() {
      const currentTime = 0.001 * performance.now();

      gl.uniform1f(uniforms.u_time, currentTime);

      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      mouse.x += (mouse.tX - mouse.x) * mouseThreshold;
      mouse.y += (mouse.tY - mouse.y) * mouseThreshold;

      gl.uniform2f(uniforms.u_pointer, mouse.x / window.innerWidth, 1.0 - mouse.y / window.innerHeight);
      requestAnimationFrame(render);
    }

    function resizeCanvas() {
      if (!canvasEl) return;
      canvasEl.width = window.innerWidth * devicePixelRatio;
      canvasEl.height = window.innerHeight * devicePixelRatio;
      gl.viewport(0, 0, canvasEl.width, canvasEl.height);
      gl.uniform1f(uniforms.u_ratio, canvasEl.width / canvasEl.height);
    }

    function handleResize() {
      resizeCanvas();
    }

    function handleMouseMove(e: MouseEvent) {
      updateMousePosition(e.pageX, e.pageY);
    }

    function handleTouchMove(e: TouchEvent) {
      updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
    }

    function handleClick(e: MouseEvent) {
      updateMousePosition(e.pageX, e.pageY);
    }

    function updateMousePosition(eX: number, eY: number) {
      mouse.tX = eX;
      mouse.tY = eY;
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    canvasEl.addEventListener('click', handleClick);

    resizeCanvas();
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      canvasEl.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <Box ref={containerRef} style={{ height: '4000px', position: 'relative' }}>
      <Box ref={contentRef} style={{ position: 'sticky', top: '0', height: '100vh' }}>
        <canvas id="eyes-pattern" ref={canvasRef}></canvas>
        <script type="x-shader/x-fragment" id="vertShader">
          {`
            precision mediump float;

            varying vec2 vUv;
            attribute vec2 a_position;

            void main() {
                vUv = .5 * (a_position + 1.);
                gl_Position = vec4(a_position, 0.0, 1.0);
            }
          `}
        </script>
        <script type="x-shader/x-fragment" id="fragShader">
          {`
            precision mediump float;

            varying vec2 vUv;
            uniform float u_scale;
            uniform float u_time;
            uniform float u_speed;
            uniform float u_ratio;
            uniform float u_saturation;
            uniform float u_redness;
            uniform float u_blue_ratio;
            uniform vec2 u_pointer;

            #define TWO_PI 6.28318530718


            // =================================================
            // cell-related helpers
            vec2 hash(vec2 p) {
                p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
                return fract(sin(p)*18.5453);
            }
            // polynomial-based smooth minimum;
            // used for rounded Voronoi shaping
            float smin(float angle, float b, float k) {
                float h = clamp(.5 + .5 * (b - angle) / k, 0., 1.);
                return mix(b, angle, h) - k * h * (1. - h);
            }

            // =================================================
            // eye-related helpers
            float rand(vec2 n) {
                return fract(cos(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
            }
            float noise(vec2 n) {
                const vec2 d = vec2(0.0, 1.0);
                vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));
                return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);
            }
            float fbm(vec2 n) {
                float total = 0.0, amplitude = .4;
                for (int i = 0; i < 4; i++) {
                    total += noise(n) * amplitude;
                    n += n;
                    amplitude *= 0.6;
                }
                return total;
            }
            vec3 hsv2rgb(vec3 c) {
                vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
                vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
                return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
            }

            // =================================================
            // vessels-related helpers
            mat2 rotate2D(float r) {
                return mat2(cos(r), sin(r), -sin(r), cos(r));
            }
            float vessels(vec2 uv, float t) {
                float S = 10.;
                vec2 n = vec2(0);
                vec2 N = vec2(0);
                mat2 m = rotate2D(1.);
                for (int j = 0; j < 15; j++) {
                    uv *= m;
                    n *= m;
                    vec2 q = uv * S + float(j) + n + t;
                    n += sin(q);
                    N += cos(q) / S * (1. + .2);
                    S *= 1.2;
                }
                return (N.x + N.y + .2);
            }


            // =================================================

            vec3 eye_pattern(vec2 uv, float tile_time, float pointer_angle, float pointer_distance) {

                // tiles coordinates
                vec2 i_uv = floor(uv);
                vec2 f_uv = fract(uv);

                // outputs
                vec2 randomizer = vec2(0.);
                vec3 distance = vec3(1.);
                float angle = 0.;

                // get Voronoi cell data
                for (int y = -1; y <= 1; y++) {
                    for (int x = -1; x <= 1; x++) {
                        vec2 tile_offset = vec2(float(x), float(y));
                        vec2 blick_tile_offset = tile_offset;
                        vec2 o = hash(i_uv + tile_offset);
                        tile_offset += (.5 + (.25 + pointer_distance) * sin(tile_time + TWO_PI * o)) - f_uv;
                        blick_tile_offset += (.9 - f_uv);

                        float dist = dot(tile_offset, tile_offset);
                        float old_min_dist = distance.x;

                        distance.z = max(distance.x, max(distance.y, min(distance.z, dist)));
                        distance.y = max(distance.x, min(distance.y, dist));
                        distance.x = min(distance.x, dist);

                        if (old_min_dist > distance.x) {
                            angle = atan(tile_offset.x, tile_offset.y);
                            randomizer = o;
                        }
                    }
                }

                distance = sqrt(distance);
                distance = sqrt(distance);
                float cell_shape = min(smin(distance.z, distance.y, .1) - distance.x, 1.);
                float cell_radius = distance.x;
                float eye_radius = 2. * cell_radius - .5 * cell_shape;

                // at this point, we have
                // -- randomizer (x2)
                // -- angle to use as polar coordinate
                // -- cell_shape - Voronoi cell w/ rounded endges
                // -- cell_radius - exact circle in the mid of cell
                // -- eye_radius - mix of two

                // ============================================================

                float redness_angle = angle * 2. + randomizer.y;
                float eye_ball_redness = vessels(vec2(redness_angle * .2, cell_shape * 2.), .5 * u_time);
                eye_ball_redness *= pow(cell_radius, 1. / u_redness);// more on edges
                eye_ball_redness *= (.5 + .5 * randomizer.y);// less for some cells
                eye_ball_redness *= smoothstep(3., 1.5, angle);// hide the seam
                eye_ball_redness *= smoothstep(-3., -2., angle);// hide the seam
                vec3 eye_ball_color = vec3(1., 1. - eye_ball_redness, 1. - eye_ball_redness);

                // iris color
                float iris_color_1_hue = (1. - u_blue_ratio) * pow(randomizer.x, 3. - 2. * u_blue_ratio) + u_blue_ratio * pow(randomizer.x, 1.3 - u_blue_ratio);
                iris_color_1_hue = mix(.07, .59, iris_color_1_hue);
                vec3 iris_color_1 = hsv2rgb(vec3(iris_color_1_hue, u_saturation, .5 + iris_color_1_hue));
                vec3 iris_color_2 = hsv2rgb(vec3(.67 * randomizer.x - .1 * randomizer.y, .5, .1 + .2 * randomizer.y));

                float outer_color_noise = fbm(vec2(angle * 4., cell_radius));
                vec3 color = iris_color_1;
                color = mix(color, iris_color_2, outer_color_noise);

                vec3 iris_center_color = hsv2rgb(vec3(.2 - .1 * randomizer.y, u_saturation, .5));
                color = mix(iris_center_color, color, smoothstep(.05 + randomizer.y * .25, .45, cell_radius - .2 * pointer_distance));

                float white_incertion_noise = smoothstep(.4, 1., fbm(vec2(8. * angle, 10. * cell_shape)));
                white_incertion_noise *= (.9 + .5 * randomizer.x);
                color = mix(color, vec3(1.), white_incertion_noise);

                float dark_incertion_noise = smoothstep(.5, 1., fbm(vec2(3. * angle, 11. * cell_shape)));
                color = mix(color, vec3(0.), dark_incertion_noise);

                // dark pupil
                float pupil_shape = smoothstep(.35, .45, 1.2 * eye_radius - pointer_distance);
                color = mix(vec3(.0), color, pupil_shape);

                // darkness on the edge of iris
                color *= pow(smoothstep(1., .6, eye_radius), .3);

                // crop the iris
                float outer_shape = smoothstep(.9, 1., eye_radius);
                color = mix(color, eye_ball_color, outer_shape);

                float blick = smoothstep(1.6, .2, eye_radius + .1 * randomizer.y * sin(3. * u_time * randomizer.x));
                blick *= smoothstep(.5 - pointer_distance, .7, eye_radius - .2 * randomizer.y);
                blick *= (1. - sin(angle + pointer_angle));
                blick = step(1., blick);
                blick *= step(.5, fbm(2. * uv + vec2(0., .5 * u_time)));

                // dark cell border
                color -= .1 * pow(1. - cell_shape, 6.);
                color -= .4 * pow(1. - cell_shape, 100.);

                float round_shadow = -sin(angle + pointer_angle);
                round_shadow *= smoothstep(.4, .5, cell_radius);
                round_shadow = .13 * mix(0., round_shadow, 1. - smoothstep(.1, .2, pointer_distance));
                color += round_shadow;

                color = mix(color, vec3(1.), blick);

                return color;
            }


            void main() {
                vec2 uv = vUv;
                uv.x *= u_ratio;

                vec2 _uv = (vUv - .5) / u_scale + .5;
                _uv.x *= u_ratio;

                float tile_floating_speed = u_speed * u_time;

                vec2 point = u_pointer;
                point.x *= u_ratio;
                point -= uv;
                float pointer_angle = atan(point.y, point.x);
                float pointer_distance = pow(1. - .5 * length(point), 2.);
                pointer_distance *= .2;

                vec3 color = eye_pattern(_uv, tile_floating_speed, pointer_angle, pointer_distance);

                gl_FragColor = vec4(color, 1.);
            }
          `}
        </script>
      </Box>
    </Box>
  );
};

export default Eyes;