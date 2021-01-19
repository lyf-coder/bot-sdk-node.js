// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @file 指令基础类
 * @author yuanpeng01@baidu.com
 *
 * @class BaseDirective 抽象类. 指令基类
 **/
declare class BaseDirective {
  data: _Play.T100;
  /**
   * 构造函数
   *
   * @param {Array} fields 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名
   **/
  constructor(type: any);
  genToken(): string;
  getData(): _Play.T100;
}
/**
 * @class BasePlayerInfoContent 播放信息base类
 */
declare class BasePlayerInfoContent {
  data: _Play.T101;
  /**
   * 构造方法
   */
  constructor();
  /**
   * 获取data
   *
   * @return Object
   */
  getData(): _Play.T101;
}
/**
 * @class BaseButton Button基础类
 */
declare class BaseButton {
  data: _Play.T102;
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
  data: _Play.T104;
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
/**
 * @class Play 音频播放指令
 * @extends {BaseDirective}
 */
declare class Play extends BaseDirective {
  /**
   * @param {string} url 音频地址
   * @param {string} playBehavior 默认替换所有
   *                 REPLACE_ALL: 立即停止当前播放并清除播放队列，立即播放指令中的audio item
   *                 ENQUEUE: 将audio item添加到当前队列的尾部
   *                 REPLACE_ENQUEUED: 替换播放队列中的所有audio item，但不影响当前正在播放的audio item
   */
  constructor(url: string, playBehavior?: string);
  /**
   * 设置directive的token. 默认在构造时自动生成了token，可以覆盖
   * @param {string} token 音频的token
   */
  setToken(token: string): void;
  /**
   * 获取directive的token. 默认在构造时自动生成了token
   *
   * @return {string}
   */
  getToken(): string;
  /**
   * 设置directive的音频地址url
   * 
   * @param {string} url 音频地址
   */
  setUrl(url: string): void;
  /**
   * 设置directive的属性。从指定的offset开始进行播放
   *
   * @param {number} milliSeconds 毫秒数。比如5分钟的歌曲，播放的长度是5*60*1000毫秒，选择起始的播放位置
   */
  setOffsetInMilliSeconds(milliSeconds: number): void;
  /**
   * 设置directive的属性。音频流格式，streamFormat 默认STREAM_FORMAT_MP3
   *
   * @param {string} streamFormat  取值: STREAM_FORMAT_MP3、STREAM_FORMAT_M3U8、STREAM_FORMAT_M4A
   */
  setStreamFormat(streamFormat?: string): void;
  /**
   * 设置PlayerInfo信息
   *
   * @param {PlayerInfo} playerInfo
   * @public
   **/
  setPlayerInfo(playerInfo: PlayerInfo): void;
}
declare const _Play: typeof Play;
declare namespace _Play {
  export interface T100 {
    type: any;
  }
  export interface T101 {
    [key: string]: any;
  }
  export interface T102 {
    type: string;
    name: string;
  }
  export interface T103 {
    audioItemType: string;
  }
  export interface T104 {
    content: _Play.T103;
  }
}
export = _Play;
