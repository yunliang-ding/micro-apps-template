import * as React from "react"
import * as ReactDOM from "react-dom"
import { App } from './app'
import { useStrict } from 'mobx'
import { registerMicroApps, start } from 'qiankun'
import store from './store/index'
import './index.less'
useStrict(true)
ReactDOM.render( <App />, document.querySelector('#app'))
registerMicroApps(store.UI.menus.map(menu => {
  return {
    name: menu.name, // app name registered
    entry: menu.entry,
    container: `#${menu.key}`,
    activeRule: menu.activeRule,
  }
}))
start()