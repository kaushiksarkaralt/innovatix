import { BlackSpotlight } from "@/components/backgrounds/black-spotlight";
import { Button } from "@/components/ui/button";
import { FaGlobe, FaLongArrowAltRight, FaUsers, FaCode } from "react-icons/fa";
import { FaArrowDown, FaLocationDot } from "react-icons/fa6";
import { IoCall, IoRocketSharp, IoStatsChart } from "react-icons/io5";
import { MdEmail, MdLightbulb, MdBusinessCenter } from "react-icons/md";
import HeroImg from "@/assets/hero.png";
import IdeaImg from "@/assets/idea.webp";
import DevImg from "@/assets/developers.jpeg";
import StartupImg from "@/assets/startup.webp";
import BusinessImg from "@/assets/business.jpeg";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Home = () => {
  // Prevent the white status bar on mobile
  useEffect(() => {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#060606";
  }, []);

  return (
    <>
      <BlackSpotlight>
        <div className="text-white overflow-hidden">
          <HeroPage />
          <About />
          <HowItWorks />
          <Testimonials />
          <Stats />
          <Contact />
        </div>
      </BlackSpotlight>
    </>
  );
};

const HeroPage = () => {
  return (
    <div className="min-h-[40rem] h-screen py-20 sm:flex relative overflow-hidden">
      <motion.div 
        className="pl-5 h-full flex flex-col justify-center sm:w-7/12 md:pl-16"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 
          className="font-libre text-6xl md:text-7xl lg:text-[6.5rem] font-bold text-white"
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ delay: 0.3, duration: 1 }}
        >
          Turn
          <br />
          Ideas into
          <br />
          Reality
        </h1>
        <motion.div 
          className="my-5 text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Bridging Ideas, Developers & Businesses through innovation.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <Button className="text-lg px-6 py-6">
            Innovate now <FaLongArrowAltRight className="ml-2" />
          </Button>
        </motion.div>
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <span className="text-gray-400 mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaArrowDown className="text-indigo-500" />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div 
        className="w-5/12 absolute top-0 right-0 hidden sm:w-1/2 h-full sm:flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img 
          src={HeroImg} 
          className="w-4/6"
          animate={{ 
            y: [0, -15, 0],
            filter: ["drop-shadow(0 0 15px rgba(255, 255, 255, 0.3))", "drop-shadow(0 0 25px rgba(255, 255, 255, 0.5))", "drop-shadow(0 0 15px rgba(255, 255, 255, 0.3))"] 
          }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
      </motion.div>
    </div>
  );
};

