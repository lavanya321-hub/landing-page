import Image from 'next/image';
import styles from '../styles/Home.module.css'; // Import your styles

export default function Blog() {
  return (
    <section className={styles.blog}>
      <h2>Our Blog</h2>
      <div className={styles.blogContainer}>
        <div className={styles.blogCard} style={{ width: '300px', height: '200px' }}>
          <Image
            src="/7.jpeg"
            alt="Blog Image 1"
            width={300}
            height={200}
            objectFit="cover"
          />
          <div className={styles.content}>
            <p>The Covid-19 Epidemic In 2022 Is Back</p>
          </div>
        </div>
        <div className={styles.blogCard} style={{ width: '350px', height: '300px' }}>
          <Image
            src="/7.jpeg"
            alt="Blog Image 2"
            width={350}
            height={250}
            objectFit="cover"
          />
          <div className={styles.content}>
            <p>The Covid-19 Epidemic In 2022 Is Back</p>
          </div>
        </div>
        <div className={styles.blogCard} style={{ width: '270px', height: '150px' }}>
          <Image
            src="/7.jpeg"
            alt="Blog Image 3"
            width={250}
            height={180}
            objectFit="cover"
          />
          <div className={styles.content}>
            <p>The Covid-19 Epidemic In 2022 Is Back</p>
          </div>
        </div>
        <div className={styles.blogCard} style={{ width: '320px', height: '220px' }}>
          <Image
            src="/8.jpg"
            alt="Blog Image 4"
            width={320}
            height={220}
            objectFit="cover"
          />
          <div className={styles.content}>
            <p>The Covid-19 Epidemic In 2023 Is Back</p>
          </div>
        </div>
        <div className={styles.blogCard} style={{ width: '280px', height: '210px' }}>
          <Image
            src="/8.jpg"
            alt="Blog Image 5"
            width={280}
            height={210}
            objectFit="cover"
          />
          <div className={styles.content}>
            <p>The Covid-19 Epidemic In 2023 Is Back</p>
          </div>
        </div>
        <div className={styles.blogCard} style={{ width: '300px', height: '200px' }}>
          <Image
            src="/8.jpg"
            alt="Blog Image 6"
            width={300}
            height={200}
            objectFit="cover"
          />
          <div className={styles.content}>
            <p>The Covid-19 Epidemic In 2023 Is Back</p>
          </div>
        </div>
        <div className={styles.blogCard} style={{ width: '330px', height: '230px' }}>
          <Image
            src="/8.jpg"
            alt="Blog Image 7"
            width={330}
            height={230}
            objectFit="cover"
          />
          <div className={styles.content}>
            <p>The Covid-19 Epidemic In 2023 Is Back</p>
          </div>
        </div>
        <div className={styles.blogCard} style={{ width: '350px', height: '150px' }}>
          <Image
            src="/8.jpg"
            alt="Blog Image 8"
            width={350}
            height={150}
            objectFit="cover"
          />
          <div className={styles.content}>
            <p>The Covid-19 Epidemic In 2022 Is Back</p>
          </div>
        </div>
      </div>
    </section>
  );
}
