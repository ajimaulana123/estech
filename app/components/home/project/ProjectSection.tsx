import React from "react";
import CardProject from "./CardProject";
import ButtonGooey from "../../ButtonGooey";

const ProjectSection = () => {
  return (
    <section className="container px-5 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 py-5">
      <div className="flex flex-col gap-5">
        <CardProject
          imageSrc="/our-projects/arsip-dokumen.png"
          year="2025"
          client="Individual Customer"
          title="Sistem pencatatan arsip dokumen"
          tags={["PHP", "MySQL"]}
        />
        <CardProject 
          imageSrc="/our-projects/sistem-pendapatan-dokter.png"
          year="2024"
          client="Individual Customer"
          title="Sistem pencatatan slip gaji dokter"
          tags={["Next Js", "Postgre", "Shadcn UI"]}
        />
        <div className="flex flex-col items-center justify-center mt-10 md:mt-20">
          <h2 className="text-3xl md:text-4xl lg:text-6xl tracking-tight text-primary leading-tight text-balance mb-8 text-center max-w-[300px] md:max-w-none">
            Like what you see?
          </h2>
          <ButtonGooey className="w-[260px] sm:w-[200px]">
            Contact Us
          </ButtonGooey>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="w-full justify-center mb-8 flex md:mb-16 lg:mb-20">
          <div className="flex flex-col space-y-3 lg:space-y-5 items-start">
            <div className="inline-flex items-center space-x-2">
              <div className="bg-primary w-1.5 h-1.5 rounded-full"></div>
              <div className="font-light text-sm lg:text-base text-primary">
                Our Work
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-sans-primary tracking-tight text-primary leading-none text-balance max-w-sm xl:max-w-md">
              Take a look at our projects
            </h2>
          </div>
        </div>
        <CardProject
          imageSrc="/our-projects/hmj-mi.jpg"
          year="2023"
          client="Himpunan Mahasiswa Jurusan"
          title="Sistem Informasi Mahasiswa Jurusan"
          tags={["Next Js", "Postgre", "Radix UI"]}
        />
        <CardProject
          imageSrc="/our-projects/sim-produksi-barang.png"
          year="2025"
          client="SMK Kristen Pedan"
          title="Sistem pencatatan produksi barang"
          tags={["Next Js", "Postgre", "Radix UI"]}
        />
      </div>
    </section>
  );
};

export default ProjectSection;
