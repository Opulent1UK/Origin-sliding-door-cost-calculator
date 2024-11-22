import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { useDoorConfig } from '../context/DoorConfigContext';

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const { config, totalPrice } = useDoorConfig();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const quoteData = {
      ...formData,
      config,
      totalPrice,
      totalWithVat: totalPrice * 1.2,
      recipientEmail: 'sales@upvcwindowquote.com',
      timestamp: new Date().toISOString(),
    };

    // In a real application, this would be an API call
    console.log('Quote submitted:', quoteData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });

    // Reset submission state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass = "mt-1 block w-full rounded-md border-luxury-gold/20 bg-luxury-darker text-white shadow-sm focus:border-luxury-gold focus:ring-luxury-gold";

  return (
    <div className="bg-luxury-black rounded-lg border border-luxury-gold/20 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Mail className="h-5 w-5 text-luxury-gold" />
        <h3 className="text-lg font-medium gold-text">Request Quote</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-luxury-gold/80">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClass}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-luxury-gold/80">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClass}
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-luxury-gold/80">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-luxury-gold/80">
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={3}
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          disabled={submitted}
          className={`w-full py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:ring-offset-2 focus:ring-offset-luxury-black transition-all font-semibold ${
            submitted 
              ? 'bg-green-600 text-white flex items-center justify-center'
              : 'gold-gradient text-luxury-darker hover:opacity-90'
          }`}
        >
          {submitted ? (
            <>
              <Check className="h-5 w-5 mr-2" />
              Quote Sent
            </>
          ) : (
            'Send Quote Request'
          )}
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;