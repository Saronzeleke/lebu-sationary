// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { ProductCard } from '@/components/ProductCard';
// import { products } from '@/data/products';
// import { useNavigate } from 'react-router-dom';
// import { Package, Printer, Star } from 'lucide-react';
// import heroImage from '@/assets/hero-image.jpg';

// export const Home = () => {
//   const navigate = useNavigate();
//   const featuredProducts = products.filter(p => p.featured);

//   return (
//     <div className="space-y-20">
//       {/* Hero Section */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="relative min-h-[600px] flex items-center justify-center overflow-hidden rounded-3xl mx-4"
//       >
//         <div className="absolute inset-0 bg-gradient-hero z-0" />
//         <img
//           src={heroImage}
//           alt="StationHub Hero"
//           className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
//         />
        
//         <div className="relative z-10 container mx-auto px-4 text-center text-white">
//           <motion.h1
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-5xl md:text-7xl font-bold mb-6"
//           >
//             Welcome to StationHub
//           </motion.h1>
//           <motion.p
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto"
//           >
//             Your one-stop destination for premium stationary, office supplies, and professional printing services
//           </motion.p>
//           <motion.div
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//           >
//             <Button
//               variant="hero"
//               size="lg"
//               onClick={() => navigate('/products')}
//               className="bg-white text-primary hover:bg-white/90"
//             >
//               Shop Now
//             </Button>
//             <Button
//               variant="outline"
//               size="lg"
//               onClick={() => navigate('/services')}
//               className="bg-white/10 border-white text-white hover:bg-white/20"
//             >
//               View Services
//             </Button>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Features */}
//       <section className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             { icon: Package, title: 'Quality Products', description: 'Premium stationary and office supplies' },
//             { icon: Printer, title: 'Print Services', description: 'Professional printing, copying & scanning' },
//             { icon: Star, title: 'Best Prices', description: 'Competitive pricing with regular discounts' },
//           ].map((feature, index) => (
//             <motion.div
//               key={feature.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="text-center p-8 bg-card rounded-xl shadow-soft hover:shadow-medium transition-shadow"
//             >
//               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero mb-4">
//                 <feature.icon className="h-8 w-8 text-white" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//               <p className="text-muted-foreground">{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Featured Products */}
//       <section className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Check out our most popular items and special offers
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {featuredProducts.map((product, index) => (
//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <ProductCard product={product} />
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-center mt-12"
//         >
//           <Button variant="hero" size="lg" onClick={() => navigate('/products')}>
//             View All Products
//           </Button>
//         </motion.div>
//       </section>

//       {/* Testimonials */}
//       <section className="bg-muted py-20">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
//             <p className="text-xl text-muted-foreground">Trusted by thousands of happy customers</p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { name: 'Sarah Johnson', role: 'Business Owner', text: 'Best quality products and excellent customer service! StationHub is my go-to for all office supplies.' },
//               { name: 'Michael Chen', role: 'Teacher', text: 'Fast printing services and competitive prices. The staff is always helpful and professional.' },
//               { name: 'Emily Davis', role: 'Student', text: 'Great selection of notebooks and pens. Love the discounts on featured items!' },
//             ].map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-card p-6 rounded-xl shadow-soft"
//               >
//                 <div className="flex gap-1 mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="h-5 w-5 fill-accent text-accent" />
//                   ))}
//                 </div>
//                 <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
//                 <div>
//                   <p className="font-semibold">{testimonial.name}</p>
//                   <p className="text-sm text-muted-foreground">{testimonial.role}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
