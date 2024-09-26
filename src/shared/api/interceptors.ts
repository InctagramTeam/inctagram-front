import authApi from '@/feature/auth/api/auth-api'
import { removeTokensStorage } from '@/feature/auth/model/utils/auth.helper'
import { getStoreLocalStorage } from '@/shared/lib/utils'
import { errorCatch } from '@/shared/lib/utils/error-catch'
import axios, { type CreateAxiosDefaults } from 'axios'

const options: CreateAxiosDefaults = {
  baseURL: process.env.BACKEND_API_URL, //https://app.incubatogram.org/api/v1,
  // т.к c json данными работаем: 'application/json'
  headers: {
    'Content-Type': 'application/json',
  },
  // работаем с серверными куками
  withCredentials: true,
}

/** Если делаем запрос на сервер с авторизацией, то использовать: axiosWithAuth, если нет, то: axiosNotAuthorized (например при логинизации)  */
const axiosNotAuthorized = axios.create(options) // axios без авторизации работает
const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
  const accessToken = getStoreLocalStorage('accessToken')

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

axiosWithAuth.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config

    if (
      (error?.response?.status === 401 ||
        errorCatch(error) === 'jwt expired' ||
        errorCatch(error) === 'jwt must be provided') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        await authApi.getNewTokens()

        return axiosWithAuth.request(originalRequest)
      } catch (error) {
        if (errorCatch(error) === 'jwt expired') {
          removeTokensStorage()
        }
      }
    }

    throw error
  }
)
export { axiosNotAuthorized, axiosWithAuth }
