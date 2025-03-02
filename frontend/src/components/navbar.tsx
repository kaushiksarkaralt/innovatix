import { FaBars } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const Navbar = () => {
  const linkRef = useRef<HTMLDivElement>(null);

  const handleChange = () => {
    if (linkRef.current) {
      linkRef.current.classList.toggle("hidden");
    }
  };
  return (
    <div className="fixed bg-black/40 backdrop-blur-md text-white w-full md:flex md:items-center">
      <div className="h-full flex justify-between p-4 items-center shadow-2xl md:w-1/3">
        <div className="font-prata text-3xl">INNOVATIX</div>
        <div className="md:hidden">
          <label htmlFor="links">
            <FaBars className="text-4xl" />
          </label>
          <input
            type="checkbox"
            name="links"
            id="links"
            className="hidden"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="hidden md:flex md:w-2/3 md:justify-end" ref={linkRef}>
        <ul className="flex flex-col items-center p-3 text-2xl space-y-2 md:flex-row md:space-y-0 md:space-x-3 md:text-xl">
          <li>Home</li>
          <li>About</li>
          <li>Innovations</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <div className="flex justify-center pb-4 md:px-2 md:pb-0 md:items-center">
          <Button variant="secondary" className="mx-2">
            Log In
          </Button>
          <Button variant="secondary" className="mx-2">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
