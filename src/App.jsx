import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Body } from "./components/Body";
import { Partners } from "./components/Partners";
import { CtaSection } from "./components/CtaSection";
import { FormSection } from "./components/FormSection";

export function App(){
  return(
    <>
    <main className="max-w-[2000px]
    mx-auto
    text-neutral-900
    dark:text-neutral-200
    bg-white
    dark:bg-neutral-800
    ">
    </main>
    <NavBar />
    <Hero />
    <Body />
    <Partners />
    <CtaSection />
    <FormSection />
    </>
  );
}