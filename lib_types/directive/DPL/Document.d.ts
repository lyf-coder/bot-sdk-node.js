// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

declare class Document {
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
declare const _Document: typeof Document;
export = _Document;
