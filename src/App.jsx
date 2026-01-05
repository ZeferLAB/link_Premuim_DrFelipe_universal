import React, { useEffect, useState, useRef } from 'react';
import * as Icons from 'lucide-react';
import { config } from './config';

// --- HELPER COMPONENTS ---

const IconHelper = ({ name, size = 20, className }) => {
    const IconComponent = Icons[name];
    if (!IconComponent) return null;
    return <IconComponent size={size} className={className} />;
};

const StarRating = ({ count = 5 }) => {
    return (
        <div className="flex gap-1">
            {[...Array(count)].map((_, i) => (
                <Icons.Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
            ))}
        </div>
    );
};

// --- MODAL COMPONENTS ---

const Modal = ({ item, onClose }) => {
    const [index, setIndex] = useState(0);

    // --- LOGIC FOR GALLERY ---
    const images = item.gallery || [];

    const next = (e) => {
        e?.stopPropagation();
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prev = (e) => {
        e?.stopPropagation();
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        if (!item.gallery) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') setIndex((prev) => (prev + 1) % images.length);
            if (e.key === 'ArrowLeft') setIndex((prev) => (prev - 1 + images.length) % images.length);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [images.length, onClose, item.gallery]);

    // --- RENDER CONTENT BASED ON TYPE ---

    const renderContent = () => {
        if (item.locationData) {
            const { locationData } = item;
            return (
                <div className="w-full max-w-md bg-[#1E293B] rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-fade-in" onClick={(e) => e.stopPropagation()}>
                    {/* Header do Modal */}
                    <div className="flex justify-between items-center p-4 border-b border-white/5 bg-slate-900/50">
                        <h3 className="text-white font-bold text-lg flex items-center gap-2">
                            <Icons.MapPin size={20} className="text-[#D4AF37]" />
                            Localização
                        </h3>
                        <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
                            <Icons.X size={24} />
                        </button>
                    </div>

                    {/* Mapa */}
                    <div className="w-full h-64 bg-slate-800">
                        <iframe
                            src={locationData.mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="opacity-90 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </div>

                    {/* Info e Ações */}
                    <div className="p-6 space-y-6">
                        <div className="text-center">
                            <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-1">Endereço</p>
                            <p className="text-slate-200 text-sm leading-relaxed">{locationData.address}</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <a href={locationData.wazeLink} target="_blank" rel="noopener noreferrer"
                                className="w-full py-3 rounded-xl bg-[#D4AF37] text-slate-900 font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#b89628] transition-colors">
                                <Icons.Navigation size={18} />
                                Traçar Rota
                            </a>
                            <a href={locationData.instagram} target="_blank" rel="noopener noreferrer"
                                className="w-full py-3 rounded-xl bg-white/5 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors border border-white/5">
                                <Icons.Instagram size={18} />
                                Ver no Instagram
                            </a>
                        </div>
                    </div>
                </div>
            );
        }

        if (item.gallery) {
            return (
                <div className="relative w-full max-w-lg max-h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                    <button onClick={onClose} className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors z-50 p-2">
                        <Icons.X size={32} />
                    </button>

                    {images.length > 1 && (
                        <button onClick={prev} className="absolute left-2 text-white/50 hover:text-[#D4AF37] transition-colors p-2 z-10 bg-black/20 rounded-full backdrop-blur-sm">
                            <Icons.ChevronLeft size={32} />
                        </button>
                    )}

                    <img
                        src={images[index]}
                        alt={`Resultado ${index + 1}`}
                        className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
                    />

                    {images.length > 1 && (
                        <button onClick={next} className="absolute right-2 text-white/50 hover:text-[#D4AF37] transition-colors p-2 z-10 bg-black/20 rounded-full backdrop-blur-sm">
                            <Icons.ChevronRight size={32} />
                        </button>
                    )}

                    <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
                        {images.map((_, i) => (
                            <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === index ? 'bg-[#D4AF37] w-3' : 'bg-white/30'}`} />
                        ))}
                    </div>
                </div>
            );
        }

        return null;
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in" onClick={onClose}>
            {renderContent()}
        </div>
    );
};

// --- CARD COMPONENTS ---

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

const SquareCard = ({ item, onClick }) => {
    const isInteractive = item.gallery || item.locationData;
    const Component = isInteractive ? 'button' : 'a';
    const props = isInteractive ? { onClick: () => onClick(item) } : { href: item.url, target: "_blank", rel: "noopener noreferrer" };

    return (
        <Component {...props}
            className="col-span-1 aspect-square rounded-3xl p-5 flex flex-col items-center justify-center text-center gap-3
                  bg-slate-800/50 backdrop-blur-md border border-slate-700/50 hover:border-[#D4AF37]/50
                  hover:bg-slate-800/70 hover:scale-[1.02] transition-all duration-300 group w-full cursor-pointer">
            <div className="p-3 rounded-2xl bg-slate-900/50 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300">
                <IconHelper name={item.icon} size={24} />
            </div>
            <div>
                <h3 className="font-semibold text-slate-100 text-sm sm:text-base leading-tight">{item.label}</h3>
                <p className="text-xs text-slate-400 mt-1 hidden sm:block">{item.sublabel}</p>
            </div>
        </Component>
    );
};

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

// --- NEW SECTIONS ---

const TestimonialCarousel = ({ testimonials }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(c => (c + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const next = () => setCurrent(c => (c + 1) % testimonials.length);
    const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);

    return (
        <div className="col-span-2 w-full mt-4 mb-2">
            <div className="relative overflow-hidden bg-slate-800/30 backdrop-blur-sm rounded-3xl p-6 border border-slate-700/30">
                {/* Aspas Decorativas */}
                <Icons.Quote size={40} className="absolute top-4 left-4 text-[#D4AF37]/10 rotate-180" />

                <div className="relative z-10 min-h-[140px] flex items-center">
                    {testimonials.map((t, idx) => (
                        <div key={t.id}
                            className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-in-out
                        ${idx === current ? 'opacity-100 translate-x-0' :
                                    idx < current ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'}`}
                        >
                            <div className="flex justify-center mb-3">
                                <StarRating count={t.stars} />
                            </div>
                            <p className="text-slate-200 text-center text-sm sm:text-base italic leading-relaxed px-4">
                                "{t.text}"
                            </p>
                            <p className="text-[#D4AF37] text-center text-xs font-bold uppercase tracking-widest mt-4">
                                — {t.author}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-2 mt-4 relative z-20">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 
                    ${current === idx ? 'bg-[#D4AF37] w-4' : 'bg-slate-600 hover:bg-slate-500'}`}
                        />
                    ))}
                </div>

                {/* Navigation Arrows (Desktop) */}
                <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 text-slate-500 hover:text-[#D4AF37] transition-colors z-20">
                    <Icons.ChevronLeft size={20} />
                </button>
                <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-slate-500 hover:text-[#D4AF37] transition-colors z-20">
                    <Icons.ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

const AboutSection = ({ data }) => {
    return (
        <section className="col-span-2 w-full mt-6 bg-gradient-to-b from-slate-800/20 to-slate-900/50 rounded-3xl p-6 border border-white/5">
            <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-4 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30 shadow-2xl">
                    <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
                </div>

                <h2 className="text-xl font-bold text-white mb-1">{data.title}</h2>
                <p className="text-[#D4AF37] text-xs font-semibold tracking-wider uppercase mb-4 max-w-[200px]">
                    {data.subtitle}
                </p>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 px-2">
                    {data.text}
                </p>

                <div className="flex flex-wrap justify-center gap-3 w-full">
                    {data.badges.map((badge, idx) => (
                        <div key={idx} className="bg-slate-800/80 rounded-xl p-3 border border-white/5 min-w-[100px] flex-1">
                            <p className="text-[#D4AF37] font-bold text-lg">{badge.label}</p>
                            <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">{badge.sub}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- MAIN APP ---

function App() {
    const [loaded, setLoaded] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const { theme, profile, items, testimonials, aboutMe, footer } = config;

    useEffect(() => {
        setLoaded(true);
    }, []);

    const openModal = (item) => {
        setSelectedItem(item);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedItem(null);
        document.body.style.overflow = 'auto';
    };

    const renderItem = (item) => {
        switch (item.type) {
            case 'primary': return <PrimaryCard key={item.id} item={item} />;
            case 'square': return <SquareCard key={item.id} item={item} onClick={openModal} />;
            case 'card': return <ContentCard key={item.id} item={item} />;
            default: return null;
        }
    };

    return (
        <>
            {selectedItem && <Modal item={selectedItem} onClose={closeModal} />}

            <div className="min-h-screen w-full flex justify-center bg-[#0F172A] text-slate-100 font-sans selection:bg-[#D4AF37] selection:text-slate-900">

                {/* Background Radial Topo */}
                <div className="fixed top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/40 via-slate-900 to-[#0F172A] pointer-events-none" />

                <main className={`
          relative w-full max-w-md mx-auto p-6 pb-12
          transition-all duration-1000 ease-out flex flex-col gap-4
          ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}>

                    {/* Header Clean */}
                    <header className="flex flex-col items-center text-center mt-8 mb-4">
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

                    {/* Testimonial Carousel */}
                    <TestimonialCarousel testimonials={testimonials} />

                    {/* About Me Section */}
                    <AboutSection data={aboutMe} />

                    {/* Footer */}
                    <footer className="text-center py-6 border-t border-white/5 mt-4">
                        <p className="text-slate-600 text-[10px] tracking-widest uppercase">
                            {footer.text}
                        </p>
                    </footer>

                </main>
            </div>
        </>
    );
}

export default App;
