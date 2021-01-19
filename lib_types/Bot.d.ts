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
/**
 * 封装DuerOS 对query的解析结果
 * 只有IntentRequest 才有Nlu结构
 */
declare class Nlu {
  requestIntents: any;
  /**
   * 构造函数
   *
   * @param {Object} intents IntentRequest 中的intents
   */
  constructor(intents: any);
  /**
   * 通过槽位名设置一个槽位的值，如果没有此槽位，新增一个
   *
   * @param {string} field 槽位名
   * @param {string} value 值
   * @param {Integer} index 第几个intent，默认第一个
   * @public
   */
  setSlot(field: string, value: string, index?: any): void;
  /**
   * 通过槽位名获取一个槽位的值
   *
   * @param {string} field 槽位名
   * @param {number} index 第几个intent，默认第一个
   * @return {null|string}
   * @public
   */
  getSlot(field: string, index?: number): string;
  /**
   * 获取DuerOS请求中的意图名
   *
   * @return {string|null}
   * @public
   */
  getIntentName(): string;
  /**
   * Bot是否在询问用户，等待用户的回复
   *
   * @return {boolean}
   */
  hasAsked(): boolean;
  /**
   * Bot主动发起对一个槽位的询问。比如：打车时询问用户目的地
   *
   * @example
   * this.ask('destination');
   *
   * @param {string} slot 槽位名
   * @public
   */
  ask(slot: string): void;
  /**
   * 获取 _directive
   *
   * @return {Object}
   */
  toDirective(): any;
  /**
   * toUpdateIntent
   *
   * @return {Object}
   */
  toUpdateIntent(): any;
  /**
   * 设置将对话的处理代理给Dialog Management(DM)。
   *     按事先配置的顺序，包括对缺失槽位的询问，槽位值的确认（如果设置了槽位需要确认，以及确认的话术）
   *     和整个意图的确认（如果设置了意图需要确认，以及确认的话术。比如可以将收集的槽位依次列出，等待用户确认）
   *
   * @public
   */
  setDelegate(): void;
  /**
   * 主动发起对一个槽位的确认，此时还需同时返回询问的outputSpeach。
   * 主动发起的确认，DM不会使用默认配置的话术。
   *
   * @example
   * this.setConfirmSlot('destination');
   *
   * @param {string} field 槽位名
   * @public
   */
  setConfirmSlot(field: string): void;
  /**
   * 主动发起对一个意图的确认，此时还需同时返回询问的outputSpeach。主动发起的确认，DM不会使用默认配置的话术。一般当槽位填槽完毕，在进行下一步操作之前，一次性的询问各个槽位，是否符合用户预期。
   *
   * @example
   * this.setConfirmIntent();
   *
   * @public
   */
  setConfirmIntent(): void;
  /**
   * 技能针对某个槽位返回一系列的选项供用户选择。
   * 
   * @param {string} field 槽位名
   */
  setSelectSlot(field: string): void;
  /**
   * 技能返回一系列的选项供用户选择，这些选项对应不同的意图。
   */
  setSelectIntent(): void;
  /**
   * Dialog.SelectIntent指令，技能提供的选项。
   * 
   * @param {string} value 选项中元素取值
   * @param {enum} entity 选项元素所属的实体，利于DuerOS解析
   * @param {array} synonyms value的同义词，有利于DuerOS的解析，最多可以填5个。
   * @param {int} index 当前元素的位置，从1开始。选项中不同元素可以有相同的index。
   */
  setIntentOption(value: string, entity: any, synonyms: any[], index: any): void;
  /**
   * 设置Dialog.SelectSlot指令，option参数
   * @param {string} value 选项中元素取值
   * @param {enum} entity 选项元素所属的实体，利于DuerOS解析
   * @param {array} synonyms value的同义词，有利于DuerOS的解析，最多可以填5个。
   * @param {int} index 当前元素的位置，从1开始。选项中不同元素可以有相同的index。
   */
  setOption(value: string, entity: any, synonyms: any[], index: any): void;
  /**
   * 获取槽位的确认状态
   *
   * @desc 获取一个slot对应的confirmationStatus
   * @param {string} field 槽位名
   * @param {number} index index
   * @return {string} 槽位的confirmationStatus
   */
  getSlotConfirmationStatus(field: string, index?: number): string;
  /**
   * 获取意图的确认状态 获取一个intent对应的confirmationStatus
   *
   * @param {number} index index
   * @return {string} 意图的confirmationStatus
   */
  getIntentConfirmationStatus(index?: number): string;
  /**
   * 设置afterSearchScore
   *
   * @param {number} score score
   */
  setAfterSearchScore(score: number): void;
  /**
   * 获取afterSearchScore
   *
   * @return {number}
   */
  getAfterSearchScore(): number;
}
/**
 * 对DuerOS请求bot的request body进行封装
 */
