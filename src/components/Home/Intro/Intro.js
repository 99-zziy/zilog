import Link from 'next/link'

import * as S from './Intro.style'

export default function Intro({ allPostsData }) {
  return (
    <>
      <section>
        <S.Description>강지영 입니.. 🐿️</S.Description>
      </section>
      <section>
        <h2>Blog Posts</h2>
        <S.Posts>
          {allPostsData.map(({ id, date, title }) => (
            <S.Post key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <S.DateWrapper>
                <Date dateString={date} />
              </S.DateWrapper>
            </S.Post>
          ))}
        </S.Posts>
      </section>
    </>
  )
}
