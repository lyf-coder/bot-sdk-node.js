// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * 标签基础类
 *
 * @class {BaseTag} tag基类
 */
declare class BaseTag {
  data: _BaseTag.T100;
  /**
   * 构造方法
   *
   * @param {string} type 类型
   * @param {string} text text
   */
  constructor(type: string, text?: string);
  /**
   * 设置类型
   *
   * @param {string} type 类型
   */
  setType(type: string): void;
  /**
   * 设置文本
   *
   * @param {string} text 文本
   */
  setText(text: string): void;
  /**
   * 设置color
   *
   * @param {string} color 颜色
   */
  setColor(color: string): void;
  /**
   * 设置backgroundColor
   *
   * @param {string} backgroundColor 背景颜色
   */
  setBackgroundColor(backgroundColor: string): void;
  /**
   * 返回数据
   *
   * @return {Object}
   */
  getData(): any;
}
declare const _BaseTag: typeof BaseTag;
declare namespace _BaseTag {
  export interface T100 {
    [key: string]: any;
  }
}
export = _BaseTag;
