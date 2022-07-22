import React from "react";

export default function ContactForm() {
  return (
    <div className="bg-gray-300 flex flex-col justify-center text-center p-6">
      <h1 className="font-logo py-1 text-2xl font-bold">
        Laissez-nous un message
      </h1>
      <form>
        <div className="p-4">
          <div className="flex flex-col justify-center text-center space-y-2 p-2">
            <label
              htmlFor="product"
              className="flex flex-col justify-center text-base"
            >
              <span className="font-semibold">Votre nom </span>
              <input
                type="text"
                id="name"
                name="name"
                className="flex w-[100%] mx-auto h-[2.8rem] mt-1 text-center text-teal-900"
              />
            </label>
            <label
              htmlFor="description"
              className="flex flex-col justify-center"
            >
              <span className="font-semibold">e-mail</span>
              <input
                type="text"
                id="e-mail"
                name="e-mail"
                className="flex w-[100%] mx-auto h-[2.8rem] mt-1 text-center text-teal-900"
              />
            </label>
            <label htmlFor="price" className="flex flex-col justify-center">
              <span className="font-semibold">téléphone</span>
              <input
                type="text"
                id="phone"
                name="phone"
                className="flex w-[100%] mx-auto h-[2.8rem] mt-1 text-center text-teal-900"
              />
            </label>
            <label htmlFor="message" className="flex flex-col justify-center">
              <span className="font-semibold">Message</span>
              <input
                type="text"
                id="message"
                name="message"
                className="flex w-[100%] mx-auto h-[5.6rem] mt-1 text-center text-teal-900"
              />
            </label>
          </div>
        </div>
        <button
          className="bg-teal-900 text-white text-center font-bold py-4 px-4 mb-6 rounded-full hover:bg-teal-500 mt-4 w-2/3 mx-auto"
          type="button"
          // onClick={() => sendMessage()}
        >
          Enregistrer
        </button>
      </form>
    </div>
  );
}
