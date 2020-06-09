import * as React from "react"
import { observer, inject } from 'mobx-react'
import { browserHistory } from 'react-router'
import './index.less'
@inject('UI')
@observer
class Header extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='app-header'>
      {
        this.props.UI.menus.map(menu => {
          return <div
            key={menu.key}
            className={menu.active ? 'app-header-item  app-header-item-active' : 'app-header-item'}
            onClick={
              () => {
                this.props.UI.setMenuActive(menu.key)
                browserHistory.push(menu.activeRule)
              }
            }
          >
            {menu.name}
          </div>
        })
      }
    </div>
  }
}
export { Header }