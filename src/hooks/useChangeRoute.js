import { history } from 'utils'

const useChangeRoute = (route) => {
  setTimeout(() => {
    history.push(route)
  }, 200)
}

export default useChangeRoute
