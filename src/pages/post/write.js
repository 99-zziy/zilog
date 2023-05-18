import Layout from '@/components/Layout'
import Link from 'next/link'
import { useState, useRef } from 'react'

export default function Write() {
  const [showLink, setShowLink] = useState(false)
  const idRef = useRef()
  const titleRef = useRef()
  const contentRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = idRef.current.value
    const title = titleRef.current.value
    const content = contentRef.current.value

    if (id && title && content) {
      fetch('/api/post/write', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, title, content }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json()
          }
          throw Error('Fetch error')
        })
        .then((data) => {
          setShowLink(true)
          alert(data.message)
        })
        .catch((error) => alert(error))
    }
  }

  return (
    <Layout>
      <h1>Write</h1>
      <form onSubmit={handleSubmit}>
        <input
          type={'text'}
          name="title"
          placeholder="id를 입력해주세요."
          required
          ref={idRef}
        />
        <br />
        <input
          type={'text'}
          name="title"
          placeholder="제목을 입력해주세요."
          required
          ref={titleRef}
        />
        <br />
        <textarea
          type={'text'}
          name="content"
          placeholder="내용을 입력해주세요."
          required
          ref={contentRef}
        />
        <input type="submit" value="작성" />
      </form>
      {showLink && (
        <Link href={`/posts/${idRef.current.value}`}>
          <a>작성한 글 보러가기</a>
        </Link>
      )}
    </Layout>
  )
}
