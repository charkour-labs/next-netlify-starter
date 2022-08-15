import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link';


export default function Other() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Other!" />
        <p className="description">
	<Link href="/">Go to /</Link>
          Other
        </p>
      </main>

      <Footer />
    </div>
  )
}
