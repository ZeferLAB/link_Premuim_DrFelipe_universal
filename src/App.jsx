import React, { useEffect, useState } from 'react';
import * as Icons from 'lucide-react';
import { config } from './config';

// Componente para renderizar ícone dinamicamente
const IconHelper = ({ name, size = 20, className }) => {
    const IconComponent = Icons[name];
    if (!IconComponent) return null;
    return <IconComponent size={size} className={className} />;
};

function App() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    const { theme, profile, links, footer } = config;

    return (
        <div
            className="min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden relative"
            style={{
                background: `linear-gradient(to bottom right, ${theme.colors.background.from}, ${theme.colors.background.to})`
            }}
        >
            {/* Background Decorativo (Opcional - Sutil) */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Container Principal */}
            <main className={`
        relative z-10 w-full max-w-md mx-auto
        flex flex-col items-center gap-8
        transition-all duration-1000 ease-out
        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}>

                {/* Perfil */}
                <header className="flex flex-col items-center text-center space-y-4 animate-fade-in">
                    <div className="relative group">
                        <div className={`absolute -inset-0.5 rounded-full opacity-75 blur transition duration-1000 group-hover:duration-200 animate-gradient`}
                            style={{ background: `linear-gradient(to right, ${theme.colors.text.accent}, #F8FAFC)` }}></div>
                        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-black/20 backdrop-blur-sm">
                            <img
                                src={profile.avatar}
                                alt={profile.name}
                                className="w-full h-full rounded-full object-cover border-2 border-white/10 shadow-2xl"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-2 justify-center">
                            {profile.name}
                            {profile.verified && <Icons.BadgeCheck className="w-6 h-6 text-[#D4AF37]" />}
                        </h1>
                        <p className="text-[#D4AF37] font-medium tracking-wide uppercase text-xs sm:text-sm">
                            {profile.role}
                        </p>
                        <p className="text-slate-300 text-sm sm:text-base max-w-[85%] mx-auto leading-relaxed">
                            {profile.bio}
                        </p>
                    </div>
                </header>

                {/* Links */}
                <section className="w-full space-y-4">
                    {links.map((link, index) => (
                        <a
                            key={link.id}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                group glass-button w-full p-4 flex items-center gap-4
                transition-all duration-300
                ${link.featured ? 'border-[#D4AF37]/30 bg-[#D4AF37]/5' : 'hover:scale-[1.02]'}
                delay-[${(index + 1) * 100}ms] animate-fade-in
                opacity-0 fill-mode-forwards
              `}
                            style={{ animationDelay: `${(index + 1) * 150}ms` }}
                        >
                            <div className={`
                p-2 rounded-lg transition-colors duration-300
                ${link.featured ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-white/5 text-slate-300 group-hover:text-white group-hover:bg-white/10'}
              `}>
                                <IconHelper name={link.icon} size={20} />
                            </div>

                            <div className="flex-1 text-left">
                                <h3 className="text-slate-100 font-medium text-sm sm:text-base group-hover:text-white transition-colors">
                                    {link.label}
                                </h3>
                                {link.description && (
                                    <p className="text-slate-400 text-xs mt-0.5">{link.description}</p>
                                )}
                            </div>

                            <div className="text-slate-500 group-hover:text-white transition-colors">
                                <Icons.ChevronRight size={16} />
                            </div>
                        </a>
                    ))}
                </section>

                {/* Footer */}
                <footer className="text-center pt-8 pb-4 animate-fade-in" style={{ animationDelay: '800ms' }}>
                    <p className="text-slate-500 text-xs font-light tracking-widest uppercase">
                        {footer.text}
                    </p>
                </footer>

            </main>
        </div>
    );
}

export default App;
