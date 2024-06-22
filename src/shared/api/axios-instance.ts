import axios from 'axios'

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API, // https://app.incubatogram.org/api/v1
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})