declare class Request {
  /**
   * constructor
   *
   * @param {Object} data request
   */
  constructor(data: any);
  /**
   * 获取Request 的数据
   *
   * @return {Object}
   */
  getData(): any;
  /**
   * 获取session 对象
   *
   * @return {Session}
   */
  getSession(): Session;
  /**
   * 获取nlu 对象
   *
   * @return {Nlu}
   */
  getNlu(): Nlu;
  /**
   * 获取请求类型
   *
   * @return {string}
   */
  getType(): string;
  /**
   * 获取设备音频播放的状态
   *
   * @return {Object}
   */
  getAudioPlayerContext(): any;
  /**
   * 获取设备视频播放的状态
   *
   * @return {Object}
   */
  getVideoPlayerContext(): any;
  /**
   * 获取screen context
   *
   * @return {Object}
   */
  getScreenContext(): any;
  /**
   * 返回event request数据
   *
   * @return {Object}
   */
  getEventData(): any;
  /**
   * 获取用户的user id
   *
   * @return {string}
   */
  getUserId(): string;
  /**
   * 获取请求的query
   *
   * @return {string}
   */
  getQuery(): string;
  /**
   * 判断是否为调起bot的请求
   *
   * @return {boolean}
   */
  isLaunchRequest(): boolean;
  /**
   * 判断是否为结束对话的请求
   *
   * @return {boolean}
   */
  isSessionEndedRequest(): boolean;
  /**
   * 获取bot id
   *
   * @return {string}
   */
  getBotId(): string;
  /**
   * 获取地理位置
   *
   * @return {null|Object}
   */
  getLocation(): any;
  /**
   * 判断槽位是否填完。针对于填槽多轮。
   *
   * @return {boolean}
   */
  isDialogStateCompleted(): boolean;
  /**
   * 获取apiAccessToken
   *
   * @return {string}
   */
  getApiAccessToken(): string;
  /**
   * 获取apiEndPoint
   *
   * @return {string}
   */
  getApiEndPoint(): string;
  /**
   * 获取externalAccessTokens
   *
   * @return {Array}
   */
  getExternalAccessTokens(): any[];
}
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
  build(data: _Bot.T100): Promise<any>;
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
/**
 * 认证
 **/
declare class Certificate {
  data: string;
  headers: any;
  privateKey: string;
  verifyRequestSign: boolean;
  /**
   * @param {Object} headers http请求的header
   * @param {string} requestBody 请求体
   * @param {string} privateKeyContent 私钥. 用于请求DuerOS参数签名
   **/
  constructor(headers: any, requestBody: string, privateKeyContent?: string);
  /**
   * 开启验证请求参数签名，阻止非法请求
   *
   * @return {boolean}
   * @public
   */
  enableVerifyRequestSign(): boolean;
  /**
   * 关闭验证请求参数签名
   *
   * @return {boolean}
   * @public
   */
  disableVerifyRequestSign(): boolean;
  /**
   * @desc 验证请求者是否合法
   * @return promise
   * @public
   */
  verifyRequest(): Promise<any>;
  /**
   * @return string
   * @public
   */
  getRequestSig(): any;
}
/**
 * Bot基类. 请继承此类
 *
 * @example
 * const BaseBot = require('bot-sdk');
 * class MyBot extends BaseBot {
 *     constructor(postData) {
 *          super(postData);
 *          //...
 *     }
 * }
 *
 */
