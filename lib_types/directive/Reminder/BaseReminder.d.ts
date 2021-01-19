// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @file 指令基础类
 * @author yuanpeng01@baidu.com
 *
 * @class BaseDirective 抽象类. 指令基类
 **/
declare class BaseDirective {
  data: _BaseReminder.T100;
  /**
   * 构造函数
   *
   * @param {Array} fields 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名
   **/
  constructor(type: any);
  genToken(): string;
  getData(): _BaseReminder.T100;
}
/**
 * 提醒基础指令
 *
 * @class {BaseReminder} 提醒基础指令
 */
declare class BaseReminder extends BaseDirective {
  constructor(type: any);
  /**
   * @desc 设置提醒触发的时间
   * @param {string} scheduledTime 提醒触发时间
   */
  setScheduledTime(scheduledTime: string): void;
  /**
   * @desc 设置提醒触发的日期
   * @param {string} scheduledDate 提醒触发日期
   */
  setScheduledDate(scheduledDate: string): void;
  /**
   * @desc 设置提醒触发周期
   * @param {string} freqType 周期类型
   */
  setFreq(freqType: string): void;
  /**
   * @desc 设置weekDay
   * @param {array} weekDays 工作日数组
   */
  setWeekDay(weekDays: any[]): void;
  /**
   * @desc 设置提醒播报内容
   * @param {string} text 播报内容
   * @param {string} type 播报类型
   */
  setAlertInfo(text: string, type?: string): void;
}
declare const _BaseReminder: typeof BaseReminder;
declare namespace _BaseReminder {
  export interface T100 {
    type: any;
  }
}
export = _BaseReminder;
