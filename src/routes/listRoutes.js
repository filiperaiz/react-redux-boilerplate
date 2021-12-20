import { useChangeRoute } from 'hooks'
import privatePages from 'pages/privatePages'
import publicPages from 'pages/publicPages'

const listRoutes = {
  public: {
    path: '/public',
    title: 'Public',
    component: publicPages.PublicPage,
    private: false,
    redirect() {
      useChangeRoute(this.path)
    }
  },
  private: {
    path: '/private',
    title: 'Private',
    component: privatePages.PrivatePage,
    private: true,
    redirect() {
      useChangeRoute(this.path)
    }
  }
}

export default listRoutes
