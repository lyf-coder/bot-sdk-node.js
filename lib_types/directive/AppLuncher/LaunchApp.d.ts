// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @file 指令基础类
 * @author yuanpeng01@baidu.com
 *
 * @class BaseDirective 抽象类. 指令基类
 **/
declare class BaseDirective {
  data: _LaunchApp.T100;
  /**
   * 构造函数
   *
   * @param {Array} fields 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名
   **/
  constructor(type: any);
  genToken(): string;
  getData(): _LaunchApp.T100;
}
declare class LaunchApp extends BaseDirective {
  data: any;
  /**
   * LaunchApp构造函数
   *
   * @param {string} appName 应用的名称
   * @param {string} packageName 应用的包名
   * @param {string} deepLink 打开应用指定功能
   *     注意：以上appName，packageName和deepLink三个参数至少一个
   */
  constructor(appName: string, packageName: string, deepLink: string);
  /**
   * 设置directive的token. 默认在构造时自动生成了token，可以覆盖
   *
   * @param {string} token token
   */
  setToken(token: string): void;
  /**
   * 获取directive的token. 默认在构造时自动生成了token
   *
   * @return {string} token
   */
  getToken(): string;
  /**
   * 设置应用的名称
   *
   * @param {string} appName 应用的名称
   */
  setAppName(appName: string): void;
  /**
   * 设置应用的包名
   *
   * @param {string} packageName 应用的包名
   */
  setPackageName(packageName: string): void;
  /**
   * 设置deepLink
   *
   * @param {string} deepLink 应用指定功能
   */
  setDeepLink(deepLink: string): void;
}
declare const _LaunchApp: typeof LaunchApp;
declare namespace _LaunchApp {
  export interface T100 {
    type: any;
  }
}
export = _LaunchApp;
