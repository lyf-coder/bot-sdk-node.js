// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

declare class BaseCommand {
  data: _SendEventCommand.T100;
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
declare class SendEventCommand extends BaseCommand {
  /**
   * SendEventCommand 构造方法.
   */
  constructor();
  /**
   * @desc 添加用户自定义参数
   * @param  {array} args 自定义参数数组
   */
  addArguments(args: any[]): void;
  /**
   * 标识用户基于该事件请求上报时，携带当前会话状态的类型，枚举，取值如下
   * 
   * @param {string} dialogType 
   */
  setDialogType(dialogType: string): void;
}
declare const _SendEventCommand: typeof SendEventCommand;
declare namespace _SendEventCommand {
  export interface T100 {
    type: string;
    componentId: string;
  }
}
export = _SendEventCommand;
