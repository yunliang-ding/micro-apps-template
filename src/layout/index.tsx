import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Header, Content, Footer} from 'component/index'
import './index.less'
@inject('UI')
@observer
class Layout extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='app-layout'>
      <Header />
      <Content />
      <Footer />
    </div>
  }
}
export { Layout }