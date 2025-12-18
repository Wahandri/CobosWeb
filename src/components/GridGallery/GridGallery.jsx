'use client';

import { useState } from 'react';
import styles from './GridGallery.module.css';
import { projects } from '../../data/projects';
import Card from '../Card/Card';

export default function GridGallery() {
    const [filter, setFilter] = useState('Todos');

    // Extract unique tags
    const allTags = ['Todos', ...new Set(projects.flatMap(p => p.tags))];

    const filteredProjects = filter === 'Todos'
        ? projects
        : projects.filter(p => p.tags.includes(filter));

    return (
        <div className={styles.gallery}>
            <div className={styles.filters}>
                {allTags.map(tag => (
                    <button
                        key={tag}
                        onClick={() => setFilter(tag)}
                        className={`${styles.filterBtn} ${filter === tag ? styles.active : ''}`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div className={styles.grid}>
                {filteredProjects.map(project => (
                    <Card
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        className={styles.projectCard}
                    >
                        <div className={styles.meta}>
                            <span className={styles.location}>📍 {project.location}</span>
                            <div className={styles.tags}>
                                {project.tags.map(tag => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
