import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import ContactForm from "../../components/ContactForm/ContactForm";
import { company, contactLinks } from "../../data/company";
import { MapPin, Phone, Mail } from "lucide-react";
import styles from "./page.module.css";

export const metadata = {
    title: "Contactar | Tarimas Cobos - Presupuesto Sin Compromiso",
    description: "Contacta con Tarimas Cobos para tu instalación de suelo. Llámanos o escríbenos para recibir asesoramiento y presupuesto gratuito.",
};

export default function ContactPage() {
    return (
        <div className={styles.page}>
            <Hero
                title="Contacto"
                subtitle="Estamos aquí para ayudarte. Cuéntanos tu proyecto."
                image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
                ctaText="Llamar Ahora"
                ctaLink={contactLinks.phone}
            />

            <Section className="bg-white">
                <Container>
                    <div className={styles.grid}>
                        <div className={styles.infoSection}>
                            <h2>Información de Contacto</h2>
                            <p>
                                Si tienes alguna duda o quieres solicitar un presupuesto, no dudes en contactarnos. Te responderemos lo antes posible.
                            </p>

                            <div className={styles.contactList}>
                                <div className={styles.contactItem}>
                                    <div className={styles.contactItemHeader}>
                                        <MapPin size={20} color="var(--color-primary)" />
                                        <h3>Dirección</h3>
                                    </div>
                                    <p className={styles.contactItemP}>{company.address.street}<br />{company.address.zip} {company.address.city}, {company.address.country}</p>
                                </div>

                                <div className={styles.contactItem}>
                                    <div className={styles.contactItemHeader}>
                                        <Phone size={20} color="var(--color-primary)" />
                                        <h3>Teléfono</h3>
                                    </div>
                                    <p className={styles.contactItemP}>
                                        <a href={contactLinks.phone}>+34 {company.phoneFormatted}</a>
                                    </p>
                                </div>

                                <div className={styles.contactItem}>
                                    <div className={styles.contactItemHeader}>
                                        <Mail size={20} color="var(--color-primary)" />
                                        <h3>Email</h3>
                                    </div>
                                    <p className={styles.contactItemP}>
                                        <a href={contactLinks.email}>{company.email}</a>
                                    </p>
                                </div>

                                <div className={styles.whatsappSection}>
                                    <p className={styles.openingHours}>
                                        {company.openingHours}
                                    </p>
                                    <a
                                        href={contactLinks.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`btn ${styles.whatsappBtn}`}
                                    >
                                        Chat en WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.formSection}>
                            <h2>Envíanos un mensaje</h2>
                            <ContactForm />
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