const About = () => {
  const cards = [
    {
      title: "Individuals",
      description:
        "Submit tech ideas\n AI enhances them by analyzing market demand, feasibility, and technology stack.",
      image: IdeaImg,
      btnText: "Create ideas",
      icon: <MdLightbulb className="text-yellow-400" size={28} />
    },
    {
      title: "Developers",
      description:
        "Developers & Open-Source Contributors pick projects, build them, and credit the idea creator.",
      image: DevImg,
      btnText: "Create Projects",
      icon: <FaCode className="text-blue-400" size={28} />
    },
    {
      title: "Startups",
      description:
        "Successful projects with high potential can grow into startups, attracting funding, and business opportunities.",
      image: StartupImg,
      btnText: "Explore Ideas",
      icon: <IoRocketSharp className="text-green-400" size={28} />
    },
    {
      title: "Businesses",
      description:
        "Businesses discover, acquire, or fund promising projects with potential, and hire top contributors.",
      image: BusinessImg,
      btnText: "Explore Projects",
      icon: <MdBusinessCenter className="text-purple-400" size={28} />
    },
  ];

  return (
    <div className="py-20">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-6xl bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent font-bold">What is Innovatix?</h1>
        <p className="mx-auto my-8 text-xl max-w-3xl text-gray-300">
          Innovatix is a collaborative platform that brings together creative minds, skilled developers, promising startups, and established businesses to transform ideas into reality.
        </p>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((e, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="px-3 py-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-t border-white/20 m-4 max-w-80 hover:shadow-xl hover:shadow-indigo-900/20 transition-all duration-300 rounded-xl overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="flex justify-center mb-4 relative">
                <motion.img
                  src={e.image}
                  className="rounded-full aspect-square w-36 mx-auto object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
              <CardTitle className="text-3xl font-josefins text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {e.title}
              </CardTitle>
              <CardContent className="text-center text-lg text-gray-300 my-4">
                {e.description}
              </CardContent>
              <div className="flex justify-center mt-2">
                <Button className="bg-indigo-700 hover:bg-indigo-800 text-white shadow-lg shadow-indigo-900/30 transition-all duration-300 transform group-hover:translate-y-1">
                  {e.btnText}
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Submit Your Idea",
      description: "Share your tech innovation concept through our intuitive submission system",
      icon: <MdLightbulb size={30} />
    },
    {
      title: "AI Enhancement",
      description: "Our AI analyzes and enhances your idea by evaluating feasibility and market potential",
      icon: <IoStatsChart size={30} />
    },
    {
      title: "Developer Matching",
      description: "Connect with skilled developers passionate about bringing your concept to life",
      icon: <FaUsers size={30} />
    },
    {
      title: "Build & Launch",
      description: "Collaborate to develop a working prototype and prepare for market introduction",
      icon: <IoRocketSharp size={30} />
    }
  ];

  return (
    <div className="py-20 px-6 md:px-16 bg-gradient-to-b from-black/0 via-indigo-950/10 to-black/0">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">How It Works</h2>
        <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">Our streamlined process takes you from concept to creation</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 right-0 w-full h-[2px] bg-gradient-to-r from-indigo-600 to-transparent transform translate-x-1/2"></div>
            )}
            <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/10 rounded-xl p-6 border border-indigo-500/20 backdrop-blur-sm hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 h-full flex flex-col items-center text-center">
              <motion.div 
                className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-indigo-600/30"
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                <div className="text-white">
                  {step.icon}
                </div>
              </motion.div>
              <h3 className="text-2xl font-bold mb-2 text-white">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Innovatix helped transform my simple concept into a thriving application with over 10,000 users in just six months.",
      name: "Sarah Johnson",
      role: "Idea Creator"
    },
    {
      quote: "As a developer, finding meaningful projects was challenging until I joined Innovatix. Now I work on innovations I'm passionate about.",
      name: "Michael Chen",
      role: "Senior Developer"
    },
    {
      quote: "We discovered our flagship product through Innovatix and acquired the entire project for our enterprise solution.",
      name: "Emily Rodriguez",
      role: "CTO, TechVentures"
    }
  ];

  return (
    <div className="py-20 px-6 md:px-16">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Success Stories</h2>
        <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">Hear from the people who have experienced the Innovatix difference</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
          key={index}
          className="bg-gradient-to-br from-indigo-900/30 to-purple-900/20 rounded-xl p-8 border border-indigo-500/20 backdrop-blur-sm hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex flex-col h-full">
            <div className="text-3xl text-indigo-400 mb-4">"</div>
            <p className="text-gray-300 italic flex-grow">{testimonial.quote}</p>
            <div className="mt-6">
              <p className="font-bold text-white">{testimonial.name}</p>
              <p className="text-indigo-400">{testimonial.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);
};

const Stats = () => {
const [count1, setCount1] = useState(0);
const [count2, setCount2] = useState(0);
const [count3, setCount3] = useState(0);
const [count4, setCount4] = useState(0);

const statsRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        const timer1 = setInterval(() => {
          setCount1(prev => {
            const next = prev + 1;
            if (next >= 500) {
              clearInterval(timer1);
              return 500;
            }
            return next;
          });
        }, 10);
        
        const timer2 = setInterval(() => {
          setCount2(prev => {
            const next = prev + 1;
            if (next >= 1250) {
              clearInterval(timer2);
              return 1250;
            }
            return next;
          });
        }, 5);
        
        const timer3 = setInterval(() => {
          setCount3(prev => {
            const next = prev + 1;
            if (next >= 78) {
              clearInterval(timer3);
              return 78;
            }
            return next;
          });
        }, 30);
        
        const timer4 = setInterval(() => {
          setCount4(prev => {
            const next = prev + 0.1;
            if (next >= 2.5) {
              clearInterval(timer4);
              return 2.5;
            }
            return next;
          });
        }, 40);
        
        return () => {
          clearInterval(timer1);
          clearInterval(timer2);
          clearInterval(timer3);
          clearInterval(timer4);
        };
      }
    },
    { threshold: 0.1 }
  );
  
  if (statsRef.current) {
    observer.observe(statsRef.current);
  }
  
  return () => {
    if (statsRef.current) {
      observer.unobserve(statsRef.current);
    }
  };
}, []);

return (
  <div className="py-20 px-6 md:px-16 bg-gradient-to-b from-black/0 via-indigo-950/10 to-black/0" ref={statsRef}>
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Our Impact</h2>
      <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">Building the future, one innovation at a time</p>
    </motion.div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      <motion.div 
        className="bg-gradient-to-br from-indigo-900/30 to-purple-900/20 rounded-xl p-4 sm:p-6 border border-indigo-500/20 backdrop-blur-sm text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-2">{count1}+</div>
        <p className="text-gray-300">Ideas Submitted</p>
      </motion.div>
      
      <motion.div 
        className="bg-gradient-to-br from-indigo-900/30 to-purple-900/20 rounded-xl p-4 sm:p-6 border border-indigo-500/20 backdrop-blur-sm text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-2">{count2}+</div>
        <p className="text-gray-300">Developers</p>
      </motion.div>
      
      <motion.div 
        className="bg-gradient-to-br from-indigo-900/30 to-purple-900/20 rounded-xl p-4 sm:p-6 border border-indigo-500/20 backdrop-blur-sm text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-2">{count3}</div>
        <p className="text-gray-300">Successful Startups</p>
      </motion.div>
      
      <motion.div 
        className="bg-gradient-to-br from-indigo-900/30 to-purple-900/20 rounded-xl p-4 sm:p-6 border border-indigo-500/20 backdrop-blur-sm text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-2">${count4.toFixed(1)}M</div>
        <p className="text-gray-300">Funding Raised</p>
      </motion.div>
    </div>
  </div>
);
};

