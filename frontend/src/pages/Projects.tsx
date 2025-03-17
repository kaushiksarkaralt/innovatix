import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { BlackSpotlight } from "@/components/backgrounds/black-spotlight";
import ProjectCard from "@/components/cards/projectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoFilterCircle } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const titleVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", damping: 12 },
  },
};

const Projects = () => {
  return (
    <BlackSpotlight>
      <motion.div
        className="py-20 min-h-screen px-4 md:px-8 lg:px-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <TopPortion />
        <ProjectsList />
      </motion.div>
    </BlackSpotlight>
  );
};

const TopPortion = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <motion.div className="max-w-6xl mx-auto">
      <motion.h1
        className="text-5xl text-center font-josefins md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-blue-500 font-bold"
        variants={titleVariants}
      >
        Explore Projects
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
            className="bg-black/30 backdrop-blur-sm border-gray-700 w-full md:w-96 pl-12 pr-4 py-6 rounded-xl focus:ring-2 focus:ring-violet-500 transition-all"
            placeholder="Search Projects"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <Button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700"
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
              <IoFilterCircle className="text-violet-400 ml-2" size={24} />
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
        className="flex justify-center flex-wrap gap-3 mt-6"
        variants={itemVariants}
      >
        {[
          "All",
          "React",
          "TypeScript",
          "JavaScript",
          "Full-Stack",
          "AI",
          "Mobile",
        ].map((tag) => (
          <motion.span
            key={tag}
            className="px-4 py-1 bg-gradient-to-r from-violet-900/30 to-blue-900/30 border border-gray-700 rounded-full text-sm cursor-pointer hover:border-violet-500"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

const ProjectsList = () => {
  const projects = [
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      repo: "https://github.com/username/repo",
      owner: {
        fullName: "John Doe",
        username: "johndoe",
      },
      technologies: ["React", "TypeScript"],
      innovationTitle:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      tags: ["React", "TypeScript", "JavaScript", "Full-Stack"],
      likes: 10,
      comments: 5,
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      repo: "https://github.com/username/repo",
      owner: {
        fullName: "John Doe",
        username: "johndoe",
      },
      technologies: ["React", "TypeScript"],
      innovationTitle:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      tags: ["React", "TypeScript", "JavaScript", "Full-Stack"],
      likes: 10,
      comments: 5,
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      repo: "https://github.com/username/repo",
      owner: {
        fullName: "John Doe",
        username: "johndoe",
      },
      technologies: ["React", "TypeScript"],
      innovationTitle:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      tags: ["React", "TypeScript", "JavaScript", "Full-Stack"],
      likes: 10,
      comments: 5,
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      repo: "https://github.com/username/repo",
      owner: {
        fullName: "John Doe",
        username: "johndoe",
      },
      technologies: ["React", "TypeScript"],
      innovationTitle:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      tags: ["React", "TypeScript", "JavaScript", "Full-Stack"],
      likes: 10,
      comments: 5,
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      repo: "https://github.com/username/repo",
      owner: {
        fullName: "John Doe",
        username: "johndoe",
      },
      technologies: ["React", "TypeScript"],
      innovationTitle:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      tags: ["React", "TypeScript", "JavaScript", "Full-Stack"],
      likes: 10,
      comments: 5,
    },
  ];

  return (
    <motion.div
      className="max-w-7xl mx-auto flex flex-wrap mt-20 justify-center gap-6"
      variants={containerVariants}
    >
      <AnimatePresence>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
            whileHover={{
              y: -10,
              scale: 1.02,
              transition: { type: "spring", stiffness: 400 },
            }}
            className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.33%-20px)] mb-6"
          >
            <ProjectCard
              title={project.title}
              repo={project.repo}
              owner={project.owner}
              technologies={project.technologies}
              innovationTitle={project.innovationTitle}
              likes={project.likes}
              tags={project.tags}
              comments={project.comments}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;
export { ProjectsList };
