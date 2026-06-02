'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './BeforeAfterSlider.module.css';

export default function BeforeAfterSlider({ beforeImage, afterImage, alt }) {
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleMouseMove = (e) => {
        const container = e.currentTarget;
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        setSliderPosition(Math.max(0, Math.min(100, x)));
    };

    return (
        <div
            className={styles.container}
            onMouseMove={handleMouseMove}
        >
            <div className={styles.imageWrapper}>
                <Image
                    src={afterImage}
                    alt={`${alt} - Después`}
                    fill
                    className={styles.imageAfter}
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                    className={styles.imageBefore}
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <Image
                        src={beforeImage}
                        alt={`${alt} - Antes`}
                        fill
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
                <div
                    className={styles.slider}
                    style={{ left: `${sliderPosition}%` }}
                >
                    <div className={styles.sliderLine}></div>
                    <div className={styles.sliderHandle}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8 5L3 12L8 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 5L21 12L16 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className={styles.labels}>
                <span className={styles.labelBefore}>Antes</span>
                <span className={styles.labelAfter}>Después</span>
            </div>
        </div>
    );
}