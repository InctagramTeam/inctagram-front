import Head from 'next/head'
import { MetaNoIndex } from '@/shared/lib/seo/meta-no-index'
import { onlyText } from '@/shared/lib/seo/clear-text'
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
          <title itemProp="headline">{title}</title>
          <meta name={'description'} content={onlyText(description, 152)} />
          <meta content={'width=device-width, initial-scale=1'} name={'viewport'} />
          <link href={favicon} rel={'icon'} />
          <link rel="canonical" href={currentUrl} />
          <meta property="og:locale" content="en" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content={currentUrl} />
          <meta property="og:image" content={favicon && favicon} />
          <meta property="og:site_name" content={title} />
          <meta property="og:description" content={onlyText(description, 197)} />
        </Head>
      ) : (
        <MetaNoIndex title={title} />
      )}
    </>
  )
}
