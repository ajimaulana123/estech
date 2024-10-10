import HeroSection from "./components/home/hero/HeroSection";
import AboutSection from "./components/home/about/AboutSection";
import ProjectSection from "./components/home/project/ProjectSection";
import ButtonGooey from "./components/ButtonGooey";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ButtonGooey />
    </>
  );
}
