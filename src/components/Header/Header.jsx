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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

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

                <button
                    className={styles.hamburger}
                    onClick={toggleMenu}
                    aria-label="Menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></span>
                </button>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <Link href="/" className={`${styles.link} ${pathname === '/' ? styles.active : ''}`} onClick={closeMenu}>Inicio</Link>
                    <Link href="/servicios" className={`${styles.link} ${pathname === '/servicios' ? styles.active : ''}`} onClick={closeMenu}>Servicios</Link>
                    <Link href="/proyectos" className={`${styles.link} ${pathname === '/proyectos' ? styles.active : ''}`} onClick={closeMenu}>Proyectos</Link>
                    <Link href="/sobre-nosotros" className={`${styles.link} ${pathname === '/sobre-nosotros' ? styles.active : ''}`} onClick={closeMenu}>Nosotros</Link>
                    <Link href="/contacto" className="btn btn-primary" onClick={closeMenu}>Pedir Presupuesto</Link>
                </nav>
            </div>
        </header>
    );
}
