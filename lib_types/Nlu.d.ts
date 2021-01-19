// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

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
declare const _Nlu: typeof Nlu;
export = _Nlu;
