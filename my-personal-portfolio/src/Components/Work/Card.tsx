import { ArrowRightOutlined } from "@ant-design/icons";

interface CardI {
  imageSrc: string;
  liveUrl: string;
  sourceCode: string;
  title:string;
  description:string;
}

export default function Card({ imageSrc, liveUrl, sourceCode,title,description }: CardI) {
  return (
    // <div data-aos="fade-up" className="group relative rounded-[3rem] overflow-hidden">
    //   <img className="h-[350px]" src={imageSrc} alt="Card Image" />

    //   <div className="overlay absolute inset-0 bg-[#55527c] bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
    //     {liveUrl.length > 0 && (
    //       <a
    //         href={liveUrl}
    //         className="overlay-link bg-white text-black px-4 py-2 rounded hover:bg-opacity-70"
    //         target="_blank" rel="noreferrer"
    //       >
    //         Live Demo
    //       </a>
    //     )}
    //     <a
    //       href={sourceCode}
    //       className="overlay-link bg-white text-black px-4 py-2 rounded ml-2 hover:bg-opacity-70"
    //       target="_blank" rel="noreferrer"
    //     >
    //       Source code
    //     </a>
    //   </div>
    // </div>
    <div
      className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl shadow-grey-500/40 transition-transform duration-300"
    >
      <img
        alt="Business owner facing a lot of web design options"
        className="h-52 w-full"
        src={imageSrc}
        width="1200"
        height="630"
        data-statamic-responsive-images=""
      />

      <div className="bg-white p-8">
        <h1 className="font-bold text-xl mb-2">
          {title}
          {/* Newsletter sign-up form */}
          {/* <span className="text-blue-900">The Right Web Designer</span> */}
        </h1>
        <p className="text-base">
          {description}
          {/* A simples newsletter sign-up form created using html and css. */}
        </p>
        <div className="flex flex-row gap-2">
          <a href={sourceCode} target="_blank" className="flex items-center gap-2 font-bold text-sky-500 underline mt-4">
            VIEW PROJECT <ArrowRightOutlined />
          </a>
          {/* <a className="flex items-center gap-2 font-bold">
                  SOURCE CODE <ArrowRightOutlined />
                </a> */}
        </div>
      </div>
    </div>
  );
}
