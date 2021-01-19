// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @file 指令基础类
 * @author yuanpeng01@baidu.com
 *
 * @class BaseDirective 抽象类. 指令基类
 **/
declare class BaseDirective {
  data: _AudioListItem.T100;
  /**
   * 构造函数
   *
   * @param {Array} fields 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名
   **/
  constructor(type: any);
  genToken(): string;
  getData(): _AudioListItem.T100;
}
declare class BaseMediaListItem extends BaseDirective {
  data: _AudioListItem.T101;
  /**
   * 构造方法
   *
   * @param {string} title 音频|视频类型
   * @param {string} titleSubtext1 音频|视频类型
   */
  constructor(title: string, titleSubtext1: string);
  /**
   * 设置token
   *
   * @param {string} token token
   */
  setToken(token: string): void;
  /**
   * 设置isFavorited
   *
   * @param {boolean} bool 是否是喜欢的
   */
  setFavorited(bool: boolean): void;
  /**
   * 设置image
   *
   * @param {string} image 图片url
   */
  setImage(image: string): void;
  /**
   * 设置titleSubtext1
   *
   * @param {string} titleSubtext1 一级子标题
   */
  setTitleSubtext1(titleSubtext1: string): void;
  /**
   * 设置titleSubtext2
   *
   * @param {string} titleSubtext2 二级子标题
   */
  setTitleSubtext2(titleSubtext2: string): void;
}
declare class AudioListItem extends BaseMediaListItem {
  /**
   * 构造方法
   *
   * @param {string} title 音频类型
   * @param {string} titleSubtext1 音频类型
   */
  constructor(title: string, titleSubtext1: string);
  /**
   * 设置isMusicVideo
   *
   * @param {boolean} bool 是否是音乐音频
   */
  setMusicVideoTag(bool: boolean): void;
}
declare const _AudioListItem: typeof AudioListItem;
declare namespace _AudioListItem {
  export interface T100 {
    type: any;
  }
  export interface T101 {
    title: string;
    titleSubtext1: string;
    token: string;
  }
}
export = _AudioListItem;
