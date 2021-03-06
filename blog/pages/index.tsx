import type { InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'

export async function getServerSideProps() {
  /* host.docker.internal = localhost */
  const res = await fetch('http://host.docker.internal:8080/api/posts');
  const json = await res.json() as APIResponse;

  return { props: { data: json.data } };
}

const Home = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <ul>
          {data.map(({ id, title }) => (
            <li key={id}>
              <a href={`post/${id}`}>{title}</a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default Home
