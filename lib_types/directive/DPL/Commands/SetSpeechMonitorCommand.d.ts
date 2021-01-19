// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

declare class BaseCommand {
  data: _SetSpeechMonitorCommand.T100;
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
declare class SetSpeechMonitorCommand extends BaseCommand {
  /**
   * SetSpeechMonitorCommand 构造方法.
   */
  constructor();
  /**
   * 标识为 speech 播放完成需要达到的 ttsposition 值（必填，且大于0）,speech 播报中 ttsposition 位置值在逐增过程中第一次达到 speechFinishedPosition 值时，执行 onFinished 并结束本次监听；
   * @param {number} speechFinishedPosition 
   */
  setSpeechFinishedPosition(speechFinishedPosition: number): void;
  /**
   * 标识为播放完成后可执行的指令（目前限定为仅可使用 SendEvent 指令反馈监听结果）
   * @param {SendEventCommand} onFinished 
   */
  setOnFinished(onFinished: SendEventCommand): void;
  /**
   * 标识为播放被中断后可执行的指令（目前限定为仅可使用 SendEvent 指令反馈监听结果）
   * @param {SendEventCommand} onInterrupted 
   */
  setOnInterrupted(onInterrupted: SendEventCommand): void;
}
declare const _SetSpeechMonitorCommand: typeof SetSpeechMonitorCommand;
declare namespace _SetSpeechMonitorCommand {
  export interface T100 {
    type: string;
    componentId: string;
  }
}
export = _SetSpeechMonitorCommand;