declare class Bot {
  request: Request;
  session: Session;
  nlu: Nlu;
  response: Response;
  botMonitor: any;
  /**
   * 构造函数，以及DuerOS请求bot的request为参数，request协议参考[http://TODO]
   *
   * @param {Object} postData DuerOS请求body
   */
  constructor(postData: any);
  /**
   * 对SessionEnded添加处理函数
   *
   * @example
   * this.addLaunchHandler(()=>{
   *      // 进入bot，提示用户如何操作
   * });
   *
   * @param {Function} handler 意图处理函数。返回值非null，将作为bot的response返回DuerOS
   *                        函数返回值参考Response.build() 的输入参数
   * @return {Bot} 返回自己
   * @public
   */
  addLaunchHandler(handler: (...args: any[]) => any): Bot;
  /**
   * 对SessionEnded添加处理函数
   *
   * @example
   * this.addSessionEndedHandler(()=>{
   *     // todo some clear job
   *     // this.clearSession()
   * });
   *
   * @param {Function} handler 意图处理函数。返回值非null，将作为bot的response返回DuerOS
   *                        函数返回值参考Response.build() 的输入参数
   * @return {Bot} 返回自己
   * @public
   */
  addSessionEndedHandler(handler: (...args: any[]) => any): Bot;
  /**
   * 对一个intent添加处理函数
   *
   * @example
   * this.addIntentHandler('intentName', ()=>{
   *     //this.getSlot('slotName');
   * });
   *
   * @param {string} intent 意图名：'intentName'
   * @param {Function} handler 意图处理函数。返回值非null，将作为bot的response返回DuerOS
   *                        函数返回值参考Response.build() 的输入参数
   * @return {Bot} 返回自己
   * @public
   */
  addIntentHandler(intent: string, handler: (...args: any[]) => any): Bot;
  /**
   * 对一个事件添加处理函数。比如设备端反馈的音频播放开始事件
   *
   * @example
   * this.addEventListener('Audio', (event)=>{
   *     // event 为事件数据 
   *     // 具体数据结构参考[TODO]
   * });
   *
   * @param {string} event  事件名
   * @param {Function} handler 事件处理函数。返回值非null，将作为bot的response返回DuerOS
   *                        函数返回值参考Response.build() 的输入参数
   * @return {Bot} 返回自己
   * @public
   */
  addEventListener(event: string, handler: (...args: any[]) => any): Bot;
  /**
   * 默认兜底事件的处理回调。
   *
   * @param {Function} handler 处理函数，传入参数为事件的request，返回值做完response给DuerOS
   * @return {Bot} 返回自己
   * @public
   **/
  addDefaultEventListener(handler: (...args: any[]) => any): Bot;
  /**
   * 初始化认证校验
   *
   * @example
   * this.initCertificate(
   *      {signature: '###', signaturecerturl: ''},
   *      '{"version":""}'
   *  );
   *
   * @param {Object} headers http请求的header
   * @param {string} body 请求体
   * @return {Certificate} Certificate实例
   * @public
   */
  initCertificate(headers: any, body: string): Certificate;
  /**
   * 获取DuerOS请求中的意图名
   *
   * @return {string|null}
   * @public
   */
  getIntentName(): string;
  /**
   * 获取session的一个字段对应的值
   *
   * @param {string} field 字段名
   * @param {Mixed} defaultValue  默认值  当此字段没有值时，返回defaultValue
   * @return {Mixied}
   * @public
   */
  getSessionAttribute(field?: string, defaultValue?: any): any;
  /**
   * 设置session的一个字段的值
   *
   * @param {string} field 字段名
   * @param {Mixed} value 字段对应的值
   * @param {Mixed} defaultValue  默认值  当value为空时，使用defaultValue
   * @return {null}
   * @public
   */
  setSessionAttribute(field: string, value: any, defaultValue?: any): any;
  /**
   * 清空session的所有字段
   *
   * @return {null}
   * @public
   */
  clearSessionAttribute(): any;
  /**
   * 根据槽位名获取槽位对应的值
   *
   * @param {string} field  槽位名
   * @param {Integer} index 第几个intent，默认第一个
   * @return {string} 
   * @public
   */
  getSlot(field: string, index?: any): string;
  /**
   * 设置槽位的值。如果该槽位不存在，新增一个槽位名，并设置对于的值
   *
   * @param {string} field 槽位名
   * @param {string} value 值
   * @param {Integer} index 第几个intent，默认第一个
   * @return {null}
   * @public
   */
  setSlot(field: string, value: string, index?: any): any;
  /**
   * 设置多轮继续，等待用户回复
   *
   * @return {null}
   * @public
   */
  waitAnswer(): any;
  /**
   * 设置多轮结束，此时bot结束多轮对话
   *
   * @public
   */
  endSession(): void;
  /**
   * 设置私钥
   *
   * @param {string} filename 私钥路径
   * @return {Promise}
   */
  setPrivateKey(filename: string): Promise<any>;
  /**
   * 通过控制expectSpeech来控制麦克风开
   *
   * @param {boolean} expectSpeech 是否开启麦克风
   */
  setExpectSpeech(expectSpeech: boolean): void;
  /**
   * 告诉DuerOS，需要结束对话
   */
  endDialog(): void;
  /**
   * 检测Display的数据是否存在
   *
   * @return {boolean}
   * @public
   */
  isSupportDisplay(): boolean;
  /**
   * 检测AudioPlayer对象是否存在
   *
   * @return {boolean}
   * @public
   */
  isSupportAudioPlayer(): boolean;
  /**
   * 检测VideoPlayer对象是否存在
   *
   * @return {boolean}
   * @public
   */
  isSupportVideoPlayer(): boolean;
  /**
   * bot执行的入口
   *
   * @param {boolean} build 是否需要打包response，输出JSON String
   * @return {Promise}
   * @public
   */
  run(build?: boolean): Promise<any>;
  /**
   * 技能所期待的用户回复，技能将该信息反馈给DuerOS，有助于DuerOS在语音识别以及识别纠错时向该信息提权
   *
   * @param {string} slot 槽位类型回复表达的槽位名称。
   */
  addExpectSlotResponse(slot: string): void;
  /**
   * 获取apiAccessToken
   *
   * @return {string}
   */
  getApiAccessToken(): string;
  /**
   * 获取apiEndPoint
   *
   * @return {string}
   */
  getApiEndPoint(): string;
  /**
   * 获取用户百度账号信息
   * 需要用户同意该权限才可以获取到信息,
   * 参考 https://dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-user-info/request-customer-information-api_markdown
   *
   * @return {Promise}
   */
  getUserProfile(): Promise<any>;
  /**
   * 获取用户录音数据
   * 需要用户同意该权限才可以获取到信息,
   * 参考 https://dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-user-info/request-customer-information-api_markdown
   *
   * @param {string} audioToken RecordSpeechFinished事件中的audioToken
   * @return {Promise}
   */
  getRecordSpeech(audioToken: string): Promise<any>;
  /**
   * 获取用户地理位置信息
   * 需要用户同意该权限才可以获取到信息,
   * 参考 https://dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-user-info/request-customer-information-api_markdown
   *
   * @return {Promise}
   */
  getDeviceLocation(): Promise<any>;
  /**
   * 调用智能家居打印机服务
   * 需要用户同意该权限才可以获取到信息,
   * 参考 https://dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-user-info/request-customer-information-api_markdown
   *
   * @param {object} data
   * @return {Promise}
   */
  callSmarthomePrinter(data: any): Promise<any>;
  /**
   * 小度音箱app通知接口
   * 需要用户同意该权限才可以获取到信息,
   * 参考 https://dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-user-info/request-customer-information-api_markdown
   *
   * @param {Object} data 参数对象
   * @return {Promise}
   */
  sendMateappNotification(data: any): Promise<any>;
}
declare const _Bot: typeof Bot;
declare namespace _Bot {
  export interface T100 {
    directives: any[];
    card: any;
    outputSpeech: any;
    reprompt: any;
  }
}
export = _Bot;
