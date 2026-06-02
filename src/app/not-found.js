import Link from 'next/link';
import Button from '../components/Button/Button';
import { company } from '../data/company';

export const metadata = {
    title: `404 - Página no encontrada | ${company.name}`,
    description: "La página que buscas no existe.",
};

export default function NotFound() {
    return (
        <div style={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <h1 style={{ fontSize: '6rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>404</h1>
            <h2 style={{ marginBottom: '1rem' }}>Página no encontrada</h2>
            <p style={{ color: 'var(--color-muted)', marginBottom: '2rem', maxWidth: '400px' }}>
                Lo sentimos, la página que buscas no existe o ha sido movida.
            </p>
            <Button href="/" variant="primary">Volver al inicio</Button>
        </div>
    );
}