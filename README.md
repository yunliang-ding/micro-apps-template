# micro-apps-template
前端微应用模版
# 参看
https://qiankun.umijs.org/zh/guide/getting-started
# 设置服务Cors (仅供参考)
```
const fs = require('fs')
const express = require('express')
const cors = require('cors');
const app = express()
const port = 8080
app.use(cors()) // 开启cors
app.use(express.static('./public')) // 开启静态资源访问
app.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
  res.end(fs.readFileSync('./index.html').toString())
})
app.listen(port, () => { // 启动服务
  console.log(`port on ${port}`)
})
```
# 需要自己的微服务导出相应的生命周期钩子
```
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('react app bootstraped');
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log(props);
  ReactDOM.render(<App />, document.getElementById('react15Root'));
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('react15Root'));
}
/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update props', props);
}
```