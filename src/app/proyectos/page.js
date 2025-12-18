import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import GridGallery from "../../components/GridGallery/GridGallery";
import CTABox from "../../components/CTABox/CTABox";

export const metadata = {
    title: "Proyectos Realizados | Tarimas Cobos",
    description: "Galería de nuestros trabajos de instalación de tarimas y suelos en Málaga.",
};

export default function ProjectsPage() {
    return (
        <>
            <Hero
                title="Nuestros Proyectos"
                subtitle="Una imagen vale más que mil palabras. Descubre la calidad de nuestros acabados."
                image="/projects-hero.jpg"
            />

            <Section>
                <Container>
                    <GridGallery />
                </Container>
            </Section>

            <CTABox
                title="¿Te gusta lo que ves?"
                text="Podemos conseguir el mismo resultado en tu hogar o negocio."
                buttonText="Pedir Presupuesto"
                buttonLink="/contacto"
            />
        </>
    );
}
