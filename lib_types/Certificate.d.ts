// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

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
declare const _Certificate: typeof Certificate;
export = _Certificate;
