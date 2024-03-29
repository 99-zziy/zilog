import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'

const style = css`
  ${emotionReset}

  html,body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1.6;
    font-size: 18px;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem 0;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem 0;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
    display: block;
  }
`

const GlobalStyle = () => {
  return <Global styles={style} />
}

export default GlobalStyle
