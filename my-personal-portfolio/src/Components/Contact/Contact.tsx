export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="container pb-20 lg:pb-36 mt-24 mx-auto px-4 gap-12 item-center"
      >
        <div>
          <div id="connect">
            <div
              data-aos="fade-up"
              className="bg-blue-300/30 dark:bg-sky-500 rounded-3xl py-24 lg:pt-24 lg:pb-12 px-12"
            >
              <div className="text-center">
                <h3 className="font-bold uppercase tracking-widest text-grey-600 mb-4">
                  Contact Me
                </h3>
                <h2 className="title text-4xl">Got a Project? Lets Talk!</h2>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
