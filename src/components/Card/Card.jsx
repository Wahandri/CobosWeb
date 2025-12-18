import styles from './Card.module.css';

export default function Card({ title, description, icon, image, children, className = '' }) {
    return (
        <div className={`${styles.card} ${className}`}>
            {image && (
                <div className={styles.imageWrapper}>
                    {/* Placeholder for image if Next/Image is not used or for simplicity */}
                    <div className={styles.imagePlaceholder} style={{ backgroundImage: `url(${image})` }}></div>
                </div>
            )}
            <div className={styles.content}>
                {icon && <div className={styles.icon}>{/* Render icon based on string name or pass component */}
                    <span className={styles.iconText}>✦</span>
                </div>}
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                {children}
            </div>
        </div>
    );
}
