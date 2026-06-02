import { MapPin } from 'lucide-react';
import { zones } from '../../data/zones';
import styles from './ZoneList.module.css';

export default function ZoneList() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Zonas de Actuación</h2>
                    <p>Trabajamos en Málaga y toda la provincia</p>
                </div>
                <div className={styles.zonesGrid}>
                    {zones.map((zone) => (
                        <div key={zone.id} className={styles.zoneCard}>
                            <div className={styles.zoneHeader}>
                                <MapPin size={20} color="var(--color-primary)" />
                                <h3>{zone.name}</h3>
                            </div>
                            <div className={styles.districts}>
                                {zone.districts.map((district, index) => (
                                    <span key={index} className={styles.district}>{district}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}