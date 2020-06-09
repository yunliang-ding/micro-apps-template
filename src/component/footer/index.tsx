import * as React from "react"
import { observer, inject } from 'mobx-react'
import './index.less'
@inject('UI')
@observer
class Footer extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='app-footer'>
    </div>
  }
}
export { Footer }