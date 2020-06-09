import { observable, action } from 'mobx'
class UI {
  @observable loading = false
  @action setLoading = (loading: boolean): void => {
    this.loading = loading
  }
  @observable menus = [{
    key: 'server1',
    name: 'server1',
    entry: '//localhost:8080',
    activeRule: '/app-server1',
    active: true,
  },{
    key: 'server2',
    name: 'server2',
    entry: '//localhost:8081',
    activeRule: '/app-server2',
    active: false,
  },{
    key: 'server3',
    name: 'server3',
    entry: '//localhost:8082',
    activeRule: '/app-server3',
    active: false,
  }]
  @action setMenuActive = (key) => {
    this.menus.forEach(menu => {
      menu.active = menu.key === key
    })
  }
}
const ui = new UI()
export {
  ui
}