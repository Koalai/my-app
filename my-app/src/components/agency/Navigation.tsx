export const Navigation = () => {
  return (
    <nav
      id="menu"
      className="fixed top-0 w-full p-4 transition-all duration-700 bg-white border-transparent shadow-md z-4 z-index-2"
    >
      <div className="flex mx-auto justify-between w-6/12 items-center">
        <div className="flex justify-between">
          <button
            type="button"
            className="md:hidden rounded-none hover:bg-white hover:border-blue-500"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="block w-6 h-0.5 bg-gray-600 hover:bg-blue-500 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-600 hover:bg-blue-500 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-600 hover:bg-blue-500"></span>
          </button>
          <a
            href="#page-top"
            className="font-raleway text-2xl font-bold text-gray-800 uppercase page-scroll"
          >
            Innovate
          </a>
        </div>
        <div id="bs-example-navbar-collapse-1">
          <ul className="flex justify-end space-x-5">
            <li className="relative group">
              <a
                href="#features"
                className="font-lato uppercase text-gray-600 text-base font-normal px-1 py-2 rounded-none mt-2 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-blue-500 page-scroll"
              >
                Features
              </a>
            </li>
            <li className="relative group">
              <a
                href="#about"
                className="font-lato uppercase text-gray-600 text-base font-normal px-1 py-2 rounded-none mt-2 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-blue-500 page-scroll"
              >
                About
              </a>
            </li>
            <li className="relative group">
              <a
                href="#services"
                className="font-lato uppercase text-gray-600 text-base font-normal px-1 py-2 rounded-none mt-2 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-blue-500 page-scroll"
              >
                Services
              </a>
            </li>
            <li className="relative group">
              <a
                href="#portfolio"
                className="font-lato uppercase text-gray-600 text-base font-normal px-1 py-2 rounded-none mt-2 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-blue-500 page-scroll"
              >
                Gallery
              </a>
            </li>
            <li className="relative group">
              <a
                href="#testimonials"
                className="font-lato uppercase text-gray-600 text-base font-normal px-1 py-2 rounded-none mt-2 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-blue-500 page-scroll"
              >
                Testimonials
              </a>
            </li>
            <li className="relative group">
              <a
                href="#team"
                className="font-lato uppercase text-gray-600 text-base font-normal px-1 py-2 rounded-none mt-2 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-blue-500 page-scroll"
              >
                Team
              </a>
            </li>
            <li className="relative group">
              <a
                href="#contact"
                className="font-lato uppercase text-gray-600 text-base font-normal px-1 py-2 rounded-none mt-2 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-blue-500 page-scroll"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
