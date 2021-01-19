// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @class BaseButton Button基础类
 */
declare class BaseButton {
  data: _ShowFavoriteListButton.T100;
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
declare class ShowFavoriteListButton extends Button {
  /**
   *  ShowFavoriteListButton 构造函数.
   */
  constructor();
}
declare const _ShowFavoriteListButton: typeof ShowFavoriteListButton;
declare namespace _ShowFavoriteListButton {
  export interface T100 {
    type: string;
    name: string;
  }
}
export = _ShowFavoriteListButton;
