'use client';

import { MessageCircle } from 'lucide-react';
import { contactLinks } from '../../data/company';
import styles from './WhatsAppFloating.module.css';

export default function WhatsAppFloating() {
    return (
        <a
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle size={28} />
        </a>
    );
}