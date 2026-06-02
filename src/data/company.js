export const company = {
    name: "Tarimas Cobos",
    phone: "+34 600 000 000",
    phoneFormatted: "600 000 000",
    whatsapp: "34600000000",
    email: "info@tarimascobos.es",
    address: {
        street: "Avenida de la Constitución",
        city: "Málaga",
        province: "Málaga",
        country: "España",
        zip: "29000"
    },
    social: {
        whatsapp: "34600000000",
        facebook: "https://facebook.com/tarimascobos",
        instagram: "https://instagram.com/tarimascobos"
    },
    openingHours: "Lunes a Viernes: 9:00 - 19:00\nSábados: 10:00 - 14:00",
    yearsExperience: 12,
    projectsCompleted: 850,
    clientsSatisfied: 780
};

export const contactLinks = {
    phone: `tel:${company.phone}`,
    email: `mailto:${company.email}`,
    whatsapp: `https://wa.me/${company.social.whatsapp}`
};

export const stats = [
    { value: "12+", label: "Años de experiencia" },
    { value: "850+", label: "Proyectos completados" },
    { value: "780+", label: "Clientes satisfechos" },
    { value: "100%", label: "Garantía en acabados" }
];