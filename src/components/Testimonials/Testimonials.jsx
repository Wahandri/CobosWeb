import Image from 'next/image';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import styles from './Testimonials.module.css';

export default function Testimonials() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Lo Que Dicen Nuestros Clientes</h2>
                    <p>Más de 780 familias confían en Tarimas Cobos</p>
                </div>
                <div className={styles.testimonialsGrid}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className={styles.card}>
                            <div className={styles.rating}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="var(--color-primary)" color="var(--color-primary)" />
                                ))}
                            </div>
                            <p className={styles.text}>&ldquo;{testimonial.text}&rdquo;</p>
                            <div className={styles.author}>
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={50}
                                    height={50}
                                    className={styles.avatar}
                                />
                                <div className={styles.authorInfo}>
                                    <span className={styles.name}>{testimonial.name}</span>
                                    <span className={styles.location}>{testimonial.location}</span>
                                </div>
                            </div>
                            <span className={styles.service}>{testimonial.service}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}