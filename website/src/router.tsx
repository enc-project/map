import createRouter, { Route } from 'router5'
import { useRoute } from 'react-router5'
import browserPlugin from 'router5-plugin-browser'

import Home from './pages/Home'

import ItDoesNotRepresentMe from './pages/ItDoesNotRepresentMe'
import ItsSlowToChange from './pages/ItsSlowToChange'
import ItsNotTrustworthy from './pages/ItsNotTrustworthy'

import AnimationExample from './page_examples/Animation'
import ContentLayoutExample from './page_examples/ContentLayout'

// extend the base router5 route to add metadata and self rendering
export interface IApplicationRoute extends Route {
  render: () => JSX.Element,
  meta: Record<string, any>,
}

export const NOT_FOUND_ROUTE: IApplicationRoute = {
  name: 'notfound',
  path: '/notfound',
  meta: {
    title: 'Page Not Found',
  },
  render: () => <div>Page Not Found</div>,
}

const routes: IApplicationRoute[] = [{
  name: 'home',
  path: '/',
  meta: {
    title: 'Home',
  },
  render: () => (
      <Home />
  ),
}, {
  name: 'it-does-not-represent-me',
  path: '/articles/it-does-not-represent-me',
  meta: {
    title: 'It does not represent me',
  },
  render: () => (
      <ItDoesNotRepresentMe />
  ),
}, {
  name: 'its-slow-to-change',
  path: '/articles/its-slow-to-change',
  meta: {
    title: `It's slow to change`,
  },
  render: () => (
      <ItsSlowToChange />
  ),
}, {
  name: 'its-not-trustworthy',
  path: '/articles/its-not-trustworthy',
  meta: {
    title: `It's not trustworthy`,
  },
  render: () => (
      <ItsNotTrustworthy />
  ),
}, {
  name: 'animation-example',
  path: '/examples/animation',
  meta: {
    title: 'Animation Example',
  },
  render: () => (
      <AnimationExample />
  ),
}, {
  name: 'content-layout-example',
  path: '/examples/content-layout',
  meta: {
    title: 'Content Layout Example',
  },
  render: () => (
      <ContentLayoutExample />
  ),
}, NOT_FOUND_ROUTE]

export const router = createRouter(routes, {
  defaultRoute: 'notfound',
  queryParamsMode: 'loose',
})

router.usePlugin(browserPlugin())
router.start()

export function useApplicationRoute(): IApplicationRoute {
  const { route } = useRoute()
  const fullRoute = routes.find(r => r.name == route?.name) || NOT_FOUND_ROUTE
  return fullRoute
}

export function RenderPage() {
  const route = useApplicationRoute()
  return route.render()
}

export default router