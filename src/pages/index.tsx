import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { fetchPosts } from '@/utils/api';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <main>
        <h1>Qiita</h1>
        <button onClick={fetchPosts}>aaa</button>
      </main>
    </>
  );
}
