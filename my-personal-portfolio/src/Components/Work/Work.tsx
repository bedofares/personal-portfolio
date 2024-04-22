import { ArrowRightOutlined } from "@ant-design/icons";
import Card from "./Card";

export default function Work() {
  const projects = [
    {
      title: "File sharing",
      description:
        "This project empowers you to share files conveniently through a user-friendly web interface. It's built using the fundamental web development technologies of HTML, CSS, and JavaScript.",
      liveUrl: "https://hilarious-speculoos-311227.netlify.app/",
      sourceCode: "https://github.com/bedofares/File-upload",
      image: "/assets/Screenshot 2024-04-22 214312.png",
    },
    {
      title: "Pepsi landing page",
      description:
        "A dynamic landing page has been developed, enabling users to click on the tiny Pepsi cans below to alter the page's design based on to the can choosen. This interactive feature is implemented using HTML, CSS, and JavaScript.",
      liveUrl: "https://pepsi-landing-page-responsive.netlify.app/",
      sourceCode: "https://github.com/bedofares/pepsi-landing-page-responsive",
      image: "/assets/pepsi.png",
    },
    {
      title: "Results summary component",
      description:
        "A results component has been meticulously crafted using a combination of HTML and CSS. This component serves as a fundamental element for displaying outcomes or information in a visually appealing and structured manner on a web page.",
      liveUrl: "https://bedofares-result-summary.netlify.app/",
      sourceCode:
        "https://github.com/bedofares/Frontend-Mentor---results-summary-component",
      image: "/assets/result.png",
    },
    {
      title: "Newsletter sign-up form",
      description:
        "A newsletter sign-up form has been designed, allowing users to input their email addresses, submit the form, and receive a success message displaying their email. The form incorporates validation features and is crafted using HTML, CSS, and JavaScript.",
      liveUrl: "https://frontendmentornewsletter.netlify.app/",
      sourceCode:
        "https://github.com/bedofares/Frontend-Mentor---newsletter-sign-up-with-success-message-main",
      image: "/assets/news.png",
    },
    {
      title: "Age calculator",
      description:
        "A web application for calculating age , allowing users to input their birth date. The app computes and displays their current age. All input fields in the calculator are validated to ensure accurate data entry. The application is developed using HTML, CSS, and JavaScript.",
      liveUrl: "https://frontendmentor-age-calculator-app.netlify.app/",
      sourceCode:
        "https://github.com/bedofares/Frontend-Mentor---calculator-app-main",
      image: "/assets/age-calculator.png",
    },
    {
      title: "The flying space ship",
      description:
        "A 2D Arkad single-player game. Side controller game that could be played using (spacebar or arrow up key) and it is a kind of Infinite level type game with no end.The game is constructed using HTML with the 'canvas' element, along with CSS and JavaScript.",
      liveUrl: "https://cc201013.students.fhstp.ac.at/CCL/?",
      sourceCode: "https://github.com/bedofares/The-Flying-SpaceShip",
      image: "/assets/spaceship.png",
    },
    {
      title: "E-commerce-shoe-store",
      description:
        "An extensive and user-friendly full-stack E-commerce online webshop , offering a diverse range of shoes suitable for all genders and age groups. This robust platform is developed using EJS , CSS , JavaScript , Node.js , and MySQL. This comprehensive webshop ensures a seamless shopping experience for users across various demographics.",
      liveUrl: "https://frontendmentornewsletter.netlify.app/",
      sourceCode:
        "https://github.com/bedofares/Frontend-Mentor---newsletter-sign-up-with-success-message-main",
      image: "/assets/shoexx.png",
    },
    {
      title: "BBETTER",
      description:
        "BBETTER is a habit tracking app, that helps people to introduce new habits in their daily routine Also helps to break bad habits in an organized, conscious and effective way.BBETER users can simply create habits, check their habits, and track their progress.This app has been developed using Kotlin and utilizes SQLite for data management.",
      liveUrl: "https://pepsi-landing-page-responsive.netlify.app/",
      sourceCode: "https://github.com/bedofares/CCL3_BBETTER_APP",
      image: "/assets/Frame 1 (1).png",
    },
  ];
  return (
    <>
      <div
        id="projects"
        className="container px-4 mx-auto pb-20 mt-24 mb-8 border-b-2"
      >
        <h3 data-aos="fade-up" className="font-bold uppercase text-gray-400">
          PORTFOLIO
        </h3>
        <h2
          data-aos="fade-up"
          className="title mb-6 text-blue-950 dark:text-white"
        >
          Recent Work
        </h2>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => {
            return (
              <Card
                key={project.liveUrl}
                liveUrl={project.liveUrl}
                imageSrc={project.image}
                sourceCode={project.sourceCode}
                title={project.title}
                description={project.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
