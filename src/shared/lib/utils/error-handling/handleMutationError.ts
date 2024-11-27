import { toast } from '@/shared/ui/toast/use-toast'
import { AxiosError } from 'axios'

export const handleMutationError = (error: AxiosError) => {
  if (error) {
    toast({
      description: error.message,
      title: 'error',
      variant: 'destructive',
    })
  }
}
