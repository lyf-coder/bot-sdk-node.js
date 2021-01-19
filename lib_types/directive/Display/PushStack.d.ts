// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @file 指令基础类
 * @author yuanpeng01@baidu.com
 *
 * @class BaseDirective 抽象类. 指令基类
 **/
declare class BaseDirective {
  data: _PushStack.T100;
  /**
   * 构造函数
   *
   * @param {Array} fields 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名
   **/
  constructor(type: any);
  genToken(): string;
  getData(): _PushStack.T100;
}
/**
 * 端上入栈指令
 *
 * @class {PushStack} 端上入栈指令
 */
declare class PushStack extends BaseDirective {
  constructor();
}
declare const _PushStack: typeof PushStack;
declare namespace _PushStack {
  export interface T100 {
    type: any;
  }
}
export = _PushStack;
