// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @class BasePlayerInfoContent 播放信息base类
 */
declare class BasePlayerInfoContent {
  data: _PlayerInfo.T100;
  /**
   * 构造方法
   */
  constructor();
  /**
   * 获取data
   *
   * @return Object
   */
  getData(): _PlayerInfo.T100;
}
/**
 * @class BaseButton Button基础类
 */
declare class BaseButton {
  data: _PlayerInfo.T101;
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
declare class PlayerInfo {
  data: _PlayerInfo.T103;
  /**
   * 构造方法
   *
   * @param {BasePlayerInfoContent} content 播放信息基础类
   * @param {BaseButton|Array} controls 控制按钮
   */
  constructor(content?: BasePlayerInfoContent, controls?: any[] | BaseButton);
  /**
   * 设置audioItemType值
   *
   * @param {string} type 类型值
   * @public
   */
  setAudioItemType(type: string): void;
  /**
   * 设置title值
   *
   * @param {string} title 音频的标题
   * @public
   */
  setTitle(title: string): void;
  /**
   * 设置音频子标题1
   *
   * @param {string} titleSubtext1 音频子标题1
   * @public
   */
  setTitleSubtext1(titleSubtext1: string): void;
  /**
   * 设置音频子标题2
   *
   * @param {string} titleSubtext2 音频子标题2
   * @public
   */
  setTitleSubtext2(titleSubtext2: string): void;
  /**
   * 设置歌词url
   *
   * @param {string} url 歌词url
   * @public
   */
  setLyric(url: string): void;
  /**
   * 设置音频流的长度，单位为ms
   *
   * @param {number} mediaLengthInMs 音频流的长度，单位为ms
   * @public
   */
  setMediaLengthInMs(mediaLengthInMs: number): void;
  /**
   * 设置音频封面图片
   *
   * @param {string} src 图片地址
   * @public
   */
  setArt(src: string): void;
  /**
   * 设置资源提供方信息
   *
   * @param {string} name 资源提供方的名字
   * @param {string} logo 资源提供方的logo
   * @public
   */
  setProvider(name: string, logo: string): void;
  /**
   * 设置控件列表
   *
   * @param {(Control|Array)} controls 单个控件或者控件列表
   * @public
   */
  setControls(controls: any): void;
  /**
   * 增加一个控件
   *
   * @param {Control} control 控件
   * @public
   */
  addControl(control: any): void;
  /**
   * 设置content
   *
   * @param {BasePlayerInfoContent} content 内容体
   */
  setContent(content: BasePlayerInfoContent): void;
  /**
   * 获取data
   *
   * @return {Object}
   * @public
   */
  getData(): any;
}
declare const _PlayerInfo: typeof PlayerInfo;
declare namespace _PlayerInfo {
  export interface T100 {
    [key: string]: any;
  }
  export interface T101 {
    type: string;
    name: string;
  }
  export interface T102 {
    audioItemType: string;
  }
  export interface T103 {
    content: _PlayerInfo.T102;
  }
}
export = _PlayerInfo;
