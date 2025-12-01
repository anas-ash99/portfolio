import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    const [submitted, setSubmitted] = useState(false);
    const [state, setState] = useState({
        submitting: false,
        succeeded: false,
        errors: []
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setState({ ...state, submitting: true });
        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formspree.io/f/xpwvdenz", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitted(true);
                setState({ submitting: false, succeeded: true, errors: [] });
                e.target.reset();
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    setState({ submitting: false, succeeded: false, errors: data.errors.map(err => err.message) });
                } else {
                    setState({ submitting: false, succeeded: false, errors: ["There was a problem submitting your form"] });
                }
            }
        } catch (error) {
            setState({ submitting: false, succeeded: false, errors: ["There was a problem submitting your form"] });
        }
    };

    return (
        <section id="contact" className="py-20 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-200 mb-6 flex items-center justify-center">
                <span className="text-teal-400 mr-2 rtl:ml-2 rtl:mr-0">05.</span> {t('contact.title')}
            </h2>

            <div className="mb-10 space-y-2 text-slate-400">
                <p>{t('contact.info.phone')}</p>
                <p>{t('contact.info.email')}</p>
                <a href="https://www.linkedin.com/in/anas-ashraf-dev" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
                    {t('contact.info.linkedin')}
                </a>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6 text-left rtl:text-right">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">{t('contact.name')}</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full bg-navy-800 border border-navy-700 rounded p-3 text-slate-200 focus:outline-none focus:border-teal-400 transition-colors"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">{t('contact.email')}</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-navy-800 border border-navy-700 rounded p-3 text-slate-200 focus:outline-none focus:border-teal-400 transition-colors"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">{t('contact.message')}</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        className="w-full bg-navy-800 border border-navy-700 rounded p-3 text-slate-200 focus:outline-none focus:border-teal-400 transition-colors"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full border border-teal-400 text-teal-400 px-6 py-3 rounded hover:bg-teal-400/10 transition-colors font-mono text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {state.submitting ? 'Sending...' : t('contact.send')}
                </button>
                {submitted && (
                    <p className="text-teal-400 text-center mt-4 animate-fade-in-up">
                        {t('contact.success')}
                    </p>
                )}
                {state.errors.length > 0 && (
                    <div className="text-red-500 text-center mt-4 animate-fade-in-up">
                        <p>{t('contact.error')}</p>
                    </div>
                )}
            </form>
        </section>
    );
};

export default Contact;
