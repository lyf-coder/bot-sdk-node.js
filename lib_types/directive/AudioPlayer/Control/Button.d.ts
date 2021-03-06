// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @class BaseButton Button基础类
 */
declare class BaseButton {
  data: _Button.T100;
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
declare class Button extends BaseButton {
  /**
   * Button 构造函数.
   *
   * @param {string} name 控件名字
   */
  constructor(name: string);
  /**
   * 按钮是否可点击
   *
   * @param {boolean} bool 按钮是否可点击，取值为true说明可以点击，取值为false不可点击
   * @public
   */
  setEnabled(bool: boolean): void;
  /**
   * 按钮是否要渲染为选中状态
   *
   * @param {boolean} bool 按钮是否要渲染为选中状态，取值为true需要渲染为选中状态，取值为false渲染为非选中状态
   * @public
   */
  setSelected(bool: boolean): void;
}
declare const _Button: typeof Button;
declare namespace _Button {
  export interface T100 {
    type: string;
    name: string;
  }
}
export = _Button;
