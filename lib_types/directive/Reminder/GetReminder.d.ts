// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @file 指令基础类
 * @author yuanpeng01@baidu.com
 *
 * @class BaseDirective 抽象类. 指令基类
 **/
declare class BaseDirective {
  data: _GetReminder.T100;
  /**
   * 构造函数
   *
   * @param {Array} fields 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名
   **/
  constructor(type: any);
  genToken(): string;
  getData(): _GetReminder.T100;
}
/**
 * 录音指令，语音录音完成后，会收到Record.RecordSpeechFinished事件
 *
 * @class {RecordSpeech} 录音指令
 */
declare class GetReminder extends BaseDirective {
  constructor();
  /**
   * @desc 设置Token
   * @param {string} token
   */
  setToken(token: string): void;
}
declare const _GetReminder: typeof GetReminder;
declare namespace _GetReminder {
  export interface T100 {
    type: any;
  }
}
export = _GetReminder;
