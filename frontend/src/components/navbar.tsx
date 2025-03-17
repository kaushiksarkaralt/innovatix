import { FaBars } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const menuVariants = {
    closed: { 
      opacity: 0,
      height: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    },
    open: { 
      opacity: 1,
      height: "auto",
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className={`fixed w-full z-50 ${scrolled ? 'bg-black/70' : 'bg-black/40'} backdrop-blur-md text-white`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto md:flex md:items-center">
        <div className="h-full flex justify-between p-4 items-center md:w-1/3">
          <motion.div 
            className="font-prata text-3xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, color: "#9333ea" }}
          >
            INNOVATIX
          </motion.div>
          
          <motion.div 
            className="md:hidden cursor-pointer"
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
          >
            {isOpen ? (
              <FaTimes className="text-3xl text-purple-500" />
            ) : (
              <FaBars className="text-3xl" />
            )}
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:w-2/3 md:justify-end">
          <ul className="flex items-center p-3 space-x-6 md:text-xl">
            {["Home", "About", "Innovations", "Projects", "Contact"].map((item, i) => (
              <motion.li 
                key={item}
                className="border-b-2 border-transparent hover:border-purple-600"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                whileHover={{ y: -5, color: "#9333ea" }}
              >
                <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
          
          <div className="flex items-center px-4">
            <Link to="/login">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="secondary" className="mx-2 bg-purple-700 hover:bg-purple-800">
                  Log In
                </Button>
              </motion.div>
            </Link>
            
            <Link to="/signup">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="mx-2 border-purple-500 text-white hover:bg-purple-800">
                  Sign Up
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md overflow-hidden md:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <motion.ul className="flex flex-col items-center p-5 text-2xl space-y-4">
                {["Home", "About", "Innovations", "Projects", "Contact"].map((item) => (
                  <motion.li 
                    key={item}
                    className="border-b-2 border-transparent hover:border-purple-600 w-full text-center py-2"
                    variants={itemVariants}
                    onClick={closeMenu}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.div 
                className="flex justify-center gap-4 py-6"
                variants={itemVariants}
              >
                <Link to="/login" onClick={closeMenu}>
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Button variant="secondary" className="bg-purple-700 hover:bg-purple-800">
                      Log In
                    </Button>
                  </motion.div>
                </Link>
                
                <Link to="/signup" onClick={closeMenu}>
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-800">
                      Sign Up
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Navbar;
