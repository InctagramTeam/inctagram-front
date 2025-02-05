import { Posts } from '@/entities/posts'
import { PostRequest, PostType } from '@/entities/posts/model/types/posts.types'
import { axiosNotAuthorized, axiosWithAuth } from '@/shared/api/interceptors'
import { mapDtoToModel } from '@/shared/lib/utils/mapDtoToModel'
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

  async getPublicPostsByUserId(
    userId: number,
    pageParam: number = 1
  ): Promise<{ data: PostType[]; nextOffset: number }> {
    const response = await axiosNotAuthorized
      .get<null, AxiosResponse<PostRequest>, string>(`posts/public/user/${userId}`, {
        params: { page: String(pageParam) },
      })
      .then(res => res.data.items.map(post => mapDtoToModel<PostType, typeof post>(post)))

    return { data: response, nextOffset: pageParam + 1 }
  }
}

const postsApi = new PostsApi()

export default postsApi
