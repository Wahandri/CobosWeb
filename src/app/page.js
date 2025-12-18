import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import Container from "../components/Container/Container";
import Card from "../components/Card/Card";
import CTABox from "../components/CTABox/CTABox";
import FAQ from "../components/FAQ/FAQ";
import Button from "../components/Button/Button";
import { services } from "../data/services";

export const metadata = {
  title: "Tarimas Cobos | Instalación de Tarimas y Suelos en Málaga",
  description: "Expertos en instalación de tarimas flotantes, suelos laminados, vinílicos y parquet en Málaga. Calidad, rapidez y limpieza garantizadas. Pide tu presupuesto.",
  keywords: "tarimas cobos, instalación tarimas málaga, suelos laminados, parquet málaga, tarima flotante, montadores suelos",
};

export default function Home() {
  const featuredServices = services.slice(0, 3);

  return (
    <>
      <Hero
        title="Instalación de Tarimas y Suelos Laminados en Málaga"
        subtitle="Acabados profesionales, rapidez y limpieza. Transformamos tu hogar con los mejores materiales."
        image="/hero-placeholder.jpg"
      />

      <Section className="bg-white">
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Nuestros Servicios Destacados</h2>
            <p className="text-muted">Soluciones integrales para todo tipo de suelos</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {featuredServices.map(service => (
              <Card
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Button href="/servicios" variant="outline">Ver todos los servicios</Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-light">
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>¿Por qué elegirnos?</h2>
            <p>Compromiso con la calidad y la satisfacción del cliente</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚡</div>
              <h3>Rapidez</h3>
              <p>Cumplimos los plazos acordados para minimizar las molestias.</p>
            </div>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🧹</div>
              <h3>Limpieza</h3>
              <p>Dejamos todo impecable tras la instalación. Sin polvo ni escombros.</p>
            </div>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛡️</div>
              <h3>Garantía</h3>
              <p>2 años de garantía en instalación y garantía de fabricante en materiales.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Preguntas Frecuentes</h2>
          </div>
          <FAQ />
        </Container>
      </Section>

      <CTABox
        title="¿Listo para renovar tu suelo?"
        text="Pide tu presupuesto sin compromiso hoy mismo."
        buttonText="Contactar Ahora"
        buttonLink="/contacto"
      />
    </>
  );
}
