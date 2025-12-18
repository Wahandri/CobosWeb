import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div>
                        <div className={styles.logoWrapper}>
                            <Image
                                src="/logoCobos.png"
                                alt="Tarimas Cobos"
                                width={200}
                                height={70}
                                style={{ objectFit: 'contain', marginBottom: '1rem' }}
                            />
                        </div>
                        <p className={styles.text}>
                            Especialistas en instalación de suelos, tarimas y parquet en Málaga.
                        </p>
                    </div>

                    <div>
                        <h4 className={styles.subtitle}>Enlaces</h4>
                        <ul className={styles.list}>
                            <li><Link href="/servicios">Servicios</Link></li>
                            <li><Link href="/proyectos">Proyectos</Link></li>
                            <li><Link href="/sobre-nosotros">Sobre Nosotros</Link></li>
                            <li><Link href="/contacto">Contacto</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={styles.subtitle}>Legal</h4>
                        <ul className={styles.list}>
                            <li><Link href="/legal/aviso-legal">Aviso Legal</Link></li>
                            <li><Link href="/legal/privacidad">Privacidad</Link></li>
                            <li><Link href="/legal/cookies">Cookies</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={styles.subtitle}>Contacto</h4>
                        <p className={styles.text}>Málaga, España</p>
                        <p className={styles.text}>info@tarimascobos.es</p>
                        <p className={styles.text}>+34 600 000 000</p>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Tarimas Cobos. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
