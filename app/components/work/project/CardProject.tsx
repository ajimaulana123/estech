import React from "react";
import Image from "next/image";

interface CardProjectProps {
  imageSrc: string;
  year?: string;
  client?: string;
  title?: string;
  tags?: string[];
}

const CardProject = ({ 
  imageSrc = "/our-projects/sistem-pendapatan-dokter.png",
  year = "2024",
  client = "Individual Customer",
  title = "Sistem pencatatan slip gaji dokter",
  tags = ["Next Js", "Postgre", "Shadcn Ui"]
}: CardProjectProps) => {
  return (
    <div>
      <div className="aspect-video rounded-3xl relative group overflow-hidden">
        <div className="bg-background z-10 w-fit p-3 -top-32 group-hover:top-0 -right-0 rounded-bl-3xl rounded-tr-3xl absolute duration-300">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="inline-flex items-center px-3 py-2 rounded-full text-xs font-medium bg-primary text-background"
              >
                {tag}
              </div>
            ))}
          </div>
          <svg
            id="Layer_1"
            className="w-9 h-9 text-background z-30 fill-current absolute -top-[1px] -left-[35.5px] rotate-90"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 100 100"
          >
            <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
          </svg>
          <svg
            id="Layer_1"
            className="w-9 h-9 text-background z-30 fill-current absolute -bottom-[35px] -right-[1px] rotate-90"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 100 100"
          >
            <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
          </svg>
        </div>
        <Image
          src={imageSrc}
          alt={title || "Project Image"}
          width={800}
          height={450}
          className="w-full h-full   object-containt group-hover:-translate-y-2 transition-transform duration-300"
        />
      </div>
      <div className="py-5">
        <div className="flex items-center space-x-3 mb-2 text-sm lg:text-base">
          <div className="font-light">{year}</div>
          <div className="w-1.5 h-1.5 relative -top-px bg-gray-600 rounded-full"></div>
          <div className="font-light">{client}</div>
        </div>
        <h2 className="text-4xl tracking-tight text-primary leading-tighter text-balance pr-10">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default CardProject;
