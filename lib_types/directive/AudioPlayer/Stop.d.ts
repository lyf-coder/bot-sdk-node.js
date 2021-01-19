// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @file 指令基础类
 * @author yuanpeng01@baidu.com
 *
 * @class BaseDirective 抽象类. 指令基类
 **/
declare class BaseDirective {
  data: _Stop.T100;
  /**
   * 构造函数
   *
   * @param {Array} fields 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名
   **/
  constructor(type: any);
  genToken(): string;
  getData(): _Stop.T100;
}
/**
 * @class Stop 音频停止指令
 * @extends {BaseDirective}
 */
declare class Stop extends BaseDirective {
  constructor();
}
declare const _Stop: typeof Stop;
declare namespace _Stop {
  export interface T100 {
    type: any;
  }
}
export = _Stop;
