import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useRouter } from "next/router";
import { REVALIDATE_EVERY_MINUTE } from "../const";

export const getStaticProps = (props) => {
  const timestamp = new Date().toISOString();

  console.log("I'll return this timestamp: " + timestamp);

  console.log("I'll return this props: " + JSON.stringify(props));

  console.log(
    "I'll return this REVALIDATE_EVERY_MINUTE: " + REVALIDATE_EVERY_MINUTE
  );

  return {
    props: { ...props, timestamp },
    revalidate: REVALIDATE_EVERY_MINUTE,
  };
};

export default function Home({ timestamp }) {
  const router = useRouter();
  const signIn = async () => {
    await fetch("/api/sign-in", { method: "PUT" }).then((value) => {
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
        <div>{timestamp}</div>
        <Header title="Home!" />
        <p className="description">Home</p>
        <button onClick={signIn}>Sign in</button>
      </main>

      <Footer />
    </div>
  );
}
