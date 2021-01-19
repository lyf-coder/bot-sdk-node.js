// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

declare class BaseCommand {
  data: _ParallelCommand.T100;
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
declare class ParallelCommand extends BaseCommand {
  /**
   * AnimationCommand 构造方法.
   */
  constructor();
  /**
   * 设置延迟时间间隔
   *
   * @param {number} delayMs 延迟时间间隔
   * @public
   */
  setDelayInMilliseconds(delayMs: number): void;
  /**
   * 设置并行执行的指令集合
   *
   * @param {BaseCommand|Array} commands 指令集合
   * @public
   */
  setCommands(commands: any[] | BaseCommand): void;
  /**
   * 控制多指令集合的执行顺序类指令，复合的 command 组件, 并行执行
   * @param {number} repeatCount 重复执行次数
   */
  setRepeatCount(repeatCount: number): void;
}
declare const _ParallelCommand: typeof ParallelCommand;
declare namespace _ParallelCommand {
  export interface T100 {
    type: string;
    componentId: string;
  }
}
export = _ParallelCommand;
