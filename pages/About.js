import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout >

    
    <div className="container">
      <Head>
        <title>MY About page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          The About Page 
        </h1>
      </main>


    </div>
    </Layout>
  )
}
