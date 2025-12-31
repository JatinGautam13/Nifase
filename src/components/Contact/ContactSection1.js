"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './contactSection1.module.css';

gsap.registerPlugin(ScrollTrigger);

const ContactSection1 = () => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const infoCardsRef = useRef([]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    useEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        let mm;
        const ctx = gsap.context(() => {
            mm = gsap.matchMedia();

            mm.add(
                {
                    isMobile: "(max-width: 768px)",
                    isDesktop: "(min-width: 769px)",
                },
                (context) => {
                    const { isMobile } = context.conditions;
                    const headingY = isMobile ? 36 : 80;
                    const subHeadingY = isMobile ? 26 : 60;
                    const cardY = isMobile ? 18 : 50;

                    gsap.fromTo(
                        ".contactHeading",
                        { y: headingY, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.95,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: ".contactSection",
                                start: "top 80%",
                                toggleActions: "play none none none",
                                once: true,
                            },
                        }
                    );

                    gsap.fromTo(
                        ".contactSubHeading",
                        { y: subHeadingY, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.85,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: ".contactSection",
                                start: "top 75%",
                                toggleActions: "play none none none",
                                once: true,
                            },
                        }
                    );

                    gsap.fromTo(
                        ".contactCard",
                        { y: cardY, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: "power3.out",
                            stagger: 0.14,
                            scrollTrigger: {
                                trigger: ".contactCardsWrap",
                                start: "top 85%",
                                toggleActions: "play none none none",
                                once: true,
                            },
                        }
                    );
                }
            );
        }, sectionEl);

        return () => {
            mm?.revert();
            ctx.revert();
        };
    }, []);

    return (
        <div ref={sectionRef} className={styles.section}>
            {/* Background Effects */}
            <div className={styles.bgGradient1}></div>
            <div className={styles.bgGradient2}></div>
            
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        Get In Touch
                    </div>
                    <h1 className={styles.title}>
                        Let's Start a <span className={styles.highlight}>Conversation</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                {/* Content Grid */}
                <div className={styles.grid}>
                    {/* Contact Form */}
                    <div ref={formRef} className={styles.formContainer}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="subject" className={styles.label}>
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="How can we help?"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={styles.textarea}
                                    placeholder="Tell us more about your inquiry..."
                                    rows="6"
                                    required
                                />
                            </div>

                            <button type="submit" className={styles.submitButton}>
                                <span>Send Message</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </form>
                    </div>

                    {/* Contact Info Cards */}
                    <div className={styles.infoContainer}>
                        {/* Email Card */}
                        <div 
                            ref={el => infoCardsRef.current[0] = el}
                            className={styles.infoCard}
                        >
                            <div className={styles.iconWrapper}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3 className={styles.infoTitle}>Email Us</h3>
                            <p className={styles.infoText}>info@nifase.com</p>
                            {/* <p className={styles.infoText}>hello@linkify.com</p> */}
                        </div>

                        {/* Phone Card */}
                        <div 
                            ref={el => infoCardsRef.current[1] = el}
                            className={styles.infoCard}
                        >
                            <div className={styles.iconWrapper}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3 className={styles.infoTitle}>Call Us</h3>
                            <p className={styles.infoText}>+1 (555) 123-4567</p>
                            <p className={styles.infoText}>Mon-Sat 10am-6pm EST</p>
                        </div>

                        {/* Location Card */}
                        <a
                            ref={el => infoCardsRef.current[2] = el}
                            className={styles.infoCard}
                            href="https://maps.app.goo.gl/ZAyPynLT9YD6KLpf7"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open location in Google"
                        >
                            <div className={styles.iconWrapper}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3 className={styles.infoTitle}>Visit Us</h3>
                            <p className={styles.infoText}>Savitri Cinema Complex, Block E, Greater Kailash II, Greater Kailash</p>
                            <p className={styles.infoText}> New Delhi, Delhi 110080</p>
                        </a>

                        {/* Social Card */}
                        <div 
                            ref={el => infoCardsRef.current[3] = el}
                            className={styles.infoCard}
                        >
                            <div className={styles.iconWrapper}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3 className={styles.infoTitle}>Follow Us</h3>
                            <div className={styles.socialLinks}>
                                <a href="#" className={styles.socialLink}>Facebook</a>
                                <a href="#" className={styles.socialLink}>LinkedIn</a>
                                <a target='blank' href="https://www.instagram.com/nifase_01/" className={styles.socialLink}>Instagram</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection1;