import styles from './Hero.module.css';
import Container from '../Container/Container';
import Button from '../Button/Button';

export default function Hero({ title, subtitle, image, ctaText = "Pedir Presupuesto", ctaLink = "/contacto" }) {
    return (
        <div className={styles.hero} style={image ? { backgroundImage: `url(${image})` } : {}}>
            <div className={styles.overlay}></div>
            <Container className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                <div className={styles.actions}>
                    <Button href={ctaLink} variant="primary">{ctaText}</Button>
                    <Button href="/proyectos" variant="outline" className={styles.secondaryBtn}>Ver Proyectos</Button>
                </div>
            </Container>
        </div>
    );
}
