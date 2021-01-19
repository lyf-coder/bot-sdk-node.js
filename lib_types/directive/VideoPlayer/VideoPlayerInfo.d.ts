// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @class BasePlayerInfoContent 播放信息base类
 */
declare class BasePlayerInfoContent {
  data: _VideoPlayerInfo.T100;
  /**
   * 构造方法
   */
  constructor();
  /**
   * 获取data
   *
   * @return Object
   */
  getData(): _VideoPlayerInfo.T100;
}
/**
 * @class BaseButton Button基础类
 */
declare class BaseButton {
  data: _VideoPlayerInfo.T101;
  /**
   * BaseButton 构造方法.
   *
   * @param {string} type 类型
   * @param {string} name 名称
   */
  constructor(type: string, name: string);
  /**
   * getData
   *
   * @return {Object} Control数据
   * @public
   */
  getData(): any;
}
/**
 * 视频播放信息
 *
 * @class {VideoPlayerInfo} 视频播放信息
 */
declare class VideoPlayerInfo {
  data: _VideoPlayerInfo.T100;
  /**
   * 构造方法
   *
   * @param {BasePlayerInfoContent} content 播放信息
   * @param {BaseButton|Array} controls 控制按钮
   */
  constructor(content?: BasePlayerInfoContent, controls?: any[] | BaseButton);
  /**
   * 设置控件列表
   *
   * @param {Control|Array} controls 控件列表
   */
  setControls(controls: any): void;
  /**
   * 增加一个控件
   *
   * @param {BaseButton} control 控件
   */
  addControl(control: BaseButton): void;
  /**
   * 设置content
   *
   * @param {BasePlayerInfoContent} content 播放内容
   */
  setContent(content: BasePlayerInfoContent): void;
  /**
   * 获取data
   *
   * @return {Object}
   */
  getData(): any;
}
declare const _VideoPlayerInfo: typeof VideoPlayerInfo;
declare namespace _VideoPlayerInfo {
  export interface T100 {
    [key: string]: any;
  }
  export interface T101 {
    type: string;
    name: string;
  }
}
export = _VideoPlayerInfo;
