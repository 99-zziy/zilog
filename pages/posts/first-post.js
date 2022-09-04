import Head from 'next/head'
import Layout from '../../components/Layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>첫번째 글</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <h1>First Post</h1>
    </Layout>
  )
}