const Contact = () => {
return (
  <div className="py-20 px-6 md:px-16">
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Let's Connect</h2>
      <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">Have questions or ideas? We'd love to hear from you!</p>
    </motion.div>
    
    <div className="flex flex-wrap-reverse gap-3 py-10 mx-auto md:flex-nowrap">
      <motion.form 
        className="w-full my-5 md:mx-10 bg-gradient-to-br from-indigo-900/30 to-purple-900/20 p-8 rounded-xl border border-indigo-500/20 backdrop-blur-sm"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-6">
          <label htmlFor="name" className="text-xl mx-1 text-gray-300 block mb-2">
            Name
          </label>
          <Input
            type="text"
            name="name"
            id="name"
            className="bg-black/30 border-indigo-500/30 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 rounded-xl mb-3 text-white"
            placeholder="John Wick"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="text-xl mx-1 text-gray-300 block mb-2">
            Email
          </label>
          <Input
            type="email"
            name="email"
            id="email"
            className="bg-black/30 border-indigo-500/30 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 rounded-xl mb-3 text-white"
            placeholder="john@wick.com"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="phone" className="text-xl mx-1 text-gray-300 block mb-2">
            Phone no.
          </label>
          <Input
            name="phone"
            id="phone"
            className="bg-black/30 border-indigo-500/30 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 rounded-xl mb-3 text-white"
            placeholder="+91 9876543210"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="text-xl mx-1 text-gray-300 block mb-2">
            Your message
          </label>
          <Textarea
            name="message"
            id="message"
            className="bg-black/30 border-indigo-500/30 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 rounded-xl mb-3 text-white"
            placeholder="Your message here"
            rows={5}
          />
        </div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            type="submit"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-600/30 px-8 py-6 text-lg mx-auto flex items-center"
          >
            Send message
          </Button>
        </motion.div>
      </motion.form>
      
      <motion.div 
        className="w-full"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-3xl text-indigo-500 font-bold">Contact us</p>
        <h2 className="text-4xl my-3 font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Get in touch</h2>
        <p className="text-xl text-gray-300 mb-8">
          Have a question or idea? Reach out to us — we'd love to connect!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            className="flex items-center bg-gradient-to-br from-indigo-900/30 to-purple-900/20 p-4 rounded-xl border border-indigo-500/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(79, 70, 229, 0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-indigo-600 p-3 rounded-full mr-4 shadow-lg shadow-indigo-600/30">
              <IoCall size={24} className="text-white" />
            </div>
            <div>
              <div className="text-2xl text-white font-bold">Call us</div>
              <div className="text-indigo-300">+91 9876543210</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-center bg-gradient-to-br from-indigo-900/30 to-purple-900/20 p-4 rounded-xl border border-indigo-500/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(79, 70, 229, 0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-indigo-600 p-3 rounded-full mr-4 shadow-lg shadow-indigo-600/30">
              <MdEmail size={24} className="text-white" />
            </div>
            <div>
              <div className="text-2xl text-white font-bold">Email</div>
              <div className="text-indigo-300">kaushik.s.contact@gmail.com</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-center bg-gradient-to-br from-indigo-900/30 to-purple-900/20 p-4 rounded-xl border border-indigo-500/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(79, 70, 229, 0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-indigo-600 p-3 rounded-full mr-4 shadow-lg shadow-indigo-600/30">
              <FaLocationDot size={24} className="text-white" />
            </div>
            <div>
              <div className="text-2xl text-white font-bold">Address</div>
              <div className="text-indigo-300">Quantum University, Roorkee, India</div>
            </div>
          </motion.div>
          <motion.div 
                className="flex items-center bg-gradient-to-br from-indigo-900/30 to-purple-900/20 p-4 rounded-xl border border-indigo-500/20 backdrop-blur-sm"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(79, 70, 229, 0.2)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-indigo-600 p-3 rounded-full mr-4 shadow-lg shadow-indigo-600/30">
                  <FaGlobe size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-2xl text-white font-bold">Website</div>
                  <div className="text-indigo-300">innovatix.com</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };



export default Home;