import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts - ig.news</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>12 de Março de 2021</time>
            <strong>Lorem ipsum</strong>
            <p>In this guide, you will lear how to create Monorepo to manage multiple packges with a shared budil.</p>
          </a>
          <a href='#'>
            <time>12 de Março de 2021</time>
            <strong>Lorem ipsum</strong>
            <p>In this guide, you will lear how to create Monorepo to manage multiple packges with a shared budil.</p>
          </a>
          <a href='#'>
            <time>12 de Março de 2021</time>
            <strong>Lorem ipsum</strong>
            <p>In this guide, you will lear how to create Monorepo to manage multiple packges with a shared budil.</p>
          </a>
        </div>
      </main>
    </>
  );
}