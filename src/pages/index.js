import Intro from '@/components/Home/Intro/Intro'
import Layout, { siteTitle } from '@/components/Layout/Layout'
import { getSortedPostsData } from '@/lib/posts'
import Head from 'next/head'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Intro allPostsData={allPostsData} />
    </Layout>
  )
}
