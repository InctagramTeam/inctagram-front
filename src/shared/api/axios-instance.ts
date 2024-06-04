import axios from 'axios'

export const instance = axios.create({
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
})
