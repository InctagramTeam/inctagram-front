import { MetaNoIndex, onlyText } from '@/shared/lib'
import Head from 'next/head'
import { useRouter } from 'next/router'

type Props = {
  description?: string
  favicon?: string
  title?: string
}

export default function HeadMeta({
  description = 'Instagram',
  favicon = '/favicon.ico',
  title = 'Next App',
}: Props) {
  const { asPath } = useRouter()

  const currentUrl = `${process.env.APP_URL}${asPath}`

  return (
    <>
      {description ? (
        <Head>
          <title itemProp={'headline'}>{title}</title>
          <meta content={onlyText(description, 152)} name={'description'} />
          <meta content={'width=device-width, initial-scale=1'} name={'viewport'} />
          <link href={favicon} rel={'icon'} />
          <link href={currentUrl} rel={'canonical'} />
          <meta content={'en'} property={'og:locale'} />
          <meta content={title} property={'og:title'} />
          <meta content={currentUrl} property={'og:url'} />
          <meta content={favicon && favicon} property={'og:image'} />
          <meta content={title} property={'og:site_name'} />
          <meta content={onlyText(description, 197)} property={'og:description'} />
        </Head>
      ) : (
        <MetaNoIndex title={title} />
      )}
    </>
  )
}
