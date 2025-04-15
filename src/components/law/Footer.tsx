export const Footer = () => {
  return (
    <div>
      <div className="py-20 px-12 bg-[#830000] flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-[19px] text-white">Have Any Question?</p>
          <p className="text-[40px] text-[#DEDEDE]">Let Us Reach You</p>
        </div>
        <form className="relative max-w-[600px] bg-white h-[56px] flex items-center">
          <input
            type="text"
            className="p-[16px_132px_16px_32px] h-full w-4/5 border-none outline-none"
            placeholder="Your email"
          />
          <button className="absolute right-1 top-1 bottom-1 bg-[#830000] text-white  px-8">
            Send
          </button>
        </form>
      </div>
      <div className="py-[120px] px-12 flex gap-12 border-b-[1px]">
        <div className="grid grid-cols-2 gap-12 w-4/5">
          <div>
            <p className="text-[#696969]">Pages</p>
            <div className="flex flex-col gap-6 pt-10">
              <a href="">About</a>
              <a href="">Services</a>
              <a href="">Contact</a>
            </div>
          </div>
          <div>
            <p className="text-[#696969]">Contact</p>
            <div className="flex flex-col gap-6 pt-10">
              <a href="">000-000-00-07</a>
              <a href="">crnlaw@example.com</a>
            </div>
          </div>
        </div>
        <p className="text-[40px]">Committed. Skilled. Respected.</p>
      </div>
      <div className="py-10 px-12 flex justify-between">
        <img src="/law/logo.svg" alt="logo" className="h-11" />
        <div className="flex gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,167.73,80H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.53A8.17,8.17,0,0,0,96.27,152H120v75.28a4,4,0,0,1-4.44,4A104.15,104.15,0,0,1,24.07,124.09c2-54,45.74-97.9,99.78-100A104.12,104.12,0,0,1,232,128Z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M215,219.85a8,8,0,0,1-7,4.15H160a8,8,0,0,1-6.75-3.71l-40.49-63.63L53.92,221.38a8,8,0,0,1-11.84-10.76l61.77-68L41.25,44.3A8,8,0,0,1,48,32H96a8,8,0,0,1,6.75,3.71l40.49,63.63,58.84-64.72a8,8,0,0,1,11.84,10.76l-61.77,67.95,62.6,98.38A8,8,0,0,1,215,219.85Z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
