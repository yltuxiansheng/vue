/* @flow */

import { mergeOptions } from '../util/index'

export function initMixin (Vue: GlobalAPI) {
  Vue.mixin = function (mixin: Object) {
    // 将 mixin 中的全部成员拷贝到 this.options 中，this 指向 Vue
    // 注册的全局的选项
    this.options = mergeOptions(this.options, mixin)
    return this
  }
}
