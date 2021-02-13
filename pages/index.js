import Head from 'next/head'
import Login from './Login';

export default function Home() {

  return(
    <div>
      <Head>
        <title>Med Check</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Login />

    </div>
  )

}
