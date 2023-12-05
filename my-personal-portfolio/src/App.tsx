import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";import Header from "./Components/Header/Header"
import Introduction from "./Components/Introduction/Introduction"
import About from "./Components/About/About"
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      // once: true,
    });
    // AOS.refresh(); // To refresh AOS when the component mounts
  }, []);
  return (
    <div className="dark:bg-gray-800">
      <Header/>
      <Introduction/>
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
