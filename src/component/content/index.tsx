import * as React from "react"
import { observer, inject } from 'mobx-react'
import { toJS } from 'mobx'
import './index.less'
@inject('UI')
@observer
class Content extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='app-content'>
      {
        this.props.UI.menus.map(menu => {
          return <div
            key={menu.key}
            id={menu.key}
            className='app-container'
            style={{ display: menu.active ? 'block' : 'none' }}
          />
        })
      }
    </div>
  }
}
export { Content }