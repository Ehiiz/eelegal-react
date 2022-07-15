export default function Navbar(){
     return (
        <nav className="px-4 py-4 xl:px-6 flex w-screen items-center justify-between bg-white">
<div className="font-montserrat md:text-2xl  font-bold text-legalBlue">EE LEGAL</div>
<div className="hidden md:flex w-80 justify-between">
<p className="text-sm text-navGrey font-poppins"><a href="tel:+2348033820666">CONTACT</a></p>
<p className="text-sm text-navGrey font-poppins"><a href="#services">SERVICES</a></p>
<p className="text-sm text-navGrey font-poppins"><a href="#about">ABOUT</a></p>
<p className="text-sm text-navGrey font-poppins"><a href="mailto: eelegalconsult@gmail.com">CONSULT</a></p>
</div>
<button className="rounded-xl font-montserrat bg-legalBlue text-sm md:text-lg text-white block p-2 md:p-2 sm:hidden shadow-md"><a href="tel:+2348033820666">CALL NOW</a></button>
</nav>
     )
}