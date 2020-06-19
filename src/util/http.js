import appInit from './appInit'

console.log(localStorage.init)
if(!localStorage.init) {
  appInit()
}
class Http {
  constructor(name) {
    this.name = name
    this.data = JSON.parse(localStorage[name])
  }
  get(id) {
    return this.data.find(i => i.ID === id)
  }
  post(item) {
    const newItem = Object.assign({ ID: (new Date().getTime()).toString(36) }, item)
    this.data.push(newItem)
    localStorage[this.name] = JSON.stringify(this.data)
    return this.data
  }
  put(item) {
    const oldItem = this.data.find(i => i.ID === item.ID)
    if(!oldItem) {
      throw Error(`找不到ID为${item.ID}的值`)
    }
    Object.assign(oldItem, item)
    localStorage[this.name] = JSON.stringify(this.data)
    return oldItem
  }
  delete(id) {
    const index = this.data.findIndex(i => i.ID === id)
    this.data.splice(index, 1)
    localStorage[this.name] = JSON.stringify(this.data)
    return this.data
  }
  getList() {
    return this.data
  }
}
console.log('templateHttp')
const templateHttp = new Http('template')

export { templateHttp }
