// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * TTS模版项
 *
 * @class {TTSTemplateItem} TTS模版项
 */
declare class TTSTemplateItem {
  data: _TTSTemplateItem.T100;
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
declare const _TTSTemplateItem: typeof TTSTemplateItem;
declare namespace _TTSTemplateItem {
  export interface T100 {
    [key: string]: any;
  }
}
export = _TTSTemplateItem;
