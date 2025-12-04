export function FormSection() {
 return (
  <section aria-labelledb="contact" className="mx-auto
  px-8
  overflow-hidden">
   <div className="flex flex-wrap justify-center gap-12 md:gap-6 lg:gap-20">
    <div className="md:flex-1 md:max-w-sm relative">
     <img src="./assets/images/lamp.png" alt="lamp" className="mx-auto" />
     <a
      href="#"
      className="
       py-2
       px-6
       bg-amber-400
       dark: text-neutral-900
       w-max
       mx-auto
       md:mb-12
       mt-12
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
      Download the App
     </a>
     <img src="./assets/images/app.svg" alt="app" width="240" className="hidden
     md:block
     drop-shadow-xl
     absolute
     left-1/2
     -translate-x-1/2
     max-w-16" />
    </div>
    <form className="
    relative
    border-8
    border-neutral-900
    p-6
    rounded-lg
    grid
    gap-8
    md:flex-1
    md:max-w-lg
    my-4
    md:my-12
    lg:my-16
    bg-white
    dark:bg-neutral-800
    w-full">

     <h2 id="contact" className="text-3xl
   font-bold dark:text-white">Let's Connect</h2>

     <div className="relative">
      <input type="text" id="name" className="
      peer
      form-input
      w-full
      border-4
      border-amber-400
      rounded-md
      focus:ring-4
      dark:focus:ring-offset-2
      focus:ring-amber-400
      focus:border-amber-400
      focus:outline-none
      dark:bg-amber-400
      dark:text-neutral-900
      placeholder-transparent
    " placeholder="Your Name"/>
      <label for="name" className="text-neutral-500
      peer-focus:text-blue-400
        text-sm
        font-bold
        uppercase
        absolute
        -top-4
        left-2
        -translate-y-1/2
        transition-all
        peer-placeholder-shown:left-4
        peer-placeholder-shown:top-1/2
        peer-placeholder-shown:text-neutral-900
        peer-focus:-top-4
        peer-focus:left-2
        peer-focus:text-neutral-600
        dark:peer-focus:text-neutral-300">
        Your Name
       </label>
      </div>

      <div className="relative">
      <input type="email" id="email" className="
      peer
      form-input
      w-full
      border-4
      border-amber-400
      rounded-md
      focus:ring-4
      dark:focus:ring-offset-2
      focus:ring-amber-400
      focus:border-amber-400
      focus:outline-none
      dark:bg-amber-400
      dark:text-neutral-900
      placeholder-transparent
    " placeholder="Your Email"/>
      <label for="email" className="text-neutral-500
      peer-focus:text-blue-400
        text-sm
        font-bold
        uppercase
        absolute
        -top-4
        left-2
        -translate-y-1/2
        transition-all
        peer-placeholder-shown:left-4
        peer-placeholder-shown:top-1/2
        peer-placeholder-shown:text-neutral-900
        peer-focus:-top-4
        peer-focus:left-2
        peer-focus:text-neutral-600
        dark:peer-focus:text-neutral-300">
        Your Email
       </label>
      </div>

     <div className="relative">
       <textarea name="content" id="content" cols="20" rows="5" className="
      peer
      form-textarea
      resize-none
      w-full
      border-4
      border-amber-400
      rounded-md
      focus:ring-4
      dark:focus:ring-offset-2
      focus:ring-amber-400
      focus:border-amber-400
      focus:outline-none
      dark:bg-amber-400
      dark:text-neutral-900
      placeholder-transparent
    " placeholder="How can we help?">
    </textarea>
      <label for="content" className="text-neutral-500
      peer-focus:text-blue-400
        text-sm
        font-bold
        uppercase
        absolute
        -top-3
        left-2
        -translate-y-1/2
        transition-all
        peer-placeholder-shown:left-4
        peer-placeholder-shown:top-6
        peer-placeholder-shown:text-neutral-900
        peer-focus:-top-4
        peer-focus:left-2
        peer-focus:text-neutral-600
        dark:peer-focus:text-neutral-300">How can we help?</label>
     </div>
     <a
       href="#"
       className="
         py-2
         px-6
         bg-neutral-900
         text-white
         w-max
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
         ring-offset-white-400
         dark:ring-offset-amber-400"
          >
            Sign Up
          </a>
    </form>
   </div>
  </section>
 );
}