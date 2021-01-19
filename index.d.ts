/**
 * 封装对session的操作。DuerOS提过了多轮对话的能力，也能替Bot管理多轮对话，无须Bot自己维护session状态。
 * 同时，也提供了Session存储，Bot还可以将对话的状态保存session中，自己处理多轮逻辑。
 * 但是，存储在session中的数据，DuerOS是无法将其自动应用到下一轮的query解析中，对话状态的维护需要Bot自己完成
 *
 * @class Session 
 **/
export declare class Session {
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
export declare class Nlu {
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
export declare class Request {
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
 * @file 卡片基础类
 * @author yuanpeng01@baidu.com
 *
 * @class BaseCard 抽象类. 卡片基类
 **/
export declare class BaseCard {
  data: any;
  supportSetField: any[];
  /**
   * 构造函数
   *
   * @param {Array} fields 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名
   **/
  constructor(fields?: any[]);
  /**
   *  添加用户操作提示。所有卡片都可以添加引导提升
   *
   *  @example
   *  this.addCueWords(['十元', '二十元']);
   *
   *  @param {Array} arr 提示的话术
   *  @return {BaseCard} 返回自己
   *  @public
   **/
  addCueWords(arr: any[]): BaseCard;
  /**
   * 设置"查看更多" ，设置卡片锚点
   *
   * @param {string} url  链接地址
   * @param {string}  anchorText 锚点展现的文字，可选。如果不设置，默认为"查看更多"
   * @return {BaseCard} 返回自己
   * @public
   **/
  setAnchor(url: string, anchorText?: string): BaseCard;
  /**
   * 获取卡片数据，或者某个字段的值
   * Example:
   *      this.getData();
   *      this.getData('fieldName');
   *
   * @param {string} key 字段名，可选。如果不提供字段名，返回整个卡片数据
   * @return {mixed}
   * @public
   **/
  getData(key?: string): any;
}
/**
 * @class LinkAccountCard 帐号连接卡片
 * @extends {BaseCard}
 */
export declare class LinkAccountCard extends BaseCard {
  /**
   * @desc 构造函数
   */
  constructor();
}
/**
 * @class ListCardItem  多图片文本列表项
 * @extends {BaseCard}
 */
export declare class ListCardItem extends BaseCard {
  constructor();
}
/**
 * @class ListCard 多图片文本卡片
 * @extends {BaseCard}
 */
export declare class ListCard extends BaseCard {
  constructor();
  /**
   * @desc 添加一个图片项
   *
   * @example
   * let listCardItem = new ListCardItem();
   * listCardItem.setTitle('标题');
   * listCardItem.setContent('内容');
   * listCardItem.setUrl('http://wwww.');
   * listCardItem.setImage('http://wwww.image');
   *
   * let listCard = new ListCard();
   * listCard.addItem(listCardItem);
   *
   * @param {ListCardItem} listCardItem 列表项
   * @public
   */
  addItem(listCardItem: ListCardItem): this;
}
/**
 * @class TextCard 纯文本卡片
 * @extends {BaseCard}
 */
export declare class TextCard extends BaseCard {
  /**
   * @param {string} content 文本内容
   */
  constructor(content?: string);
}
/**
 * @class ImageCard 全图卡片
 * @extends {BaseCard}
 */
export declare class ImageCard extends BaseCard {
  /**
   * 构造函数
   **/
  constructor();
  /**
   * 添加一个图片项
   *
   * @example
   * this.addItem('http://image.src', 'http://thumbnail.src');
   * this.addItem('http://image.src');
   *
   * @param {string} src 图片地址
   * @param {string} thumbnail 图片缩率图地址. 可选
   * @return {ImageCard} 返回自己
   * @public
   **/
  addItem(src: string, thumbnail?: string): ImageCard;
}
/**
 * 标准卡片
 *
 * @class
 * @extends {BaseCard}
 *
 * @example
 * let standardCard = new StandardCard();
 * standardCard.setTitle('title');
 * standardCard.setContent('content');
 * standardCard.setImage('http://www.image');
 */
export declare class StandardCard extends BaseCard {
  constructor();
}
/**
 * 按照Bot协议，打包返回结果
 */
export declare class Response {
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
  build(data: any): Promise<any>;
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
export declare class Certificate {
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
export declare class Bot {
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
/**
 * TTS模版项
 *
 * @class {TTSTemplateItem} TTS模版项
 */
export declare class TTSTemplateItem {
  data: any;
  /**
   * 构造方法
   *
   * @param {string} ttsKey 每个话术模板对应的唯一key
   */
  constructor(ttsKey?: string);
  /**
   * 添加TemplateSlot
   *
   * @param {string} slotKey 槽位名称
   * @param {string} slotValue 槽位值
   */
  addTemplateSlot(slotKey: string, slotValue: string): void;
  /**
   * 设置话术模板key
   *
   * @param {string} ttsKey 每个话术模板对应的唯一key
   */
  setTtsKey(ttsKey: string): void;
  /**
   * 清除话术模板的槽位信息
   */
  clearTemplateSlots(): void;
  /**
   * 获取数据
   *
   * @return {Object}
   */
  getData(): any;
}
/**
 * TTS模版
 *
 * @class {TTSTemplate} TTS模版
 */
export declare class TTSTemplate {
  data: any;
  /**
   * 构造方法
   *
   * @param {TTSTemplateItem|Array}  ttsTemplates 话术模板项
   */
  constructor(ttsTemplates?: any[] | TTSTemplateItem);
  /**
   * 添加TTSTemplateItem
   *
   * @param {TTSTemplateItem} ttsTemplateItem 槽位名称
   */
  addTTSTemplate(ttsTemplateItem: TTSTemplateItem): void;
  /**
   * 清除话术模板的槽位信息
   */
  clearTTSTemplates(): void;
  /**
   * 获取数据
   *
   * @return {Object}
   */
  getData(): any;
}
/**
 * @file 指令基础类
 * @author yuanpeng01@baidu.com
 *
 * @class BaseDirective 抽象类. 指令基类
 **/
export declare class BaseDirective {
  data: any;
  /**
   * 构造函数
   *
   * @param {Array} fields 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名
   **/
  constructor(type: any);
  genToken(): string;
  getData(): any;
}
/**
 * 录音指令，语音录音完成后，会收到Record.RecordSpeechFinished事件
 *
 * @class {RecordSpeech} 录音指令
 */
export declare class RecordSpeech extends BaseDirective {
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
}
/**
 * @class BasePlayerInfoContent 播放信息base类
 */
export declare class BasePlayerInfoContent {
  data: any;
  /**
   * 构造方法
   */
  constructor();
  /**
   * 获取data
   *
   * @return Object
   */
  getData(): any;
}
/**
 * @class AudioPlayerInfoContent类
 */
export declare class AudioPlayerInfoContent extends BasePlayerInfoContent {
  /**
   * 构造方法
   *
   * @param {string} type 音频类型
   */
  constructor(type?: string);
  /**
   * 设置audioItemType值
   *
   * @param {string} type 类型值
   */
  setAudioItemType(type: string): void;
  /**
   * 设置title值
   *
   * @param {string} title 音频的标题
   */
  setTitle(title: string): void;
  /**
   * 设置音频子标题1
   *
   * @param {string} titleSubtext1 音频子标题1
   */
  setTitleSubtext1(titleSubtext1: string): void;
  /**
   * 设置音频子标题2
   *
   * @param {string} titleSubtext2 音频子标题2
   */
  setTitleSubtext2(titleSubtext2: string): void;
  /**
   * 设置歌词url
   *
   * @param {string} url 歌词url
   */
  setLyric(url: string): void;
  /**
   * 设置音频流的长度，单位为ms
   *
   * @param {number} mediaLengthInMs 音频流的长度，单位为ms
   */
  setMediaLengthInMs(mediaLengthInMs: number): void;
  /**
   * 设置音频封面图片
   *
   * @param {string} src 图片地址
   */
  setArt(src: string): void;
  /**
   * 设置资源提供方信息
   *
   * @param {string} name 资源提供方的名字
   * @param {string} logo 资源提供方的logo
   */
  setProvider(name: string, logo?: string): void;
}
/**
 * @class BaseButton Button基础类
 */
export declare class BaseButton {
  data: any;
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
export declare class PlayerInfo {
  data: any;
  /**
   * 构造方法
   *
   * @param {BasePlayerInfoContent} content 播放信息基础类
   * @param {BaseButton|Array} controls 控制按钮
   */
  constructor(content?: BasePlayerInfoContent, controls?: any[] | BaseButton);
  /**
   * 设置audioItemType值
   *
   * @param {string} type 类型值
   * @public
   */
  setAudioItemType(type: string): void;
  /**
   * 设置title值
   *
   * @param {string} title 音频的标题
   * @public
   */
  setTitle(title: string): void;
  /**
   * 设置音频子标题1
   *
   * @param {string} titleSubtext1 音频子标题1
   * @public
   */
  setTitleSubtext1(titleSubtext1: string): void;
  /**
   * 设置音频子标题2
   *
   * @param {string} titleSubtext2 音频子标题2
   * @public
   */
  setTitleSubtext2(titleSubtext2: string): void;
  /**
   * 设置歌词url
   *
   * @param {string} url 歌词url
   * @public
   */
  setLyric(url: string): void;
  /**
   * 设置音频流的长度，单位为ms
   *
   * @param {number} mediaLengthInMs 音频流的长度，单位为ms
   * @public
   */
  setMediaLengthInMs(mediaLengthInMs: number): void;
  /**
   * 设置音频封面图片
   *
   * @param {string} src 图片地址
   * @public
   */
  setArt(src: string): void;
  /**
   * 设置资源提供方信息
   *
   * @param {string} name 资源提供方的名字
   * @param {string} logo 资源提供方的logo
   * @public
   */
  setProvider(name: string, logo: string): void;
  /**
   * 设置控件列表
   *
   * @param {(Control|Array)} controls 单个控件或者控件列表
   * @public
   */
  setControls(controls: any): void;
  /**
   * 增加一个控件
   *
   * @param {Control} control 控件
   * @public
   */
  addControl(control: any): void;
  /**
   * 设置content
   *
   * @param {BasePlayerInfoContent} content 内容体
   */
  setContent(content: BasePlayerInfoContent): void;
  /**
   * 获取data
   *
   * @return {Object}
   * @public
   */
  getData(): any;
}
/**
 * @class {AudioPlayerInfo} 音频播放信息
 * @extends {PlayerInfo} 信息基础类
 */
export declare class AudioPlayerInfo extends PlayerInfo {
  /**
   * 构造方法
   *
   * @param {BasePlayerInfoContent} content 内容
   * @param {BaseButton|Array} controls 控件
   */
  constructor(content?: any, controls?: any);
}
/**
 * @class Stop 音频停止指令
 * @extends {BaseDirective}
 */
export declare class Stop extends BaseDirective {
  constructor();
}
export declare class Button extends BaseButton {
  /**
   * Button 构造函数.
   *
   * @param {string} name 控件名字
   */
  constructor(name: string);
  /**
   * 按钮是否可点击
   *
   * @param {boolean} bool 按钮是否可点击，取值为true说明可以点击，取值为false不可点击
   * @public
   */
  setEnabled(bool: boolean): void;
  /**
   * 按钮是否要渲染为选中状态
   *
   * @param {boolean} bool 按钮是否要渲染为选中状态，取值为true需要渲染为选中状态，取值为false渲染为非选中状态
   * @public
   */
  setSelected(bool: boolean): void;
}
export declare class FavoriteButton extends Button {
  /**
   *  FavoriteButton 构造函数.
   */
  constructor();
}
export declare class RadioButton extends BaseButton {
  /**
   * RadioButton 构造方法.
   *
   * @param {string} name 控件名字
   * @param {string} selectedValue 选中的选项值，设备端应该根据此选项值把对应的按钮渲染为选中状态
   * @public
   */
  constructor(name?: string, selectedValue?: string);
  /**
   * 设置选中的选项值
   *
   * @param {string} selectedValue 选中的选项值
   * @public
   */
  setSelectedValue(selectedValue: string): void;
}
export declare class PreviousButton extends Button {
  /**
   *  PreviousButton 构造函数.
   */
  constructor();
}
export declare class ThumbsUpDownButton extends RadioButton {
  /**
   * ThumbsUpDownButton 构造方法.
   *
   * @param {string} selectedValue 选中的选项值
   * @public
   */
  constructor(selectedValue?: string);
  /**
   * 设置选中的选项值
   *
   * @param {string} selectedValue 选中的选项值
   * @public
   */
  setSelectedValue(selectedValue: string): void;
}
export declare class RecommendButton extends Button {
  /**
   * RecommendButton 构造函数.
   */
  constructor();
}
export declare class RepeatButton extends RadioButton {
  /**
   * 构造方法 RepeatButton.
   *
   * @param {string} selectedValue 选中的选项值
   */
  constructor(selectedValue?: string);
  /**
   * 设置选中的选项值
   *
   * @param {string} selectedValue 选中的选项值
   * @public
   */
  setSelectedValue(selectedValue: string): void;
}
export declare class RefreshButton extends Button {
  /**
   * RefreshButton 构造函数.
   */
  constructor();
}
export declare class ShowPlayListButton extends Button {
  /**
   *  ShowPlayListButton 构造函数.
   */
  constructor();
}
export declare class ShowFavoriteListButton extends Button {
  /**
   *  ShowFavoriteListButton 构造函数.
   */
  constructor();
}
export declare class PlayPauseButton extends Button {
  /**
   * PlayPauseButton 构造函数.
   */
  constructor();
}
export declare class LyricButton extends Button {
  /**
   *  LyricButton 构造函数.
   */
  constructor();
}
export declare class NextButton extends Button {
  /**
   * NextButton 构造函数.
   */
  constructor();
}
/**
 * @class Play 音频播放指令
 * @extends {BaseDirective}
 */
export declare class Play extends BaseDirective {
  /**
   * @param {string} url 音频地址
   * @param {string} playBehavior 默认替换所有
   *                 REPLACE_ALL: 立即停止当前播放并清除播放队列，立即播放指令中的audio item
   *                 ENQUEUE: 将audio item添加到当前队列的尾部
   *                 REPLACE_ENQUEUED: 替换播放队列中的所有audio item，但不影响当前正在播放的audio item
   */
  constructor(url: string, playBehavior?: string);
  /**
   * 设置directive的token. 默认在构造时自动生成了token，可以覆盖
   * @param {string} token 音频的token
   */
  setToken(token: string): void;
  /**
   * 获取directive的token. 默认在构造时自动生成了token
   *
   * @return {string}
   */
  getToken(): string;
  /**
   * 设置directive的音频地址url
   * 
   * @param {string} url 音频地址
   */
  setUrl(url: string): void;
  /**
   * 设置directive的属性。从指定的offset开始进行播放
   *
   * @param {number} milliSeconds 毫秒数。比如5分钟的歌曲，播放的长度是5*60*1000毫秒，选择起始的播放位置
   */
  setOffsetInMilliSeconds(milliSeconds: number): void;
  /**
   * 设置directive的属性。音频流格式，streamFormat 默认STREAM_FORMAT_MP3
   *
   * @param {string} streamFormat  取值: STREAM_FORMAT_MP3、STREAM_FORMAT_M3U8、STREAM_FORMAT_M4A
   */
  setStreamFormat(streamFormat?: string): void;
  /**
   * 设置PlayerInfo信息
   *
   * @param {PlayerInfo} playerInfo
   * @public
   **/
  setPlayerInfo(playerInfo: PlayerInfo): void;
}
/**
 * 视频播放信息
 *
 * @class {VideoPlayerInfo} 视频播放信息
 */
export declare class VideoPlayerInfo {
  data: any;
  /**
   * 构造方法
   *
   * @param {BasePlayerInfoContent} content 播放信息
   * @param {BaseButton|Array} controls 控制按钮
   */
  constructor(content?: BasePlayerInfoContent, controls?: any[] | BaseButton);
  /**
   * 设置控件列表
   *
   * @param {Control|Array} controls 控件列表
   */
  setControls(controls: any): void;
  /**
   * 增加一个控件
   *
   * @param {BaseButton} control 控件
   */
  addControl(control: BaseButton): void;
  /**
   * 设置content
   *
   * @param {BasePlayerInfoContent} content 播放内容
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
 * 视频播放信息
 *
 * @class {VideoPlayerInfoContent} 视频播放信息
 */
export declare class VideoPlayerInfoContent extends BasePlayerInfoContent {
  /**
   * 构造方法
   *
   * @param {string} title 标题
   * @param {number} mediaLengthInMilliseconds 媒体长度
   */
  constructor(title?: string, mediaLengthInMilliseconds?: number);
  /**
   * 设置title值
   *
   * @param {string} title 视频的标题
   */
  setTitle(title: string): void;
  /**
   * 设置视频流的长度
   *
   * @param {number} mediaLengthInMilliseconds 视频流的长度
   */
  setMediaLengthInMilliseconds(mediaLengthInMilliseconds: number): void;
}
export declare class ClearQueue extends BaseDirective {
  /**
   *  ClearQueue 构造函数.
   */
  constructor(clearBehavior?: string);
}
/**
 * 录音指令，语音录音完成后，会收到Record.RecordSpeechFinished事件
 *
 * @class {RecordSpeech} 录音指令
 */
export declare class GetReminder extends BaseDirective {
  constructor();
  /**
   * @desc 设置Token
   * @param {string} token
   */
  setToken(token: string): void;
}
/**
 * 提醒基础指令
 *
 * @class {BaseReminder} 提醒基础指令
 */
export declare class BaseReminder extends BaseDirective {
  constructor(type: any);
  /**
   * @desc 设置提醒触发的时间
   * @param {string} scheduledTime 提醒触发时间
   */
  setScheduledTime(scheduledTime: string): void;
  /**
   * @desc 设置提醒触发的日期
   * @param {string} scheduledDate 提醒触发日期
   */
  setScheduledDate(scheduledDate: string): void;
  /**
   * @desc 设置提醒触发周期
   * @param {string} freqType 周期类型
   */
  setFreq(freqType: string): void;
  /**
   * @desc 设置weekDay
   * @param {array} weekDays 工作日数组
   */
  setWeekDay(weekDays: any[]): void;
  /**
   * @desc 设置提醒播报内容
   * @param {string} text 播报内容
   * @param {string} type 播报类型
   */
  setAlertInfo(text: string, type?: string): void;
}
/**
 * 删除提醒指令
 *
 * @class {DeleteReminder} 删除提醒指令
 */
export declare class DeleteReminder extends BaseDirective {
  constructor();
  /**
   * @desc 设置要删除提醒的Token
   * @param {string}  alertToken 闹钟token
   */
  setAlertToken(alertToken: string): void;
  /**
   * @desc 设置Token
   * @param {string} token
   */
  setToken(token: string): void;
}
/**
 * 更新提醒指令
 *
 * @class {UpdateReminder} 更新提醒指令
 */
export declare class UpdateReminder extends BaseReminder {
  constructor();
  /**
   * @desc 设置token
   * @param {string} token
   */
  setToken(token: string): void;
  /**
   * @desc 指定对应的提醒的Token
   * @param {string} alertToken
   */
  setAlertToken(alertToken: string): void;
}
/**
 * 创建提醒指令
 *
 * @class {CreateReminder} 创建提醒指令
 */
export declare class CreateReminder extends BaseReminder {
  constructor();
  /**
   * @desc 设置Token
   * @param {string} token
   */
  setToken(token: string): void;
}
export declare class Buy extends BaseDirective {
  /**
   * 构造函数
   * @param {商品ID} productId 
   */
  constructor(productId: any);
  /**
   * 设置directive的token. 默认在构造时自动生成了token，可以覆盖
   *
   * @param {string} token 视频的token
   * @public
   */
  setToken(token: string): void;
  /**
   * 获取directive的token. 默认在构造时自动生成了token
   *
   * @return {string} token
   * @public
   */
  getToken(): string;
  /**
   * 设置商品ID
   * 
   * @param {string} productId 商品ID
   */
  setProductId(productId: string): void;
}
export declare class Charge extends BaseDirective {
  /**
   * Charge构造方法
   *
   * @param {string} amount 数量
   * @param {string} sellerOrderId 卖家ID
   * @param {string} productName 产品名称
   * @param {string} description 描述
   */
  constructor(amount: string, sellerOrderId: string, productName: string, description: string);
  /**
   * 设置directive的token. 默认在构造时自动生成了token，可以覆盖
   *
   * @param {string} token 视频的token
   * @public
   */
  setToken(token: string): void;
  /**
   * 获取directive的token. 默认在构造时自动生成了token
   *
   * @return {string} token
   * @public
   */
  getToken(): string;
  /**
   * set amount
   *
   * @param {string} amount 数量
   * @param {string} currencyCode 币种
   * @public
   */
  setAmount(amount: string, currencyCode?: string): void;
  /**
   * 设置sellerAuthorizationNote
   *
   * @param {string} sellerAuthorizationNote 卖家授权
   * @public
   */
  setSellerAuthorizationNote(sellerAuthorizationNote: string): void;
  /**
   * set sellerOrderId
   *
   * @param {string} sellerOrderId 卖家ID
   * @public
   */
  setSellerOrderId(sellerOrderId: string): void;
  /**
   * set productName
   *
   * @param {string} productName 商品名称
   * @public
   */
  setProductName(productName: string): void;
  /**
   * set description
   *
   * @param {string} description 描述
   * @public
   */
  setDescription(description: string): void;
  /**
   * set sellerNode
   *
   * @param {string} sellerNode sellerNode
   * @public
   */
  setSellerNode(sellerNode: string): void;
}
export declare class LaunchApp extends BaseDirective {
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
/**
 * 用于生成RenderAudioPlayerInfo指令的类
 *
 * @class {BaseRenderPlayerInfo} 用于生成RenderAudioPlayerInfo指令的类
 */
export declare class BaseRenderPlayerInfo extends BaseDirective {
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
 * 渲染视频播放内容信息
 *
 * @class {RenderVideoPlayerInfo} 渲染视频播放内容信息
 */
export declare class RenderVideoPlayerInfo extends BaseRenderPlayerInfo {
  /**
   * 构造方法
   *
   * @param {BasePlayerInfoContent} content 内容
   * @param {BaseButton|Array} controls 控件
   */
  constructor(content?: any, controls?: any);
}
export declare class BaseMediaListItem extends BaseDirective {
  data: any;
  /**
   * 构造方法
   *
   * @param {string} title 音频|视频类型
   * @param {string} titleSubtext1 音频|视频类型
   */
  constructor(title: string, titleSubtext1: string);
  /**
   * 设置token
   *
   * @param {string} token token
   */
  setToken(token: string): void;
  /**
   * 设置isFavorited
   *
   * @param {boolean} bool 是否是喜欢的
   */
  setFavorited(bool: boolean): void;
  /**
   * 设置image
   *
   * @param {string} image 图片url
   */
  setImage(image: string): void;
  /**
   * 设置titleSubtext1
   *
   * @param {string} titleSubtext1 一级子标题
   */
  setTitleSubtext1(titleSubtext1: string): void;
  /**
   * 设置titleSubtext2
   *
   * @param {string} titleSubtext2 二级子标题
   */
  setTitleSubtext2(titleSubtext2: string): void;
}
export declare class AudioListItem extends BaseMediaListItem {
  /**
   * 构造方法
   *
   * @param {string} title 音频类型
   * @param {string} titleSubtext1 音频类型
   */
  constructor(title: string, titleSubtext1: string);
  /**
   * 设置isMusicVideo
   *
   * @param {boolean} bool 是否是音乐音频
   */
  setMusicVideoTag(bool: boolean): void;
}
export declare class RenderAudioList extends BaseDirective {
  audioItems: any[];
  data: any;
  /**
   * 构造方法
   *
   * @param {string} title 列表的标题
   * @param {string} behavior 默认替换所有
   *               REPLACE: 清空当前的列表，再渲染，用于首次第一页数据的渲染
   *               APPEND: 当前列表不变，在当前的列表后面渲染，用于往后翻页的渲染
   *               PREPEND:当前列表不变，在当前的列表前面渲染，用于往前翻页的渲染
   *
   */
  constructor(title: string, behavior?: string);
  /**
   * 设置directive的token. 默认在构造时自动生成了token，可以覆盖
   *
   * @param {string} token 视频的token
   */
  setToken(token: string): void;
  /**
   * 增加audioListItem
   *
   * @param {AudioListItem} audioListItem 音频项
   */
  addAudioItem(audioListItem: AudioListItem): void;
  /**
   * 获取数据
   *
   * @return {Object}
   */
  getData(): any;
}
export declare class BaseTemplate extends BaseDirective {
  supportSetField: any[];
  /**
   * BaseTemplate constructor.
   *
   * @param {Array} fields 生成属性对应的set方法
   */
  constructor(fields: any[]);
  /**
   * 设置背景图片
   *
   * @param {string} url 图片地址
   * @param {string} widthPixels 图片的像素宽
   * @param {string} heightPixels 图片的像素高
   * @public
   */
  setBackGroundImage(url: string, widthPixels?: string, heightPixels?: string): void;
  /**
   * 构造图片结构体
   *
   * @param {string} url 图片地址
   * @param {string} widthPixels 图片的像素宽
   * @param {string} heightPixels 图片的像素高
   * @return {Object} 图片对象
   * @public
   */
  createImageStructure(url?: string, widthPixels: string, heightPixels: string): any;
  /**
   * 构造文本结构体
   *
   * @param {string} content 文本内容
   * @param {string} type 文本类型
   * @return {Object} 文本对象
   * @public
   */
  createTextStructure(content: string, type?: string): any;
}
export declare class RenderTemplate extends BaseDirective {
  /**
   * 构造方法
   *
   * @param {BaseTemplate} template 模版
   */
  constructor(template?: BaseTemplate);
  /**
   * 设置模版类别
   *
   * @param {BaseTemplate} template 模版类型
   * @public
   */
  setTemplate(template: BaseTemplate): void;
}
/**
 * 端上入栈指令
 *
 * @class {PushStack} 端上入栈指令
 */
export declare class PushStack extends BaseDirective {
  constructor();
}
export declare class Hint extends BaseDirective {
  /**
   * Hint 构造函数.
   *
   * @param {Mixed} text 提示文本
   */
  constructor(text: any);
}
/**
 * 标签基础类
 *
 * @class {BaseTag} tag基类
 */
export declare class BaseTag {
  data: any;
  /**
   * 构造方法
   *
   * @param {string} type 类型
   * @param {string} text text
   */
  constructor(type: string, text?: string);
  /**
   * 设置类型
   *
   * @param {string} type 类型
   */
  setType(type: string): void;
  /**
   * 设置文本
   *
   * @param {string} text 文本
   */
  setText(text: string): void;
  /**
   * 设置color
   *
   * @param {string} color 颜色
   */
  setColor(color: string): void;
  /**
   * 设置backgroundColor
   *
   * @param {string} backgroundColor 背景颜色
   */
  setBackgroundColor(backgroundColor: string): void;
  /**
   * 返回数据
   *
   * @return {Object}
   */
  getData(): any;
}
export declare class ListTemplateItem extends BaseTemplate {
  /**
   * ListTemplateItem 构造方法.
   */
  constructor();
  /**
   *  设置图片
   *
   * @param {string} url 图片地址
   * @param {string} widthPixels 图片像素宽
   * @param {string} heightPixels 图片像素高
   * @public
   */
  setImage(url: string, widthPixels?: string, heightPixels?: string): void;
  /**
   * 设置图片tags
   *
   * @param {BaseTag|Array} tags 图片标签
   * @public
   */
  setImageTags(tags: any[] | BaseTag): void;
  /**
   * 获取imageTags的数据
   *
   * @param {BaseTag|Array} tags 图片标签
   * @return {Array}
   */
  getImageTagsData(tags: any[] | BaseTag): any[];
  /**
   * 设置列表元素一级标题
   *
   * @param {string} text 文本内容
   * @public
   */
  setPlainPrimaryText(text: string): void;
  /**
   * 设置列表元素二级标题
   *
   * @param {string} text 文本内容
   * @public
   */
  setPlainSecondaryText(text: string): void;
  /**
   * 设置列表元素三级标题
   *
   * @param {string} text 文本内容
   * @public
   */
  setPlainTertiaryText(text: string): void;
  /**
   * 设置列表元素标题
   *
   * @param {string} text 文本内容
   */
  setContent(text: string): void;
  /**
   * 返回数据
   *
   * @param {string} key key
   * @return {Object}
   */
  getData(key?: string): any;
  /**
   * 设置当前元素的名字
   *
   * @param {string} anchorWord 名称
   */
  setAnchorWord(anchorWord: string): void;
}
export declare class ListTemplate extends BaseTemplate {
  /**
   * TextImageTemplate constructor.
   *
   * @param {string} type 模版类型
   */
  constructor(type: string);
  /**
   * 添加列表项
   *
   * @param {ListTemplateItem} listTemplateItem 列表项
   * @return {ListTemplate} 对象本身
   * @public
   */
  addItem(listTemplateItem: ListTemplateItem): ListTemplate;
}
/**
 * 纵向列表模板类
 *
 * @class {ListTemplate4} 纵向列表模版2
 */
export declare class ListTemplate4 extends ListTemplate {
  /**
   * 构造方法
   */
  constructor();
}
export declare class TextImageTemplate extends BaseTemplate {
  /**
   * TextImageTemplate constructor.
   *
   * @param {string} type 模版类型
   */
  constructor(type: string);
  /**
   * 设置图片
   *
   * @param {string} url 图片地轴
   * @param {string} widthPixels 图片像素宽
   * @param {string} heightPixels 图片像素高
   * @public
   */
  setImage(url: string, widthPixels?: string, heightPixels?: string): void;
  /**
   * 设置文本
   *
   * @param {string} text 文本内容
   * @public
   */
  setPlainContent(text: string): void;
}
/**
 * 上图下文模版类
 *
 * @class {BodyTemplate6} 上图下文模版类
 */
export declare class BodyTemplate6 extends TextImageTemplate {
  /**
   * 构造方法
   */
  constructor();
}
export declare class BodyTemplate1 extends BaseTemplate {
  /**
   * BodyTemplate1 构造方法.
   */
  constructor();
  /**
   * 设置plain类型的文本结构
   *
   * @param {string} text 文本内容
   * @param {string} position 文本位置
   * @return {BodyTemplate1} 当前this对象
   * @public
   */
  setPlainTextContent(text: string, position?: string): BodyTemplate1;
}
/**
 * 横向列表模板
 *
 * @class {ListTemplate3} 横向列表模板2
 */
export declare class ListTemplate3 extends ListTemplate {
  /**
   * 构造方法
   */
  constructor();
}
export declare class ListTemplate2 extends ListTemplate {
  /**
   * ListTemplate2 构造方法.
   */
  constructor();
}
export declare class ListTemplate1 extends ListTemplate {
  /**
   * ListTemplate1 构造方法.
   */
  constructor();
}
export declare class BodyTemplate3 extends TextImageTemplate {
  /**
   * BodyTemplate3 构造方法.
   */
  constructor();
}
export declare class BodyTemplate2 extends TextImageTemplate {
  /**
   * BodyTemplate2 构造方法.
   */
  constructor();
}
export declare class BodyTemplate5 extends BaseTemplate {
  /**
   * BodyTemplate5 构造方法.
   */
  constructor();
  /**
   * 添加图片
   *
   * @param {string} url 图片地址
   * @param {string} widthPixels 图片宽度
   * @param {string} heightPixels 图片高度
   */
  addImages(url: string, widthPixels?: string, heightPixels?: string): void;
}
/**
 * 免费标签
 *
 * @class {FreeTag} 免费标签
 */
export declare class FreeTag extends BaseTag {
  /**
   * 构造方法
   */
  constructor();
}
/**
 * 试听标签
 *
 * @class {AuditionTag} 试听标签
 */
export declare class AuditionTag extends BaseTag {
  /**
   * BaseTemplate constructor.
   */
  constructor();
}
/**
 * 最新标签
 *
 * @class {NewTag} 最新标签
 */
export declare class NewTag extends BaseTag {
  /**
   * BaseTemplate constructor.
   */
  constructor();
}
/**
 * 自定义标签
 *
 * @class {CustomTag} 自定义标签
 */
export declare class CustomTag extends BaseTag {
  /**
   * 构造方法
   *
   * @param {string} text 文本
   */
  constructor(text: string);
}
/**
 * 热门标签
 *
 * @class {HotTag} 热门标签
 */
export declare class HotTag extends BaseTag {
  /**
   * 构造方法
   */
  constructor();
}
/**
 * 付费标签
 *
 * @class {PayTag} 付费标签
 */
export declare class PayTag extends BaseTag {
  /**
   * 构造方法
   */
  constructor();
}
/**
 * 数量标签
 *
 * @class {AmountTag} 数量标签
 */
export declare class AmountTag extends BaseTag {
  /**
   * 构造方法
   *
   * @param {string} amount 数量
   */
  constructor(amount: string);
}
/**
 * VIP标签
 *
 * @class {VipTag} VIP标签
 */
export declare class VipTag extends BaseTag {
  /**
   * 构造方法
   */
  constructor();
}
/**
 * 时间标签
 *
 * @class {TimeTag} 时间标签
 */
export declare class TimeTag extends BaseTag {
  /**
   * 构造方法
   *
   * @param {string} time 时间
   */
  constructor(time: string);
}
/**
 * 购买标签
 *
 * @class {PurchasedTag} 购买标签
 */
export declare class PurchasedTag extends BaseTag {
  /**
   * 构造方法
   */
  constructor();
}
export declare class BodyTemplate4 extends TextImageTemplate {
  /**
   * BodyTemplate4 构造方法.
   */
  constructor();
}
export declare class VideoListItem extends BaseMediaListItem {
  /**
   * 构造方法
   *
   * @param {string} title 视频类型
   * @param {string} titleSubtext1 视频类型
   */
  constructor(title: string, titleSubtext1: string);
  /**
   * 设置mediaLengthInMilliseconds
   *
   * @param {number} milliseconds 视频时长
   */
  setMediaLengthInMilliseconds(milliseconds: number): void;
}
export declare class RenderVideoList extends BaseDirective {
  videoItems: any[];
  data: any;
  /**
   * 构造方法
   *
   * @param {string} title 列表的标题
   * @param {string} behavior 默认替换所有
   *               REPLACE: 清空当前的列表，再渲染，用于首次第一页数据的渲染
   *               APPEND: 当前列表不变，在当前的列表后面渲染，用于往后翻页的渲染
   *               PREPEND:当前列表不变，在当前的列表前面渲染，用于往前翻页的渲染
   *
   */
  constructor(title: string, behavior?: string);
  /**
   * 设置directive的token. 默认在构造时自动生成了token，可以覆盖
   *
   * @param {string} token 视频的token
   */
  setToken(token: string): void;
  /**
   * 增加audioItem
   *
   * @param {VideoListItem} videoListItem 视频项
   */
  addVideoItem(videoListItem: VideoListItem): void;
  /**
   * 获取数据
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
export declare class RenderAudioPlayerInfo extends BaseRenderPlayerInfo {
  /**
   * 构造方法
   *
   * @param {BasePlayerInfoContent} content  内容
   * @param {BaseButton|Array} controls 控件
   */
  constructor(content?: any, controls?: any);
}
/**
 * 用户授权
 *
 * @class {AskForPermissionsConsent} 用户授权
 */
export declare class AskForPermissionsConsent extends BaseDirective {
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
export declare class BaseCommand {
  data: any;
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
export declare class ExecuteCommands extends BaseDirective {
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
export declare class Document {
  data: any;
  /**
   * Document 构造方法.
   *
   * @param {Object} doc 初始化json
   */
  constructor(doc: any);
  /**
   * 从path中读取document配置文件生成文档对象数据
   *
   * @param {string} path 绝对路径-path.join(__dirname,'doc.json')
   * @return {Promise}
   * @public
   */
  getDocumentFromPath(path: string): Promise<any>;
  /**
   * 获取data
   *
   * @return {Object} 返回文档对象数据
   * @public
   */
  getData(): any;
  /**
   * 初始化文档对象数据
   *
   * @param {Object} data 初始化数据
   * @public
   */
  initDocument(data: any): void;
  /**
   * 设置模版渲染停留时间
   *
   * @param {number} duration 初始化数据
   * @public
   */
  setDocumentDuration(duration: number): void;
}
export declare class SetPropsCommand extends BaseCommand {
  /**
   * SetPropsCommand 构造方法.
   */
  constructor();
  /**
   * 样式属性对象
   * 
   * @param {Object} data 
   */
  setProps(props: any): void;
}
export declare class PopArgumentsCommand extends BaseCommand {
  /**
   * PopArgumentsCommand 构造方法.
   */
  constructor();
}
export declare class ResetTimerCommand extends BaseCommand {
  /**
   * ResetTimerCommand 构造方法.
   */
  constructor();
  /**
   * @desc 重置Timer的延迟执行时间
   * @param {number} duration 设置Timer的延迟执行时间
   */
  setDuration(duration: number): void;
}
export declare class SetStateCommand extends BaseCommand {
  /**
   * SetStateCommand 构造方法.
   */
  constructor();
  /**
   * 设置属性名称
   *
   * @param {string} state 属性名称
   * @public
   */
  setState(state: string): void;
  /**
   * 设置属性值
   *
   * @param {string} value 属性值
   * @public
   */
  setValue(value: string): void;
  /**
   * 设置属性值
   *
   * @param {string} value 属性值
   * @public
   */
  setStateType(stateType: any): void;
}
export declare class PushArgumentsCommand extends BaseCommand {
  /**
   * PushArgumentsCommand 构造方法.
   */
  constructor();
  /**
   * @desc 设置需要push的新值
   * @param {string} value value
   */
  setValue(value: string): void;
}
export declare class ScrollToElementCommand extends BaseCommand {
  /**
   * ScrollToElementCommand 构造方法.
   */
  constructor();
  /**
   * 滚动动画持续时间，单位毫秒，默认 500 毫秒
   * 
   * @param {number} duration 
   */
  setDuration(duration: number): void;
  /**
   * 指定的 item 的 componentId
   * 
   * @param {string} targetComponentId 
   */
  setTargetComponentId(targetComponentId: string): void;
  /**
   * 设置滚动后视图的位置
   *
   * @param {string} align 视图的位置
   */
  setAlign(align: string): void;
}
export declare class InvokeMethodCommand extends BaseCommand {
  /**
   * InvokeMethodCommand 构造方法.
   */
  constructor();
  /**
   * 调用方法名
   * 
   * @param {string} data 
   */
  setMethodName(methodName: any): void;
  /**
   * TODO 指令参数 
   * @param {object} params 指令参数
   * 指令参数
   *  arguments 指令调用方法的接收参数，数组类型
   *  arguments数组中参数类型支持任意类型（string、object、array、number、boolean）；
   *  arguments数组中参数类型支持获取事件触发的绑定参数（在事件触发指令执行的场景下），如："arguments":["$EVENT_ARGS.0", 1], 代表该指令会将事件触发该指令时，事件触发携带的参数的第一个，作为arguments的第一个参数（其结构支持多层级取值）。
   */
  setParams(params: any): void;
}
export declare class ScrollToIndexCommand extends BaseCommand {
  /**
   * ScrollToIndexCommand 构造方法.
   */
  constructor();
  /**
   * 设置index索引值
   *
   * @param {number} index index索引值
   * @public
   */
  setIndex(index: number): void;
  /**
   * 设置滚动后视图的位置
   *
   * @param {string} align 视图的位置
   * @public
   */
  setAlign(align: string): void;
  /**
   * 滚动动画持续时间，单位毫秒，默认 500 毫秒
   * 
   * @param {number} duration 
   */
  setDuration(duration: number): void;
}
export declare class SendEventCommand extends BaseCommand {
  /**
   * SendEventCommand 构造方法.
   */
  constructor();
  /**
   * @desc 添加用户自定义参数
   * @param  {array} args 自定义参数数组
   */
  addArguments(args: any[]): void;
  /**
   * 标识用户基于该事件请求上报时，携带当前会话状态的类型，枚举，取值如下
   * 
   * @param {string} dialogType 
   */
  setDialogType(dialogType: string): void;
}
export declare class ResetNonInteractionExitTimeCommand extends BaseCommand {
  /**
   * ResetNonInteractionExitTimeCommand 构造方法.
   */
  constructor();
  /**
   * 滚动动画持续时间，单位毫秒，默认 500 毫秒
   * 
   * @param {number} duration 
   */
  setDuration(duration: number): void;
}
export declare class SetPageCommand extends BaseCommand {
  /**
   * SetPageCommand 构造方法.
   */
  constructor();
  /**
   * 设置属性值
   *
   * @param {string} position 相对或者绝对
   * @public
   */
  setPosition(position?: string): void;
  /**
   * 设置切换步长
   *
   * @param {number} value 步长
   * @public
   */
  setValue(value: number): void;
}
export declare class AppendComponentCommand extends BaseCommand {
  /**
   * AppendComponentCommand 构造方法.
   */
  constructor();
  /**
   * @desc 设置新增文档对象
   * @param {Document} doc 新增的文档对象
   */
  setDocument(doc: Document): void;
}
export declare class AnimationCommand extends BaseCommand {
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
export declare class ScrollCommand extends BaseCommand {
  /**
   * ScrollCommand 构造方法.
   */
  constructor();
  /**
   * 设置滚动的距离
   *
   * @param {string} distance 滚动的距离
   * @public
   */
  setDistance(distance: string): void;
  /**
   * 滚动动画持续时间，单位毫秒，默认 500 毫秒
   * 
   * @param {number} duration 
   */
  setDuration(duration: number): void;
}
export declare class AutoPageCommand extends BaseCommand {
  /**
   * AutoPageCommand 构造方法.
   */
  constructor();
  /**
   * 设置切换页面的时间间隔
   *
   * @param {number} durationMs 切换页面的时间间隔
   * @public
   */
  setDurationInMillisecond(durationMs: number): void;
}
export declare class SetSpeechMonitorCommand extends BaseCommand {
  /**
   * SetSpeechMonitorCommand 构造方法.
   */
  constructor();
  /**
   * 标识为 speech 播放完成需要达到的 ttsposition 值（必填，且大于0）,speech 播报中 ttsposition 位置值在逐增过程中第一次达到 speechFinishedPosition 值时，执行 onFinished 并结束本次监听；
   * @param {number} speechFinishedPosition 
   */
  setSpeechFinishedPosition(speechFinishedPosition: number): void;
  /**
   * 标识为播放完成后可执行的指令（目前限定为仅可使用 SendEvent 指令反馈监听结果）
   * @param {SendEventCommand} onFinished 
   */
  setOnFinished(onFinished: SendEventCommand): void;
  /**
   * 标识为播放被中断后可执行的指令（目前限定为仅可使用 SendEvent 指令反馈监听结果）
   * @param {SendEventCommand} onInterrupted 
   */
  setOnInterrupted(onInterrupted: SendEventCommand): void;
}
export declare class PageDestroyCommand extends BaseCommand {
  /**
   * PageDestroyCommand 构造方法.
   */
  constructor();
}
export declare class ControlMediaCommand extends BaseCommand {
  /**
   * ControlMedia 构造方法.
   */
  constructor();
  /**
   * 设置动作属性
   *
   * @param {string} command 名称
   * @public
   */
  setCommand(command: string): void;
}
export declare class SequentialCommand extends BaseCommand {
  /**
   * SequentialCommand 构造方法.
   */
  constructor();
  /**
   * 设置延迟执行时间
   *
   * @param {number} delayMs 延迟执行时间
   * @public
   */
  setDelayInMilliseconds(delayMs: number): void;
  /**
   * 设置滚动的距离
   *
   * @param {number} repeatCount 重复执行次数
   * @public
   */
  setRepeatCount(repeatCount: number): void;
  /**
   * 设置滚动的距离
   *
   * @param {string} distance 滚动的距离
   * @public
   */
  setCommands(commands: any): void;
}
export declare class ParallelCommand extends BaseCommand {
  /**
   * AnimationCommand 构造方法.
   */
  constructor();
  /**
   * 设置延迟时间间隔
   *
   * @param {number} delayMs 延迟时间间隔
   * @public
   */
  setDelayInMilliseconds(delayMs: number): void;
  /**
   * 设置并行执行的指令集合
   *
   * @param {BaseCommand|Array} commands 指令集合
   * @public
   */
  setCommands(commands: any[] | BaseCommand): void;
  /**
   * 控制多指令集合的执行顺序类指令，复合的 command 组件, 并行执行
   * @param {number} repeatCount 重复执行次数
   */
  setRepeatCount(repeatCount: number): void;
}
export declare class SetStylesCommand extends BaseCommand {
  /**
   * SetStylesCommand 构造方法.
   */
  constructor();
  /**
   * 样式属性对象
   * 
   * @param {Object} data 
   */
  setStyles(styles: any): void;
}
export declare class UpdateComponentCommand extends BaseCommand {
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
export declare class ClearArgumentsCommand extends BaseCommand {
  /**
   * ClearArgumentsCommand 构造方法.
   */
  constructor();
}
export declare class UpdateDataSourceCommand extends BaseCommand {
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
export declare class RenderDocument extends BaseDirective {
  /**
   * Document 构造方法.
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
   * 设置文档对象
   *
   * @param {Document} document 文档对象
   * @public
   */
  setDocument(document: Document): void;
  /**
   * 设置数据源
   *
   * @param {Object} dataSources 数据源
   * @public
   */
  setDataSources(dataSources: any): void;
}
