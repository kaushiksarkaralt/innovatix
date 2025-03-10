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
import { FaRegCopy, FaRegThumbsUp } from "react-icons/fa";
import { MdOutlineInsertComment } from "react-icons/md";
import { Badge } from "../ui/badge";

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
}

const InnovationCard = ({
  title,
  description,
  owner,
  complexity,
  feasibility,
  likes,
  comments,
}: InnovationCardProps) => {
  // bg-green-600 5
  // bg-lime-400 4
  // bg-yellow-400 3
  // bg-orange-500 2
  // bg-red-500 1

  const getBackgroundClass = (value: number) => {
    const styles: { [key: number]: string; default: string } = {
      1: "bg-red-500 text-white",
      2: "bg-orange-500 text-white",
      3: "bg-yellow-400 text-black",
      4: "bg-lime-400 text-black",
      5: "bg-green-600 text-white",
      default: "bg-orange-500 text-white",
    };
    return styles[value] || styles.default;
  };

  const complexityBackground = getBackgroundClass(6 - complexity);
  const innovationBackground = getBackgroundClass(feasibility);

  return (
    <Card className="w-[28rem] m-5">
      <CardHeader>
        <div className="flex">
          <div className="flex items-center w-1/3">
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
          <div className="inline-block ml-auto">
            <Badge
              variant="default"
              className={`rounded-4xl mx-1 ${complexityBackground}`}
            >
              Complexity: {complexity}
            </Badge>
            <Badge
              variant="default"
              className={`rounded-4xl mx-1 ${innovationBackground}`}
            >
              Feasibility: {feasibility}
            </Badge>
          </div>
        </div>
        <CardTitle className="text-xl leading-5 tracking-tight font-normal">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="-mt-2">
        <CardDescription className="text-gray-300 text-base leading-5 ">
          {description}
        </CardDescription>
        <CardFooter className="px-0 pt-3">
          <div className="flex justify-around items-center w-full">
            <div className="w-1/3">
              <Button size="sm">Read More</Button>
            </div>
            <div className="flex justify-evenly w-2/3 space-x-2 sm:space-x-0">
              <Button variant="secondary" size="sm" className="rounded-4xl">
                <span>{likes}</span>
                <FaRegThumbsUp size={20} />
              </Button>
              <Button variant="secondary" size="sm" className="rounded-4xl">
                <span>{comments}</span>
                <MdOutlineInsertComment size={20} />
              </Button>
              <Button variant="secondary" size="sm" className="rounded-4xl">
                <span>Copy</span>
                <FaRegCopy size={20} />
              </Button>
            </div>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default InnovationCard;
