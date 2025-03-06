import { BlackSpotlight } from "@/components/backgrounds/black-spotlight";
import { Button } from "@/components/ui/button";
import { FaLongArrowAltRight } from "react-icons/fa";
import HeroImg from "@/assets/hero.png";
import IdeaImg from "@/assets/idea.webp";
import DevImg from "@/assets/developers.jpeg";
import StartupImg from "@/assets/startup.webp";
import BusinessImg from "@/assets/business.jpeg";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const Home = () => {
  // Prevent the white status bar on mobile
  document.getElementsByTagName("body")[0].style.backgroundColor = "#060606";

  return (
    <>
      <BlackSpotlight>
        <div className="text-white">
          <HeroPage />
          <About />
        </div>
      </BlackSpotlight>
    </>
  );
};

const HeroPage = () => {
  return (
    <div className="min-h-[40rem] h-screen py-20 sm:flex relative">
      <div className="pl-5 h-full flex flex-col justify-center sm:w-7/12 md:pl-16 ">
        <h1 className="font-libre text-6xl md:text-7xl lg:text-[6.5rem]">
          Turn
          <br />
          Ideas into
          <br />
          Reality
        </h1>
        <div className="my-5">Bridging Ideas, Developers & Businesses.</div>
        <div>
          <Button className="text-lg">
            Innovate now <FaLongArrowAltRight />
          </Button>
        </div>
      </div>
      <div className="w-5/12 absolute top-0 right-0 hidden sm:w-1/2 h-full sm:flex justify-center items-center">
        <img src={HeroImg} className="w-4/6" />
      </div>
    </div>
  );
};

const About = () => {
  const cards = [
    {
      title: "Individuals",
      description:
        "Submit tech ideas\n AI enhances them by analyzing market demand, feasibility, and technology stack.",
      image: IdeaImg,
      btnText: "Create ideas"
    },
    {
      title: "Developers",
      description:
        "Developers & Open-Source Contributors pick projects, build them, and credit the idea creator.",
      image: DevImg,
      btnText: "Create Projects"
    },
    {
      title: "Startups",
      description:
        "Successful projects with high potential can grow into thriving startups, attracting funding, users, and business opportunities.",
      image: StartupImg,
      btnText: "Explore Ideas"
    },
    {
      title: "Businesses",
      description:
        "Businesses discover, acquire, or fund promising projects with potential, and hire top contributors.",
      image: BusinessImg,
      btnText: "Explore Projects"
    },
  ];

  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl">What is Innovatix?</h1>
        <p className="mx-3 my-8 text-xl">
          Innovatix is a collaborative platorm where:
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {cards.map((e) => (
          <Card className="px-3 bg-white/10 backdrop-blur-xs m-4 max-w-80">
            <img
              src={e.image}
              className="rounded-full aspect-square w-40 mx-auto"
            />
            <CardTitle className="text-4xl font-josefins text-center ">
              {e.title}
            </CardTitle>
            <CardContent className="text-center text-lg">
              {e.description}
            </CardContent>
            <div className="flex justify-center"><Button className="bg-indigo-700 text-white">{e.btnText}</Button></div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
