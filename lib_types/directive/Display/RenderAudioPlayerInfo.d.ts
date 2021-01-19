// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @file 指令基础类
 * @author yuanpeng01@baidu.com
 *
 * @class BaseDirective 抽象类. 指令基类
 **/
declare class BaseDirective {
  data: _RenderAudioPlayerInfo.T100;
  /**
   * 构造函数
   *
   * @param {Array} fields 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名
   **/
  constructor(type: any);
  genToken(): string;
  getData(): _RenderAudioPlayerInfo.T100;
}
/**
 * @class BasePlayerInfoContent 播放信息base类
 */
declare class BasePlayerInfoContent {
  data: _RenderAudioPlayerInfo.T101;
  /**
   * 构造方法
   */
  constructor();
  /**
   * 获取data
   *
   * @return Object
   */
  getData(): _RenderAudioPlayerInfo.T101;
}
/**
 * @class BaseButton Button基础类
 */
declare class BaseButton {
  data: _RenderAudioPlayerInfo.T102;
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
 * 用于生成RenderAudioPlayerInfo指令的类
 *
 * @class {BaseRenderPlayerInfo} 用于生成RenderAudioPlayerInfo指令的类
 */
declare class BaseRenderPlayerInfo extends BaseDirective {
  /**
   * 构造方法
   *
   * @param {string} type 指令类型
   * @param {BasePlayerInfoContent} content  内容
   * @param {BaseButton|Array} controls 控件
   */
  constructor(type: string, content?: BasePlayerInfoContent, controls?: any[] | BaseButton);
  /**
   * 设置directive的token. 默认在构造时自动生成了token，可以覆盖
   *
   * @param {string} token 视频的token
   */
  setToken(token: string): void;
  /**
   * 设置控件列表
   *
   * @param {BaseButton|Array} controls 控件列表
   */
  setControls(controls: any[] | BaseButton): void;
  /**
   * 增加一个控件
   *
   * @param {Control} control 控件
   */
  addControl(control: any): void;
  /**
   * 设置content
   *
   * @param {BasePlayerInfoContent} content 播放信息内容
   */
  setContent(content: BasePlayerInfoContent): void;
  /**
   * 获取data
   *
   * @return {Object}
   */
  getData(): any;
}
/**
 * 渲染音频播放内容信息
 *
 * @class {RenderAudioPlayerInfo} 渲染音频播放内容信息
 */
declare class RenderAudioPlayerInfo extends BaseRenderPlayerInfo {
  /**
   * 构造方法
   *
   * @param {BasePlayerInfoContent} content  内容
   * @param {BaseButton|Array} controls 控件
   */
  constructor(content?: any, controls?: any);
}
declare const _RenderAudioPlayerInfo: typeof RenderAudioPlayerInfo;
declare namespace _RenderAudioPlayerInfo {
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
}
export = _RenderAudioPlayerInfo;
