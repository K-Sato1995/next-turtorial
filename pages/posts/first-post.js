import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return <Layout>
      <Head>
      <title>First Post</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <h1 className="test">First Post
        <Link href="/">
            <a>Back to home</a>
          </Link>
      </h1>      
        <Image
            src="/images/profile.jpg" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
          />
      
        </Layout>
}


<style jsx>{`
  .test {
    color: red;
  }
`}</style>