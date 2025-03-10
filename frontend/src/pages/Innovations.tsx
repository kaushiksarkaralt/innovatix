import { BlackSpotlight } from "@/components/backgrounds/black-spotlight";
import InnovationCard from "@/components/cards/innovationCard";
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
      <div className="py-32 min-h-screen">
        <TopPortion />
        <InnovationsList />
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

const InnovationsList = () => {
  const innovations = [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In non itaque minima maxime. Ea, praesentium?",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cupiditate sequi tempora illum placeat nam a ipsa, pariatur itaque, quis blanditiis, quasi est laborum nobis aut magnam voluptate animi eligendi. Veniam esse, rerum distinctio labore, repudiandae neque vitae eligendi dicta deleniti, totam quia. Temporibus odit animi molestiae possimus, quidem, sit error facilis, eligendi incidunt explicabo nulla aut laboriosam harum? Nulla ipsam unde nisi nam exercitationem quos voluptates? Repudiandae hic eveniet omnis et architecto qui illum ipsam recusandae, sapiente quia dolor ratione sunt reiciendis magnam maiores distinctio corporis mollitia sit quae expedita numquam fugiat. Dolore eveniet maiores aut optio incidunt laborum.",
      owner: {
        username: "username",
        fullName: "Full Name",
      },
      complexity: 4,
      feasibility: 4,
      likes: 20,
      comments: 12,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In non itaque minima maxime. Ea, praesentium?",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cupiditate sequi tempora illum placeat nam a ipsa, pariatur itaque, quis blanditiis, quasi est laborum nobis aut magnam voluptate animi eligendi. Veniam esse, rerum distinctio labore, repudiandae neque vitae eligendi dicta deleniti, totam quia. Temporibus odit animi molestiae possimus, quidem, sit error facilis, eligendi incidunt explicabo nulla aut laboriosam harum? Nulla ipsam unde nisi nam exercitationem quos voluptates? Repudiandae hic eveniet omnis et architecto qui illum ipsam recusandae, sapiente quia dolor ratione sunt reiciendis magnam maiores distinctio corporis mollitia sit quae expedita numquam fugiat. Dolore eveniet maiores aut optio incidunt laborum.",
      owner: {
        username: "username",
        fullName: "Full Name",
      },
      complexity: 3,
      feasibility: 5,
      likes: 20,
      comments: 12,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In non itaque minima maxime. Ea, praesentium?",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cupiditate sequi tempora illum placeat nam a ipsa, pariatur itaque, quis blanditiis, quasi est laborum nobis aut magnam voluptate animi eligendi. Veniam esse, rerum distinctio labore, repudiandae neque vitae eligendi dicta deleniti, totam quia. Temporibus odit animi molestiae possimus, quidem, sit error facilis, eligendi incidunt explicabo nulla aut laboriosam harum? Nulla ipsam unde nisi nam exercitationem quos voluptates? Repudiandae hic eveniet omnis et architecto qui illum ipsam recusandae, sapiente quia dolor ratione sunt reiciendis magnam maiores distinctio corporis mollitia sit quae expedita numquam fugiat. Dolore eveniet maiores aut optio incidunt laborum.",
      owner: {
        username: "username",
        fullName: "Full Name",
      },
      complexity: 3,
      feasibility: 2,
      likes: 20,
      comments: 12,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In non itaque minima maxime. Ea, praesentium?",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cupiditate sequi tempora illum placeat nam a ipsa, pariatur itaque, quis blanditiis, quasi est laborum nobis aut magnam voluptate animi eligendi. Veniam esse, rerum distinctio labore, repudiandae neque vitae eligendi dicta deleniti, totam quia. Temporibus odit animi molestiae possimus, quidem, sit error facilis, eligendi incidunt explicabo nulla aut laboriosam harum? Nulla ipsam unde nisi nam exercitationem quos voluptates? Repudiandae hic eveniet omnis et architecto qui illum ipsam recusandae, sapiente quia dolor ratione sunt reiciendis magnam maiores distinctio corporis mollitia sit quae expedita numquam fugiat. Dolore eveniet maiores aut optio incidunt laborum.",
      owner: {
        username: "username",
        fullName: "Full Name",
      },
      complexity: 5,
      feasibility: 1,
      likes: 20,
      comments: 12,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In non itaque minima maxime. Ea, praesentium?",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cupiditate sequi tempora illum placeat nam a ipsa, pariatur itaque, quis blanditiis, quasi est laborum nobis aut magnam voluptate animi eligendi. Veniam esse, rerum distinctio labore, repudiandae neque vitae eligendi dicta deleniti, totam quia. Temporibus odit animi molestiae possimus, quidem, sit error facilis, eligendi incidunt explicabo nulla aut laboriosam harum? Nulla ipsam unde nisi nam exercitationem quos voluptates? Repudiandae hic eveniet omnis et architecto qui illum ipsam recusandae, sapiente quia dolor ratione sunt reiciendis magnam maiores distinctio corporis mollitia sit quae expedita numquam fugiat. Dolore eveniet maiores aut optio incidunt laborum.",
      owner: {
        username: "username",
        fullName: "Full Name",
      },
      complexity: 2,
      feasibility: 5,
      likes: 20,
      comments: 12,
    },
  ];
  return (
    <div className="flex justify-center flex-wrap mt-20">
      {innovations.map((innovation, index) => (
        <InnovationCard
          title={innovation.title}
          description={innovation.description}
          owner={innovation.owner}
          complexity={innovation.complexity}
          feasibility={innovation.feasibility}
          likes={innovation.likes}
          comments={innovation.comments}
          key={index}
        />
      ))}
    </div>
  );
};

export default Innovations;
