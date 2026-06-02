import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import BeforeAfterSlider from "../../components/BeforeAfterSlider/BeforeAfterSlider";
import CTABox from "../../components/CTABox/CTABox";
import { projects, projectCategories } from "../../data/projects";
import styles from "./page.module.css";

export const metadata = {
    title: "Proyectos | Tarimas Cobos - Instalación de Suelos en Málaga",
    description: "Descubre nuestros trabajos de instalación de suelos y tarimas en Málaga. Fotos reales de proyectos antes y después.",
};

export default function ProjectsPage() {
    const featuredProject = projects[0];

    return (
        <div className={styles.page}>
            <Hero
                title="Nuestros Proyectos"
                subtitle="Más de 850 proyectos completados en Málaga y provincia. Resultados reales que hablan por sí mismos."
                image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            />

            <Section className="bg-light">
                <Container>
                    <div className={styles.header}>
                        <h2>Proyectos Destacados</h2>
                        <p>Cada proyecto es único. Consulta nuestros trabajos más recientes</p>
                    </div>

                    <div className={styles.featuredProject}>
                        <div className={styles.featuredLabel}>
                            <span>✨ Proyecto destacado</span>
                        </div>
                        <div className={styles.featuredContent}>
                            <div className={styles.featuredSlider}>
                                <BeforeAfterSlider
                                    beforeImage={featuredProject.beforeImage}
                                    afterImage={featuredProject.image}
                                    alt={featuredProject.title}
                                />
                            </div>
                            <div className={styles.featuredInfo}>
                                <span className={styles.category}>{featuredProject.category.replace('-', ' ')}</span>
                                <h3>{featuredProject.title}</h3>
                                <p>{featuredProject.description}</p>
                                <div className={styles.metaGrid}>
                                    <div className={styles.metaItem}>
                                        <span className={styles.metaLabel}>Ubicación</span>
                                        <span className={styles.metaValue}>{featuredProject.location}</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <span className={styles.metaLabel}>Superficie</span>
                                        <span className={styles.metaValue}>{featuredProject.area}</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <span className={styles.metaLabel}>Duración</span>
                                        <span className={styles.metaValue}>{featuredProject.duration}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-white">
                <Container>
                    <div className={styles.header}>
                        <h2>Más Proyectos</h2>
                        <p>Explora nuestra galería de trabajos realizados</p>
                    </div>
                    <div className={styles.categoriesFilter}>
                        {projectCategories.map(cat => (
                            <span key={cat.id} className={styles.categoryBtn}>
                                {cat.label}
                            </span>
                        ))}
                    </div>
                    <div className={styles.projectsGrid}>
                        {projects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </Container>
            </Section>

            <CTABox
                title="¿Tienes un proyecto en mente?"
                text="Cuéntanos tu idea y te ayudamos a hacerla realidad. Presupuesto sin compromiso."
                buttonText="Contactar Ahora"
                buttonLink="/contacto"
            />
        </div>
    );
}