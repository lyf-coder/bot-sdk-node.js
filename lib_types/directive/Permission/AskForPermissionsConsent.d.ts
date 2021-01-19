// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @file 指令基础类
 * @author yuanpeng01@baidu.com
 *
 * @class BaseDirective 抽象类. 指令基类
 **/
declare class BaseDirective {
  data: _AskForPermissionsConsent.T100;
  /**
   * 构造函数
   *
   * @param {Array} fields 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名
   **/
  constructor(type: any);
  genToken(): string;
  getData(): _AskForPermissionsConsent.T100;
}
/**
 * 用户授权
 *
 * @class {AskForPermissionsConsent} 用户授权
 */
declare class AskForPermissionsConsent extends BaseDirective {
  /**
   * 构造方法
   */
  constructor();
  /**
   * 设置directive的token. 默认在构造时自动生成了token，可以覆盖
   *
   * @param {string} token token
   */
  setToken(token: string): void;
  /**
   * 增加权限
   *
   * @param {string} name 权限名称
   */
  addPermission(name: string): void;
}
declare const _AskForPermissionsConsent: typeof AskForPermissionsConsent;
declare namespace _AskForPermissionsConsent {
  export interface T100 {
    type: any;
  }
}
export = _AskForPermissionsConsent;
