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
declare class Play extends BaseDirective {
  /**
   * 构造方法
   *
   * @param {string} url 音频播放地址
   * @param {string} playBehavior 默认替换所有
   *               REPLACE_ALL: 立即停止当前播放并清除播放队列，立即播放指令中的audio item。
   *               ENQUEUE: 将audio item添加到当前队列的尾部。
   *               REPLACE_ENQUEUED: 替换播放队列中的所有audio item，但不影响当前正在播放的audio item。
   *
   * @public
   */
  constructor(url: string, playBehavior?: string);
  /**
   * 设置directive的token. 默认在构造时自动生成了token，可以覆盖
   *
   * @param {string} token 视频的token
   * @public
   */
  setToken(token: string): void;
  /**
   * 获取directive的token. 默认在构造时自动生成了token
   *
   * @return {string}
   * @public
   */
  getToken(): string;
  /**
   * 设置directive的视频地址url
   *
   * @param {string} url 视频地址
   * @public
   */
  setUrl(url: string): void;
  /**
   * 设置directive的属性。从指定的offset开始进行播放
   *
   * @param {number} milliSeconds 毫秒数,比如5分钟的视频，播放的长度是5*60*1000毫秒，选择起始的播放位置
   * @public
   */
  setOffsetInMilliseconds(milliSeconds: number): void;
  /**
   * stream过期时间
   *
   * @param {string} expiryTime 过期时间
   * @public
   */
  setExpiryTime(expiryTime: string): void;
  /**
   * 设置directive的属性。如果此字段存在，则设备端在播放该video item时，播放到所指定时间之后应该上报ProgressReportDelayElapsed事件；如果此字段不存在，则设备端端不需要上报ProgressReportDelayEsapsed事件
   *
   * @param {number} reportDelayMs  毫秒数。
   * @public
   */
  setReportDelayInMs(reportDelayMs: number): void;
  /**
   * 设置directive的属性。定时上报事件的间隔时间,如果此字段存在，则设备端在播放该video item时，每隔指定时间上报ProgressReportIntervalElapsed事件；如果此字段不存在，则设备端不需要上报ProgressReportIntervalElapsed事件
   *
   * @param {number} intervalMs  毫秒数。
   * @public
   */
  setReportIntervalInMs(intervalMs: number): void;
  /**
   * 设置directive的属性。如果此字段存在，则应当匹配前一个video item中的token，如果不匹配则不执行本Play指令
   *
   * @param {string} previousToken 上一首的token。
   * @public
   */
  setExpectedPreviousToken(previousToken: string): void;
  /**
   * 播放到指定的offset后停止播放，并且会上报PlaybackScheduledStopReached事件
   *
   * @param {(number|Array)} stopPoints 停止点。
   * @public
   */
  setStopPointsInMilliseconds(stopPoints: number | any[]): void;
}
declare const _Play: typeof Play;
declare namespace _Play {
  export interface T100 {
    type: any;
  }
}
export = _Play;
