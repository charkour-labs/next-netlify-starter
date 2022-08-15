import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function Other() {
  const router = useRouter();
  React.useEffect(() => {
    const res = (async () => await fetch("/api/group"))().then((value) => {
      console.log(
        { value },
        value.body
          .getReader()
          .read()
          .then((stream) => {
            console.log({ stream: new TextDecoder().decode(stream.value) });
            router.reload();
          })
      );
    });
    console.log({ res });
  }, [router]);

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Other!" />
        <p className="description">
          <Link href="/" passHref={true}>
            <a aria-label="home">To home</a>
          </Link>
          Other
        </p>
      </main>

      <Footer />
    </div>
  );
}
