import { BlackSpotlight } from "@/components/backgrounds/black-spotlight";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import { IoFilterCircle } from "react-icons/io5";

const Innovations = () => {
  return (
    <BlackSpotlight>
      <div className="py-25 min-h-screen">
        <TopPortion />
      </div>
    </BlackSpotlight>
  );
};

const TopPortion = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-josefins md:text-6xl">
        Explore Innovations
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

export default Innovations;
