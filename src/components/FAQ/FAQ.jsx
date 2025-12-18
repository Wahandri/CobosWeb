'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
    {
        question: "¿Cuánto tiempo tarda la instalación?",
        answer: "Depende de los metros cuadrados, pero una vivienda estándar de 80m2 suele estar lista en 2-3 días."
    },
    {
        question: "¿Ofrecéis garantía?",
        answer: "Sí, todos nuestros trabajos tienen garantía de instalación de 2 años, además de la garantía del fabricante del material."
    },
    {
        question: "¿Es necesario vaciar la casa de muebles?",
        answer: "No es imprescindible. Podemos mover los muebles nosotros mismos a medida que avanzamos, aunque esto puede influir ligeramente en el presupuesto."
    },
    {
        question: "¿Trabajáis fuera de Málaga capital?",
        answer: "Sí, trabajamos en toda la provincia de Málaga y zonas limítrofes."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.faq}>
            {faqs.map((item, index) => (
                <div key={index} className={styles.item}>
                    <button
                        className={`${styles.question} ${openIndex === index ? styles.active : ''}`}
                        onClick={() => toggle(index)}
                        aria-expanded={openIndex === index}
                    >
                        {item.question}
                        <span className={styles.icon}>{openIndex === index ? '−' : '+'}</span>
                    </button>
                    <div
                        className={styles.answerWrapper}
                        style={{ maxHeight: openIndex === index ? '200px' : '0' }}
                    >
                        <div className={styles.answer}>{item.answer}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
