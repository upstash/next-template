import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto w-full max-w-3xl space-y-4 py-16">
        <h1 className="text-center text-4xl font-bold">
          Welcome to <span className="text-emerald-400">next-template</span>
        </h1>

        <p className="text-center">This is a template for a Next.js example.</p>

        <form>
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="checkbox" />
          </div>
          <div>
            <input type="radio" />
          </div>
        </form>
      </main>
    </>
  );
};

export default Home;
