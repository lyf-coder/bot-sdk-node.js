// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * 封装对session的操作。DuerOS提过了多轮对话的能力，也能替Bot管理多轮对话，无须Bot自己维护session状态。
 * 同时，也提供了Session存储，Bot还可以将对话的状态保存session中，自己处理多轮逻辑。
 * 但是，存储在session中的数据，DuerOS是无法将其自动应用到下一轮的query解析中，对话状态的维护需要Bot自己完成
 *
 * @class Session 
 **/
declare class Session {
  sessionId: any;
  isNew: any;
  requestSessionAttribute: any;
  /**
   * @param {Object} data 请求bot的session数据
   **/
  constructor(data: any);
  /**
   * 清空session的所有attributes
   *
   * @public
   **/
  clear(): void;
  /**
   * 将session输出response的格式
   *
   * @return {Object}
   **/
  toResponse(): any;
  /**
   * 从session中获取一个属性的值
   *
   * @example
   * this.getData('status');
   * this.getData('status', '1');
   *
   * @param {string} field  属性名称
   * @param {string} def 默认值
   * @return {string|Object}
   * @public
   **/
  getData(field: string, def?: string): any;
  /**
   * 将一个值存储到session中
   * 注意：
   *      value必须是字符串
   *
   * @example
   * this.setData('status', '1');
   * this.setData('status', '1', '8');
   *
   * @param {string} field  属性名称
   * @param {string} value  属性值
   * @param {string} def 默认值
   * @return {null}
   * @public
   **/
  setData(field: string, value: string, def?: string): any;
}
declare const _Session: typeof Session;
export = _Session;
