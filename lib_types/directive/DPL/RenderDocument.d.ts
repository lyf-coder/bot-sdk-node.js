// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @file 指令基础类
 * @author yuanpeng01@baidu.com
 *
 * @class BaseDirective 抽象类. 指令基类
 **/
declare class BaseDirective {
  data: _RenderDocument.T100;
  /**
   * 构造函数
   *
   * @param {Array} fields 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名
   **/
  constructor(type: any);
  genToken(): string;
  getData(): _RenderDocument.T100;
}
declare class RenderDocument extends BaseDirective {
  /**
   * Document 构造方法.
   */
  constructor();
  /**
   * 设置token
   *
   * @param {string} token token
   * @public
   */
  setToken(token: string): void;
  /**
   * 设置文档对象
   *
   * @param {Document} document 文档对象
   * @public
   */
  setDocument(document: Document): void;
  /**
   * 设置数据源
   *
   * @param {Object} dataSources 数据源
   * @public
   */
  setDataSources(dataSources: any): void;
}
declare const _RenderDocument: typeof RenderDocument;
declare namespace _RenderDocument {
  export interface T100 {
    type: any;
  }
}
export = _RenderDocument;
