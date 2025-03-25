const data = {
  address: "4321 California St, San Francisco, CA 12345 ",
  phone: "+1 123 456 1234",
  email: "info@company.com",
  facebook: "fb.com",
  twitter: "twitter.com",
  youtube: "youtube.com",
};
export const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="py-[100px] pb-[60px] bg-gradient-to-r from-[#6372ff] to-[#5ca9fb] text-white/75"
      >
        <div className="mx-auto flex flex-col">
          <div className="flex mx-auto gap-32">
            <div className="md:w-2/3">
              <div className="mb-[40px]">
                <h2 className="text-white mt-[10px] mb-[15px] pb-[15px] relative after:content-[''] after:absolute after:bg-white/30 after:h-1 after:w-[60px] after:bottom-0 after:left-[30px] text-5xl font-bold">
                  Get In Touch
                </h2>
                <p className="text-[16px]">
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" className="pt-[20px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-2 text-[16px] text-[#444] bg-white border border-[#ddd] focus:border-[#999] focus:outline-none placeholder:text-[#777]"
                      placeholder="Name"
                      required
                    />
                    <p className="text-[#cc0033] text-left"></p>
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-2 text-[16px] text-[#444] bg-white border border-[#ddd] focus:border-[#999] focus:outline-none placeholder:text-[#777]"
                      placeholder="Email"
                      required
                    />
                    <p className="text-[#cc0033] text-left"></p>
                  </div>
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    id="message"
                    className="w-full p-2 text-[16px] text-[#444] bg-white border border-[#ddd] focus:border-[#999] focus:outline-none placeholder:text-[#777]"
                    placeholder="Message"
                    required
                  ></textarea>
                  <p className="text-[#cc0033] text-left"></p>
                </div>
                <div id="success"></div>
                <button
                  type="submit"
                  className="m-[30px_0] bg-transparent border-2 border-white text-white px-6 py-2 hover:bg-white hover:text-[#1f386e] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="md:w-1/4 md:ml-4 mt-[80px]">
              <h3 className="text-white mb-[25px] pb-[20px] font-normal">
                Contact Info
              </h3>
              <div className="space-y-[20px]">
                <div>
                  <p>
                    <span className="text-white block mb-[10px]">
                      <i className="fa fa-map-marker mr-[10px]"></i> Address
                    </span>
                    {data.address}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="text-white block mb-[10px]">
                      <i className="fa fa-phone mr-[10px]"></i> Phone
                    </span>
                    {data.phone}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="text-white block mb-[10px]">
                      <i className="fa-solid fa-envelope mr-[10px]"></i> Email
                    </span>
                    {data.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-[50px] pt-[50px] border-t border-white/15 text-center">
            <ul className="flex justify-center gap-[40px]">
              <li>
                <a href={data.facebook}>
                  <i className="fa-brands fa-facebook text-[22px] w-12 h-12 flex items-center justify-center border-2 border-white text-white rounded-full hover:bg-white hover:text-[#608dfd] transition-all"></i>
                </a>
              </li>
              <li>
                <a href={data.twitter}>
                  <i className="fa-brands fa-twitter text-[22px] w-12 h-12 flex items-center justify-center border-2 border-white text-white rounded-full hover:bg-white hover:text-[#608dfd] transition-all"></i>
                </a>
              </li>
              <li>
                <a href={data.youtube}>
                  <i className="fa-brands fa-youtube text-[22px] w-12 h-12 flex items-center justify-center border-2 border-white text-white rounded-full hover:bg-white hover:text-[#608dfd] transition-all"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container mx-auto text-center py-4">
          <p>
            © 2023 Issaaf Kattan React Land Page Template. Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
