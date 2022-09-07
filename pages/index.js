import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
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

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Home!" />
        <p className="description">Home</p>
        <button onClick={signIn}>Sign in</button>
      </main>

      <Footer />
    </div>
  );
}
