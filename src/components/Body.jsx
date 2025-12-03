export function Body() {
 return (<div className="grid
 gap-12
 sm:gap-16
 md:gap-24
 lg:gap-32
 px-8
 overflow:hidden">
  <a href="#" className="
  py-2
  px-6
  bg-amber-400
  dark: text-neutral-900
  mx-auto
  my-12
  flex
  gap-2
  shadow-xl
  hover:shadow-none
  transition-shadow
  focus:outline-none
  focus-visible:ring-4
  ring-neutral-900
  rounded-md
  ring-offset-4
  ring-offset-white
  dark:ring-amber-400
  darkk:ring-offset-neutral-800
  ">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
   </svg>
   <span>Download the App</span>
  </a>

  <section aria-labelledby="qualities" className="relative">
   <img src="./assets/images/dots.svg" alt="dots" 
   className="hidden
   lg:block
   absolute
   top-1/2
   -translate-y-1/2
   -left-24
   xl:-left-7
   " aria-hidden="true" />
   <img src="./assets/images/dots.svg" alt="dots" 
   className="hidden
   lg:block
   absolute
   top-1/2
   -translate-y-1/2
   -right-24
   xl:-right-7
   " aria-hidden="true" />
   <h2 id="qualities" className="sr-only">Our Qualities</h2>
   <div className="container
   mx-auto
   max-w-5xl
   flex
   gap-12
   flex-wrap
   items-start
   justify-center
   md:justify-between
   ">
    <div className="grid
    gap-4
    justify-items-center
    text-center
    md:flex-1">
     <div className="
     rounded-full
     border-8
     border-amber-400
     p-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-14 w-14">
       <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
     </div>
     <h3 className="text-3xl font-bold">Safe</h3>
     <p>Our products are secure and private out-of-box</p>
    </div>

    <div className="grid
    gap-4
    justify-items-center
    text-center
    md:flex-1">
     <div className="
     rounded-full
     border-8
     border-amber-400
     p-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14">
       <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>

     </div>
     <h3 className="text-3xl font-bold">Efficient</h3>
     <p>Feel good about your wallet and the environment</p>
    </div>

    <div className="grid
    gap-4
    justify-items-center
    text-center
    md:flex-1">
     <div className="
     rounded-full
     border-8
     border-amber-400
     p-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14">
       <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>

     </div>
     <h3 className="text-3xl font-bold">Proven</h3>
     <p>Leading the Smart Home world for 10 years</p>
    </div>
   </div>
  </section>

 </div>);
}