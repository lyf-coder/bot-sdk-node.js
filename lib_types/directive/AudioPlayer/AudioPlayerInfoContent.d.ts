// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @class BasePlayerInfoContent 播放信息base类
 */
declare class BasePlayerInfoContent {
  data: _AudioPlayerInfoContent.T100;
  /**
   * 构造方法
   */
  constructor();
  /**
   * 获取data
   *
   * @return Object
   */
  getData(): _AudioPlayerInfoContent.T100;
}
/**
 * @class AudioPlayerInfoContent类
 */
declare class AudioPlayerInfoContent extends BasePlayerInfoContent {
  /**
   * 构造方法
   *
   * @param {string} type 音频类型
   */
  constructor(type?: string);
  /**
   * 设置audioItemType值
   *
   * @param {string} type 类型值
   */
  setAudioItemType(type: string): void;
  /**
   * 设置title值
   *
   * @param {string} title 音频的标题
   */
  setTitle(title: string): void;
  /**
   * 设置音频子标题1
   *
   * @param {string} titleSubtext1 音频子标题1
   */
  setTitleSubtext1(titleSubtext1: string): void;
  /**
   * 设置音频子标题2
   *
   * @param {string} titleSubtext2 音频子标题2
   */
  setTitleSubtext2(titleSubtext2: string): void;
  /**
   * 设置歌词url
   *
   * @param {string} url 歌词url
   */
  setLyric(url: string): void;
  /**
   * 设置音频流的长度，单位为ms
   *
   * @param {number} mediaLengthInMs 音频流的长度，单位为ms
   */
  setMediaLengthInMs(mediaLengthInMs: number): void;
  /**
   * 设置音频封面图片
   *
   * @param {string} src 图片地址
   */
  setArt(src: string): void;
  /**
   * 设置资源提供方信息
   *
   * @param {string} name 资源提供方的名字
   * @param {string} logo 资源提供方的logo
   */
  setProvider(name: string, logo?: string): void;
}
declare const _AudioPlayerInfoContent: typeof AudioPlayerInfoContent;
declare namespace _AudioPlayerInfoContent {
  export interface T100 {
    [key: string]: any;
  }
}
export = _AudioPlayerInfoContent;
