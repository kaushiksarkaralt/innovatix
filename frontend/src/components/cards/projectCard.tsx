import { useState } from "react";
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
import { FaGithub, FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { MdOutlineInsertComment } from "react-icons/md";
import { Badge } from "../ui/badge";

interface ProjectCardProps {
  title: string;
  repo: string;
  owner: {
    fullName: string;
    username: string;
  };
  technologies: string[];
  innovationTitle: string;
  likes: number;
  tags: string[];
  comments: number;
}

const ProjectCard = ({
  title,
  repo,
  owner,
  technologies,
  innovationTitle,
  tags,
  likes: initialLikes,
  comments,
}: ProjectCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  
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
      <Card className="w-full max-w-[22rem] md:max-w-96 mx-auto my-6 sm:my-8 md:m-6 relative overflow-hidden backdrop-blur-sm bg-black/40 border-gray-800 hover:border-indigo-700 transition-colors duration-300">
        {/* Abstract background pattern */}
        <motion.div 
          className="absolute -z-10 inset-0 opacity-10"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 100%" }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            background: "radial-gradient(circle at 40% 60%, rgba(75, 138, 255, 0.7), transparent 30%), radial-gradient(circle at 80% 20%, rgba(123, 97, 255, 0.7), transparent 30%)"
          }}
        />

        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <IoPersonCircle size={35} className="text-indigo-300 mr-2" />
              <div>
                <p className="text-base leading-4 text-white font-medium">
                  {owner.fullName}
                </p>
                <p className="text-sm leading-4 text-indigo-300">
                  @{owner.username}
                </p>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={repo} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="rounded-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700"
                >
                  <FaGithub size={20} className="mr-2" /> View Repository
                </Button>
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            layout="position"
            transition={{ layout: { duration: 0.3, type: "spring" } }}
          >
            <CardTitle className="text-2xl mt-4 leading-6 tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300">
              {title}
            </CardTitle>
          </motion.div>
        </CardHeader>
        
        <CardContent className="-mt-1">
          <motion.div
            layout="position"
            transition={{ layout: { duration: 0.3, type: "spring" } }}
          >
            <CardDescription className="text-gray-200 text-base leading-6 flex flex-col space-y-4 mb-3">
              <motion.p 
                whileHover={{ x: 5 }}
                className="flex flex-col sm:flex-row sm:items-center"
              >
                <span className="font-medium text-white mr-2">Innovation:</span>
                <span className="text-blue-400">{innovationTitle}</span>
              </motion.p>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex flex-col space-y-2"
              >
                <span className="font-medium text-white">Technologies:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge className="bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-600 hover:to-indigo-500 text-white border-0">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex flex-col space-y-2"
              >
                <span className="font-medium text-white">Tags:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {tags.map((tag, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white border-0">
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </CardDescription>
          </motion.div>
          
          <CardFooter className="px-0 pt-4 pb-1">
            <div className="flex justify-between items-center w-full">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700"
                >
                  Show Details
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
                    <span className={`${isLiked ? "text-blue-500" : "text-gray-300"}`}>{likes}</span>
                    <motion.div
                      animate={isLiked ? { scale: [1, 1.5, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {isLiked ? <FaThumbsUp size={16} className="text-blue-500 ml-1" /> : <FaRegThumbsUp size={16} className="text-gray-300 ml-1" />}
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
              </div>
            </div>
          </CardFooter>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;