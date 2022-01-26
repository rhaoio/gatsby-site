import React, { useRef, useState } from "react";

const ContactForm = () => {
  const formspreeEndpoint = "https://formspree.io/f/mrgjeznn";
  return (
    <>
      <h5
        className="font-header font-semibold text-front text-sm uppercase mt-12 mb-3"
        id="contact"
      >
        📝 Contact
      </h5>

      <form
        action={formspreeEndpoint}
        className="flex flex-wrap text-black"
        method="post"
      >
        <div className="flex flex-wrap w-full">
          <div className="w-full lg:w-1/3 py-px lg:px-px">
            <input
              aria-label="Name"
              autoComplete="name"
              className="caret-white bg-gradient-to-b from-[#242424] to-[#242424] transition-opacity duration-150 w-full text-front px-4 py-3 font-header font-semibold text-sm outline-none leading-normal"
              name="name"
              placeholder="NAME"
              required
              type="text"
            />
          </div>
          <div className="w-full lg:w-1/3 py-px lg:px-px">
            <input
              aria-label="E-mail"
              autoComplete="email"
              className="caret-white bg-gradient-to-b from-[#242424] to-[#242424] transition-opacity duration-150 w-full text-front px-4 py-3 font-header font-semibold text-sm outline-none leading-normal"
              name="email"
              placeholder="EMAIL ADDRESS"
              required
              type="email"
            />
          </div>
          <div className="w-full lg:w-1/3 py-px lg:px-px flex-auto">
            <input
              aria-label="Phone number"
              autoComplete="phone number"
              className="caret-white bg-gradient-to-b from-[#242424] to-[#242424] transition-opacity duration-150 w-full text-front px-4 py-3 font-header font-semibold text-sm outline-none leading-normal"
              name="phone"
              placeholder="PHONE NUMBER"
              required
              type="tel"
            />
          </div>
        </div>

        <div className="w-full text-right py-px lg:px-px">
          <textarea
            aria-label="Message"
            className="caret-white bg-gradient-to-b from-[#242424] to-[#242424] transition-opacity duration-150 block w-full text-front px-4 py-3 font-header font-semibold text-sm outline-none leading-normal  resize-none border-b-0 pb-4"
            name="message"
            placeholder="MESSAGE"
            required
            rows="6"
          ></textarea>
          <div className=" text-white">
            <input
              className="bg-[#0044ff] font-header inline-block font-semibold px-6 py-2 leading-tight cursor-pointer outline-none bg-front text-back-light uppercase mr-4 my-4 transition-opacity duration-150 hover:opacity-75"
              type="submit"
              value="Send"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
