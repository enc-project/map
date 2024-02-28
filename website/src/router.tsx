import createRouter, { Route } from 'router5'
import { useRoute } from 'react-router5'
import browserPlugin from 'router5-plugin-browser'

import Home from './pages/Home'
import RedGreenOrBlue from './pages/RedGreenOrBlue'
import ElectionCycles from './pages/ElectionCycles'
import MediaManipulation from './pages/MediaManipulation'
import PerspectiveGenerator from './pages/PerspectiveGenerator'
import DataDrivenDecisions from './pages/DataDrivenDecisions'

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
  name: 'red-green-or-blue',
  path: '/articles/red-green-or-blue',
  meta: {
    title: 'red, green, OR blue?',
  },
  render: () => (
      <RedGreenOrBlue />
  ),
}, {
  name: 'election-cycles',
  path: '/articles/election-cycles',
  meta: {
    title: 'It\'s sooo slow...',
  },
  render: () => (
      <ElectionCycles />
  ),
}, {
  name: 'media-manipulation',
  path: '/articles/media-manipulation',
  meta: {
    title: 'Media manipulation',
  },
  render: () => (
      <MediaManipulation />
  ),
}, {
  name: 'perspective-generator',
  path: '/articles/perspective-generator',
  meta: {
    title: 'Perspective generator',
  },
  render: () => (
      <PerspectiveGenerator />
  ),
}, {
  name: 'data-driven-decisions',
  path: '/articles/data-driven-decisions',
  meta: {
    title: 'Data Driven Decisions',
  },
  render: () => (
      <DataDrivenDecisions />
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