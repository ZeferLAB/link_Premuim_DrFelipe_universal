export const config = {
    theme: {
        colors: {
            background: {
                from: '#0F172A',
                to: '#1E293B'
            },
            text: {
                primary: '#F8FAFC',
                secondary: '#94A3B8',
                accent: '#D4AF37'
            }
        }
    },
    profile: {
        name: "Dr. Fellipe Barbosa",
        role: "Cirurgião Plástico",
        bio: "Excelência e naturalidade em cada detalhe. Transformando vidas com arte e ciência.",
        avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300", // Imagem placeholder elegante
        verified: true
    },
    links: [
        {
            id: 'scheduling',
            label: 'Agendar Consulta',
            url: 'https://wa.me/5511999999999',
            icon: 'CalendarClock',
            featured: true,
            description: 'Atendimento presencial e online'
        },
        {
            id: 'whatsapp',
            label: 'Falar no WhatsApp',
            url: 'https://wa.me/5511999999999',
            icon: 'MessageCircle',
            featured: false
        },
        {
            id: 'instagram',
            label: 'Instagram',
            url: 'https://instagram.com/drfellipebarbosa',
            icon: 'Instagram',
            featured: false
        },
        {
            id: 'website',
            label: 'Visite meu Site',
            url: 'https://www.drfellipebarbosa.com.br',
            icon: 'Globe',
            featured: false
        }
    ],
    footer: {
        text: "© 2024 Dr. Fellipe Barbosa. CRM 123456"
    }
};
