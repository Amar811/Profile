import React from "react";
import ProjectCard from "./ProjectCard";

const Work = () => {
  const works = [
    {
      imgSrc: "/images/Ecomerce.png",
      title: "Fronted Ecommerce WebApp",
      tags: [ "React js", "Development","Tailwind CSS","Material Ui"],
      projectLink: "https://forevershop.netlify.app/",
    },
    {
      imgSrc: "/images/Expense-Tracker.png",
      title: "Calculate daily Expense and Debt",
      tags: ["React js","Tailwind CSS","Material Ui"],
      projectLink: "https://dailydebt.netlify.app/",
    },
    {
      imgSrc: "/images/foodie.png",
      title: "Food app",
      tags: ["Development", "React","Javascript"],
      projectLink: "https://github.com/Amar811/FoodieApplication",
    },
    {
      imgSrc: "/images/Asp.netCore.png",
      title: "Access Json data from server",
      tags: ["Api", "Development","C#","backend"],
      projectLink: "https://github.com/Amar811/AbxClient",
    },
    {
      imgSrc: "/images/todocrud.png",
      title: "Api Crud with .NetCore",
      tags: ["Api Crud with Net","Todos","backend"],
      projectLink: "https://github.com/Amar811/TodosApi",
    },
    {
      imgSrc: "/images/portfolioimg.png",
      title: "Personal portfolio",
      tags: ["Web-design", "Development","Tailwind"],
      projectLink: "https://github.com/Amar811/Profile",
    },
  ];
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
            {works.map(({imgSrc,title,tags,projectLink},key)=>(
                <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
