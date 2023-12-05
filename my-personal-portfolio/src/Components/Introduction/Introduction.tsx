import "./introduction.css";
export default function Introduction() {
  return (
    <>
      <div className="container grid grid-cols-1 pb-20 lg:pb-36 border-b-2 lg:grid-cols-2 mt-36 lg:mx-auto px-4 gap-12 item-center">
        <div>
          <h2
            data-aos="fade-up"
            data-aos-once="true"
            className="title mb-6 text-blue-950 !text-[2.5rem] lg:!text-[3rem] xl:!text-[3.5rem] dark:text-white"
          >
            Hi there👋
            <br />
            I'm <span className="text-sky-500">Abdelrahman fares ,</span> a
            dedicated Software Developer.{" "}
            {/* <span className="text-sky-500">Business Grow</span> */}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-once="true"
            className="text-[1rem] lg:text-[1.125rem] dark:text-white"
          >
            I build custom website solutions that help your business grow . I
            help you increase conversion and performance in every possible way.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="flex gap-4 text-white mt-8"
          >
            <a
              href="#projects"
              className="button w-44 bg-blue-950 hover:shadow-lg hover:shadow-blue-950/50 dark:bg-white dark:text-black dark:hover:shadow-white/50"
            >
              See my work
            </a>
            <a
              href="/abdelrahmanFaresCV.pdf"
              download="abdelrahman_fares_cv"
              target="_blank"
              className="button w-44 bg-sky-500 hover:shadow-lg hover:shadow-sky-500/50"
            >
              Download CV
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="true"
          className="flex bg-sky-500/20 justify-center lg:rounded-tr-none overflow-hidden relative rounded-full self-center	"
        >
          {/* <img className="absolute h-full inset-0 object-cover" src="/assetes/bedo.png"/> */}
          {/* <img
            width={747}
            height={631}
            className="h-full inset-0 object-cover"
            src="/assets/bedo2211.png"
            alt="michael.png"
          ></img> */}

          <img
            width="747"
            height="613"
            className="h-full inset-0 object-cover"
            src="/assets/bedo2211.png"
            alt="michael.png"
            data-statamic-responsive-images=""
          />
        </div>
      </div>
    </>
  );
}
