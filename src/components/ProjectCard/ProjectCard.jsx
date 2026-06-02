import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Maximize, Clock } from 'lucide-react';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.image}
                />
                <div className={styles.overlay}>
                    <span className={styles.category}>{project.category.replace('-', ' ')}</span>
                </div>
            </div>
            <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.meta}>
                    <span className={styles.metaItem}>
                        <MapPin size={14} />
                        {project.location}
                    </span>
                    <span className={styles.metaItem}>
                        <Maximize size={14} />
                        {project.area}
                    </span>
                    <span className={styles.metaItem}>
                        <Clock size={14} />
                        {project.duration}
                    </span>
                </div>
            </div>
        </div>
    );
}