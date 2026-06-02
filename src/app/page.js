import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import Container from "../components/Container/Container";
import Card from "../components/Card/Card";
import CTABox from "../components/CTABox/CTABox";
import FAQ from "../components/FAQ/FAQ";
import Button from "../components/Button/Button";
import { services } from "../data/services";
import { Zap, Sparkles, Shield } from "lucide-react";
import styles from "./page.module.css";

export const metadata = {
  title: "Tarimas Cobos | Instalación de Tarimas y Suelos en Málaga",
  description: "Expertos en instalación de tarimas flotantes, suelos laminados, vinílicos y parquet en Málaga. Calidad, rapidez y limpieza garantizadas. Pide tu presupuesto.",
  keywords: "tarimas cobos, instalación tarimas málaga, suelos laminados, parquet málaga, tarima flotante, montadores suelos",
};

export default function Home() {
  const featuredServices = services.slice(0, 3);

  return (
    <div className={styles.page}>
      <Hero
        title="Instalación de Tarimas y Suelos Laminados en Málaga"
        subtitle="Acabados profesionales, rapidez y limpieza. Transformamos tu hogar con los mejores materiales."
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
      />

      <Section className="bg-white">
        <Container>
          <div className={styles.sectionHeader}>
            <h2>Nuestros Servicios Destacados</h2>
            <p>Soluciones integrales para todo tipo de suelos</p>
          </div>
          <div className={styles.servicesGrid}>
            {featuredServices.map(service => (
              <Card
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          <div className={styles.sectionFooter}>
            <Button href="/servicios" variant="outline">Ver todos los servicios</Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-light">
        <Container>
          <div className={styles.sectionHeader}>
            <h2>¿Por qué elegirnos?</h2>
            <p>Compromiso con la calidad y la satisfacción del cliente</p>
          </div>
          <div className={styles.whyUsGrid}>
            <div className={styles.whyUsItem}>
              <div className={styles.iconCircle}>
                <Zap size={28} color="var(--color-primary)" />
              </div>
              <h3>Rapidez</h3>
              <p>Cumplimos los plazos acordados para minimizar las molestias.</p>
            </div>
            <div className={styles.whyUsItem}>
              <div className={styles.iconCircle}>
                <Sparkles size={28} color="var(--color-primary)" />
              </div>
              <h3>Limpieza</h3>
              <p>Dejamos todo impecable tras la instalación. Sin polvo ni escombros.</p>
            </div>
            <div className={styles.whyUsItem}>
              <div className={styles.iconCircle}>
                <Shield size={28} color="var(--color-primary)" />
              </div>
              <h3>Garantía</h3>
              <p>2 años de garantía en instalación y garantía de fabricante en materiales.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className={styles.faqHeader}>
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
    </div>
  );
}