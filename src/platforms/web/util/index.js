/* @flow */

import { warn } from 'core/util/index'

export * from './attrs'
export * from './class'
export * from './element'

/**
 * Query an element selector if it's not an element already.
 */
export function query (el: string | Element): Element {
  if (typeof el === 'string') {
    // el 是字符串，认为是选择器，通过document.querySelector查找DOM元素
    const selected = document.querySelector(el)
    if (!selected) {
      // 没找到
      // 开发模式在控制台打印没找到el
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      )
      return document.createElement('div')
    }
    return selected
  } else {
    // el 是 DOM 对象，直接返回
    return el
  }
}
