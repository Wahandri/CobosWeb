import styles from './CTABox.module.css';
import Button from '../Button/Button';
import Container from '../Container/Container';

export default function CTABox({ title, text, buttonText, buttonLink }) {
    return (
        <section className={styles.ctaSection}>
            <Container>
                <div className={styles.box}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.text}>{text}</p>
                    </div>
                    <div className={styles.action}>
                        <Button href={buttonLink} variant="secondary" className={styles.btn}>
                            {buttonText}
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
