import { BlackSpotlight } from "@/components/backgrounds/black-spotlight";
import { Button } from "@/components/ui/button";
import { FaGlobe, FaLongArrowAltRight } from "react-icons/fa";
import HeroImg from "@/assets/hero.png";
import IdeaImg from "@/assets/idea.webp";
import DevImg from "@/assets/developers.jpeg";
import StartupImg from "@/assets/startup.webp";
import BusinessImg from "@/assets/business.jpeg";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Textarea } from "@/components/ui/textarea";

const Home = () => {
  // Prevent the white status bar on mobile
  document.getElementsByTagName("body")[0].style.backgroundColor = "#060606";

  return (
    <>
      <BlackSpotlight>
        <div className="text-white">
          <HeroPage />
          <About />
          <Contact />
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
      btnText: "Create ideas",
    },
    {
      title: "Developers",
      description:
        "Developers & Open-Source Contributors pick projects, build them, and credit the idea creator.",
      image: DevImg,
      btnText: "Create Projects",
    },
    {
      title: "Startups",
      description:
        "Successful projects with high potential can grow into thriving startups, attracting funding, users, and business opportunities.",
      image: StartupImg,
      btnText: "Explore Ideas",
    },
    {
      title: "Businesses",
      description:
        "Businesses discover, acquire, or fund promising projects with potential, and hire top contributors.",
      image: BusinessImg,
      btnText: "Explore Projects",
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
            <div className="flex justify-center">
              <Button className="bg-indigo-700 hover:bg-indigo-900 text-white">{e.btnText}</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="flex flex-wrap-reverse p-10 my-5 md:flex-nowrap">
      <form className="w-full my-5 md:mx-10">
        <label htmlFor="name" className="text-xl mx-1">
          Name
        </label>
        <Input
          type="text"
          name="name"
          id="name"
          className="bg-gray-100 rounded-xl mb-3"
          placeholder="John Wick"
        />
        <label htmlFor="name" className="text-xl mx-1">
          Email
        </label>
        <Input
          type="email"
          name="name"
          id="name"
          className="bg-gray-100 rounded-xl mb-3"
          placeholder="jhon@wick.com"
        />
        <label htmlFor="name" className="text-xl mx-1">
          Phone no.
        </label>
        <Input
          name="number"
          id="name"
          className="bg-gray-100 rounded-xl mb-3"
          placeholder="+91 9876543210"
        />
        <label htmlFor="name" className="text-xl mx-1">
          Your message
        </label>
        <Textarea
          name="message"
          id="message"
          className="bg-gray-100 rounded-xl mb-3"
          placeholder="Your message here"
          rows={5}
        />
        <Button
          type="submit"
          className="bg-indigo-700 text-white mx-auto block"
        >
          Send message
        </Button>
      </form>
      <div className="w-full">
        <p className="text-3xl text-indigo-500">Contact us</p>
        <h2 className="text-4xl my-3">Get in touch</h2>
        <p className="text-justify">
          Have a question or idea? Reach out to us — we’d love to connect!
        </p>
        <div className="md:grid md:grid-cols-2">
          <div className="flex items-center my-3">
            <IoCall size={35} className="mx-2 text-indigo-500" />
            <div>
              <div className="text-3xl">Call us</div>
              <div className="text-sm text-gray-500">+91 9876543210</div>
            </div>
          </div>
          <div className="flex items-center my-3">
            <MdEmail size={35} className="mx-2 text-indigo-500" />
            <div>
              <div className="text-3xl">Email</div>
              <div className="text-sm text-gray-500">
                kaushik.s.contact@gmail.com
              </div>
            </div>
          </div>
          <div className="flex items-center my-3">
            <FaLocationDot size={35} className="mx-2 text-indigo-500" />
            <div>
              <div className="text-3xl">Address</div>
              <div className="text-sm text-gray-500">
                Quantum University, Roorkee, India
              </div>
            </div>
          </div>
          <div className="flex items-center my-3">
            <FaGlobe size={35} className="mx-2 text-indigo-500" />
            <div>
              <div className="text-3xl">Website</div>
              <div className="text-sm text-gray-500">innovatix.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
