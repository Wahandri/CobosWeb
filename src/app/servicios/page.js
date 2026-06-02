import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import CTABox from "../../components/CTABox/CTABox";
import StatsBanner from "../../components/StatsBanner/StatsBanner";
import ProcessSteps from "../../components/ProcessSteps/ProcessSteps";
import { services } from "../../data/services";
import { Check } from "lucide-react";
import styles from "./page.module.css";

export const metadata = {
    title: "Servicios de Instalación de Suelos | Tarimas Cobos Málaga",
    description: "Ofrecemos instalación de tarimas flotantes, suelos vinílicos, rodapiés y restauración de parquet. Servicio profesional en Málaga y provincia.",
};

const serviceDetails = {
    1: {
        title: "Tarima Flotante",
        subtitle: "La solución moderna y práctica para tu hogar",
        description: "La tarima flotante es la opción más popular para reformas por su fácil instalación, amplia variedad de diseños y excelente relación calidad-precio. Nuestro equipo garantiza un acabado perfeito con sistema de clic profesional.",
        features: [
            "Instalación sin obra ni pegamentos",
            "Amplia variedad de acabados y colores",
            "Resistencias AC4 y AC5 para alto tránsito",
            "Compatible con calefacción radiante",
            "Instalación limpia y rápida (1-3 días)",
            "2 años de garantía en la instalación"
        ],
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    },
    2: {
        title: "Suelos Laminados",
        subtitle: "Durabilidad y estética para toda la vida",
        description: "Los suelos laminados ofrecen la apariencia de madera natural con máxima resistencia al desgaste. Ideales para zonas de mucho tránsito como salones, pasillos y oficinas.",
        features: [
            "Resistencia AC5 para alto tránsito",
            "Imitación madera, piedra y cerámica",
            "Fácil mantenimiento y limpieza",
            "Antirayaduras y antimanchas",
            "Instalación flotante o encolada",
            "Aislamiento térmico y acústico"
        ],
        image: "https://images.unsplash.com/photo-1581858726788-75a0f6b7f7f1?w=800&q=80"
    },
    3: {
        title: "Suelos Vinílicos",
        subtitle: "La mejor opción para cocinas y baños",
        description: "Los suelos vinílicos SPC son 100% impermeables, lo que los convierte en la elección perfecta para cocinas, baños y espacios húmedos. Su instalación rápida y fácil mantenimiento los hacen ideales para cualquier hogar.",
        features: [
            "100% impermeable al agua",
            "Antideslizante (certificación R10)",
            "Resistente a impactos y rayaduras",
            "Confortable al caminar",
            "Aislamiento acústico mejorado",
            "Instalación en cualquier habitación"
        ],
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
    },
    4: {
        title: "Parquet Encolado",
        subtitle: "Elegancia tradicional de madera noble",
        description: "El parquet encolado es la opción más elegante y duradera. tablas de madera maciza se pegan directamente al suelo, creando un acabado integrado y cálido que dura generaciones.",
        features: [
            "Madera noble de alta calidad",
            "Acabado artesanal tradicional",
            "Durabilidad de más de 30 años",
            "Se puede restaurar múltiples veces",
            "Valoriza tu propiedad",
            "Ambiente cálido y natural"
        ],
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
    },
    5: {
        title: "Lijado y Barnizado",
        subtitle: "Renueva tu suelo de madera existente",
        description: "Devolvemos la vida a tus suelos de madera con nuestro servicio de lijado y barnizado profesional. Eliminamos arañazos, manchas y desgaste para dejar un acabado como nuevo.",
        features: [
            "Lijado profesional con máquinas industriales",
            "Barnizado al agua ecológico",
            "Acabados: brillo, satinado o mate",
            "Eliminación de arañazos y marcas",
            "Recuperación del color natural",
            "Proceso rápido y sin olores"
        ],
        image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80"
    },
    6: {
        title: "Reparaciones",
        subtitle: "Soluciones para cualquier problema",
        description: "Arreglamos cualquier problema en tu suelo de madera: tablas sueltas, crujidos, daños por agua, deformaciones o golpes. Devolvemos la funcionalidad y estética a tu pavimento.",
        features: [
            "Reparación de tablas dañadas",
            "Eliminación de crujidos",
            "Recuperación de daños por agua",
            "Sustitución de piezas deterioradas",
            "Ajuste de nivelación",
            "Mantenimiento preventivo"
        ],
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
    }
};

export default function ServicesPage() {
    return (
        <div className={styles.page}>
            <Hero
                title="Nuestros Servicios"
                subtitle="Soluciones profesionales para cada tipo de suelo. Calidad, garantía y más de 12 años de experiencia."
                image="https://images.unsplash.com/photo-1581858726788-75a0f6b7f7f1?w=1920&q=80"
            />

            <StatsBanner />

            <Section className="bg-white">
                <Container>
                    {services.map((service, index) => {
                        const detail = serviceDetails[service.id];
                        const isEven = index % 2 === 0;
                        return (
                            <div key={service.id} className={`${styles.serviceBlock} ${isEven ? styles.serviceBlockReverse : ''}`}>
                                <div className={styles.serviceImage}>
                                    <img src={detail.image} alt={detail.title} />
                                </div>
                                <div className={styles.serviceContent}>
                                    <span className={styles.serviceNumber}>0{service.id}</span>
                                    <h2>{detail.title}</h2>
                                    <p className={styles.serviceSubtitle}>{detail.subtitle}</p>
                                    <p className={styles.serviceDescription}>{detail.description}</p>
                                    <ul className={styles.serviceFeatures}>
                                        {detail.features.map((feature, i) => (
                                            <li key={i}>
                                                <Check size={18} color="var(--color-primary)" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </Container>
            </Section>

            <ProcessSteps />

            <CTABox
                title="¿No encuentras lo que buscas?"
                text="Contáctanos y te asesoraremos sobre la mejor solución para tu caso. Presupuesto sin compromiso."
                buttonText="Consultar"
                buttonLink="/contacto"
            />
        </div>
    );
}