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
declare const _Request: typeof Request;
export = _Request;
