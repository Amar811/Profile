import React from "react";

const getYearsOfExperience = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();
  const years = (now - start) / (1000 * 60 * 60 * 24 * 365.25);
  return years.toFixed(1);
};

const About = () => {
  const yearsOfExperience = getYearsOfExperience("2023-10-05");
  const aboutItems = [
    {
      label: "Project done",
      number:6,
    },
    {
      label: "Years of experience",
      number: yearsOfExperience,
    },
  ];
  return (
    <section id="about" className="section">
      <div className="container">
        <div
          className="bg-zinc-800/50 p-7 rounded-2xl
        md:p-12 reveal-up"
        >
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-60ch">
            Welcome! I&apos;m Amar, a web developer who creates beautiful,
            functional websites that bring your ideas to life. I focus on clean
            design, responsive layouts, and smooth user experiences. Whether
            it's a personal portfolio or a business site, I build with
            performance in mind. I combine creativity with code to craft
            websites that not only look great but work seamlessly. My goal is to
            turn your vision into a digital experience that stands out. Let’s
            build something amazing together.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key} className="">
                <div className="flex items-center md:mb-2">
                  <span
                    className="text-2xl font-semibold
                            md:text-4xl"
                  >
                    {number}
                  </span>
                  <span
                    className="text-sky-400
                            font-semibold md:text-3xl"
                  >
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img
              src="/images/logo.svg"
              alt="Logo"
              height={30}
              width={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
