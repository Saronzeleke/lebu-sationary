// import { motion } from 'framer-motion';
// import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { useState } from 'react';

// Types
interface ContactInfo {
  icon: React.ComponentType<any>;
  title: string;
  details: string;
  link: string | null;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactProps {
  companyInfo?: {
    name: string;
    email: string;
    phone: string;
    address: string;
    businessHours: string;
    mapEmbedUrl?: string;
  };
  theme?: {
    primaryColor?: string;
    cardBackground?: string;
  };
}

export const Contact: React.FC<ContactProps> = ({ 
  companyInfo, 
  theme = {} 
}) => {
  // Default company information
  const defaultCompanyInfo = {
    name: 'Your Company',
    email: 'Cassiopiasaron@gmail.com',
    phone: '+251939900977',
    address: '123 Station Street, City, ST 12345',
    businessHours: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215194841893!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus'
  };

  const company = { ...defaultCompanyInfo, ...companyInfo };

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Dynamic contact information
  const contactInfo: ContactInfo[] = [
    {
      icon: Phone,
      title: 'Phone',
      details: company.phone,
      link: `tel:${company.phone}`,
    },
    {
      icon: Mail,
      title: 'Email',
      details: company.email,
      link: `mailto:${company.email}`,
    },
    {
      icon: MapPin,
      title: 'Address',
      details: company.address,
      link: 'https://maps.google.com',
    },
    {
      icon: Clock,
      title: 'Hours',
      details: company.businessHours,
      link: null,
    },
  ];

  // Form validation
  const validateForm = (): boolean => {
    const errors = [];
    
    if (!formData.name.trim()) errors.push('Name is required');
    if (!formData.email.trim()) errors.push('Email is required');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.push('Valid email is required');
    if (!formData.subject.trim()) errors.push('Subject is required');
    if (!formData.message.trim()) errors.push('Message is required');

    return errors.length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInputBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: 'Validation Error',
        description: 'Please fill all required fields correctly.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      toast({
        title: 'Message sent successfully!',
        description: 'Thank you for contacting us. We will respond shortly.',
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTouched({});
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const isFieldInvalid = (field: keyof FormData) => 
    touched[field] && !formData[field].trim();

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </motion.div>

      {/* Contact Info Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.title}
            variants={itemVariants}
            custom={index}
          >
            <Card 
              className={`p-6 text-center hover:shadow-medium transition-shadow h-full cursor-pointer transform hover:-translate-y-1 transition-transform duration-200 ${
                theme.cardBackground || 'bg-background'
              }`}
            >
              <div 
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-hero mb-4"
                style={{ background: theme.primaryColor }}
              >
                <info.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">{info.title}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  {info.details}
                </a>
              ) : (
                <p className="text-sm text-muted-foreground">{info.details}</p>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Form and Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
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
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  onBlur={() => handleInputBlur('name')}
                  placeholder="Your name"
                  className={isFieldInvalid('name') ? 'border-destructive' : ''}
                />
                {isFieldInvalid('name') && (
                  <p className="text-sm text-destructive">Name is required</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onBlur={() => handleInputBlur('email')}
                  placeholder="your@email.com"
                  className={
                    touched.email && !formData.email.trim() ? 'border-destructive' : 
                    touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? 'border-destructive' : ''
                  }
                />
                {touched.email && !formData.email.trim() && (
                  <p className="text-sm text-destructive">Email is required</p>
                )}
                {touched.email && formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                  <p className="text-sm text-destructive">Please enter a valid email</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  onBlur={() => handleInputBlur('subject')}
                  placeholder="What is this about?"
                  className={isFieldInvalid('subject') ? 'border-destructive' : ''}
                />
                {isFieldInvalid('subject') && (
                  <p className="text-sm text-destructive">Subject is required</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  onBlur={() => handleInputBlur('message')}
                  placeholder="Your message..."
                  className={`min-h-[150px] resize-none ${
                    isFieldInvalid('message') ? 'border-destructive' : ''
                  }`}
                />
                {isFieldInvalid('message') && (
                  <p className="text-sm text-destructive">Message is required</p>
                )}
              </div>

              <Button 
                type="submit" 
                variant="default" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </motion.div>

        {/* Map/Additional Info */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Visit Our Store</h2>
            <div className="space-y-4">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  title="Store Location"
                  src={company.mapEmbedUrl}
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
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center"
        style={{ background: theme.primaryColor }}
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
// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { toast } from '@/hooks/use-toast';
// import { useState } from 'react';

// export const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast({
//       title: 'Message sent!',
//       description: 'Thank you for contacting us. We will respond shortly.',
//     });
//     setFormData({ name: '', email: '', subject: '', message: '' });
//   };

//   const contactInfo = [
//     {
//       icon: Phone,
//       title: 'Phone',
//       details: '+251939900977',
//       link: 'tel:+251939900977',
//     },
//     {
//       icon: Mail,
//       title: 'Email',
//       details: 'Cassiopiasaron@gmail.com',
//       link: 'mailto:Cassiopiasaron@gmail.com',
//     },
//     {
//       icon: MapPin,
//       title: 'Address',
//       details: '123 Station Street, City, ST 12345',
//       link: 'https://maps.google.com',
//     },
//     {
//       icon: Clock,
//       title: 'Hours',
//       details: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM',
//       link: null,
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-12 space-y-12">
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center space-y-4"
//       >
//         <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
//         <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//           Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
//         </p>
//       </motion.div>

//       {/* Contact Info Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {contactInfo.map((info, index) => (
//           <motion.div
//             key={info.title}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//           >
//             <Card className="p-6 text-center hover:shadow-medium transition-shadow h-full">
//               <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-hero mb-4">
//                 <info.icon className="h-6 w-6 text-white" />
//               </div>
//               <h3 className="font-semibold mb-2">{info.title}</h3>
//               {info.link ? (
//                 <a
//                   href={info.link}
//                   target={info.link.startsWith('http') ? '_blank' : undefined}
//                   rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
//                   className="text-sm text-muted-foreground hover:text-primary transition-colors"
//                 >
//                   {info.details}
//                 </a>
//               ) : (
//                 <p className="text-sm text-muted-foreground">{info.details}</p>
//               )}
//             </Card>
//           </motion.div>
//         ))}
//       </div>

//       {/* Contact Form and Map */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Form */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           <Card className="p-8">
//             <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="name">Name *</Label>
//                 <Input
//                   id="name"
//                   required
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   placeholder="Your name"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="email">Email *</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   required
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   placeholder="your@email.com"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="subject">Subject *</Label>
//                 <Input
//                   id="subject"
//                   required
//                   value={formData.subject}
//                   onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
//                   placeholder="What is this about?"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="message">Message *</Label>
//                 <textarea
//                   id="message"
//                   required
//                   value={formData.message}
//                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                   placeholder="Your message..."
//                   className="w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 resize-none"
//                 />
//               </div>

//               <Button type="submit" variant="default" size="lg" className="w-full">
//                 Send Message
//               </Button>
//             </form>
//           </Card>
//         </motion.div>

//         {/* Map/Additional Info */}
//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.3 }}
//           className="space-y-6"
//         >
//           <Card className="p-8">
//             <h2 className="text-2xl font-bold mb-6">Visit Our Store</h2>
//             <div className="space-y-4">
//               <div className="aspect-video bg-muted rounded-lg overflow-hidden">
//                 <iframe
//                   title="Store Location"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215194841893!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
//                   width="100%"
//                   height="100%"
//                   className="contact-iframe"
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 />
//               </div>
//               <div className="space-y-3">
//                 <p className="text-muted-foreground">
//                   We're conveniently located in the heart of the city, with easy access to public transportation and ample parking.
//                 </p>
//                 <div className="flex items-center gap-2 text-sm">
//                   <span className="font-medium">🚗</span>
//                   <span className="text-muted-foreground">Free parking available</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm">
//                   <span className="font-medium">🚇</span>
//                   <span className="text-muted-foreground">Near metro station</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm">
//                   <span className="font-medium">♿</span>
//                   <span className="text-muted-foreground">Wheelchair accessible</span>
//                 </div>
//               </div>
//             </div>
//           </Card>
//         </motion.div>
//       </div>

//       {/* CTA Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center"
//       >
//         <h2 className="text-3xl font-bold mb-4">Can't Visit in Person?</h2>
//         <p className="text-xl mb-6 opacity-90">
//           Shop our full catalog online and enjoy free delivery on orders over $50
//         </p>
//         <Button
//           variant="outline"
//           size="lg"
//           onClick={() => window.location.href = '/products'}
//           className="bg-white/10 border-white text-white hover:bg-white/20"
//         >
//           Browse Products
//         </Button>
//       </motion.div>
//     </div>
//   );
// };

// export default Contact;
