// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

declare class BaseCommand {
  data: _UpdateComponentCommand.T100;
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
declare class UpdateComponentCommand extends BaseCommand {
  /**
   * UpdateComponentCommand 构造方法.
   */
  constructor();
  /**
   * 设置替换文档
   *
   * @param {Document} doc 替换的文档对象
   * @public
   */
  setDocument(doc: Document): void;
}
declare const _UpdateComponentCommand: typeof UpdateComponentCommand;
declare namespace _UpdateComponentCommand {
  export interface T100 {
    type: string;
    componentId: string;
  }
}
export = _UpdateComponentCommand;
