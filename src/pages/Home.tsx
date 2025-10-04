import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { useNavigate } from 'react-router-dom';
import { Package, Printer, Star, ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import { useState, useRef, useEffect } from 'react';

export const Home = () => {
  const navigate = useNavigate();
  const featuredProducts = products.filter(p => p.featured);
  const [autoPlay, setAutoPlay] = useState(true);
  const testimonialRef = useRef(null);

  // Mouse position for parallax effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorX = useSpring(useTransform(mouseX, [0, 1000], [-10, 10]), springConfig);
  const cursorY = useSpring(useTransform(mouseY, [0, 1000], [-10, 10]), springConfig);

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  // Enhanced testimonials with auto-rotation
  const testimonials = [
    { 
      name: 'Sarah Johnson', 
      role: 'Business Owner', 
      text: 'Best quality products and excellent customer service! StationHub is my go-to for all office supplies.',
      avatar: 'SJ'
    },
    { 
      name: 'Michael Chen', 
      role: 'Teacher', 
      text: 'Fast printing services and competitive prices. The staff is always helpful and professional.',
      avatar: 'MC'
    },
    { 
      name: 'Emily Davis', 
      role: 'Student', 
      text: 'Great selection of notebooks and pens. Love the discounts on featured items!',
      avatar: 'ED'
    },
    { 
      name: 'David Wilson', 
      role: 'Office Manager', 
      text: 'The bulk ordering system saved our company both time and money. Highly recommended!',
      avatar: 'DW'
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  // Enhanced features with more detailed information
  const features = [
    { 
      icon: Package, 
      title: 'Quality Products', 
      description: 'Premium stationary and office supplies from trusted brands worldwide',
      stats: '500+ Products'
    },
    { 
      icon: Printer, 
      title: 'Print Services', 
      description: 'Professional printing, copying & scanning with 24-hour turnaround',
      stats: '24/7 Service'
    },
    { 
      icon: Star, 
      title: 'Best Prices', 
      description: 'Competitive pricing with regular discounts and bulk order benefits',
      stats: 'Price Match'
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div 
      className="space-y-20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced Hero Section with Parallax */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden rounded-3xl mx-4"
      >
        {/* Animated Background Gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 z-0"
          animate={{
            background: [
              'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
              'linear-gradient(45deg, #764ba2 0%, #f093fb 100%)',
              'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
              'linear-gradient(45deg, #f5576c 0%, #667eea 100%)',
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Floating Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-20 h-20 bg-white/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <img
          src={heroImage}
          alt="StationHub Hero"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.2,
              duration: 0.8,
              ease: "easeOut"
            }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            Welcome to{' '}
            <motion.span
              className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                backgroundSize: '200% 100%'
              }}
            >
              StationHub
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.4,
              duration: 0.8 
            }}
            className="text-xl md:text-2xl lg:text-3xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed"
          >
            Your one-stop destination for premium <span className="font-semibold">stationary</span>, 
            office supplies, and professional <span className="font-semibold">printing services</span>
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.6,
              duration: 0.8 
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover="hover"
              whileTap="tap"
              variants={hoverVariants}
            >
              <Button
                variant="hero"
                size="lg"
                onClick={() => navigate('/products')}
                className="bg-white text-primary hover:bg-white/90 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Shop Now 
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover="hover"
              whileTap="tap"
              variants={hoverVariants}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/services')}
                className="bg-white/10 border-white text-white hover:bg-white/20 backdrop-blur-sm"
              >
                View Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-white/70"
          >
            {['5000+ Happy Customers', 'Fast Shipping', '24/7 Support'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
              animate={{
                y: [0, 12, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Enhanced Features Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              className="text-center p-8 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all border border-border/50 group cursor-pointer"
            >
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-hero mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ 
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <feature.icon className="h-10 w-10 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <motion.p
                className="text-sm font-semibold text-primary"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                {feature.stats}
              </motion.p>

              {/* Hover effect background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Enhanced Featured Products with Interactive Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Products
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Check out our most popular items and special offers
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              custom={index}
              whileHover="hover"
              className="relative"
            >
              <motion.div
                variants={{
                  hover: {
                    y: -8,
                    transition: {
                      duration: 0.3
                    }
                  }
                }}
              >
                <ProductCard product={product} />
              </motion.div>
              
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 -z-10"
                variants={{
                  hover: {
                    opacity: 1,
                    scale: 1.02,
                    filter: "blur(20px)",
                    transition: {
                      duration: 0.3
                    }
                  }
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={hoverVariants}
          >
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => navigate('/products')}
              className="group"
            >
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Enhanced Testimonials Section with Carousel */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-gradient-to-br from-muted to-muted/50 py-20 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">Trusted by thousands of happy customers</p>
          </motion.div>

          {/* Testimonial Carousel */}
          <motion.div
            ref={testimonialRef}
            className="relative max-w-4xl mx-auto"
          >
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 md:p-12 rounded-2xl shadow-soft border border-border/50"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex gap-1 mb-4 justify-center md:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  
                  <div>
                    <p className="font-semibold text-lg">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  setCurrentTestimonial((prev) => 
                    prev === 0 ? testimonials.length - 1 : prev - 1
                  );
                  setAutoPlay(false);
                }}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              {/* Indicator dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentTestimonial(index);
                      setAutoPlay(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial 
                        ? 'bg-primary' 
                        : 'bg-border hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
                  setAutoPlay(false);
                }}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => setAutoPlay(!autoPlay)}
                className="rounded-full"
              >
                {autoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* New Stats Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '10K+', label: 'Happy Customers' },
            { number: '500+', label: 'Products' },
            { number: '24/7', label: 'Support' },
            { number: '98%', label: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6"
            >
              <motion.p
                className="text-3xl md:text-4xl font-bold text-primary mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
              >
                {stat.number}
              </motion.p>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;
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
