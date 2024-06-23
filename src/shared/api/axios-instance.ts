import axios from 'axios'

export const instance = axios.create({
  baseURL: process.env.BACKEND_API_URL, // https://app.incubatogram.org/api/v1
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})
