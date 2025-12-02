import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";

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
    </>
  );
}