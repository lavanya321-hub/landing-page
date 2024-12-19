import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
//import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Ingredients from '../components/Ingredients';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eden Pharmacy</title>
        <meta name="description" content="Eden Pharmacy Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={styles.main}>
        <HeroSection />
        <Features />
        <Ingredients />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
