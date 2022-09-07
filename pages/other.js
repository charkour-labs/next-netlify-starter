import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function Other() {
  const router = useRouter()
  const signIn = async () => {
    await fetch("/api/sign-in").then((value) => {
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
  };

  const signOut = async () => {
    await fetch("/api/sign-out").then((value) => {
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
  };

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
        <button onClick={signIn}>Sign in</button>
        <br />
        <button onClick={signOut}>Sign out</button>
      </main>

      <Footer />
    </div>
  );
}
