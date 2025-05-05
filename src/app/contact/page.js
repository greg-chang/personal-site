'use client'
import '@/app/globals.css';
import Header from '@/app/components/header';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className='min-h-screen bg-black'>
            <Header />
            <div className='flex flex-col items-center container mx-auto px-4 pt-32'>
                <h1 className='text-white  text-4xl md:text-5xl lg:text-6xl font-bold mb-8 avgar-font'>Get in Touch</h1>
                
                <form onSubmit={handleSubmit} className='w-full max-w-2xl mx-auto space-y-6'>
                    <div>
                        <label htmlFor="name" className='block text-white mb-2 avgar-font'>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className='w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-red-400 focus:outline-none'
                        />
                    </div>

                    <div>
                        <label htmlFor="youremail" className='block text-white mb-2 avgar-font'>Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className='w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-red-400 focus:outline-none'
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className='block text-white mb-2 avgar-font'>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="6"
                            className='w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-red-400 focus:outline-none resize-none'
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className='w-full py-3 px-6 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>

                    {status === 'success' && (
                        <p className='text-green-400 text-center avgar-font'>Message sent successfully!</p>
                    )}
                    {status === 'error' && (
                        <p className='text-red-400 text-center avgar-font'>Failed to send message. Please try again.</p>
                    )}
                </form>
            </div>
        </div>
    );
}   
