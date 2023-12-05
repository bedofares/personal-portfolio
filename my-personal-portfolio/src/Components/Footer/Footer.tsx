import {
  GithubFilled,
  GithubOutlined,
  LinkedinFilled,
  LinkedinOutlined,
  MailFilled,
  StepBackwardOutlined,
} from "@ant-design/icons";

export default function Footer() {
  function scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);

    if (element) {
      // Adjust the scroll position by subtracting some pixels (e.g., 20) to scroll above the element
      const offset = 200;
      const elementPosition = element.offsetTop - offset;

      // Scroll smoothly to the element
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  }
  return (
    <>
      <div
        id="footer"
        className="flex flex-col items-center border-t-2 mt-16 mx-auto pt-16 gap-12 item-center bg-blue-950 dark:bg-gray-800"
      >
        <div className="flex flex-row gap-12 items-center">
          <div className="flex flex-col sm:flex-row gap-12 font-bold items-center text-white">
            <a className="transition delay-100 hover:text-sky-500" href="#header">
              Home
            </a>
            <a
              className="transition delay-100 hover:text-sky-500"
              href="#about"
            >
              About
            </a>
            <a
              className="transition delay-100 hover:text-sky-500"
              href="#projects"
            >
              Projects
            </a>
            <a className="transition delay-100 hover:text-sky-500" href="#contact">
              Contact
            </a>
          </div>
        </div>
        <div className="gap-4 flex flex-row item-center text-blue-950">
          <a
            className="text-[1.4rem] text-white hover:text-sky-500 dark:hover:text-sky-500"
            href="https://github.com/bedofares"
            target="_blank"
          >
            <GithubFilled />
          </a>
          <a
            className="text-[1.4rem] text-white hover:text-sky-500 dark:hover:text-sky-500"
            href=""
            target="_blank"
          >
            <LinkedinFilled />
          </a>
          <a
            className="text-[1.4rem] text-white hover:text-sky-500 dark:hover:text-sky-500"
            href="mailto:bedo.faruk13@gmail.com"
          >
            <MailFilled />
          </a>
        </div>
        <small className=" text-white py-4">
          © 2023 Abdelrahman Fares. All rights reserved.
        </small>
      </div>
    </>
  );
}
