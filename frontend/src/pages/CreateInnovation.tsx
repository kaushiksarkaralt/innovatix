import { BlackSpotlight } from "@/components/backgrounds/black-spotlight";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PiStarFourFill } from "react-icons/pi";

const CreateInnovation = () => {
  return (
    <BlackSpotlight>
      <div className="min-h-96 py-20">
        <h1 className="text-5xl text-center mx-3">Create Innovation</h1>
        <form className="bg-neutral-900 mx-3 md:mx-5 lg:mx-10 rounded-2xl my-5 px-5 py-8 text-xl">
          <div className="my-3">
            <p className="">Enter Innovation Title</p>
            <Input
              type="text"
              className="bg-neutral-100 placeholder:text-muted text-muted text-lg md:text-lg"
              placeholder="Enter the title of your innovation"
            />
          </div>
          <div className="my-3">
            <p className="">Describe your innovation in detail</p>
            <Textarea
              className="bg-neutral-100 placeholder:text-muted text-muted h-60 text-lg md:text-lg"
              placeholder="Describe your idea in details and enhance it with AI"
            />
          </div>
          <Button className="w-full my-3">
            <PiStarFourFill /> Enhance With AI
          </Button>
        </form>
      </div>
    </BlackSpotlight>
  );
};

export default CreateInnovation;
