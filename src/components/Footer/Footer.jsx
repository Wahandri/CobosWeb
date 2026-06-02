import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { company, contactLinks } from '../../data/company';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div>
                        <div className={styles.logoWrapper}>
                            <Image
                                src="/logoCobos.png"
                                alt={company.name}
                                width={200}
                                height={70}
                                style={{ objectFit: 'contain', marginBottom: '1rem' }}
                            />
                        </div>
                        <p className={styles.text}>
                            Especialistas en instalación de suelos, tarimas y parquet en {company.address.city}.
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
                        <div className={styles.contactItem}>
                            <MapPin size={16} color="var(--color-primary)" />
                            <p className={styles.text}>{company.address.city}, {company.address.province}</p>
                        </div>
                        <div className={styles.contactItem}>
                            <Mail size={16} color="var(--color-primary)" />
                            <p className={styles.text}>{company.email}</p>
                        </div>
                        <div className={styles.contactItem}>
                            <Phone size={16} color="var(--color-primary)" />
                            <p className={styles.text}>+34 {company.phoneFormatted}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} {company.name}. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
