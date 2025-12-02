export function NavBar() {

 return (
  <nav className="mx-auto
  p-4
  bg-amber-400
  " >
   <div className="container
   mx-auto
   flex
   items-center
   justify-between
   ">

    <a href="/" aria-label="Go to homepage" className="focus:outline-none
    focus-visible:ring-4
    ring-neutral-900
    rounded-sm
    ring-offset-4
    ring-offset-amber-400
    lg:absolute
    lg:left-1/2
    lg:-translate-x-1/2
    lg:top-9
    z-50
    hover:opacity-75
    transition:opacity
    ">
     <img src="/assets/images/logo.svg"
      alt="Home Smart Logo"
      width="200"
      className="w-48
     md:w-64
     lg:w-72
     " />
    </a>

    <button id="menu" className="
    lg:hidden
    focus:outline-none
    focus-visible:ring-4
    ring-neutral-900
    rounded-sm
    ring-offset-4
    ring-offset-amber-400
    hover:text-neutral-600
    transition-colors
    " aria-expanded="false"
    aria-label="open-menu">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-8 h-8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
     </svg>
    </button>

    <div role="menubar" className="
    hidden
    flex
    flex-col
    gap-4
    absolute
    right-0
    left-0
    top-16
    bg-amber-400
    shadow-xl
    text-center
    p-6
    text-lg
    items-center
    lg:flex
    lg:flex-row
    lg:static
    lg:shadow-none
    lg:justify-between
    lg:w-full
    ">
     <a role="menuitem" href="/" className="
     py-1
     px-6
     dark:text-neutral-900
     focus:outline-none
     focus-visible:ring-4
     ring-neutral-900
     rounded-sm
     ring-offset-4
     ring-offset-amber-400
     hover:text-neutral-600
     transition-colors
     ">
      Home
     </a>

     <a role="menuitem" href="/" className="
     py-1
     px-6
     dark:text-neutral-900
     focus:outline-none
     focus-visible:ring-4
     ring-neutral-900
     rounded-sm
     ring-offset-4
     ring-offset-amber-400
     hover:text-neutral-600
     transition-colors
     lg:mr-auto
     ">
      Contact
     </a>
     
     <a role="menuitem" href="/" className="
     py-1
     px-6
     dark:text-neutral-900
     focus:outline-none
     focus-visible:ring-4
     ring-neutral-900
     rounded-sm
     ring-offset-4
     ring-offset-amber-400
     text-neutral-900
     hover:text-neutral-600
     transition-colors
     ">
      Login
     </a>
     <a role="menuitem" href="/" className="
     py-2
     px-6
     bg-teal-900
     text-white
     shadow-xl
     hover:shadow-none
     transition-shadow
     focus:outline-none
     focus-visible:ring-4
     ring-neutral-900
     rounded-md
     ring-offset-4
     ring-offset-amber-400
     transition-colors

     ">
      Sign Up
     </a>
    </div>


   </div>
  </nav>
 );
}