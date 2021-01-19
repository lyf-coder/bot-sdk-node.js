// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @file 指令基础类
 * @author yuanpeng01@baidu.com
 *
 * @class BaseDirective 抽象类. 指令基类
 **/
declare class BaseDirective {
  data: _ListTemplate3.T100;
  /**
   * 构造函数
   *
   * @param {Array} fields 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名
   **/
  constructor(type: any);
  genToken(): string;
  getData(): _ListTemplate3.T100;
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
/**
 * 标签基础类
 *
 * @class {BaseTag} tag基类
 */
declare class BaseTag {
  data: _ListTemplate3.T101;
  /**
   * 构造方法
   *
   * @param {string} type 类型
   * @param {string} text text
   */
  constructor(type: string, text?: string);
  /**
   * 设置类型
   *
   * @param {string} type 类型
   */
  setType(type: string): void;
  /**
   * 设置文本
   *
   * @param {string} text 文本
   */
  setText(text: string): void;
  /**
   * 设置color
   *
   * @param {string} color 颜色
   */
  setColor(color: string): void;
  /**
   * 设置backgroundColor
   *
   * @param {string} backgroundColor 背景颜色
   */
  setBackgroundColor(backgroundColor: string): void;
  /**
   * 返回数据
   *
   * @return {Object}
   */
  getData(): any;
}
declare class ListTemplateItem extends BaseTemplate {
  /**
   * ListTemplateItem 构造方法.
   */
  constructor();
  /**
   *  设置图片
   *
   * @param {string} url 图片地址
   * @param {string} widthPixels 图片像素宽
   * @param {string} heightPixels 图片像素高
   * @public
   */
  setImage(url: string, widthPixels?: string, heightPixels?: string): void;
  /**
   * 设置图片tags
   *
   * @param {BaseTag|Array} tags 图片标签
   * @public
   */
  setImageTags(tags: any[] | BaseTag): void;
  /**
   * 获取imageTags的数据
   *
   * @param {BaseTag|Array} tags 图片标签
   * @return {Array}
   */
  getImageTagsData(tags: any[] | BaseTag): any[];
  /**
   * 设置列表元素一级标题
   *
   * @param {string} text 文本内容
   * @public
   */
  setPlainPrimaryText(text: string): void;
  /**
   * 设置列表元素二级标题
   *
   * @param {string} text 文本内容
   * @public
   */
  setPlainSecondaryText(text: string): void;
  /**
   * 设置列表元素三级标题
   *
   * @param {string} text 文本内容
   * @public
   */
  setPlainTertiaryText(text: string): void;
  /**
   * 设置列表元素标题
   *
   * @param {string} text 文本内容
   */
  setContent(text: string): void;
  /**
   * 返回数据
   *
   * @param {string} key key
   * @return {Object}
   */
  getData(key?: string): any;
  /**
   * 设置当前元素的名字
   *
   * @param {string} anchorWord 名称
   */
  setAnchorWord(anchorWord: string): void;
}
declare class ListTemplate extends BaseTemplate {
  /**
   * TextImageTemplate constructor.
   *
   * @param {string} type 模版类型
   */
  constructor(type: string);
  /**
   * 添加列表项
   *
   * @param {ListTemplateItem} listTemplateItem 列表项
   * @return {ListTemplate} 对象本身
   * @public
   */
  addItem(listTemplateItem: ListTemplateItem): ListTemplate;
}
/**
 * 横向列表模板
 *
 * @class {ListTemplate3} 横向列表模板2
 */
declare class ListTemplate3 extends ListTemplate {
  /**
   * 构造方法
   */
  constructor();
}
declare const _ListTemplate3: typeof ListTemplate3;
declare namespace _ListTemplate3 {
  export interface T100 {
    type: any;
  }
  export interface T101 {
    [key: string]: any;
  }
}
export = _ListTemplate3;
