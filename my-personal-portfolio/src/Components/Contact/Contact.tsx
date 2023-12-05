export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="container pb-20 lg:pb-36 mt-24 mx-auto px-4 gap-12 item-center"
      >
        <div>
          {/* <h2
            data-aos="fade-up"
            className="title mb-6 text-blue-950 dark:text-white"
          >
            Contact me
          </h2> */}

          <div
            id="connect"
            // className="container"
          >
            <div
              data-aos="fade-up"
              className="bg-blue-300/30 rounded-3xl py-24 lg:pt-24 lg:pb-12 px-12"
            >
              <div className="text-center">
                <h3 className="font-bold uppercase tracking-widest text-grey-600 mb-4">
                  Contact Me
                </h3>
                <h2 className="title text-4xl">Got a Project? Lets Talk!</h2>
                {/* <div className="flex flex-col sm:flex-row justify-center items-center mt-12"> */}
                {/* <picture>
                    <img
                      className="w-12 mr-4"
                      src="https://d33wubrfki0l68.cloudfront.net/08410ce2cf34f129b7fd89cada11458fb69836bb/584bd/assets/site/mail.svg"
                      alt="mail.svg"
                      width="48"
                      height="48"
                    />
                  </picture> */}
                {/* <a
                    href="mailto:contact@michaelmannucci.com?subject=Wanted to chat about..."
                    className="text-xl sm:text-3xl text-grey-600 font-bold tracking-tight hover:underline"
                  >
                    contact@michaelmannucci.com
                  </a> */}
                {/* </div> */}
              </div>
              <div className="mt-12">
                <form className="flex flex-col gap-8 sm:px-20 lg:px-48">
                  <input
                    className="p-3 rounded-2xl bg-transparent text-blue-950 placeholder-blue-950 border border-blue-950"
                    placeholder="name"
                  />
                  <input
                    className="p-3 rounded-2xl bg-transparent text-blue-950 placeholder-blue-950 border border-blue-950"
                    placeholder="email"
                  />
                  <textarea
                    rows={7} // Set the number of rows you desire
                    className="p-3 rounded-2xl bg-transparent text-blue-950 placeholder-blue-950 border border-blue-950 resize-none"
                    placeholder="message"
                  ></textarea>
                  <div className="flex text-white">
                    <a
                      href="#contact"
                      className="button w-44 bg-blue-950 hover:shadow-lg hover:shadow-blue-950/50"
                    >
                      Send message
                    </a>
                  </div>
                </form>
                {/* <a href="/" className="flex-grow text-3xl">
                  // 👋
                </a> */}
                {/* <div className="flex gap-12 font-bold items-center">
                  <a href="#services" className="link">
                    Services
                  </a>
                  <a href="#portfolio" className="link">
                    Portfolio
                  </a>
                  <a href="#testimonials" className="link">
                    Testimonials
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
