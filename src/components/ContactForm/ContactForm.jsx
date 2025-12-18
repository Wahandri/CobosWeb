'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';
import Button from '../Button/Button';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setStatus('success');
            setFormData({ name: '', phone: '', email: '', message: '' });
        }, 1000);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {status === 'success' && (
                <div className={styles.successMessage}>
                    ¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.
                </div>
            )}

            <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>Nombre *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={styles.input}
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.row}>
                <div className={styles.field}>
                    <label htmlFor="phone" className={styles.label}>Teléfono *</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className={styles.input}
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>Email *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className={styles.input}
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>Mensaje</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className={styles.textarea}
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
            </div>

            <Button type="submit" variant="primary" className={styles.submitBtn}>
                {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
            </Button>
        </form>
    );
}
