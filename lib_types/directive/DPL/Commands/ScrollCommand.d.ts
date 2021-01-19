// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

declare class BaseCommand {
  data: _ScrollCommand.T100;
  /**
   * BaseCommand 构造方法
   *
   * @param {string} type Command类型
   */
  constructor(type: string);
  /**
   * 设置指令绑定的组件id
   *
   * @param {string} componentId 组件id
   * @public
   */
  setComponentId(componentId: string): void;
  /**
   * 设置指令延迟执行时间
   *
   * @param {number} delay 延迟时间
   * @public
   */
  setDelay(delay: number): void;
  /**
   * 设置指令的条件执行表达式
   * 
   * @param {string} dWhen 
   */
  setDWhen(dWhen: string): void;
  /**
   * 获取指令的data
   *
   * @return {Object} 返回数据
   * @public
   */
  getData(): any;
}
declare class ScrollCommand extends BaseCommand {
  /**
   * ScrollCommand 构造方法.
   */
  constructor();
  /**
   * 设置滚动的距离
   *
   * @param {string} distance 滚动的距离
   * @public
   */
  setDistance(distance: string): void;
  /**
   * 滚动动画持续时间，单位毫秒，默认 500 毫秒
   * 
   * @param {number} duration 
   */
  setDuration(duration: number): void;
}
declare const _ScrollCommand: typeof ScrollCommand;
declare namespace _ScrollCommand {
  export interface T100 {
    type: string;
    componentId: string;
  }
}
export = _ScrollCommand;
