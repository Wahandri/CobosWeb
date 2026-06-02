import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import ContactForm from "../../components/ContactForm/ContactForm";
import { company, contactLinks } from "../../data/company";
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle } from "lucide-react";
import styles from "./page.module.css";

export const metadata = {
    title: "Contactar | Tarimas Cobos - Presupuesto Sin Compromiso",
    description: "Contacta con Tarimas Cobos para tu instalación de suelo. Llámanos o escríbenos para recibir asesoramiento y presupuesto gratuito.",
};

const contactInfo = [
    {
        icon: Phone,
        title: "Teléfono",
        value: "+34 " + company.phoneFormatted,
        link: contactLinks.phone
    },
    {
        icon: Mail,
        title: "Email",
        value: company.email,
        link: contactLinks.email
    },
    {
        icon: MessageCircle,
        title: "WhatsApp",
        value: "+34 " + company.phoneFormatted,
        link: contactLinks.whatsapp
    },
    {
        icon: MapPin,
        title: "Ubicación",
        value: company.address.city + " y provincia",
        link: null
    }
];

export default function ContactPage() {
    return (
        <div className={styles.page}>
            <Hero
                title="Contacta con Nosotros"
                subtitle="Te respondemos en menos de 24 horas. Presupuesto sin compromiso y precio cerrado."
                image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
                ctaText="Llamar Ahora"
                ctaLink={contactLinks.phone}
            />

            <Section className="bg-light">
                <Container>
                    <div className={styles.quickContact}>
                        <div className={styles.quickContactItem}>
                            <CheckCircle size={24} color="var(--color-primary)" />
                            <span>Respuesta en menos de 24h</span>
                        </div>
                        <div className={styles.quickContactItem}>
                            <CheckCircle size={24} color="var(--color-primary)" />
                            <span>Presupuesto detallado y cerrado</span>
                        </div>
                        <div className={styles.quickContactItem}>
                            <CheckCircle size={24} color="var(--color-primary)" />
                            <span>Sin compromiso</span>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-white">
                <Container>
                    <div className={styles.grid}>
                        <div className={styles.infoSection}>
                            <h2>¿En qué podemos ayudarte?</h2>
                            <p className={styles.introText}>
                                Cuéntanos tu proyecto y te asesoraremos sobre la mejor solución para tu hogar o negocio. Sin compromiso, te ayudamos a encontrar el suelo perfecto.
                            </p>

                            <div className={styles.contactList}>
                                {contactInfo.map((item, index) => (
                                    <div key={index} className={styles.contactItem}>
                                        <div className={styles.contactIcon}>
                                            <item.icon size={22} color="var(--color-primary)" />
                                        </div>
                                        <div className={styles.contactContent}>
                                            <h3>{item.title}</h3>
                                            {item.link ? (
                                                <a href={item.link} className={styles.contactValue}>
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <span className={styles.contactValue}>{item.value}</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.openingHours}>
                                <div className={styles.openingIcon}>
                                    <Clock size={22} color="var(--color-primary)" />
                                </div>
                                <div>
                                    <h3>Horario de Atención</h3>
                                    <p>{company.openingHours}</p>
                                </div>
                            </div>

                            <a
                                href={contactLinks.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.whatsappBtn}
                            >
                                <MessageCircle size={20} />
                                <span>Chatear por WhatsApp</span>
                            </a>
                        </div>

                        <div className={styles.formSection}>
                            <div className={styles.formHeader}>
                                <h2>Solicita tu Presupuesto</h2>
                                <p>Rellena el formulario y te contactaremos lo antes posible</p>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-light">
                <Container>
                    <div className={styles.serviceAreas}>
                        <h2>Zonas de Actuación</h2>
                        <p>Trabajamos en Málaga capital y toda la provincia</p>
                        <div className={styles.areasGrid}>
                            <div className={styles.areaColumn}>
                                <h4>Costa del Sol</h4>
                                <ul>
                                    <li>Málaga capital</li>
                                    <li>Marbella</li>
                                    <li>Estepona</li>
                                    <li>Torremolinos</li>
                                    <li>Benalmádena</li>
                                    <li>Fuengirola</li>
                                </ul>
                            </div>
                            <div className={styles.areaColumn}>
                                <h4>Axarquía</h4>
                                <ul>
                                    <li>Torrox</li>
                                    <li>Nerja</li>
                                    <li>Vélez-Málaga</li>
                                    <li>Rincon de la Victoria</li>
                                </ul>
                            </div>
                            <div className={styles.areaColumn}>
                                <h4>Interior</h4>
                                <ul>
                                    <li>Antequera</li>
                                    <li>Ronda</li>
                                    <li>Alhaurín de la Torre</li>
                                    <li>Coín</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}