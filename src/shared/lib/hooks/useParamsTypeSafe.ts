import { useParams } from 'next/navigation'
import { ZodType, z } from 'zod'

export const useParamsTypeSafe = <T extends ZodType>(schema: T): z.infer<T> => {
  const params = useParams()

  return schema.parse(params)
}
