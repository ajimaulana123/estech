import React from 'react'
import ButtonGooey from '../ButtonGooey';

const FormSection = () => {
  return (
    <section className="container px-4 sm:px-5 py-8 sm:py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 max-w-7xl mx-auto">
        <div className="lg:col-span-4 space-y-4 lg:space-y-6">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            For general enquiries, please fill out the form to get in touch.
            Alternatively, if you know your project details — head over to our
            project planner for a more refined step-by-step process.
          </p>
          <ButtonGooey className="w-48 px-8">
            <span>Go to Project Planner</span>
          </ButtonGooey>
        </div>
        <div className="lg:col-span-8 space-y-6 lg:space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="space-y-2.5">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2.5">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-2.5">
              <label htmlFor="phone" className="text-sm font-medium">Phone (optional)</label>
              <input
                type="tel"
                id="phone"
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="space-y-2.5">
              <label htmlFor="source" className="text-sm font-medium">How did you hear about Estech?</label>
              <select
                id="source"
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Select an option</option>
                <option value="search">Search Engine</option>
                <option value="social">Social Media</option>
                <option value="referral">Referral</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="space-y-2.5">
            <label htmlFor="project" className="text-sm font-medium">Tell us about your project</label>
            <textarea
              id="project"
              className="flex w-full rounded-md border border-input bg-background px-3 py-3 text-sm min-h-[150px] sm:min-h-[180px] resize-y ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="Describe your project, goals, and any specific requirements"
            ></textarea>
          </div>
          <div className="pt-2">
            <ButtonGooey className="w-48 sm:w-auto px-12">
              <span>Submit</span>
            </ButtonGooey>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
