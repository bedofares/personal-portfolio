export default function About() {
  return (
    <>
      <div
        id="about"
        className="container pb-20 lg:pb-36 border-b-2 mt-24 mx-auto px-4 gap-12 item-center"
      >
        <div className="about">
          <h2
            data-aos="fade-up"
            className="title mb-6 text-blue-950 dark:text-white"
          >
            About me
          </h2>
          <p
            className="dark:text-white text-[1rem]  md:text-[1.5rem]"
            data-aos="fade-up"
          >
            <span className="text-sky-500 mb-4 block text-left">{"<p>"}</span>
            I'm Abdelrahman Fares, - a 22-year-old{" "}
            <span className="text-sky-500">Software Developer</span> with
            a penchant for infusing creativity into the digital landscape. Armed
            with a degree in{" "}
            <span className="text-sky-500">Creative Computing</span> from FH
            Sankt Pölten.
            <span className=" block mt-8">
              Proficient in a variety of technologies, I wield the power of
              <span className="text-sky-500"> HTML</span> ,{" "}
              <span className="text-sky-500">CSS</span> ,{" "}
              <span className="text-sky-500">JavaScript</span> ,
              <span className="text-sky-500">TypeScript</span> ,{" "}
              <span className="text-sky-500">ReactJS</span> ,{" "}
              <span className="text-sky-500">Java</span> , and navigate the
              coding galaxy with <span className="text-sky-500">Git</span>.
              Whether it's building dynamic web applications or crafting
              seamless mobile experiences, I thrive on turning ideas into lines
              of code.
            </span>
            <br />
            Every line of code I write is infused with the lessons learned
            during my academic pursuits and honed through practical experience.
            I approach each project not just as a task but as an opportunity to
            weave innovation into the fabric of the digital world.
            <br />
            <span className="block mt-4 text-sky-500 text-left ">{"</p>"}</span>
          </p>
          <div data-aos="fade-up" className="flex text-white mt-8">
            <a
              href="#contact"
              className="button w-44 bg-blue-950 hover:shadow-lg hover:shadow-blue-950/50 dark:bg-white dark:text-black dark:hover:shadow-white/50"
            >
              Hire me
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
