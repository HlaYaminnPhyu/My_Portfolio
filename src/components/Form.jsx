import React, { useRef } from "react";
import { toast } from "react-toastify";
import { RiGpsFill } from "react-icons/ri";
import { AiOutlineMobile, AiOutlineMail } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";


const Form = () => {
  const text = "Sent successfully to hlayaminnphyu@gmail.com";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tg99yoe",
        "template_r13zsdc",
        form.current,
        "WcDUO7xAcb1uhSeEQ"
      )
      .then(
        (result) => {
          toast((result.text = text));
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // #344c36 #dbd2c1
  return (
    <div className="static md:absolute top-16 w-full">
      <div className=" flex justify-between container mx-auto">
        <div className=" m-2 md:mx-[1%] lg:mx-[4.25rem] w-full flex flex-col-reverse md:flex-row justify-between">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white pt-10 px-3 lg:p-10 w-full"
          >
            <div className=" mb-6">
              <h1 className=" text-[2rem] font-semibold text-[#35621f]">
                Send Message Me
              </h1>
              <div className=" w-[96px] h-[3px] bg-[#6a994e]"></div>
            </div>

            <div className="mb-6 flex justify-between items-center">
              <p className="text-[#6a994e] w-1/2">Your name</p>
              <input
                type="text"
                name="user_name"
                className=" border-b-2 border-[#55a630] text-[#6a994e] text-sm block w-full p-2.5 "
                placeholder="Subject"
                required
              />
            </div>
            <div className="mb-10 flex items-center">
              <p className="text-[#6a994e] w-1/2">Your Email</p>
              <input
                type="email"
                name="user_email"
                className=" border-b-2 border-[#55a630] text-[#6a994e] text-sm block w-full p-2.5"
                placeholder="Subject"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              {/* <p className='flex-initial w-full text-[#6a994e]'>You can reach me</p> */}
              <p className="flex-initial font-medium w-full text-[#6a994e]">
                Want To Know More? Drop me a line
              </p>

              {/* <input type="text" name="user_subject" className=" flex-initial border-b-2 border-[#55a630] text-[#9AB18F] text-sm block w-full p-2.5 " placeholder="Subject" required /> */}
            </div>
            <div className="mb-6 mt-8">
              <textarea
                rows=""
                type="text"
                name="message"
                className="bg-gray-50 input text-[#55a630] border border-[#6a994e] text-sm rounded-lg focus:ring-[#6ebe47] focus:border-[#6ebe47] block w-full p-2.5 "
                placeholder="You can reach me"
                required
              />
            </div>
            <button
              onClick={() => toast()}
              type="submit"
              value="Send"
              className="text-white bg-[#35621f] font-medium rounded-full w-full sm:w-auto px-5 py-2.5 text-center block mx-auto text-xl mb-4 md:mb-0"
            >
              Send Message
            </button>
          </form>
          <form className="bg-[url('./images/conimg.jpg')] bg-center bg-cover pt-10 pb-10 lg:pb-0 px-3 lg:p-10 lg:pr-10 w-full">
            <div className=" mb-6">
              <h1 className=" text-[2rem] font-semibold">Get in Touch</h1>
              <div className=" w-[145px] h-[4px]"></div>
            </div>

            <div className=" w-full md:w-[75%]  h-full mt-10">
              {/* <div className="flex items-center gap-3 font-[300] text-base gla p-3">
                <RiGpsFill/>
                  <p className=''>No.34/Hledan Yangon,Myanmar</p>
                </div> */}
              <div className="flex items-center gap-3 font-[300] text-base bg-[#35621f] p-3">
                <RiGpsFill />
                <p className="">Padamyar St,Kamaryut Tsp,Yangon</p>
              </div>
              <div className="mt-4 flex items-center gap-3 text-base font-[300] bg-[#35621f] p-3">
                <AiOutlineMobile />
                <p>+959941365598</p>
              </div>
              <div className="mt-4 mb-40 flex items-center gap-3 text-base font-[300] bg-[#35621f] p-3">
                <AiOutlineMail />
                <p>hlayaminnphyu@gmail.com</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
