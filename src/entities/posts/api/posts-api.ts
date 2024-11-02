import { Posts } from '@/entities/posts'
import { axiosNotAuthorized } from '@/shared/api/interceptors'
import { AxiosResponse } from 'axios'

export class PostsApi {
  async getPublicPosts(page: number = 1) {
    return await axiosNotAuthorized
      .get<null, AxiosResponse<Posts>, string>('posts/public', {
        params: {
          page,
        },
      })
      .then(res => {
        console.log(res.data)

        return res.data
      })
  }
}

const profileApi = new PostsApi()

export default profileApi
