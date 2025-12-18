import Container from "../../../components/Container/Container";
import Section from "../../../components/Section/Section";

export const metadata = {
    title: "Política de Privacidad | Tarimas Cobos",
};

export default function PrivacidadPage() {
    return (
        <Section>
            <Container>
                <h1>Política de Privacidad</h1>
                <p>En Tarimas Cobos nos tomamos muy en serio la privacidad de tus datos. A continuación te explicamos cómo tratamos la información personal que nos facilitas.</p>

                <h3>1. Responsable del tratamiento</h3>
                <p>
                    Identidad: Tarimas Cobos<br />
                    Dirección: [Dirección]<br />
                    Email: [Email]
                </p>

                <h3>2. Finalidad del tratamiento</h3>
                <p>Tratamos la información que nos facilitan las personas interesadas con el fin de gestionar el envío de la información que nos soliciten y facilitar a los interesados ofertas de productos y servicios de su interés.</p>

                <h3>3. Legitimación</h3>
                <p>La base legal para el tratamiento de sus datos es la ejecución de la solicitud de información o presupuesto realizada por el usuario.</p>
            </Container>
        </Section>
    );
}
