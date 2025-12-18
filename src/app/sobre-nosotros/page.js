import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import CTABox from "../../components/CTABox/CTABox";

export const metadata = {
    title: "Sobre Nosotros | Tarimas Cobos",
    description: "Conoce más sobre nuestra empresa, experiencia y valores.",
};

export default function AboutPage() {
    return (
        <>
            <Hero
                title="Sobre Nosotros"
                subtitle="Más de 15 años de experiencia instalando suelos en Málaga."
                image="/about-hero.jpg"
            />

            <Section>
                <Container>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2>Nuestra Historia</h2>
                        <p>
                            Tarimas Cobos nació con la vocación de ofrecer un servicio especializado y de alta calidad en el sector de los pavimentos de madera y laminados en Málaga. Lo que comenzó como un pequeño negocio familiar, ha crecido gracias a la confianza de nuestros clientes y a nuestro compromiso inquebrantable con la excelencia.
                        </p>
                        <p>
                            A lo largo de estos años, hemos perfeccionado nuestras técnicas y ampliado nuestro catálogo para ofrecer las últimas tendencias en suelos, desde las tarimas flotantes más resistentes hasta los parquets más exclusivos.
                        </p>

                        <h2 style={{ marginTop: '3rem' }}>Nuestros Valores</h2>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Calidad:</strong> Solo trabajamos con marcas líderes y materiales de primera categoría.
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Profesionalidad:</strong> Nuestro equipo está formado y en constante actualización.
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Compromiso:</strong> Cumplimos plazos y presupuestos sin sorpresas.
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Cercanía:</strong> Trato directo y personalizado, sin intermediarios.
                            </li>
                        </ul>
                    </div>
                </Container>
            </Section>

            <CTABox
                title="Confía en profesionales"
                text="Déjanos asesorarte para encontrar el suelo perfecto para ti."
                buttonText="Contactar"
                buttonLink="/contacto"
            />
        </>
    );
}
