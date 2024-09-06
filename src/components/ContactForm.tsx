import { RadioElement } from "./RadioElement";
import { InputElement } from "./InputElement";
import { CheckboxElement } from "./CheckboxElement";

export const ContactForm = () => {
  return (
    <div className="w-[40%] h-[700px] flex rounded-md bg-white shadow-md">
      <div className="p-8 w-full">
        <h1 className="text-3xl capitalize">Contact us</h1>
        <form className="mt-8 w-full">
          <div className="flex gap-4 items-center w-full my-4">
            <InputElement
              fieldValue="firstName"
              label="First Name"
              type="text"
            />
            <InputElement fieldValue="lastName" label="Last Name" type="text" />
          </div>
          <div className="flex w-full my-4">
            <InputElement fieldValue="email" label="Email" type="email" />
          </div>
          <fieldset className="flex w-full gap-2">
            <RadioElement fieldValue="choiceInquiry" label="General Inquiry" />
            <RadioElement fieldValue="choiceSupport" label="Support Request" />
          </fieldset>
          <div className="flex flex-col gap-4">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="w-full h-28 p-3 rounded shadow-sm border border-gray-300"
            ></textarea>
          </div>
          <div className="flex w-full gap-4 items-center my-10">
            <CheckboxElement
              fieldValue="consent"
              label="I consent to being contacted by the team."
            />
          </div>
          <div className="flex w-full justify-center items-center">
            <button
              type="submit"
              className="bg-green-900 hover:bg-green-700 text-white font-bold p-3 rounded w-full text-sm"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
