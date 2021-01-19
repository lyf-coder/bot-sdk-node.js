// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @file 指令基础类
 * @author yuanpeng01@baidu.com
 *
 * @class BaseDirective 抽象类. 指令基类
 **/
declare class BaseDirective {
  data: _Hint.T100;
  /**
   * 构造函数
   *
   * @param {Array} fields 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名
   **/
  constructor(type: any);
  genToken(): string;
  getData(): _Hint.T100;
}
declare class Hint extends BaseDirective {
  /**
   * Hint 构造函数.
   *
   * @param {Mixed} text 提示文本
   */
  constructor(text: any);
}
declare const _Hint: typeof Hint;
declare namespace _Hint {
  export interface T100 {
    type: any;
  }
}
export = _Hint;
