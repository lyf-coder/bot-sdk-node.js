// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @file 指令基础类
 * @author yuanpeng01@baidu.com
 *
 * @class BaseDirective 抽象类. 指令基类
 **/
declare class BaseDirective {
  data: _Buy.T100;
  /**
   * 构造函数
   *
   * @param {Array} fields 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名
   **/
  constructor(type: any);
  genToken(): string;
  getData(): _Buy.T100;
}
declare class Buy extends BaseDirective {
  /**
   * 构造函数
   * @param {商品ID} productId 
   */
  constructor(productId: any);
  /**
   * 设置directive的token. 默认在构造时自动生成了token，可以覆盖
   *
   * @param {string} token 视频的token
   * @public
   */
  setToken(token: string): void;
  /**
   * 获取directive的token. 默认在构造时自动生成了token
   *
   * @return {string} token
   * @public
   */
  getToken(): string;
  /**
   * 设置商品ID
   * 
   * @param {string} productId 商品ID
   */
  setProductId(productId: string): void;
}
declare const _Buy: typeof Buy;
declare namespace _Buy {
  export interface T100 {
    type: any;
  }
}
export = _Buy;
