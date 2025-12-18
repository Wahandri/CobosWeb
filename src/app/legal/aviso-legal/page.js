import Container from "../../../components/Container/Container";
import Section from "../../../components/Section/Section";

export const metadata = {
    title: "Aviso Legal | Tarimas Cobos",
};

export default function AvisoLegalPage() {
    return (
        <Section>
            <Container>
                <h1>Aviso Legal</h1>
                <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), a continuación se exponen los datos identificativos de la empresa.</p>

                <h3>1. Datos identificativos</h3>
                <p>
                    Nombre comercial: Tarimas Cobos<br />
                    Denominación social: [Nombre Razón Social]<br />
                    CIF: [CIF]<br />
                    Domicilio social: [Dirección Completa]<br />
                    Teléfono: [Teléfono]<br />
                    Email: [Email]
                </p>

                <h3>2. Propiedad intelectual</h3>
                <p>El código fuente, los diseños gráficos, las imágenes, las fotografías, los sonidos, las animaciones, el software, los textos, así como la información y los contenidos que se recogen en el presente sitio web están protegidos por la legislación española sobre los derechos de propiedad intelectual e industrial.</p>

                <h3>3. Contenido de la web y enlaces (links)</h3>
                <p>Tarimas Cobos se reserva el derecho a actualizar, modificar o eliminar la información contenida en sus páginas web pudiendo incluso limitar o no permitir el acceso a dicha información a ciertos usuarios.</p>
            </Container>
        </Section>
    );
}
