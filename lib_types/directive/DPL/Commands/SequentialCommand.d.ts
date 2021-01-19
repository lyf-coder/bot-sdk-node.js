// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

declare class BaseCommand {
  data: _SequentialCommand.T100;
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
declare class SequentialCommand extends BaseCommand {
  /**
   * SequentialCommand 构造方法.
   */
  constructor();
  /**
   * 设置延迟执行时间
   *
   * @param {number} delayMs 延迟执行时间
   * @public
   */
  setDelayInMilliseconds(delayMs: number): void;
  /**
   * 设置滚动的距离
   *
   * @param {number} repeatCount 重复执行次数
   * @public
   */
  setRepeatCount(repeatCount: number): void;
  /**
   * 设置滚动的距离
   *
   * @param {string} distance 滚动的距离
   * @public
   */
  setCommands(commands: any): void;
}
declare const _SequentialCommand: typeof SequentialCommand;
declare namespace _SequentialCommand {
  export interface T100 {
    type: string;
    componentId: string;
  }
}
export = _SequentialCommand;
