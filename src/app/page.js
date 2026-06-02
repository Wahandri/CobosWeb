import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import Container from "../components/Container/Container";
import Card from "../components/Card/Card";
import CTABox from "../components/CTABox/CTABox";
import StatsBanner from "../components/StatsBanner/StatsBanner";
import ProcessSteps from "../components/ProcessSteps/ProcessSteps";
import Testimonials from "../components/Testimonials/Testimonials";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import ZoneList from "../components/ZoneList/ZoneList";
import Button from "../components/Button/Button";
import { services } from "../data/services";
import { projects } from "../data/projects";
import { Zap, Sparkles, Shield, Award, Clock, Users } from "lucide-react";
import styles from "./page.module.css";

export const metadata = {
  title: "Tarimas Cobos | Instalación de Tarimas y Suelos en Málaga",
  description: "Expertos en instalación de tarimas flotantes, suelos laminados, vinílicos y parquet en Málaga. Calidad, rapidez y limpieza garantizadas. Pide tu presupuesto.",
  keywords: "tarimas cobos, instalación tarimas málaga, suelos laminados, parquet málaga, tarima flotante, montadores suelos",
};

export default function Home() {
  const featuredServices = services.slice(0, 6);
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <div className={styles.page}>
      <Hero
        title="Instalación de Tarimas y Suelos en Málaga"
        subtitle="Más de 12 años transformando hogares con acabados profesionales, rapidez y limpieza. Tu suelo perfecto te espera."
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
        ctaText="Pedir Presupuesto Gratis"
      />

      <StatsBanner />

      <Section className="bg-white">
        <Container>
          <div className={styles.sectionHeader}>
            <h2>Nuestros Servicios</h2>
            <p>Soluciones profesionales para todo tipo de suelos</p>
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

      <ProcessSteps />

      <Section className="bg-light">
        <Container>
          <div className={styles.sectionHeader}>
            <h2>Proyectos Destacados</h2>
            <p>Resultados que hablan por sí mismos</p>
          </div>
          <div className={styles.projectsGrid}>
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className={styles.sectionFooter}>
            <Button href="/proyectos" variant="outline">Ver todos los proyectos</Button>
          </div>
        </Container>
      </Section>

      <Testimonials />

      <ZoneList />

      <Section className="bg-white">
        <Container>
          <div className={styles.whyUsSection}>
            <div className={styles.whyUsHeader}>
              <h2>¿Por Qué Elegirnos?</h2>
              <p>Más de 780 clientes satisfechos nos respaldan</p>
            </div>
            <div className={styles.whyUsGrid}>
              <div className={styles.whyUsItem}>
                <div className={styles.iconCircle}>
                  <Zap size={32} color="var(--color-primary)" />
                </div>
                <h3>Rapidez</h3>
                <p>Instalaciones en tiempo récord. La mayoría de proyectos se completan en 1-5 días.</p>
              </div>
              <div className={styles.whyUsItem}>
                <div className={styles.iconCircle}>
                  <Sparkles size={32} color="var(--color-primary)" />
                </div>
                <h3>Limpieza</h3>
                <p>Dejamos todo impecable. Sin polvo, sin escombros. Tu casa tal como la encontraste, pero con nuevo suelo.</p>
              </div>
              <div className={styles.whyUsItem}>
                <div className={styles.iconCircle}>
                  <Shield size={32} color="var(--color-primary)" />
                </div>
                <h3>Garantía</h3>
                <p>2 años de garantía en instalación. Materiales con garantía de fabricante.</p>
              </div>
              <div className={styles.whyUsItem}>
                <div className={styles.iconCircle}>
                  <Award size={32} color="var(--color-primary)" />
                </div>
                <h3>Calidad</h3>
                <p>Trabajamos con las mejores marcas: Quick-Step, Kronotex, Egger, Berry Alloc y más.</p>
              </div>
              <div className={styles.whyUsItem}>
                <div className={styles.iconCircle}>
                  <Clock size={32} color="var(--color-primary)" />
                </div>
                <h3>Puntualidad</h3>
                <p>Cumplimos los plazos acordados. Tu tiempo es importante y lo respetamos.</p>
              </div>
              <div className={styles.whyUsItem}>
                <div className={styles.iconCircle}>
                  <Users size={32} color="var(--color-primary)" />
                </div>
                <h3>Equipo Profesional</h3>
                <p>Profesionales con amplia experiencia y formación continua en nuevos materiales.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTABox
        title="¿Listo para transformar tu hogar?"
        text="Pide tu presupuesto sin compromiso hoy mismo. Sin letra pequeña, precio cerrado."
        buttonText="Contactar Ahora"
        buttonLink="/contacto"
      />
    </div>
  );
}