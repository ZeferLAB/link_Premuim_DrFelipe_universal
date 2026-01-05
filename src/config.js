export const config = {
    theme: {
        colors: {
            background: {
                from: '#0F172A',
                to: '#1E293B',
            },
            text: {
                primary: '#F8FAFC',
                secondary: '#94A3B8',
                accent: '#D4AF37',
            },
            status: {
                success: '#10B981',
            }
        }
    },
    profile: {
        name: "Dr. Fellipe Barbosa",
        role: "Cirurgião Plástico",
        crm: "CRM 19704 / RQE 12419",
        clinic: "QUANTUM/MORPHEUS",
        description: [
            "Excelência técnica. Verdade clínica. Cuidado real.",
            "Resultados são consequência, não promessa.",
            "Vamos juntos?"
        ],
        avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
        socials: [
            { id: 'instagram', icon: 'Instagram', url: 'https://instagram.com/drfellipebarbosa' },
            { id: 'linkedin', icon: 'Linkedin', url: 'https://linkedin.com/in/drfellipebarbosa' }
        ]
    },
    items: [
        {
            id: 'agendar',
            type: 'primary',
            label: "Agendar Consulta",
            sublabel: "Atendimento Vip via WhatsApp",
            icon: "MessageCircle",
            url: "https://wa.me/5511999999999"
        },
        {
            id: 'resultados',
            type: 'square',
            label: "Resultados",
            sublabel: "Antes e Depois",
            icon: "ImageIcon",
            url: "#resultados"
        },
        {
            id: 'clinica',
            type: 'square',
            label: "A Clínica",
            sublabel: "Conheça o espaço",
            icon: "MapPin",
            url: "#clinica"
        },
        {
            id: 'procedimentos',
            type: 'card',
            label: "Cirurgias Realizadas",
            sublabel: "Procedimentos Faciais e Corporais",
            icon: "Activity",
            url: "#procedimentos",
            image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=1000"
        },
        {
            id: 'prova_social',
            type: 'review',
            text: "O resultado superou todas as minhas expectativas. A atenção do Dr. Fellipe e da equipe foi impecável do início ao fim.",
            author: "Mariana S.",
            stars: 5
        }
    ],
    footer: {
        text: "© 2024 Dr. Fellipe Barbosa. Todos os direitos reservados."
    }
};
