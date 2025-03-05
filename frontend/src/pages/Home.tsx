import { BlackSpotlight } from "@/components/backgrounds/black-spotlight";

const Home = () => {
  // Prevent the white status bar on mobile
  document.getElementsByTagName("body")[0].style.backgroundColor = "#060606";

  return (
    <>
      <BlackSpotlight>
        <div className="h-[200vh] text-white"></div>
      </BlackSpotlight>
    </>
  );
};

export default Home;
