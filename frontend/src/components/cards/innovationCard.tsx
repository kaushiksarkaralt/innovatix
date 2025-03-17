import { motion } from "framer-motion";
import { IoPersonCircle } from "react-icons/io5";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Button } from "../ui/button";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { MdOutlineInsertComment } from "react-icons/md";
import { Badge } from "../ui/badge";
import { PiProjectorScreenChart } from "react-icons/pi";
import { useState } from "react";

interface InnovationCardProps {
  title: string;
  description: string;
  owner: {
    fullName: string;
    username: string;
  };
  complexity: number;
  feasibility: number;
  likes: number;
  comments: number;
  projects: number;
}

const InnovationCard = ({
  title,
  description,
  owner,
  complexity,
  feasibility,
  likes: initialLikes,
  comments,
  projects
}: InnovationCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const getBackgroundClass = (value: number) => {
    const styles: { [key: number]: string; default: string } = {
      1: "from-red-600 to-red-500 text-white",
      2: "from-orange-600 to-orange-400 text-white",
      3: "from-yellow-500 to-yellow-300 text-black",
      4: "from-lime-500 to-lime-300 text-black",
      5: "from-green-700 to-green-500 text-white",
      default: "from-orange-600 to-orange-400 text-white",
    };
    return styles[value] || styles.default;
  };

  const complexityBackground = getBackgroundClass(6 - complexity);
  const innovationBackground = getBackgroundClass(feasibility);

  const truncatedDescription = isExpanded 
    ? description 
    : description.length > 200 
      ? `${description.substring(0, 200)}...` 
      : description;

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
    >
      <Card className="w-96 md:w-[26rem] m-5 relative overflow-hidden backdrop-blur-sm bg-black/40 border-gray-800 hover:border-purple-800 transition-colors duration-300">
        {/* Abstract background pattern */}
        <motion.div 
          className="absolute -z-10 inset-0 opacity-10"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 100%" }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            background: "radial-gradient(circle at 30% 50%, rgba(138, 75, 255, 0.7), transparent 30%), radial-gradient(circle at 70% 20%, rgba(255, 75, 228, 0.7), transparent 30%)"
          }}
        />
        
        <CardHeader className="pb-2">
          <div className="flex">
            <motion.div 
              className="flex items-center w-1/3"
              whileHover={{ scale: 1.05 }}
            >
              <IoPersonCircle size={35} className="text-purple-300 mr-2" />
              <div>
                <p className="text-base leading-4 text-white font-medium">
                  {owner.fullName}
                </p>
                <p className="text-sm leading-4 text-purple-300">
                  @{owner.username}
                </p>
              </div>
            </motion.div>
            
            <div className="inline-block ml-auto space-y-2 sm:space-y-0 sm:space-x-2">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant="default"
                  className={`rounded-full px-3 py-1 bg-gradient-to-r ${complexityBackground}`}
                >
                  Complexity: {complexity}
                </Badge>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant="default"
                  className={`rounded-full px-3 py-1 bg-gradient-to-r ${innovationBackground}`}
                >
                  Feasibility: {feasibility}
                </Badge>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            layout="position"
            transition={{ layout: { duration: 0.3, type: "spring" } }}
          >
            <CardTitle className="text-xl mt-4 leading-6 tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
              {title}
            </CardTitle>
          </motion.div>
        </CardHeader>
        
        <CardContent className="-mt-1">
          <motion.div
            layout="position"
            transition={{ layout: { duration: 0.3, type: "spring" } }}
          >
            <CardDescription className="text-gray-200 text-base leading-6">
              {truncatedDescription}
            </CardDescription>
          </motion.div>
          
          <CardFooter className="px-0 pt-5 pb-1">
            <div className="flex justify-between items-center w-full">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="sm" 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                >
                  {isExpanded ? "Show Less" : "Read More"}
                </Button>
              </motion.div>
              
              <div className="flex px-3 py-1 space-x-2 bg-black/30 backdrop-blur-md rounded-full border border-gray-800">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="rounded-full flex items-center space-x-1 hover:bg-transparent"
                    onClick={handleLike}
                  >
                    <span className={`${isLiked ? "text-pink-500" : "text-gray-300"}`}>{likes}</span>
                    <motion.div
                      animate={isLiked ? { scale: [1, 1.5, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {isLiked ? <FaThumbsUp size={16} className="text-pink-500 ml-1" /> : <FaRegThumbsUp size={16} className="text-gray-300 ml-1" />}
                    </motion.div>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="rounded-full flex items-center space-x-1 hover:bg-transparent"
                  >
                    <span className="text-gray-300">{comments}</span>
                    <MdOutlineInsertComment size={18} className="text-gray-300 ml-1" />
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="rounded-full flex items-center space-x-1 hover:bg-transparent"
                  >
                    <span className="text-gray-300">{projects}</span>
                    <PiProjectorScreenChart size={18} className="text-gray-300 ml-1" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </CardFooter>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default InnovationCard;