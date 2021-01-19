// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @file 指令基础类
 * @author yuanpeng01@baidu.com
 *
 * @class BaseDirective 抽象类. 指令基类
 **/
declare class BaseDirective {
  data: _RenderVideoList.T100;
  /**
   * 构造函数
   *
   * @param {Array} fields 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名
   **/
  constructor(type: any);
  genToken(): string;
  getData(): _RenderVideoList.T100;
}
declare class BaseMediaListItem extends BaseDirective {
  data: _RenderVideoList.T101;
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
declare class VideoListItem extends BaseMediaListItem {
  /**
   * 构造方法
   *
   * @param {string} title 视频类型
   * @param {string} titleSubtext1 视频类型
   */
  constructor(title: string, titleSubtext1: string);
  /**
   * 设置mediaLengthInMilliseconds
   *
   * @param {number} milliseconds 视频时长
   */
  setMediaLengthInMilliseconds(milliseconds: number): void;
}
declare class RenderVideoList extends BaseDirective {
  videoItems: any[];
  data: any;
  /**
   * 构造方法
   *
   * @param {string} title 列表的标题
   * @param {string} behavior 默认替换所有
   *               REPLACE: 清空当前的列表，再渲染，用于首次第一页数据的渲染
   *               APPEND: 当前列表不变，在当前的列表后面渲染，用于往后翻页的渲染
   *               PREPEND:当前列表不变，在当前的列表前面渲染，用于往前翻页的渲染
   *
   */
  constructor(title: string, behavior?: string);
  /**
   * 设置directive的token. 默认在构造时自动生成了token，可以覆盖
   *
   * @param {string} token 视频的token
   */
  setToken(token: string): void;
  /**
   * 增加audioItem
   *
   * @param {VideoListItem} videoListItem 视频项
   */
  addVideoItem(videoListItem: VideoListItem): void;
  /**
   * 获取数据
   *
   * @return {Object}
   */
  getData(): any;
}
declare const _RenderVideoList: typeof RenderVideoList;
declare namespace _RenderVideoList {
  export interface T100 {
    type: any;
  }
  export interface T101 {
    title: string;
    titleSubtext1: string;
    token: string;
  }
}
export = _RenderVideoList;
