// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @file 指令基础类
 * @author yuanpeng01@baidu.com
 *
 * @class BaseDirective 抽象类. 指令基类
 **/
declare class BaseDirective {
  data: _RenderTemplate.T100;
  /**
   * 构造函数
   *
   * @param {Array} fields 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名
   **/
  constructor(type: any);
  genToken(): string;
  getData(): _RenderTemplate.T100;
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
declare class RenderTemplate extends BaseDirective {
  /**
   * 构造方法
   *
   * @param {BaseTemplate} template 模版
   */
  constructor(template?: BaseTemplate);
  /**
   * 设置模版类别
   *
   * @param {BaseTemplate} template 模版类型
   * @public
   */
  setTemplate(template: BaseTemplate): void;
}
declare const _RenderTemplate: typeof RenderTemplate;
declare namespace _RenderTemplate {
  export interface T100 {
    type: any;
  }
}
export = _RenderTemplate;
