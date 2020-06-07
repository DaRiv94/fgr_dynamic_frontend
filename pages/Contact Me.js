import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout >

    
    <div className="container">
      <Head>
        <title>MY Contact Me page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          The Contact Me Page 
        </h1>
      </main>


    </div>
    </Layout>
  )
}
