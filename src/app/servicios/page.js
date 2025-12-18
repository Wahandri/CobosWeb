import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import CTABox from "../../components/CTABox/CTABox";
import { services } from "../../data/services";

export const metadata = {
    title: "Servicios de Instalación de Suelos | Tarimas Cobos Málaga",
    description: "Ofrecemos instalación de tarimas flotantes, suelos vinílicos, rodapiés y restauración de parquet. Servicio profesional en Málaga y provincia.",
};

export default function ServicesPage() {
    return (
        <>
            <Hero
                title="Nuestros Servicios"
                subtitle="Soluciones profesionales para cada necesidad. Calidad y garantía aseguradas."
                image="/services-hero.jpg"
            />

            <Section className="bg-white">
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
