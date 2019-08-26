export type Methods =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'heda'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
export interface AxiosRequestConfig {
  url: string
  method?: Methods
  data?: any
  params?: any
  headers?: any
}
export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}
export interface AxiosPromise extends Promise<AxiosResponse> {}
export interface AxiosRequestConfig {
  responseType?: XMLHttpRequestResponseType
}
