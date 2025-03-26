export const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[40px] py-[100px]">
      <img src="/real_estate/mail_send.svg" alt="mail send" />
      <h2 className="text-3xl font-semibold">Stay Up to Date</h2>
      <p>Subscribe to our newsletter to receive our weekly feed.</p>
      <form className="flex justify-between items-center border-[1px] rounded-[60px] px-[30px] py-[20px] w-[570px]">
        <input placeholder="Your e-mail" />
        <button className="flex gap-2 font-semibold">
          Send
          <img src="/real_estate/arrow_right.svg" alt="arrow" />
        </button>
      </form>
    </div>
  );
};
