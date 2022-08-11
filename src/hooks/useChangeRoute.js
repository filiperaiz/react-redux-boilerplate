import { browserHistory } from 'routes'

const useChangeRoute = (route) => {
  setTimeout(() => {
    browserHistory.push(route)
  }, 200)
}

export default useChangeRoute
