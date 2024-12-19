import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Ingredients() {
  return (
    <section className={styles.ingredients}>
      <h3>Better Ingredients</h3>
      <div className={styles.flexContainer}>
        <div className={styles.ingredientCard}>
          <h3>Vitamin C</h3>
          <p>Vitamin C as ascorbic acid</p>
          <Image src="/vitamin-c.jpg" alt="Vitamin C" width={100} height={100} />
          <button className={styles.seeMoreButton}>SEE MORE</button> {/* SEE MORE button */}
        </div>
        <div className={styles.ingredientCard}>
          <h3>Vitamin B3</h3>
          <p>Essential for metabolism and skin health</p>
          <Image src="/vitamin-b3.jpg" alt="Vitamin B3" width={100} height={100} />
          <button className={styles.seeMoreButton}>SEE MORE</button>
        </div>
        <div className={styles.ingredientCard}>
          <h3>Magnesium</h3>
          <p>Supports muscle and nerve function</p>
          <Image src="/magnesium.jpg" alt="Magnesium" width={100} height={100} />
          <button className={styles.seeMoreButton}>SEE MORE</button>
        </div>
        <div className={styles.ingredientCard}>
          <h3>Hyaluronic Acid</h3>
          <p>Hydrates and plumps the skin</p>
          <Image src="/hyaluronic-acid.jpg" alt="Hyaluronic Acid" width={100} height={100} />
          <button className={styles.seeMoreButton}>SEE MORE</button>
        </div>
        <div className={styles.ingredientCard}>
          <h3>Lactobacillus</h3>
          <p>Promotes gut health</p>
          <Image src="/lactobacillus.jpg" alt="Lactobacillus" width={100} height={100} />
          <button className={styles.seeMoreButton}>SEE MORE</button>
        </div>
      </div>
    </section>
  );
}
