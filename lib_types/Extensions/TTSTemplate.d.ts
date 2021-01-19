// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * TTS模版项
 *
 * @class {TTSTemplateItem} TTS模版项
 */
declare class TTSTemplateItem {
  data: _TTSTemplate.T100;
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
declare class TTSTemplate {
  data: _TTSTemplate.T101;
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
declare const _TTSTemplate: typeof TTSTemplate;
declare namespace _TTSTemplate {
  export interface T100 {
    [key: string]: any;
  }
  export interface T101 {
    type: string;
  }
}
export = _TTSTemplate;
