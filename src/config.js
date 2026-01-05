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

        avatar: "/dr-fellipe-profile.png",
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
            url: "#resultados",
            gallery: [
                "/results/case1.png",
                "/results/case2.png",
                "/results/case3.png",
                "/results/case4.png"
            ]
        },
        {
            id: 'clinica',
            type: 'square',
            label: "A Clínica",
            sublabel: "Conheça o espaço",
            icon: "MapPin",
            url: "#clinica",
            locationData: {
                mapUrl: "https://maps.google.com/maps?q=Afiora+Cl%C3%ADnica+de+Cirurgia+Pl%C3%A1stica+e+Dermatologia&t=&z=15&ie=UTF8&iwloc=&output=embed",
                address: "Alameda das Algarobas, 1006. Caminho das Árvores, Salvador - BA",
                wazeLink: "https://maps.app.goo.gl/bYogZmNwT62GFSTL8",
                instagram: "https://instagram.com/afiora.clinica"
            }
        },
        {
            id: 'procedimentos',
            type: 'card',
            label: "Cirurgias Realizadas",
            sublabel: "Procedimentos Faciais e Corporais",
            icon: "Activity",
            url: "#procedimentos",
            image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=1000"
        }
    ],
    testimonials: [
        { id: 1, text: "O Dr. Fellipe mudou minha autoestima. O resultado ficou incrivelmente natural.", author: "Mariana Silva", stars: 5 },
        { id: 2, text: "Profissionalismo impecável. A equipe toda é muito atenciosa. Recomendo de olhos fechados.", author: "Carla Nunes", stars: 5 },
        { id: 3, text: "A cirurgia foi um sucesso e a recuperação super tranquila. Obrigado por tudo, Dr!", author: "Patricia Costa", stars: 5 },
        { id: 4, text: "Melhor cirurgião que já conheci. Sincero, direto e muito competente.", author: "Fernanda Lima", stars: 5 },
        { id: 5, text: "Fiquei impressionada com o cuidado no pós-operatório. Suporte total.", author: "Beatriz Santos", stars: 5 },
        { id: 6, text: "Realizei meu sonho da rinoplastia e ficou exatamente como eu queria.", author: "Juliana Alves", stars: 5 },
        { id: 7, text: "Excelência define. Do ambiente da clínica ao resultado final.", author: "Roberta Dias", stars: 5 },
        { id: 8, text: "Transmite muita segurança e confiança. Virei fã!", author: "Camila Rocha", stars: 5 },
        { id: 9, text: "Resultado além do esperado. Minha lipoaspiração ficou perfeita.", author: "Ana Paula", stars: 5 },
        { id: 10, text: "O olhar estético do Dr. Fellipe é diferenciado. Muito feliz!", author: "Larissa M.", stars: 5 }
    ],
    aboutMe: {
        title: "Dr. Fellipe Barbosa",
        subtitle: "Membro Titular da Sociedade Brasileira de Cirurgia Plástica (SBCP)",
        image: "/dr-fellipe-about.png",
        text: "Dediquei minha vida a aprimorar a arte da cirurgia plástica, buscando sempre o equilíbrio perfeito entre a ciência médica e a harmonia estética. Acredito que cada paciente é único e merece um planejamento personalizado para alcançar sua melhor versão com naturalidade e segurança.",
        badges: [
            { label: "+15 Anos", sub: "de Experiência" },
            { label: "+2.000", sub: "Cirurgias Realizadas" },
            { label: "SBCP", sub: "Membro Titular" }
        ]
    },
    footer: {
        text: "© 2024 Dr. Fellipe Barbosa. Todos os direitos reservados."
    }
};
