import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import ContactForm from "../../components/ContactForm/ContactForm";

export const metadata = {
    title: "Contacto | Tarimas Cobos",
    description: "Pide tu presupuesto sin compromiso. Contacta con nosotros por teléfono, email o formulario.",
};

export default function ContactPage() {
    return (
        <>
            <Hero
                title="Contacto"
                subtitle="Estamos aquí para ayudarte. Cuéntanos tu proyecto."
                image="/contact-hero.jpg"
                ctaText="Llamar Ahora"
                ctaLink="tel:+34600000000"
            />

            <Section>
                <Container>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                        <div>
                            <h2>Información de Contacto</h2>
                            <p>
                                Si tienes alguna duda o quieres solicitar un presupuesto, no dudes en contactarnos. Te responderemos lo antes posible.
                            </p>

                            <div style={{ marginTop: '2rem' }}>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>📍 Dirección</h3>
                                    <p className="text-muted">Calle Ejemplo, 123<br />29000 Málaga, España</p>
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>📞 Teléfono</h3>
                                    <p className="text-muted">
                                        <a href="tel:+34600000000" style={{ color: 'var(--color-primary)' }}>+34 600 000 000</a>
                                    </p>
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>✉️ Email</h3>
                                    <p className="text-muted">
                                        <a href="mailto:info@tarimascobos.es">info@tarimascobos.es</a>
                                    </p>
                                </div>

                                <div style={{ marginTop: '2rem' }}>
                                    <a
                                        href="https://wa.me/34600000000"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn"
                                        style={{ backgroundColor: '#25D366', color: 'white', border: 'none' }}
                                    >
                                        Chat en WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2>Envíanos un mensaje</h2>
                            <ContactForm />
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
