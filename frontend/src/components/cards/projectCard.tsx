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
import { FaGithub, FaRegThumbsUp } from "react-icons/fa";
import { MdOutlineInsertComment } from "react-icons/md";

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
  likes,
  comments,
}: ProjectCardProps) => {
  return (
    <Card className="w-[28rem] m-5">
      <CardHeader>
        <div className="flex">
          <div className="flex items-center">
            <IoPersonCircle size={35} className="text-muted-foreground" />
            <div>
              <p className="text-base leading-3 text-muted-foreground">
                {owner.fullName}
              </p>
              <p className="text-sm leading-3 text-muted-foreground">
                @{owner.username}
              </p>
            </div>
          </div>
        </div>
        <CardTitle className="text-2xl leading-5 mt-1 tracking-tight font-normal">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="-mt-2">
        <CardDescription className="text-gray-200 text-lg leading-5 flex flex-col space-y-2 mb-3">
          <p>
            <span className="underline underline-offset-3">Innovation:</span>
            <span className="text-blue-400"> {innovationTitle}</span>
          </p>
          <p>
            <span className="underline underline-offset-3">
              Technologies Used:
            </span>
            <span className="text-gray-400"> {technologies.join(", ")}</span>
          </p>
          <p>
            <span className="underline underline-offset-3">Tags:</span>
            <span className="text-gray-400"> {tags.join(", ")}</span>
          </p>
        </CardDescription>
        <CardFooter className="px-0 pt-3">
          <div className="flex justify-between items-center w-full">
            <div className="w-1/3">
              <Button size="sm">Show details</Button>
            </div>
            <div className="flex space-x-2">
              <div className="flex px-3 space-x-2 sm:space-x-0 bg-muted rounded-4xl">
                <Button variant="ghost" size="sm">
                  <span>{likes}</span>
                  <FaRegThumbsUp size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="">
                  <span>{comments}</span>
                  <MdOutlineInsertComment size={20} />
                </Button>
              </div>
              <a href={repo} target="_blank">
                <Button variant="secondary" size="sm" className="rounded-full">
                  <FaGithub size={20} />
                </Button>
              </a>
            </div>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
