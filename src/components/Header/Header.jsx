'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show/Hide logic
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false); // Scrolling down
            } else {
                setIsVisible(true); // Scrolling up
            }

            // Background logic
            if (currentScrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={`${styles.header} ${isVisible ? styles.visible : styles.hidden} ${isScrolled ? styles.scrolled : ''}`}
        >
            <div className={styles.inner}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/logoCobos.png"
                        alt="Tarimas Cobos"
                        width={200}
                        height={80}
                        className={styles.logoImage}
                        style={{ height: '100%', width: 'auto', objectFit: 'contain' }}
                        priority
                    />
                </Link>

                <nav className={styles.nav}>
                    <Link href="/" className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}>Inicio</Link>
                    <Link href="/servicios" className={`${styles.link} ${pathname === '/servicios' ? styles.active : ''}`}>Servicios</Link>
                    <Link href="/proyectos" className={`${styles.link} ${pathname === '/proyectos' ? styles.active : ''}`}>Proyectos</Link>
                    <Link href="/sobre-nosotros" className={`${styles.link} ${pathname === '/sobre-nosotros' ? styles.active : ''}`}>Nosotros</Link>
                    <Link href="/contacto" className="btn btn-primary">Pedir Presupuesto</Link>
                </nav>
            </div>
        </header>
    );
}
