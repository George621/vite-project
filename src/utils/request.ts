 
import type { AxiosRequestConfig } from 'axios';
 

export interface RequestOptions extends AxiosRequestConfig {
  /** 是否直接将数据从响应中提取出，例如直接返回 res.data，而忽略 res.code 等信息 */
  isReturnResult?: boolean;
  /** 请求成功是提示信息 */
  successMsg?: string;
  /** 请求失败是提示信息 */
  errorMsg?: string;
  /** 成功时，是否显示后端返回的成功信息 */
  showSuccessMsg?: boolean;
  /** 失败时，是否显示后端返回的失败信息 */
  showErrorMsg?: boolean;
  requestType?: 'json' | 'form';
}

 
/**
 *
 * @param url - request url
 * @param config - AxiosRequestConfig
 */
export async function request(_url: string | RequestOptions, _config: RequestOptions = {}) {
  // const url = isString(_url) ? _url : _url.url;
  // const config = isString(_url) ? _config : _url;
  // try {
  //   // 兼容 from data 文件上传的情况
  //   const { requestType, isReturnResult = true, ...rest } = config;

  //   const response = (await service.request({
  //     url,
  //     ...rest,
  //     headers: {
  //       ...rest.headers,
  //       ...(requestType === 'form' ? { 'Content-Type': 'multipart/form-data' } : {}),
  //     },
  //   })) as AxiosResponse<BaseResponse>;
  //   const { data } = response;
  //   const { code } = data || {};

  //   const hasSuccess = data && Reflect.has(data, 'code') && code === ResultEnum.SUCCESS;

  //   if (hasSuccess) {
  //     // const { successMsg, showSuccessMsg } = config;
  //     // if (successMsg) {
  //     //   $message.success(successMsg);
  //     // } else if (showSuccessMsg && message) {
  //     //   $message.success(message);
  //     // }
  //   }

  //   // 页面代码需要获取 code，data，message 等信息时，需要将 isReturnResult 设置为 false
  //   if (!isReturnResult) {
  //     return data;
  //   } else {
  //     return data.data;
  //   }
  // } catch (error: any) {
  //   return Promise.reject(error);
  // }
}
