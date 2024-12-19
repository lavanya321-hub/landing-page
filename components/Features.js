import Image from 'next/image';
import styles from '../styles/Home.module.css'; 
export default function Features() {
    return (
      <section className={styles.features}>
        <div className={styles.flexContainer}>
          <div className={styles.featureCard}>
          <Image 
            src="/1.jpg"  // Path to your image (local or external)
            alt="Vitamin C" 
            width={150}  // Set the width as needed
            height={150}  // Set the height as needed
          />
            <h3>Clinically Studied</h3>
            <p>Vitamin C as ascorbic acid</p>
          </div>
          <div className={styles.featureCard}>
          <Image 
            src="/2.png"  // Path to your image (local or external)
            alt="Vitamin C" 
            width={150}  // Set the width as needed
            height={150}  // Set the height as needed
          />
            <p>Vegetarian Friendly</p>
            <p>Vitamin C as ascorbic acid</p>
          </div>
          <div className={styles.featureCard}>
          <Image 
            src="/3.jpg"  // Path to your image (local or external)
            alt="Vitamin C" 
            width={150}  // Set the width as needed
            height={150}  // Set the height as needed
          />
            <p>Made in India</p>
            <p>Vitamin C as ascorbic acid</p>
          </div>
          <div className={styles.featureCard}>
          <Image 
            src="/4.jpg"  // Path to your image (local or external)
            alt="Vitamin C" 
            width={150}  // Set the width as needed
            height={150}  // Set the height as needed
          />
            <p>Free Shipping</p>
            <p>Vitamin C as ascorbic acid</p>
          </div>
          <div className={styles.featureCard}>
          <Image 
            src="/5.png"  // Path to your image (local or external)
            alt="Vitamin C" 
            width={150}  // Set the width as needed
            height={150}  // Set the height as needed
          />
            <p>No Risk</p>
            <p>Vitamin C as ascorbic acid</p>
          </div>
          <div className={styles.featureCard}>
          <Image 
            src="/6.jpg"  // Path to your image (local or external)
            alt="Vitamin C" 
            width={150}  // Set the width as needed
            height={150}  // Set the height as needed
          />
            <p>GMO Free</p>
            <p>Vitamin C as ascorbic acid</p>
          </div>
        </div>
      </section>
    );
  }