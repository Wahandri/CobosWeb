'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import { CheckCircle } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle');

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';
        if (!formData.phone.trim()) newErrors.phone = 'El teléfono es obligatorio';
        else if (!/^[0-9+\s-]{9,}$/.test(formData.phone)) newErrors.phone = 'Teléfono no válido';
        if (!formData.email.trim()) newErrors.email = 'El email es obligatorio';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email no válido';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus('submitting');
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
                    <CheckCircle size={24} />
                    <span>¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.</span>
                </div>
            )}

            <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>Nombre *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
            </div>

            <div className={styles.row}>
                <div className={styles.field}>
                    <label htmlFor="phone" className={styles.label}>Teléfono *</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                </div>

                <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>Email *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
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

            <Button type="submit" variant="primary" className={styles.submitBtn} disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
            </Button>
        </form>
    );
}
