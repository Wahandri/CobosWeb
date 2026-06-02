'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import { CheckCircle, AlertCircle } from 'lucide-react';

const serviceTypes = [
    { value: '', label: 'Selecciona un servicio' },
    { value: 'tarima-flotante', label: 'Tarima Flotante' },
    { value: 'suelo-laminado', label: 'Suelo Laminado' },
    { value: 'suelo-vilinico', label: 'Suelo Vinílico SPC' },
    { value: 'parquet', label: 'Parquet Encolado' },
    { value: 'lijado-barnizado', label: 'Lijado y Barnizado' },
    { value: 'reparaciones', label: 'Reparaciones' },
    { value: 'otro', label: 'Otro' }
];

const zones = [
    { value: '', label: 'Selecciona tu zona' },
    { value: 'malaga-capital', label: 'Málaga Capital' },
    { value: 'marbella', label: 'Marbella' },
    { value: 'estepona', label: 'Estepona' },
    { value: 'torremolinos', label: 'Torremolinos' },
    { value: 'benalmadena', label: 'Benalmádena' },
    { value: 'fuengirola', label: 'Fuengirola' },
    { value: 'torrox', label: 'Torrox' },
    { value: 'nerja', label: 'Nerja' },
    { value: 'velez-malaga', label: 'Vélez-Málaga' },
    { value: 'antequera', label: 'Antequera' },
    { value: 'ronda', label: 'Ronda' },
    { value: 'otra', label: 'Otra zona' }
];

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        zone: '',
        area: '',
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
        if (!formData.service) newErrors.service = 'Selecciona un servicio';
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
            setFormData({
                name: '',
                phone: '',
                email: '',
                service: '',
                zone: '',
                area: '',
                message: ''
            });
        }, 1500);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {status === 'success' && (
                <div className={styles.successMessage}>
                    <CheckCircle size={24} />
                    <div>
                        <strong>¡Mensaje enviado correctamente!</strong>
                        <p>Nos pondremos en contacto contigo en menos de 24 horas.</p>
                    </div>
                </div>
            )}

            {status === 'error' && (
                <div className={styles.errorMessage}>
                    <AlertCircle size={24} />
                    <span>Hubo un error al enviar. Inténtalo de nuevo.</span>
                </div>
            )}

            <div className={styles.row}>
                <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>Nombre completo *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>

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
                        placeholder="+34 600 000 000"
                    />
                    {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                </div>
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
                    placeholder="tu@email.com"
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
            </div>

            <div className={styles.row}>
                <div className={styles.field}>
                    <label htmlFor="service" className={styles.label}>Tipo de servicio *</label>
                    <select
                        id="service"
                        name="service"
                        required
                        className={`${styles.select} ${errors.service ? styles.inputError : ''}`}
                        value={formData.service}
                        onChange={handleChange}
                    >
                        {serviceTypes.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                    {errors.service && <span className={styles.errorText}>{errors.service}</span>}
                </div>

                <div className={styles.field}>
                    <label htmlFor="zone" className={styles.label}>Zona de actuación</label>
                    <select
                        id="zone"
                        name="zone"
                        className={styles.select}
                        value={formData.zone}
                        onChange={handleChange}
                    >
                        {zones.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className={styles.field}>
                <label htmlFor="area" className={styles.label}>Superficie aproximada (m²)</label>
                <input
                    type="text"
                    id="area"
                    name="area"
                    className={styles.input}
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="Ej: 80"
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>Mensaje o descripción del proyecto</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className={styles.textarea}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos más detalles sobre tu proyecto..."
                ></textarea>
            </div>

            <div className={styles.privacyNote}>
                <p>Al enviar este formulario, aceptas nuestra política de privacidad. Tus datos solo se usarán para contactarte.</p>
            </div>

            <Button type="submit" variant="primary" className={styles.submitBtn} disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Enviando...' : 'Enviar Solicitud de Presupuesto'}
            </Button>
        </form>
    );
}