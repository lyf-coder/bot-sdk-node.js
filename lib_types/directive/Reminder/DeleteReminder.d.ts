// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @file 指令基础类
 * @author yuanpeng01@baidu.com
 *
 * @class BaseDirective 抽象类. 指令基类
 **/
declare class BaseDirective {
  data: _DeleteReminder.T100;
  /**
   * 构造函数
   *
   * @param {Array} fields 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名
   **/
  constructor(type: any);
  genToken(): string;
  getData(): _DeleteReminder.T100;
}
/**
 * 删除提醒指令
 *
 * @class {DeleteReminder} 删除提醒指令
 */
declare class DeleteReminder extends BaseDirective {
  constructor();
  /**
   * @desc 设置要删除提醒的Token
   * @param {string}  alertToken 闹钟token
   */
  setAlertToken(alertToken: string): void;
  /**
   * @desc 设置Token
   * @param {string} token
   */
  setToken(token: string): void;
}
declare const _DeleteReminder: typeof DeleteReminder;
declare namespace _DeleteReminder {
  export interface T100 {
    type: any;
  }
}
export = _DeleteReminder;
