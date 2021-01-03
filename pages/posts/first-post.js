import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import style from './first-post.module.sass'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <h1 className={style.hoe}>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
