import Head from 'next/head'

export const MetaNoIndex = ({ title = 'Error' }: { title?: string }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta content={'noindex, nofollow'} name={'robots'} />
    </Head>
  )
}
