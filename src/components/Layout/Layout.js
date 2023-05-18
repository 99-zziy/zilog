import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import * as S from './Layout.style'

const name = 'zzi'
export const siteTitle = 'Zilog'

export default function Layout({ children, home }) {
  return (
    <S.Container>
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <S.Header>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              height={144}
              width={144}
              alt={name}
              style={{
                borderRadius: '9999px',
              }}
            />
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  height={108}
                  width={108}
                  alt={name}
                  style={{
                    borderRadius: '9999px',
                  }}
                />
              </a>
            </Link>
            <h2>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </S.Header>
      <main>{children}</main>
      {!home && (
        <S.BackToHome>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </S.BackToHome>
      )}
    </S.Container>
  )
}
