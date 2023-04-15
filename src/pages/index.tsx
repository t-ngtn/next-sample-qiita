import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { fetchPosts } from '@/utils/api';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <title>Qiita Sample</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <main>
        <h1>Qiita</h1>
        <button onClick={fetchPosts}>aaa</button>
      </main>
    </>
  );
}
