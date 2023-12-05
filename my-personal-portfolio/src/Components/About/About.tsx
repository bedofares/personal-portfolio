import "./about.css";
export default function About() {
  return (
    <>
      <div id="about" className="container pb-20 lg:pb-36 border-b-2 mt-24 mx-auto px-4 gap-12 item-center">
        <div className="about">
          <h2
            data-aos="fade-up"
            className="title mb-6 text-blue-950 dark:text-white"
          >
            About me 
          </h2>
          <p  className="dark:text-white" data-aos="fade-up">
            I'm Abdelrahman Fares, a 22-year-old Junior Software Developer with
            a penchant for infusing creativity into the digital landscape. Armed
            with a degree in Creative Computing from FH Sankt Pölten, I embarked
            on a transformative journey that sparked my deep passion for
            crafting engaging web experiences. During my academic journey, I
            undertook a pivotal internship at BOC Vienna, an experience that not
            only enriched my skills but also solidified my commitment to the
            world of web development. The real-world challenges I encountered
            during this internship became stepping stones for my professional
            growth. Fast forward to today, and I'm proud to say that I continue
            to contribute my skills and passion at BOC Vienna. The transition
            from intern to a dedicated team member has been a rewarding journey,
            allowing me to immerse myself in the ever-evolving landscape of
            Software development.
            <br />
            Proficient in a variety of technologies, I wield the power of
            ReactJS, JavaScript, TypeScript, Java, HTML, CSS, and navigate the
            coding galaxy with Git. Whether it's building dynamic web
            applications or crafting seamless mobile experiences, I thrive on
            turning ideas into lines of code.
            <br />
            Every line of code I write is infused with the lessons learned
            during my academic pursuits and honed through practical experience.
            I approach each project not just as a task but as an opportunity to
            weave innovation into the fabric of the digital world.
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
