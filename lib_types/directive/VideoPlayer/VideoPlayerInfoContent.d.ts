// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @class BasePlayerInfoContent 播放信息base类
 */
declare class BasePlayerInfoContent {
  data: _VideoPlayerInfoContent.T100;
  /**
   * 构造方法
   */
  constructor();
  /**
   * 获取data
   *
   * @return Object
   */
  getData(): _VideoPlayerInfoContent.T100;
}
/**
 * 视频播放信息
 *
 * @class {VideoPlayerInfoContent} 视频播放信息
 */
declare class VideoPlayerInfoContent extends BasePlayerInfoContent {
  /**
   * 构造方法
   *
   * @param {string} title 标题
   * @param {number} mediaLengthInMilliseconds 媒体长度
   */
  constructor(title?: string, mediaLengthInMilliseconds?: number);
  /**
   * 设置title值
   *
   * @param {string} title 视频的标题
   */
  setTitle(title: string): void;
  /**
   * 设置视频流的长度
   *
   * @param {number} mediaLengthInMilliseconds 视频流的长度
   */
  setMediaLengthInMilliseconds(mediaLengthInMilliseconds: number): void;
}
declare const _VideoPlayerInfoContent: typeof VideoPlayerInfoContent;
declare namespace _VideoPlayerInfoContent {
  export interface T100 {
    [key: string]: any;
  }
}
export = _VideoPlayerInfoContent;
