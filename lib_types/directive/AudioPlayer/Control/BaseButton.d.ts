// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @class BaseButton Button基础类
 */
declare class BaseButton {
  data: _BaseButton.T100;
  /**
   * BaseButton 构造方法.
   *
   * @param {string} type 类型
   * @param {string} name 名称
   */
  constructor(type: string, name: string);
  /**
   * getData
   *
   * @return {Object} Control数据
   * @public
   */
  getData(): any;
}
declare const _BaseButton: typeof BaseButton;
declare namespace _BaseButton {
  export interface T100 {
    type: string;
    name: string;
  }
}
export = _BaseButton;
