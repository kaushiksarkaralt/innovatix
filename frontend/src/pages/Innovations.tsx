import { useState } from "react";
import { motion } from "framer-motion";
import { BlackSpotlight } from "@/components/backgrounds/black-spotlight";
import InnovationCard from "@/components/cards/innovationCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPlus, FaSearch } from "react-icons/fa";
import { IoFilterCircle } from "react-icons/io5";

const Innovations = () => {
  return (
    <BlackSpotlight>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-32 min-h-screen"
      >
        <TopPortion />
        <InnovationsList />
      </motion.div>
    </BlackSpotlight>
  );
};

const titleVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15 
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 80,
      damping: 12
    }
  }
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const TopPortion = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <motion.div 
      className="max-w-6xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={staggerContainerVariants}
    >
      <motion.h1 
        className="text-5xl text-center font-josefins md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500 font-bold"
        variants={titleVariants}
      >
        Explore Innovations
      </motion.h1>
      
      <motion.div 
        className="flex flex-col md:flex-row justify-center items-center my-12 gap-4"
        variants={itemVariants}
      >
        <motion.form 
          className="flex w-full md:w-auto relative"
          whileHover={{ scale: 1.01 }}
        >
          <Input
            className="bg-black/30 backdrop-blur-sm border-gray-700 w-full md:w-96 pl-12 pr-4 py-6 rounded-xl focus:ring-2 focus:ring-purple-500 transition-all"
            placeholder="Search Innovations"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <Button 
            type="submit" 
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
          >
            Search
          </Button>
        </motion.form>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="ml-0 md:ml-4"
        >
          <Select
            onValueChange={(val) => {
              console.log(val);
            }}
          >
            <SelectTrigger className="border border-gray-700 bg-black/30 backdrop-blur-sm rounded-lg p-5 scale-115">
              <SelectValue placeholder="Filter" />
              <IoFilterCircle className="text-purple-400 ml-2" size={24} />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border border-gray-700">
              <SelectItem value="likes">Most Liked</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>
      </motion.div>
      
      <motion.div 
        variants={itemVariants}
        className="flex justify-center flex-wrap gap-3 mt-6"
      >
        {["All", "AI", "Blockchain", "IoT", "Sustainability", "Healthcare", "Education"].map((tag) => (
          <motion.span
            key={tag}
            className="px-4 py-1 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border border-gray-700 rounded-full text-sm cursor-pointer hover:border-purple-500"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
      
      <motion.div
        variants={itemVariants}
        className="flex justify-center mt-8"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 space-x-2">
            <FaPlus className="mr-2" /> Create Innovation
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const InnovationsList = () => {
  const innovations = [
    {
      title:
        "AI-Powered Sustainable Agriculture Solution",
      description:
        "A revolutionary approach that combines machine learning algorithms with IoT sensors to optimize crop yields while minimizing water usage and environmental impact. This system analyzes soil conditions, weather patterns, and plant health in real-time to provide actionable insights for farmers.",
      owner: {
        username: "ecotech",
        fullName: "Emma Rodriguez",
      },
      complexity: 4,
      feasibility: 4,
      likes: 120,
      comments: 32,
    },
    {
      title:
        "Blockchain-Based Medical Records Management System",
      description:
        "A secure and transparent platform for managing medical records across healthcare providers. Using blockchain technology, this innovation ensures data integrity while giving patients control over their information. The system includes smart contracts for secure access permissions and audit trails.",
      owner: {
        username: "healthblockchain",
        fullName: "Michael Chen",
      },
      complexity: 3,
      feasibility: 5,
      likes: 89,
      comments: 28,
    },
    {
      title:
        "Quantum-Resistant Encryption Protocol for IoT Devices",
      description:
        "A forward-thinking encryption framework designed to protect Internet of Things devices against potential threats from quantum computing. This lightweight yet powerful protocol can be implemented on even the most resource-constrained IoT devices without compromising performance.",
      owner: {
        username: "quantumsafe",
        fullName: "Sarah Johnson",
      },
      complexity: 5,
      feasibility: 3,
      likes: 64,
      comments: 19,
    },
    {
      title:
        "Peer-to-Peer Renewable Energy Trading Platform",
      description:
        "An innovative marketplace that enables homeowners with solar panels or other renewable energy sources to sell excess energy directly to neighbors. Built on distributed ledger technology, this platform creates local energy markets that decrease reliance on centralized utility companies.",
      owner: {
        username: "greenpower",
        fullName: "David Park",
      },
      complexity: 4,
      feasibility: 3,
      likes: 103,
      comments: 41,
    },
    {
      title:
        "AR-Based Education Platform for Remote Learning",
      description:
        "An augmented reality application that transforms remote education by creating immersive learning environments accessible via smartphones and tablets. Students can interact with 3D models, conduct virtual experiments, and collaborate with peers in shared AR spaces regardless of physical location.",
      owner: {
        username: "edufuture",
        fullName: "Priya Sharma",
      },
      complexity: 2,
      feasibility: 5,
      likes: 79,
      comments: 36,
    },
  ];

  return (
    <div className="mt-20">
      <motion.div 
        className="flex justify-center flex-wrap"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {innovations.map((innovation, index) => (
          <CardWrapper key={index} innovation={innovation} />
        ))}
      </motion.div>
    </div>
  );
};

const CardWrapper = ({ innovation }: { innovation: any }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: { 
          opacity: 1, 
          y: 0,
          transition: {
            type: "spring",
            stiffness: 80,
            damping: 12
          }
        }
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <InnovationCard
        title={innovation.title}
        description={innovation.description}
        owner={innovation.owner}
        complexity={innovation.complexity}
        feasibility={innovation.feasibility}
        likes={innovation.likes}
        comments={innovation.comments}
        projects={4}
      />
    </motion.div>
  );
};

export default Innovations;