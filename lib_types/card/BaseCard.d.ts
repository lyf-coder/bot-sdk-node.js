// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @file 卡片基础类
 * @author yuanpeng01@baidu.com
 *
 * @class BaseCard 抽象类. 卡片基类
 **/
declare class BaseCard {
  data: _BaseCard.T100;
  supportSetField: any[];
  /**
   * 构造函数
   *
   * @param {Array} fields 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名
   **/
  constructor(fields?: any[]);
  /**
   *  添加用户操作提示。所有卡片都可以添加引导提升
   *
   *  @example
   *  this.addCueWords(['十元', '二十元']);
   *
   *  @param {Array} arr 提示的话术
   *  @return {BaseCard} 返回自己
   *  @public
   **/
  addCueWords(arr: any[]): BaseCard;
  /**
   * 设置"查看更多" ，设置卡片锚点
   *
   * @param {string} url  链接地址
   * @param {string}  anchorText 锚点展现的文字，可选。如果不设置，默认为"查看更多"
   * @return {BaseCard} 返回自己
   * @public
   **/
  setAnchor(url: string, anchorText?: string): BaseCard;
  /**
   * 获取卡片数据，或者某个字段的值
   * Example:
   *      this.getData();
   *      this.getData('fieldName');
   *
   * @param {string} key 字段名，可选。如果不提供字段名，返回整个卡片数据
   * @return {mixed}
   * @public
   **/
  getData(key?: string): any;
}
declare const _BaseCard: typeof BaseCard;
declare namespace _BaseCard {
  export interface T100 {
    [key: string]: any;
  }
}
export = _BaseCard;
