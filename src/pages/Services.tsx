// import { motion } from 'framer-motion';
// import { Printer, Copy, ScanLine, Upload } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { toast } from '@/hooks/use-toast';
// import { useState } from 'react';

// const services = [
//   {
//     icon: Printer,
//     title: 'Professional Printing',
//     description: 'High-quality color and black & white printing for all your needs',
//     price: 'From $0.10/page',
//     features: ['Color & B/W', 'Various paper sizes', 'Fast turnaround', 'Bulk discounts'],
//   },
//   {
//     icon: Copy,
//     title: 'Copy Services',
//     description: 'Quick and reliable copying services with multiple options',
//     price: 'From $0.05/page',
//     features: ['Single & double-sided', 'Color options', 'Binding available', 'Large quantities'],
//   },
//   {
//     icon: ScanLine,
//     title: 'Scanning Services',
//     description: 'Digital scanning and document conversion services',
//     price: 'From $0.15/page',
//     features: ['High resolution', 'Multiple formats', 'Secure handling', 'Quick delivery'],
//   },
// ];

// export const Services = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     service: 'printing',
//     quantity: '1',
//     notes: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast({
//       title: 'Service request submitted!',
//       description: 'We will contact you shortly with a quote.',
//     });
//     setFormData({ name: '', email: '', service: 'printing', quantity: '1', notes: '' });
//   };

//   return (
//     <div className="container mx-auto px-4 py-12 space-y-20">
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center space-y-4"
//       >
//         <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
//         <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//           Professional printing, copying, and scanning services at competitive prices
//         </p>
//       </motion.div>

//       {/* Services Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {services.map((service, index) => (
//           <motion.div
//             key={service.title}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//           >
//             <Card className="p-8 h-full hover:shadow-medium transition-shadow">
//               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero mb-6">
//                 <service.icon className="h-8 w-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
//               <p className="text-muted-foreground mb-4">{service.description}</p>
//               <p className="text-2xl font-bold text-primary mb-6">{service.price}</p>
//               <ul className="space-y-2">
//                 {service.features.map(feature => (
//                   <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
//                     <span className="text-primary font-bold">✓</span>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </Card>
//           </motion.div>
//         ))}
//       </div>

//       {/* Service Request Form */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="max-w-2xl mx-auto"
//       >
//         <Card className="p-8">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold mb-2">Request a Service</h2>
//             <p className="text-muted-foreground">
//               Fill out the form below and we'll get back to you with a quote
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
//             </div>

//             <div className="space-y-2">
//               <Label id="service-label" htmlFor="service">Service Type *</Label>
//               <select
//                 id="service"
//                 aria-labelledby="service-label"
//                 title="Service Type"
//                 required
//                 value={formData.service}
//                 onChange={(e) => setFormData({ ...formData, service: e.target.value })}
//                 className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
//               >
//                 <option value="printing">Printing</option>
//                 <option value="copying">Copying</option>
//                 <option value="scanning">Scanning</option>
//               </select>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="quantity">Estimated Quantity (pages) *</Label>
//               <Input
//                 id="quantity"
//                 type="number"
//                 min="1"
//                 required
//                 value={formData.quantity}
//                 onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
//                 placeholder="Number of pages"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="notes">Additional Notes</Label>
//               <textarea
//                 id="notes"
//                 value={formData.notes}
//                 onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
//                 placeholder="Any special requirements or notes..."
//                 className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 resize-none"
//               />
//             </div>

//             <div className="bg-muted p-4 rounded-lg flex items-start gap-3">
//               <Upload className="h-5 w-5 text-muted-foreground mt-0.5" />
//               <div className="flex-1 text-sm">
//                 <p className="font-medium mb-1">File Upload</p>
//                 <p className="text-muted-foreground">
//                   After submitting this form, you'll receive instructions to upload your files securely.
//                 </p>
//               </div>
//             </div>

//             <Button type="submit" variant="default" size="lg" className="w-full">
//               Request Quote
//             </Button>
//           </form>
//         </Card>
//       </motion.div>

//       {/* Additional Info */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center"
//       >
//         <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
//         <p className="text-xl mb-6 opacity-90">
//           Our team is here to assist you with any questions about our services
//         </p>
//         <Button
//           variant="outline"
//           size="lg"
//           onClick={() => window.location.href = '/contact'}
//           className="bg-white/10 border-white text-white hover:bg-white/20"
//         >
//           Contact Us
//         </Button>
//       </motion.div>
//     </div>
//   );
// };

// export default Services;
