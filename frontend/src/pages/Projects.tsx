import { BlackSpotlight } from "@/components/backgrounds/black-spotlight";
import ProjectCard from "@/components/cards/projectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import { IoFilterCircle } from "react-icons/io5";

const Projects = () => {
  return (
    <BlackSpotlight>
      <div className="py-32 min-h-screen">
        <TopPortion />
        <ProjectsList />
      </div>
    </BlackSpotlight>
  );
};

const TopPortion = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-josefins md:text-6xl">
        Explore Projects
      </h1>
      <div className="flex justify-center items-center my-5">
        <form className="flex space-x-2">
          <Input
            className="bg-black/45 border-gray-800 w-48 md:w-96"
            placeholder="Search Innovations"
          />
          <Button type="submit">Search</Button>
        </form>
        <Select
          onValueChange={(val) => {
            console.log(val);
          }}
        >
          <SelectTrigger className="border-0 ml-5">
            <IoFilterCircle className="text-white" size={40} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="likes">Likes</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
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
    <div className="flex justify-center flex-wrap mt-20">
      {projects.map((project, index) => (
        <ProjectCard
          title={project.title}
          repo={project.repo}
          owner={project.owner}
          technologies={project.technologies}
          innovationTitle={project.innovationTitle}
          likes={project.likes}
          tags={project.tags}
          comments={project.comments}
          key={index}
        />
      ))}
    </div>
  );
};

export default Projects;
