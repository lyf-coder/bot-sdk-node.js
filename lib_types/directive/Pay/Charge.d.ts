// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @file 指令基础类
 * @author yuanpeng01@baidu.com
 *
 * @class BaseDirective 抽象类. 指令基类
 **/
declare class BaseDirective {
  data: _Charge.T100;
  /**
   * 构造函数
   *
   * @param {Array} fields 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名
   **/
  constructor(type: any);
  genToken(): string;
  getData(): _Charge.T100;
}
declare class Charge extends BaseDirective {
  /**
   * Charge构造方法
   *
   * @param {string} amount 数量
   * @param {string} sellerOrderId 卖家ID
   * @param {string} productName 产品名称
   * @param {string} description 描述
   */
  constructor(amount: string, sellerOrderId: string, productName: string, description: string);
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
   * set amount
   *
   * @param {string} amount 数量
   * @param {string} currencyCode 币种
   * @public
   */
  setAmount(amount: string, currencyCode?: string): void;
  /**
   * 设置sellerAuthorizationNote
   *
   * @param {string} sellerAuthorizationNote 卖家授权
   * @public
   */
  setSellerAuthorizationNote(sellerAuthorizationNote: string): void;
  /**
   * set sellerOrderId
   *
   * @param {string} sellerOrderId 卖家ID
   * @public
   */
  setSellerOrderId(sellerOrderId: string): void;
  /**
   * set productName
   *
   * @param {string} productName 商品名称
   * @public
   */
  setProductName(productName: string): void;
  /**
   * set description
   *
   * @param {string} description 描述
   * @public
   */
  setDescription(description: string): void;
  /**
   * set sellerNode
   *
   * @param {string} sellerNode sellerNode
   * @public
   */
  setSellerNode(sellerNode: string): void;
}
declare const _Charge: typeof Charge;
declare namespace _Charge {
  export interface T100 {
    type: any;
  }
}
export = _Charge;
