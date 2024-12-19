import styles from '../styles/Home.module.css'; 

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerItem}>
            <a href="tel:+97431181843">Phone Number: +974 3118 1843</a>
          </div>
          <div className={styles.footerItem}>
            <a href="mailto:elbritchgrp@gmail.com">Email: elbritchgrp@gmail.com</a>
          </div>
          <div className={styles.footerItem}>
            <a href="https://www.google.com/maps?q=Ambassador+Street,+Zone+61" target="_blank" rel="noopener noreferrer">
              Address: Ambassador Street, Zone 61
            </a>
          </div>
        </div>
        <div className={styles.footerItem}>
          <p>&copy; 2023 Elbrit Life Sciences Pvt. Ltd.</p>
        </div>
      </footer>
    );
}
