import { PostItem, Posts } from '@/entities/posts'
import { PostDto, PublicPost } from '@/entities/posts/model/types/posts.types'
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

  //TODO - добавить получение постов юзера по его id
  async getUserPosts(userId: string = '33'): Promise<PublicPost[]> {
    return new Promise<PostDto[]>(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: 19,
            createdAt: '2024-12-18T13:04:54.610Z',
            description: 'big data',
            avatarId: null,
            aboutMe: 'I am a software developer.',
            username: 'stasfilippov18',
            postImages: [
              {
                id: 29,
                url: 'https://incubatogramdata.storage.yandexcloud.net/content/users/33/post_photos/173452709406633_image.png',
                fileId: '"f9b9ad018daba2a0be4b809e0278a47d"',
                order: 1,
              },
            ],
            comments: [],
          },
        ])
      }, 2000)
    }).then(res => {
      return res.map(post => ({
        id: post.id,
        createdAt: post.createdAt,
        description: post.description,
        postImages: post.postImages,
        comments: post.comments,
      }))
    })
  }
}

const postsApi = new PostsApi()

export default postsApi
