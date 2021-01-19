// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @class BaseButton Button基础类
 */
declare class BaseButton {
  data: _RadioButton.T100;
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
declare class RadioButton extends BaseButton {
  /**
   * RadioButton 构造方法.
   *
   * @param {string} name 控件名字
   * @param {string} selectedValue 选中的选项值，设备端应该根据此选项值把对应的按钮渲染为选中状态
   * @public
   */
  constructor(name?: string, selectedValue?: string);
  /**
   * 设置选中的选项值
   *
   * @param {string} selectedValue 选中的选项值
   * @public
   */
  setSelectedValue(selectedValue: string): void;
}
declare const _RadioButton: typeof RadioButton;
declare namespace _RadioButton {
  export interface T100 {
    type: string;
    name: string;
  }
}
export = _RadioButton;
