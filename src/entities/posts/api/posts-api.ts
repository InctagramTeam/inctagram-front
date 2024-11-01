import { Posts } from '@/entities/posts'
import { axiosWithAuth } from '@/shared/api/interceptors'
import { AxiosResponse } from 'axios'

export class PostsApi {
  async getPublicPosts(page: number = 1) {
    console.log('========================================')

    return await axiosWithAuth
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
