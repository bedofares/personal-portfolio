import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import Switcher from "../Switcher";
import { useState } from "react";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

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
        id="header"
        data-aos="fade-down"
        data-aos-once="true"
        className="py-8"
      >
        <div className="container relative flex flex-row justify-between lg:mx-auto px-4 fixed w-full ">
          <a  href="/" className="text-4xl z-50">
            👋
          </a>
          {/* navigation */}
          <div className="flex flex-row gap-8 lg:gap-12 items-center">
            <div className="hidden lg:flex flex-row gap-12 font-bold items-center text-blue-950 dark:text-white">
              <a
                className="transition delay-100 hover:text-sky-500"
                href="#"
                onClick={() => scrollToElement("home")}
              >
                Home
              </a>
              <a
                className="transition delay-100 hover:text-sky-500"
                href="#"
                onClick={() => scrollToElement("about")}
              >
                About
              </a>
              <a
                className="transition delay-100 hover:text-sky-500"
                href="#"
                onClick={() => scrollToElement("projects")}
              >
                Projects
              </a>
              <a
                className="button text-white w-32 !py-3 bg-blue-950 hover:shadow-lg hover:shadow-blue-950/50 dark:bg-white dark:text-black dark:hover:shadow-white/50"
                href="#"
                onClick={() => scrollToElement("contact")}
              >
                Contact
              </a>
            </div>

            <Switcher />
            <MenuOutlined
              className={`dark:text-white lg:hidden z-50 ${
                showMobileMenu ? "hidden" : ""
              }`}
              onClick={toggleMobileMenu}
            />
            <CloseOutlined
              className={`z-50 ${
                showMobileMenu ? "" : "hidden"
              }`}
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
        {showMobileMenu && (
          <div className="absolute inset-0 z-20 bg-[#E9F9FF] h-screen">
            <div className="mt-28 pb-12 px-4 grid grid-cols-1 divide-y divide-slate-400 divide-opacity-50">
              <a
                className="font-semibold text-3xl py-8 transition delay-100 hover:text-sky-500"
                href="#home"
                onClick={closeMobileMenu}
              >
                Home
              </a>
              <a
                className="font-semibold text-3xl py-8 transition delay-100 hover:text-sky-500"
                href="#about"
                onClick={closeMobileMenu}
              >
                About
              </a>
              <a
                className="font-semibold text-3xl py-8 transition delay-100 hover:text-sky-500"
                href="#projects"
                onClick={closeMobileMenu}
              >
                Projects
              </a>
              <a
                className="block font-semibold text-3xl py-8 transition delay-100 hover:text-sky-500"
                href="#contact"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
