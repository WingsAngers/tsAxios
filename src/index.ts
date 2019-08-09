import { AxiosRequestConfig } from './types/init'
import xhr from './xhr'
function axios(config: AxiosRequestConfig): void {
  xhr(config)
}

export default axios
