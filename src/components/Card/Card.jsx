import * as LucideIcons from 'lucide-react';
import styles from './Card.module.css';

const iconMap = {
    'layer-group': 'Layers',
    'square': 'Square',
    'water': 'Droplets',
    'tree': 'TreeDeciduous',
    'sparkles': 'Sparkles',
    'tools': 'Wrench',
    'star': 'Star',
    'check': 'Check',
    'shield': 'Shield',
    'clock': 'Clock',
    'award': 'Award',
    'users': 'Users',
    'zap': 'Zap'
};

export default function Card({ title, description, icon, image, children, className = '' }) {
    const IconComponent = icon ? LucideIcons[iconMap[icon] || icon] : null;

    return (
        <div className={`${styles.card} ${className}`}>
            {image && (
                <div className={styles.imageWrapper}>
                    <div className={styles.imagePlaceholder} style={{ backgroundImage: `url(${image})` }}></div>
                </div>
            )}
            <div className={styles.content}>
                {icon && IconComponent && (
                    <div className={styles.iconWrapper}>
                        <IconComponent size={28} color="var(--color-primary)" />
                    </div>
                )}
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                {children}
            </div>
        </div>
    );
}