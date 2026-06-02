import { stats } from '../../data/company';
import styles from './StatsBanner.module.css';

export default function StatsBanner() {
    return (
        <section className={styles.statsSection}>
            <div className="container">
                <div className={styles.grid}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.statItem}>
                            <span className={styles.value}>{stat.value}</span>
                            <span className={styles.label}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}