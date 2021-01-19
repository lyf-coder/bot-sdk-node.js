// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @file 指令基础类
 * @author yuanpeng01@baidu.com
 *
 * @class BaseDirective 抽象类. 指令基类
 **/
declare class BaseDirective {
  data: _BodyTemplate6.T100;
  /**
   * 构造函数
   *
   * @param {Array} fields 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名
   **/
  constructor(type: any);
  genToken(): string;
  getData(): _BodyTemplate6.T100;
}
declare class BaseTemplate extends BaseDirective {
  supportSetField: any[];
  /**
   * BaseTemplate constructor.
   *
   * @param {Array} fields 生成属性对应的set方法
   */
  constructor(fields: any[]);
  /**
   * 设置背景图片
   *
   * @param {string} url 图片地址
   * @param {string} widthPixels 图片的像素宽
   * @param {string} heightPixels 图片的像素高
   * @public
   */
  setBackGroundImage(url: string, widthPixels?: string, heightPixels?: string): void;
  /**
   * 构造图片结构体
   *
   * @param {string} url 图片地址
   * @param {string} widthPixels 图片的像素宽
   * @param {string} heightPixels 图片的像素高
   * @return {Object} 图片对象
   * @public
   */
  createImageStructure(url?: string, widthPixels: string, heightPixels: string): any;
  /**
   * 构造文本结构体
   *
   * @param {string} content 文本内容
   * @param {string} type 文本类型
   * @return {Object} 文本对象
   * @public
   */
  createTextStructure(content: string, type?: string): any;
}
declare class TextImageTemplate extends BaseTemplate {
  /**
   * TextImageTemplate constructor.
   *
   * @param {string} type 模版类型
   */
  constructor(type: string);
  /**
   * 设置图片
   *
   * @param {string} url 图片地轴
   * @param {string} widthPixels 图片像素宽
   * @param {string} heightPixels 图片像素高
   * @public
   */
  setImage(url: string, widthPixels?: string, heightPixels?: string): void;
  /**
   * 设置文本
   *
   * @param {string} text 文本内容
   * @public
   */
  setPlainContent(text: string): void;
}
/**
 * 上图下文模版类
 *
 * @class {BodyTemplate6} 上图下文模版类
 */
declare class BodyTemplate6 extends TextImageTemplate {
  /**
   * 构造方法
   */
  constructor();
}
declare const _BodyTemplate6: typeof BodyTemplate6;
declare namespace _BodyTemplate6 {
  export interface T100 {
    type: any;
  }
}
export = _BodyTemplate6;
