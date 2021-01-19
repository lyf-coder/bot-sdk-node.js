// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

declare class BaseCommand {
  data: _AnimationCommand.T100;
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
declare class AnimationCommand extends BaseCommand {
  /**
   * AnimationCommand 构造方法.
   */
  constructor();
  /**
   * 设置动画属性
   *
   * @param {string} attribute 文本内容
   * @public
   */
  setAttribute(attribute: string): void;
  /**
   * 设置动画作用属性的起始值
   *
   * @param {string} from 动画作用属性的起始值
   * @public
   */
  setFrom(from: string): void;
  /**
   * 设置动画作用属性的结束值
   *
   * @param {string} to 动画作用属性的结束值
   * @public
   */
  setTo(to: string): void;
  /**
   * 设置描述动画执行的速度的类型
   *
   * @param {string} easing 描述动画执行的速度的类型
   * @public
   */
  setEasing(easing: string): void;
  /**
   * 设置动画执行的时间
   *
   * @param {number} duration 动画执行的时间
   * @public
   */
  setDuration(duration: number): void;
  /**
   * 设置动画重复的次数
   *
   * @param {string} repeatCount 动画重复的次数
   * @public
   */
  setRepeatCount(repeatCount: string): void;
  /**
   * 设置动画重复方式
   *
   * @param {string} repeatMode 动画重复方式
   * @public
   */
  setRepeatMode(repeatMode: string): void;
  /**
   * 设置动画结束后需要触发的commands, 如果repeatCount为infinite，将不会触发onComplete
   *
   * @param {BaseCommand|Array} commands 动画结束后需要触发的commands
   * @public
   */
  addCompleteCommands(commands: any[] | BaseCommand): void;
}
declare const _AnimationCommand: typeof AnimationCommand;
declare namespace _AnimationCommand {
  export interface T100 {
    type: string;
    componentId: string;
  }
}
export = _AnimationCommand;
