import React from "react";
import { BlackSpotlight } from "@/components/backgrounds/black-spotlight";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { useParams } from "react-router";
import { ProjectsList } from "./Projects";

interface innovationType {
  title: string;
  description: string;
}

const Innovation = () => {
  const InnovationId = useParams().id;
  console.log(InnovationId);
  const [selection, setSelection] = useState(1);

  const projectsBtnRef = React.useRef<HTMLButtonElement>(null);
  const commentsBtnRef = React.useRef<HTMLButtonElement>(null);
  const detailsBtnRef = React.useRef<HTMLButtonElement>(null);

  const activateSelection = (num: number) => {
    setSelection(num);
    switch (num) {
      case 1:
        detailsBtnRef.current?.classList.add("border-white");
        projectsBtnRef.current?.classList.remove("border-white");
        commentsBtnRef.current?.classList.remove("border-white");
        break;
      case 2:
        detailsBtnRef.current?.classList.remove("border-white");
        projectsBtnRef.current?.classList.add("border-white");
        commentsBtnRef.current?.classList.remove("border-white");
        break;
      case 3:
        detailsBtnRef.current?.classList.remove("border-white");
        projectsBtnRef.current?.classList.remove("border-white");
        commentsBtnRef.current?.classList.add("border-white");
        break;
    }
  };

  const innovation: innovationType = {
    title: "AI-Powered Code Debugging Assistant",
    description: `Description:  
Software development often involves time-consuming debugging processes that slow down productivity. The AI-Powered Code Debugging Assistant is an intelligent tool designed to help developers identify, understand, and resolve bugs in their code efficiently. By integrating with popular code editors and IDEs, the assistant provides real-time error detection, suggests potential fixes, and explains the reasoning behind errors.  

How It Works:  
The debugging assistant continuously analyzes the code as it is being written. It detects syntax errors, logical mistakes, and potential performance bottlenecks. When an error is found, the AI engine suggests possible corrections, similar to how Grammarly helps with grammar but for coding. Instead of just highlighting issues, the assistant provides explanations, helping developers understand why the issue occurred and how to prevent it in the future.  

Beyond debugging, the assistant can generate automated test cases to validate the suggested fixes. This ensures that resolving one issue doesn’t introduce new ones, making the debugging process more reliable. The AI system learns from previous interactions and adapts to a developer’s coding style over time, improving the accuracy of its recommendations.  

Potential Uses:  
- For Beginners: New developers often struggle with understanding errors. The assistant serves as a mentor, explaining mistakes in simple terms and offering best practices.  
- For Professional Developers: It helps teams working on large-scale applications by catching hard-to-detect logical errors and providing optimization suggestions.  
- For Open-Source Contributions: Developers contributing to open-source projects can benefit from automated debugging, making their contributions cleaner and more efficient.  
- For Code Review & Optimization: The assistant can be used in code reviews, pointing out redundant or inefficient code and suggesting improvements.  

Technologies That May Be Used:  
- Machine Learning & AI: Models like GPT or Codex to analyze and understand code patterns.  
- Static Code Analysis: Tools like ESLint, Pylint, or SonarQube for detecting common code issues.  
- Natural Language Processing: For generating explanations in human-readable form.  
- IDE Plugins: Extensions for VS Code, IntelliJ, and other popular editors.  
- Cloud-Based Services: For real-time processing and learning from debugging history.  

Complexity: 4/5  
Feasibility: 4/5  
Tags: AI, Debugging, Code Review, Automation, Software Development  
`,
  };

  const Selected = () => {
    switch (selection) {
      case 1:
        return <Details innovation={innovation} />;
      case 2:
        return <Projects />;
      case 3:
        return <Comments />;
    }
  };

  return (
    <BlackSpotlight>
      <div className="py-20">
        <div className="flex items-center  px-5 md:px-10">
          <IoPersonCircle size={40} className="text-gray-100" />
          <div>
            <p className="text-lg leading-3 text-gray-100">Full Name</p>
            <p className="text-base leading-3 text-gray-100">@username</p>
          </div>
        </div>
        <div className="py-3 px-5 md:px-10">
          <h1 className="text-4xl leading-9">{innovation.title}</h1>
        </div>
        <div className="flex justify-around py-3 px-5 md:px-10">
          <Button
            variant="ghost"
            className="w-1/3 text-lg text-center rounded-none hover:border-b-neutral-200 hover:bg-transparent border-b-4 border-white transition-all duration-300"
            onClick={() => activateSelection(1)}
            ref={detailsBtnRef}
          >
            Details
          </Button>
          <Button
            variant="ghost"
            className="w-1/3 text-lg text-center rounded-none hover:border-b-neutral-200 hover:bg-transparent border-b-4 transition-all duration-300"
            onClick={() => activateSelection(2)}
            ref={projectsBtnRef}
          >
            Projects
          </Button>
          <Button
            variant="ghost"
            className="w-1/3 text-lg text-center rounded-none hover:border-b-neutral-200 hover:bg-transparent border-b-4 transition-all duration-300"
            onClick={() => activateSelection(3)}
            ref={commentsBtnRef}
          >
            Comments
          </Button>
        </div>
        <div className="py-3">
          <Selected />
        </div>
      </div>
    </BlackSpotlight>
  );
};

const Details = ({ innovation }: { innovation: innovationType }) => {
  return (
    <div>
      {
        <div className="text-gray-100 whitespace-pre-line text-lg  px-5 md:px-10">
          <p className="px-3 md:px-5">{innovation.description}</p>
        </div>
      }
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <ProjectsList />
    </div>
  );
};

const Comments = () => {
  return (
    <div>
      <h1>Comments</h1>
    </div>
  );
};

export default Innovation;
