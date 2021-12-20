import { lazy } from 'react'

const Pages = {
  PublicPage: lazy(() => import('./PublicPage'))
}

export default Pages
