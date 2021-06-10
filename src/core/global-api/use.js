/* @flow */

import { toArray } from '../util/index'

export function initUse (Vue: GlobalAPI) {
  Vue.use = function (plugin: Function | Object) {
    // 所安装的插件
    // this 指向 Vue 的构造函数
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    if (installedPlugins.indexOf(plugin) > -1) {
      // 判断需要注册的插件在 Vue 中是否存在
      return this
    }

    // additional parameters
    // 把数组中的第一个元素（plugin）去除
    // 将 arguments 转化为数组，并将第一个元素去除
    const args = toArray(arguments, 1)
    // 把this(Vue) 插入第一个元素的位置
    args.unshift(this)
    if (typeof plugin.install === 'function') {
      // 如果插件时对象，必须有install方法 
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
    // 保存已经按照的插件
    installedPlugins.push(plugin)
    return this
  }
}
