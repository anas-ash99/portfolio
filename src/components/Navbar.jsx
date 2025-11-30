import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        document.documentElement.dir = i18n.dir(lng);
        document.documentElement.lang = lng;
        setIsOpen(false);
    };

    const navLinks = [
        { name: t('navbar.home'), href: '#home' },
        { name: t('navbar.about'), href: '#about' },
        { name: t('navbar.skills'), href: '#skills' },
        { name: t('navbar.portfolio'), href: '#portfolio' },
        { name: t('navbar.experience'), href: '#experience' },
        { name: t('navbar.contact'), href: '#contact' },
    ];

    return (
        <nav className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300",
            scrolled ? "bg-navy-900/90 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
        )}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-teal-400 text-2xl font-bold font-mono">
                    &lt;Anas /&gt;
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href.startsWith('#') ? `/${link.href}` : link.href}
                            className="text-slate-200 hover:text-teal-400 transition-colors text-sm font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="relative group">
                        <button className="flex items-center text-slate-200 hover:text-teal-400 transition-colors">
                            <Globe className="w-5 h-5" />
                        </button>
                        <div className="absolute right-0 rtl:left-0 rtl:right-auto mt-2 w-32 bg-navy-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                            <div className="py-2">
                                <button onClick={() => changeLanguage('en')} className="block w-full text-left rtl:text-right px-4 py-2 text-sm text-slate-200 hover:bg-navy-900 hover:text-teal-400">English</button>
                                <button onClick={() => changeLanguage('he')} className="block w-full text-left rtl:text-right px-4 py-2 text-sm text-slate-200 hover:bg-navy-900 hover:text-teal-400">עברית</button>
                                <button onClick={() => changeLanguage('ar')} className="block w-full text-left rtl:text-right px-4 py-2 text-sm text-slate-200 hover:bg-navy-900 hover:text-teal-400">العربية</button>
                            </div>
                        </div>
                    </div>

                    <a href="resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-teal-400 text-teal-400 px-4 py-2 rounded hover:bg-teal-400/10 transition-colors text-sm font-medium">
                        {t('navbar.resume')}
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <div className="relative group">
                        <button className="flex items-center text-slate-200 hover:text-teal-400 transition-colors">
                            <Globe className="w-5 h-5" />
                        </button>
                        <div className="absolute right-0 rtl:left-0 rtl:right-auto mt-2 w-32 bg-navy-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                            <div className="py-2">
                                <button onClick={() => changeLanguage('en')} className="block w-full text-left rtl:text-right px-4 py-2 text-sm text-slate-200 hover:bg-navy-900 hover:text-teal-400">English</button>
                                <button onClick={() => changeLanguage('he')} className="block w-full text-left rtl:text-right px-4 py-2 text-sm text-slate-200 hover:bg-navy-900 hover:text-teal-400">עברית</button>
                                <button onClick={() => changeLanguage('ar')} className="block w-full text-left rtl:text-right px-4 py-2 text-sm text-slate-200 hover:bg-navy-900 hover:text-teal-400">العربية</button>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-teal-400">
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 bg-navy-900/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center transition-transform duration-300 md:hidden",
                isOpen ? "translate-x-0" : "translate-x-full rtl:-translate-x-full"
            )}>
                <div className="flex flex-col items-center space-y-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href.startsWith('#') ? `/${link.href}` : link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-slate-200 hover:text-teal-400 text-xl font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="resume.pdf" className="border border-teal-400 text-teal-400 px-8 py-3 rounded hover:bg-teal-400/10 transition-colors text-lg font-medium">
                        {t('navbar.resume')}
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
