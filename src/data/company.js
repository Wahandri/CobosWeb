export const company = {
    name: "Tarimas Cobos",
    phone: "+34 600 000 000",
    phoneFormatted: "600 000 000",
    email: "info@tarimascobos.es",
    address: {
        street: "Calle Ejemplo, 123",
        city: "Málaga",
        province: "Málaga",
        country: "España",
        zip: "29000"
    },
    social: {
        whatsapp: "34600000000"
    },
    openingHours: "Lunes a Viernes: 9:00 - 19:00"
};

export const contactLinks = {
    phone: `tel:${company.phone}`,
    email: `mailto:${company.email}`,
    whatsapp: `https://wa.me/${company.social.whatsapp}`
};