import React from 'react'
import ButtonGooey from '../ButtonGooey';

const FormSection = () => {
  return (
    <section className="container grid grid-cols-12 gap-10 px-5">
      <div className="col-span-4 space-y-5">
        <p className="text-lg">
          For general enquiries, please fill out the form to get in touch.
          Alternatively, if you know your project details — head over to our
          project planner for a more refined step-by-step process.
        </p>
        <ButtonGooey className="w-48">
          <span>Go to Project Planner</span>
        </ButtonGooey>
      </div>
      <div className="col-span-8 space-y-5">
        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Phone (optional)
            </label>
            <input
              type="tel"
              id="phone"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="source"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              How did you hear about Estech?
            </label>
            <select
              id="source"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select an option</option>
              <option value="search">Search Engine</option>
              <option value="social">Social Media</option>
              <option value="referral">Referral</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="project"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Tell us about your project
          </label>
          <textarea
            id="project"
            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px] resize-y"
            placeholder="Describe your project, goals, and any specific requirements"
          ></textarea>
        </div>
        <ButtonGooey>
          <span>Submit</span>
        </ButtonGooey>
      </div>
    </section>
  );
};

export default FormSection;
