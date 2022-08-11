import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'

import { unRegisterServiceWorker } from 'configs'
import store from 'redux/store'

import App from './App'

ReactDOM.render(
  <>
    <Helmet>
      <script src=""></script>
    </Helmet>

    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById('root')
)

unRegisterServiceWorker()
