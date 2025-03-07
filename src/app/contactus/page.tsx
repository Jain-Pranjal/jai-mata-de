'use client'
import React, { useState } from 'react'
import { toast } from "sonner"

const TimingCard = () => {
    const timings = [
        { day: 'Mon', hours: '09:00 am – 05:00 pm' },
        { day: 'Tue', hours: '09:00 am – 05:00 pm' },
        { day: 'Wed', hours: '09:00 am – 05:00 pm' },
        { day: 'Thu', hours: '09:00 am – 05:00 pm' },
        { day: 'Fri', hours: '09:00 am – 05:00 pm' },
        { day: 'Sat', hours: 'Closed' },
        { day: 'Sun', hours: 'Closed' },
    ]

    return (
        <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Opening Hours</h2>
            <div className="space-y-4">
                {timings.map((timing) => (
                    <div key={timing.day} className={`flex justify-between items-center ${
                        timing.hours === 'Closed' ? 'text-red-500' : 'text-gray-700'
                    }`}>
                        <span className="font-medium">{timing.day}</span>
                        <span>{timing.hours}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        toast.success('Message sent successfully!')
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        })
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold text-center mb-8">Contact Us</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Timing Information */}
                <TimingCard />
            </div>
        </div>
    )
}

export default ContactPage
