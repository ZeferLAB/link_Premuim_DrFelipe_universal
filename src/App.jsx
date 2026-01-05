import React, { useEffect, useState } from 'react';
import * as Icons from 'lucide-react';
import { config } from './config';

// Renderiza ícones dinamicamente
const IconHelper = ({ name, size = 20, className }) => {
    const IconComponent = Icons[name];
    if (!IconComponent) return null;
    return <IconComponent size={size} className={className} />;
};

// Componente para renderizar estrelas
const StarRating = ({ count = 5 }) => {
    return (
        <div className="flex gap-1">
            {[...Array(count)].map((_, i) => (
                <Icons.Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
            ))}
        </div>
    );
};

// Sub-componentes para cada tipo de card
const PrimaryCard = ({ item }) => (
    <a href={item.url} target="_blank" rel="noopener noreferrer"
        className="col-span-2 group relative overflow-hidden rounded-3xl p-6 flex items-center justify-between
                bg-gradient-to-r from-[#D4AF37] to-[#B89628] shadow-lg shadow-[#D4AF37]/20
                hover:shadow-xl hover:shadow-[#D4AF37]/30 hover:scale-[1.01] transition-all duration-300">
        <div className="relative z-10 text-slate-900">
            <h3 className="font-bold text-xl">{item.label}</h3>
            <p className="font-medium text-slate-800/80 text-sm mt-1">{item.sublabel}</p>
        </div>
        <div className="relative z-10 bg-white/20 p-3 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors">
            <IconHelper name={item.icon} size={28} className="text-slate-900" />
        </div>
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
    </a>
);

const SquareCard = ({ item }) => (
    <a href={item.url} target="_blank" rel="noopener noreferrer"
        className="col-span-1 aspect-square rounded-3xl p-5 flex flex-col items-center justify-center text-center gap-3
                bg-slate-800/50 backdrop-blur-md border border-slate-700/50 hover:border-[#D4AF37]/50
                hover:bg-slate-800/70 hover:scale-[1.02] transition-all duration-300 group">
        <div className="p-3 rounded-2xl bg-slate-900/50 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300">
            <IconHelper name={item.icon} size={24} />
        </div>
        <div>
            <h3 className="font-semibold text-slate-100 text-sm sm:text-base">{item.label}</h3>
            <p className="text-xs text-slate-400 mt-1 hidden sm:block">{item.sublabel}</p>
        </div>
    </a>
);

const ContentCard = ({ item }) => (
    <a href={item.url} target="_blank" rel="noopener noreferrer"
        className="col-span-2 relative h-32 overflow-hidden rounded-3xl group cursor-pointer border border-slate-700/50">
        <img src={item.image} alt={item.label} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />

        <div className="absolute inset-0 p-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-[#D4AF37] mb-1">
                <IconHelper name={item.icon} size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">{item.sublabel}</span>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:translate-x-1 transition-transform">{item.label}</h3>
        </div>
    </a>
);

const ReviewCard = ({ item }) => (
    <div className="col-span-2 bg-slate-800/30 backdrop-blur-sm rounded-3xl p-6 border border-slate-700/30">
        <div className="flex justify-between items-start mb-3">
            <Icons.Quote size={24} className="text-[#D4AF37]/50 rotate-180" />
            <StarRating count={item.stars} />
        </div>
        <p className="text-slate-300 text-sm italic leading-relaxed mb-4">
            "{item.text}"
        </p>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest text-right">
            — {item.author}
        </p>
    </div>
);

function App() {
    const [loaded, setLoaded] = useState(false);
    const { theme, profile, items, footer } = config;

    useEffect(() => {
        setLoaded(true);
    }, []);

    const renderItem = (item) => {
        switch (item.type) {
            case 'primary': return <PrimaryCard key={item.id} item={item} />;
            case 'square': return <SquareCard key={item.id} item={item} />;
            case 'card': return <ContentCard key={item.id} item={item} />;
            case 'review': return <ReviewCard key={item.id} item={item} />;
            default: return null;
        }
    };

    return (
        <div className="min-h-screen w-full flex justify-center bg-[#0F172A] text-slate-100 font-sans selection:bg-[#D4AF37] selection:text-slate-900">

            {/* Background Radial Topo */}
            <div className="fixed top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/40 via-slate-900 to-[#0F172A] pointer-events-none" />

            <main className={`
        relative w-full max-w-md mx-auto p-6 pb-12
        transition-all duration-1000 ease-out flex flex-col gap-8
        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}>

                {/* Header Clean */}
                <header className="flex flex-col items-center text-center mt-8">
                    <div className="relative mb-6">
                        <div className="absolute inset-0 rounded-full border border-[#D4AF37]/30 scale-110 animate-pulse"></div>
                        <img
                            src={profile.avatar}
                            alt={profile.name}
                            className="w-28 h-28 rounded-full object-cover border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/10"
                        />
                    </div>

                    <h1 className="text-2xl font-bold text-white mb-1">{profile.name}</h1>
                    <p className="text-[#D4AF37] text-xs font-semibold tracking-wider uppercase mb-2">
                        {profile.crm}
                    </p>
                    <p className="text-slate-400 text-xs font-medium uppercase mb-4 tracking-widest">
                        {profile.clinic}
                    </p>

                    <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-4 border border-white/5 w-full max-w-[90%]">
                        {profile.description.map((line, i) => (
                            <p key={i} className={`text-sm ${i === profile.description.length - 1 ? 'text-white font-medium mt-2' : 'text-slate-300 leading-relaxed'}`}>
                                {line}
                            </p>
                        ))}
                    </div>

                    <div className="flex gap-4 mt-6">
                        {profile.socials.map(social => (
                            <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer"
                                className="text-slate-400 hover:text-[#D4AF37] transition-colors p-2 hover:bg-white/5 rounded-full">
                                <IconHelper name={social.icon} size={20} />
                            </a>
                        ))}
                    </div>
                </header>

                {/* Bento Grid Action */}
                <section className="grid grid-cols-2 gap-3 w-full animate-fade-in" style={{ animationDelay: '200ms' }}>
                    {items.map(renderItem)}
                </section>

                {/* Footer */}
                <footer className="text-center py-6 border-t border-white/5 mt-4">
                    <p className="text-slate-600 text-[10px] tracking-widest uppercase">
                        {footer.text}
                    </p>
                </footer>

            </main>
        </div>
    );
}

export default App;
