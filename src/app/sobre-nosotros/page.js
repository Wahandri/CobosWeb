import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import CTABox from "../../components/CTABox/CTABox";
import StatsBanner from "../../components/StatsBanner/StatsBanner";
import Testimonials from "../../components/Testimonials/Testimonials";
import { Award, Users, Heart, Target } from 'lucide-react';
import styles from "./page.module.css";

export const metadata = {
    title: "Sobre Nosotros | Tarimas Cobos - Expertos en Suelos en Málaga",
    description: "Conoce a Tarimas Cobos, empresa líder en instalación de pavimentos de madera en Málaga con más de 12 años de experiencia.",
};

const values = [
    {
        icon: Award,
        title: "Calidad",
        description: "Solo trabajamos con marcas líderes como Quick-Step, Kronotex, Egger y materiales de primera categoría."
    },
    {
        icon: Users,
        title: "Profesionalidad",
        description: "Nuestro equipo está formado por profesionales en constante actualización y formación continua."
    },
    {
        icon: Target,
        title: "Compromiso",
        description: "Cumplimos plazos y presupuestos sin sorpresas. Precio cerrado desde el principio."
    },
    {
        icon: Heart,
        title: "Cercanía",
        description: "Trato directo y personalizado. Sin intermediarios, tú hablas directamente con quien ejecuta tu obra."
    }
];

const team = [
    {
        name: "Antonio Cobos",
        role: "Fundador y Director Técnico",
        description: "Más de 20 años de experiencia en instalación de pavimentos de madera.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80"
    },
    {
        name: "María López",
        role: "Responsable de Atención al Cliente",
        description: "Tu contacto directo para presupuestos y seguimiento de proyectos.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80"
    },
    {
        name: "Carlos Rodríguez",
        role: "Jefe de Instalación",
        description: "Especialista en acabados de alta gama y restauraciones.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80"
    }
];

export default function AboutPage() {
    return (
        <div className={styles.page}>
            <Hero
                title="Sobre Nosotros"
                subtitle="Más de 12 años transformando hogares en Málaga con suelos de calidad."
                image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            />

            <StatsBanner />

            <Section className="bg-white">
                <Container>
                    <div className={styles.intro}>
                        <div className={styles.introText}>
                            <h2>Nuestra Historia</h2>
                            <p>
                                <strong>Tarimas Cobos</strong> nació en Málaga con la vocación de ofrecer un servicio especializado y de alta calidad en el sector de los pavimentos de madera y laminados. Lo que comenzó como un pequeño negocio familiar ha crecido gracias a la <strong>confianza de nuestros clientes</strong> y a nuestro compromiso inquebrantable con la excelencia.
                            </p>
                            <p>
                                A lo largo de estos años, hemos perfeccionado nuestras técnicas y ampliado nuestro catálogo para ofrecer las últimas tendencias en suelos: desde las tarimas flotantes más resistentes hasta los parquets más exclusivos. Cada proyecto es un reto que abordamos con la misma ilusión y profesionalidad.
                            </p>
                            <p>
                                Somos especialistas en <strong>tarima flotante, suelos laminados, vinílicos SPC, parquet encolado</strong> y restauración de suelos de madera. Trabajamos en viviendas particulares, locales comerciales y comunidades de propietarios en toda la provincia de Málaga.
                            </p>
                        </div>
                        <div className={styles.introImage}>
                            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" alt="Suelo de madera instalado por Tarimas Cobos" />
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-light">
                <Container>
                    <div className={styles.valuesHeader}>
                        <h2>Nuestros Valores</h2>
                        <p>Los principios que guían cada proyecto</p>
                    </div>
                    <div className={styles.valuesGrid}>
                        {values.map((value, index) => (
                            <div key={index} className={styles.valueCard}>
                                <div className={styles.valueIcon}>
                                    <value.icon size={32} color="var(--color-primary)" />
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            <Section className="bg-white">
                <Container>
                    <div className={styles.teamHeader}>
                        <h2>Nuestro Equipo</h2>
                        <p>Profesionales con amplia experiencia a tu servicio</p>
                    </div>
                    <div className={styles.teamGrid}>
                        {team.map((member, index) => (
                            <div key={index} className={styles.teamCard}>
                                <div className={styles.teamImage}>
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <div className={styles.teamInfo}>
                                    <h3>{member.name}</h3>
                                    <span className={styles.teamRole}>{member.role}</span>
                                    <p>{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            <Testimonials />

            <Section className="bg-white">
                <Container>
                    <div className={styles.commitment}>
                        <h2>Nuestro Compromiso</h2>
                        <div className={styles.commitmentGrid}>
                            <div className={styles.commitmentItem}>
                                <span className={styles.commitmentNumber}>850+</span>
                                <span className={styles.commitmentLabel}>Proyectos completados</span>
                            </div>
                            <div className={styles.commitmentItem}>
                                <span className={styles.commitmentNumber}>12+</span>
                                <span className={styles.commitmentLabel}>Años de experiencia</span>
                            </div>
                            <div className={styles.commitmentItem}>
                                <span className={styles.commitmentNumber}>100%</span>
                                <span className={styles.commitmentLabel}>Clientes satisfechos</span>
                            </div>
                            <div className={styles.commitmentItem}>
                                <span className={styles.commitmentNumber}>2</span>
                                <span className={styles.commitmentLabel}>Años de garantía</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <CTABox
                title="¿Quieres conocernos?"
                text="Llámanos o visítanos. Te asesoraremos sin compromiso para encontrar el suelo perfecto."
                buttonText="Contactar Ahora"
                buttonLink="/contacto"
            />
        </div>
    );
}