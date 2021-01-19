// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * @file 指令基础类
 * @author yuanpeng01@baidu.com
 *
 * @class BaseDirective 抽象类. 指令基类
 **/
declare class BaseDirective {
  data: _ExecuteCommands.T100;
  /**
   * 构造函数
   *
   * @param {Array} fields 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名
   **/
  constructor(type: any);
  genToken(): string;
  getData(): _ExecuteCommands.T100;
}
declare class BaseCommand {
  data: _ExecuteCommands.T101;
  /**
   * BaseCommand 构造方法
   *
   * @param {string} type Command类型
   */
  constructor(type: string);
  /**
   * 设置指令绑定的组件id
   *
   * @param {string} componentId 组件id
   * @public
   */
  setComponentId(componentId: string): void;
  /**
   * 设置指令延迟执行时间
   *
   * @param {number} delay 延迟时间
   * @public
   */
  setDelay(delay: number): void;
  /**
   * 设置指令的条件执行表达式
   * 
   * @param {string} dWhen 
   */
  setDWhen(dWhen: string): void;
  /**
   * 获取指令的data
   *
   * @return {Object} 返回数据
   * @public
   */
  getData(): any;
}
declare class ExecuteCommands extends BaseDirective {
  /**
   * ExecuteCommands 构造方法.
   */
  constructor();
  /**
   * 设置token
   *
   * @param {string} token token
   * @public
   */
  setToken(token: string): void;
  /**
   * 设置指令
   *
   * @param {BaseCommand|Array} commands 指令对象集合
   * @public
   */
  setCommands(commands: any[] | BaseCommand): void;
}
declare const _ExecuteCommands: typeof ExecuteCommands;
declare namespace _ExecuteCommands {
  export interface T100 {
    type: any;
  }
  export interface T101 {
    type: string;
    componentId: string;
  }
}
export = _ExecuteCommands;
