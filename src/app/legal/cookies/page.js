import Container from "../../../components/Container/Container";
import Section from "../../../components/Section/Section";

export const metadata = {
    title: "Política de Cookies | Tarimas Cobos",
};

export default function CookiesPage() {
    return (
        <Section>
            <Container>
                <h1>Política de Cookies</h1>
                <p>Esta web utiliza cookies propias y de terceros para ofrecerle una mejor experiencia y servicio. Al navegar o utilizar nuestros servicios el usuario acepta el uso que hacemos de las cookies.</p>

                <h3>¿Qué es una cookie?</h3>
                <p>Una cookie es un pequeño fichero de texto que los sitios web almacenan en su ordenador, teléfono o cualquier otro dispositivo, con información sobre su navegación en dicho sitio web. Las cookies son necesarias para facilitar la navegación y hacerla más amigable, y no dañan su ordenador.</p>

                <h3>Tipos de cookies que utilizamos</h3>
                <ul>
                    <li>Cookies técnicas: Son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan.</li>
                    <li>Cookies de análisis: Son aquellas que permiten al responsable de las mismas, el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas.</li>
                </ul>
            </Container>
        </Section>
    );
}
