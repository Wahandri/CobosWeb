import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import CTABox from "../../components/CTABox/CTABox";
import { services } from "../../data/services";

export const metadata = {
    title: "Servicios | Tarimas Cobos",
    description: "Descubre nuestros servicios de instalación de tarimas, suelos laminados, vinílicos y restauración de parquet.",
};

export default function ServicesPage() {
    return (
        <>
            <Hero
                title="Nuestros Servicios"
                subtitle="Soluciones profesionales para cada necesidad. Calidad y garantía aseguradas."
                image="/services-hero.jpg"
            />

            <Section>
                <Container>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {services.map(service => (
                            <Card
                                key={service.id}
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                            />
                        ))}
                    </div>
                </Container>
            </Section>

            <CTABox
                title="¿No encuentras lo que buscas?"
                text="Contáctanos y te asesoraremos sobre la mejor solución para tu caso."
                buttonText="Consultar"
                buttonLink="/contacto"
            />
        </>
    );
}
