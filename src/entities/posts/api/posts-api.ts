import { Posts } from '@/entities/posts'
import { axiosNotAuthorized, axiosWithAuth } from '@/shared/api/interceptors'
import { AxiosResponse } from 'axios'

import { CreatePostRequest } from '../model/types/posts-api.types'

export class PostsApi {
  async createPost({ isDraft, formData, description }: CreatePostRequest) {
    formData.append('isDraft', isDraft.toString()) // Добавляем информацию о том, является ли пост черновиком
    formData.append('description', description)

    return await axiosWithAuth
      .post<null, AxiosResponse<{ id: string }>>('posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => {
        return res.data
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
