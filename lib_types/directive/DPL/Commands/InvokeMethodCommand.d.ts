// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

declare class BaseCommand {
  data: _InvokeMethodCommand.T100;
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
declare class InvokeMethodCommand extends BaseCommand {
  /**
   * InvokeMethodCommand 构造方法.
   */
  constructor();
  /**
   * 调用方法名
   * 
   * @param {string} data 
   */
  setMethodName(methodName: any): void;
  /**
   * TODO 指令参数 
   * @param {object} params 指令参数
   * 指令参数
   *  arguments 指令调用方法的接收参数，数组类型
   *  arguments数组中参数类型支持任意类型（string、object、array、number、boolean）；
   *  arguments数组中参数类型支持获取事件触发的绑定参数（在事件触发指令执行的场景下），如："arguments":["$EVENT_ARGS.0", 1], 代表该指令会将事件触发该指令时，事件触发携带的参数的第一个，作为arguments的第一个参数（其结构支持多层级取值）。
   */
  setParams(params: any): void;
}
declare const _InvokeMethodCommand: typeof InvokeMethodCommand;
declare namespace _InvokeMethodCommand {
  export interface T100 {
    type: string;
    componentId: string;
  }
}
export = _InvokeMethodCommand;
