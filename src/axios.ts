import { AxiosInstance } from './types/init'
import Axios from './croe/Axios'
import { extend } from './helpers/util'

function creatInstance(): AxiosInstance {
  const context = new Axios()
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)
  return instance as AxiosInstance
}

const axios = creatInstance()

export default axios
