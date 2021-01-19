// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

declare class BaseCommand {
  data: _UpdateDataSourceCommand.T100;
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
declare class UpdateDataSourceCommand extends BaseCommand {
  /**
   * UpdateDataSourceCommand 构造方法.
   */
  constructor();
  /**
   * 更新引用数据源的部分数据内容，会使 dpl 中通过动态引用方式使用该数据的对应内容同步更新
   * 
   * @param {Object} data 
   */
  setData(data: any): void;
}
declare const _UpdateDataSourceCommand: typeof UpdateDataSourceCommand;
declare namespace _UpdateDataSourceCommand {
  export interface T100 {
    type: string;
    componentId: string;
  }
}
export = _UpdateDataSourceCommand;
