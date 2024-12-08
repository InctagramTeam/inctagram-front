import { Posts } from '@/entities/posts'
import { axiosNotAuthorized, axiosWithAuth } from '@/shared/api/interceptors'
import { AxiosResponse } from 'axios'

export class PostsApi {
  async createPost(formData: FormData) {
    formData.append('isDraft', 'false') // Добавляем информацию о том, является ли пост черновиком
    formData.append('description', '123')

    return await axiosWithAuth
      .post<null, AxiosResponse<{ id: string }>>('posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => {
        console.log(res.data)

        return res.data
      })
      .catch(error => {
        console.log(error.response.data, 'error')
      })
  }
  async getPublicPosts(page: number = 1) {
    return await axiosNotAuthorized
      .get<null, AxiosResponse<Posts>, string>('posts/public', {
        params: {
          page,
        },
      })
      .then(res => {
        // console.log(res.data)

        return res.data
      })
  }
}

const profileApi = new PostsApi()

export default profileApi
