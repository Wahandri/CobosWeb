import { Phone, Ruler, FileText, Hammer, Check } from 'lucide-react';
import styles from './ProcessSteps.module.css';

const steps = [
    {
        icon: Phone,
        title: "Contacto",
        description: "Llámanos o rellena el formulario. Te respondemos en menos de 24h."
    },
    {
        icon: Ruler,
        title: "Visita Técnica",
        description: "Nos desplazamos a tu vivienda, tomamos medidas y te asesoramos."
    },
    {
        icon: FileText,
        title: "Presupuesto",
        description: "Recibe un presupuesto detallado y cerrado sin letra pequeña."
    },
    {
        icon: Hammer,
        title: "Instalación",
        description: "Equipo profesional ejecuta la obra con limpieza y puntualidad."
    },
    {
        icon: Check,
        title: "Garantía",
        description: "2 años de garantía en instalación. Satisfacción garantizada."
    }
];

export default function ProcessSteps() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2>¿Cómo Trabajamos?</h2>
                    <p>Un proceso claro y transparente para tu tranquilidad</p>
                </div>
                <div className={styles.stepsGrid}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.stepCard}>
                            <div className={styles.stepNumber}>{index + 1}</div>
                            <div className={styles.iconWrapper}>
                                <step.icon size={28} color="var(--color-primary)" />
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}