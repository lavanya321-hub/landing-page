import Image from 'next/image';
import styles from '../styles/Home.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/hero1.png"  // Path to your image
        alt="Essential Vitamins"
        layout="fill" // Makes the image fill the parent container
        objectFit="cover" // Ensures the image covers the section while maintaining its aspect ratio
      />
      <div className={styles.heroContent}>
        <h1>Essential Vitamins</h1>
        <p>Get Your Vitamins & Minerals</p>
      </div>
    </section>
  );
};

export default HeroSection;
