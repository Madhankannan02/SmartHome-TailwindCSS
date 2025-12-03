export function Partners(){
 return(
  <section aria-labelledby="partners" className="text-center grid gap-8 place-items-center">
   <div className="grid gap-4">
    <h2 id="partners" className="text-4xl
    font-bold
    text-amber-400">Our Partners</h2>
    <p className="w-full max-w-lg">
     We've partnered with hundreds of smart home brands to help you create a smart home that fits your needs and doesn't lock you in.
    </p>
   </div>
   <div className="flex flex-wrap justify-center gap-8 md:gap-x-16 max-w-2xl mx-auto">
    <div className="p-4 bg-white dark:bg-neutral-200 shadow-md dark:shadow-xl rounded-md">
     <img src="./assets/images/partner1.svg" alt="Partner 1" className="h-16 w-16" />
    </div>

    <div className="p-4 bg-white dark:bg-neutral-200 shadow-md dark:shadow-xl rounded-md">
     <img src="./assets/images/partner2.svg" alt="Partner 2" className="h-16 w-16" />
    </div>

    <div className="p-4 bg-white dark:bg-neutral-200 shadow-md dark:shadow-xl rounded-md">
     <img src="./assets/images/partner3.svg" alt="Partner 1" className="h-16 w-16" />
    </div>

    <div className="p-4 bg-white dark:bg-neutral-200 shadow-md dark:shadow-xl rounded-md">
     <img src="./assets/images/partner4.svg" alt="Partner 1" className="h-16 w-16" />
    </div>

    <div className="p-4 bg-white dark:bg-neutral-200 shadow-md dark:shadow-xl rounded-md">
     <img src="./assets/images/partner5.svg" alt="Partner 1" className="h-16 w-16" />
    </div>

    <div className="p-4 bg-white dark:bg-neutral-200 shadow-md dark:shadow-xl rounded-md">
     <img src="./assets/images/partner6.svg" alt="Partner 1" className="h-16 w-16" />
    </div>

    <div className="p-4 bg-white dark:bg-neutral-200 shadow-md dark:shadow-xl rounded-md">
     <img src="./assets/images/partner7.svg" alt="Partner 1" className="h-16 w-16" />
    </div>
   </div>
  </section>
 );
}