import Link from 'next/link';

export default function Button({ href, onClick, variant = 'primary', children, className = '' }) {
    const baseClass = 'btn';
    const variantClass = `btn-${variant}`;
    const combinedClass = `${baseClass} ${variantClass} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClass}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={combinedClass}>
            {children}
        </button>
    );
}
