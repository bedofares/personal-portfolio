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
            About Me
          </h2>
          <p
            className="dark:text-white text-[1rem] md:text-[1.5rem]"
            data-aos="fade-up"
          >
            <span className="text-sky-500 mb-4 block text-left">{"<p>"}</span>I
            am a 23-year-old{" "}
            <span className="text-sky-500">Software Developer</span> with a
            strong passion for bringing creativity and innovation to the digital
            world. I hold a degree in{" "}
            <span className="text-sky-500">Creative Computing</span> from FH
            Sankt Pölten, equipping me with a diverse technical foundation.
            <span className="block mt-8">
              I am proficient in technologies such as
              <span className="text-sky-500"> HTML</span>,{" "}
              <span className="text-sky-500">CSS</span>,{" "}
              <span className="text-sky-500">JavaScript</span>,{" "}
              <span className="text-sky-500">TypeScript</span>,{" "}
              <span className="text-sky-500">ReactJS</span>,{" "}
              <span className="text-sky-500">Redux</span>,{" "}
              <span className="text-sky-500">Playwright</span>, and I
              utilize <span className="text-sky-500">Git</span> to navigate the
              intricacies of version control. Whether developing dynamic web
              applications or creating seamless mobile experiences, I am
              dedicated to turning ideas into clean, efficient code.
            </span>
            <br />
            My approach to every project is shaped by the lessons I’ve gained
            from both academic and practical experiences. I view each task as an
            opportunity to innovate and push the boundaries of what’s possible
            in the digital realm.
            <br />
            <span className="block mt-4 text-sky-500 text-left ">{"</p>"}</span>
          </p>
          <div data-aos="fade-up" className="flex text-white mt-8">
            <a
              href="#contact"
              className="button w-44 bg-blue-950 hover:shadow-lg hover:shadow-blue-950/50 dark:bg-white dark:text-black dark:hover:shadow-white/50"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
