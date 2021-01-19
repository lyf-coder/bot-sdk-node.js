// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

declare class BaseCommand {
  data: _ScrollToIndexCommand.T100;
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
declare class ScrollToIndexCommand extends BaseCommand {
  /**
   * ScrollToIndexCommand 构造方法.
   */
  constructor();
  /**
   * 设置index索引值
   *
   * @param {number} index index索引值
   * @public
   */
  setIndex(index: number): void;
  /**
   * 设置滚动后视图的位置
   *
   * @param {string} align 视图的位置
   * @public
   */
  setAlign(align: string): void;
  /**
   * 滚动动画持续时间，单位毫秒，默认 500 毫秒
   * 
   * @param {number} duration 
   */
  setDuration(duration: number): void;
}
declare const _ScrollToIndexCommand: typeof ScrollToIndexCommand;
declare namespace _ScrollToIndexCommand {
  export interface T100 {
    type: string;
    componentId: string;
  }
}
export = _ScrollToIndexCommand;
