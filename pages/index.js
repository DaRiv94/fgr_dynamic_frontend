import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout home>

    
    <div className="container">
      <Head>
        <title>MY Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          The Index Page
        </h1>
      </main>


    </div>
    </Layout>
  )
}
