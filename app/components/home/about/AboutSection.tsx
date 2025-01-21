"use client"
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import ButtonGooey from '../../ButtonGooey';

const AboutSection = () => {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-12 px-5 py-5 gap-4">
      <div className="md:col-span-3">
        <div className="inline-flex items-center space-x-2 mb-2 | lg:mt-4">
          <div className="bg-primary w-1.5 h-1.5 rounded-full"></div>
          <div className="font-light text-sm lg:text-base text-primary">
            Who are we?
          </div>
        </div>
      </div>
      <div className="md:col-span-9">
        <p className="text-2xl md:text-4xl lg:text-5xl font-light md:pr-8 lg:pr-32">
          An independent web design and branding agency in Manchester set up in
          2010 who care, build relationships, have industry experience, and win
          awards.
        </p>
        <div className="mt-5 flex items-center gap-2">
          <ButtonGooey className="w-full sm:w-fit min-w-[160px] mr-2">About Us</ButtonGooey>
          <button className="relative group">
            <div className={cn("flex items-center gap-2 group relative pr-6 pl-1 before:content-[''] before:w-full before:h-[1px] before:bg-primary before:absolute before:bottom-0 before:left-0 before:scale-x-0 before:transition-transform before:ease-in-out before:origin-right before:duration-300 before:hover:scale-x-100 before:hover:origin-left")}>
              <p>Meet the team</p>
              <ArrowUpRight className="absolute right-1 top-1 w-4 h-4 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out transform group-hover:translate-y-0 translate-y-2" />
              <ArrowUpRight className="absolute right-1 top-1/2 w-4 h-4 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-0 transition-all duration-300 ease-in-out transform -translate-y-1/2 group-hover:translate-x-2 group-hover:-translate-y-2" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection