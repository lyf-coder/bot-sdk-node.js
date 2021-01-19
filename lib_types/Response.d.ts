// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * 按照Bot协议，打包返回结果
 */
declare class Response {
  /**
   * 构造方法
   *
   * @param {Request} request  请求
   * @param {Session} session  session
   * @param {Nlu} nlu  query解析对象
   */
  constructor(request: Request, session: any, nlu: any);
  /**
   * 设置结束对话
   *
   * @param {boolean} val   true: 结束对话,false: 继续对话
   */
  setShouldEndSession(val: boolean): void;
  /**
   * 通过控制expectSpeech来控制麦克风开关
   *
   * @param {boolean} expectSpeech 麦克风是否开启
   */
  setExpectSpeech(expectSpeech: boolean): void;
  defaultResult(): Promise<any>;
  /**
   * 非法请求
   *
   * @return {Promise}
   */
  illegalRequest(): Promise<any>;
  getTemplateToken(): string;
  /**
   * 打包返回的结果
   *
   * @example
   * this.build({
   *      'outputSpeech' : '你好',
   *      'reprompt' : '再请问一次，你是要干嘛呢'
   * });
   *
   * this.build({
   *      'card' : new TextCard('欢迎进入')
   * });
   *
   * this.build({
   *      // 与 'outputSpeech' : '你好', 效果一样
   *      'outputSpeech' : {
   *          'type':'PlainText',
   *          'text': '你好'
   *      }
   * });
   *
   * @param {Object} data  返回的数据
   * @param {Array} data.directives  返回的指令
   * @param {BaseCard} data.card   返回的卡片
   * @param {string|Object} data.outputSpeech  返回的tts文本。可以是纯文本，或者是有SSML标签的文本(TODO:SSML说明文档)
   * @param {string|Object} data.reprompt 纯文本或者带SSML标签的文本
   * @return {Promise}
   * @public
   */
  build(data: _Response.T100): Promise<any>;
  /**
   * 设置needDetermine为true
   */
  setNeedDetermine(): void;
  /**
   * 表示本次返回的结果是否为兜底结果
   */
  setFallBack(): void;
  /**
   * 表示directives中指令顺序随机
   */
  setAutoDirectivesArrangement(): void;
  /**
   * 表示directives中指令保持相对顺序不变 (directives中指令可能会被过滤)
   */
  setStrictDirectivesArrangement(): void;
  /**
   * 技能所期待的用户回复，技能将该信息反馈给DuerOS，有助于DuerOS在语音识别以及识别纠错时向该信息提权。
   *
   * @param {string} text 普通文本内容类型回复表达的回复内容。
   */
  addExpectTextResponse(text: string): void;
  /**
   * 技能所期待的用户回复，技能将该信息反馈给DuerOS，有助于DuerOS在语音识别以及识别纠错时向该信息提权。
   *
   * @param {string} slot 槽位类型回复表达的槽位名称。
   */
  addExpectSlotResponse(slot: string): void;
}
declare const _Response: typeof Response;
declare namespace _Response {
  export interface T100 {
    directives: any[];
    card: any;
    outputSpeech: any;
    reprompt: any;
  }
}
export = _Response;
