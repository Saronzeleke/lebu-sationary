import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message sent!',
      description: 'Thank you for contacting us. We will respond shortly.',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+251939900977',
      link: 'tel:+251939900977',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'Cassiopiasaron@gmail.com',
      link: 'mailto:Cassiopiasaron@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Station Street, City, ST 12345',
      link: 'https://maps.google.com',
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM',
      link: null,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </motion.div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 text-center hover:shadow-medium transition-shadow h-full">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-hero mb-4">
                <info.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">{info.title}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {info.details}
                </a>
              ) : (
                <p className="text-sm text-muted-foreground">{info.details}</p>
              )}
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Contact Form and Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="What is this about?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message..."
                  className="w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 resize-none"
                />
              </div>

              <Button type="submit" variant="default" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>

        {/* Map/Additional Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Visit Our Store</h2>
            <div className="space-y-4">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  title="Store Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215194841893!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  className="contact-iframe"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  We're conveniently located in the heart of the city, with easy access to public transportation and ample parking.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">🚗</span>
                  <span className="text-muted-foreground">Free parking available</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">🚇</span>
                  <span className="text-muted-foreground">Near metro station</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">♿</span>
                  <span className="text-muted-foreground">Wheelchair accessible</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Can't Visit in Person?</h2>
        <p className="text-xl mb-6 opacity-90">
          Shop our full catalog online and enjoy free delivery on orders over $50
        </p>
        <Button
          variant="outline"
          size="lg"
          onClick={() => window.location.href = '/products'}
          className="bg-white/10 border-white text-white hover:bg-white/20"
        >
          Browse Products
        </Button>
      </motion.div>
    </div>
  );
};

export default Contact;
