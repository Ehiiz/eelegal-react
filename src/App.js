import './App.css';
import  Hero from './img/Image Hero.png'
import Barrister_3 from './img/Barrister 3.jpeg'
import Swear from './img/Swear.jpeg'
import Honor from './img/New Pic.jpeg'
import Barri from './img/Barri.jpeg'
import Nota from './img/Barrister Notary.jpeg'
import Nota2 from './img/Barrister notary 2.jpeg'
import {ReactComponent as Address} from './svg/address.svg'
import {ReactComponent as Phone} from './svg/phone.svg'
import {ReactComponent as Email} from './svg/email.svg'
import {ReactComponent as Rocket} from './svg/Rocket.svg'
import {ReactComponent as Bag} from './svg/Bag.svg'
import {ReactComponent as Flow} from './svg/User Arrows.svg'
import {ReactComponent as Circle} from './svg/Circle Layer.svg'
import {ReactComponent as Notary} from './svg/Notary.svg'
import {ReactComponent as Whatsapp} from './svg/whatsapp.svg'




function App() {
  return (
<div className="bg-white">
{/* Navigation Bar Section */}
<nav className="px-4 py-4 xl:px-6 flex w-screen items-center justify-between bg-white">
<div className="font-montserrat md:text-2xl  font-bold text-legalBlue">EE LEGAL</div>
<div className="hidden md:flex w-80 justify-between">
<p className="text-sm text-navGrey font-poppins"><a href="tel:+2348033820666">CONTACT</a></p>
<p className="text-sm text-navGrey font-poppins"><a href="#services">SERVICES</a></p>
<p className="text-sm text-navGrey font-poppins"><a href="#about">ABOUT</a></p>
<p className="text-sm text-navGrey font-poppins"><a href="mailto: eelegalconsult@gmail.com">CONSULT</a></p>
</div>
<button className="rounded-xl font-montserrat bg-legalBlue text-sm md:text-lg text-white block p-2 md:p-2 sm:hidden shadow-md">CALL NOW</button>
</nav>

{/* Hero Page Section */}
<div className="static" >
<img src={Hero} alt="" className="w-auto h-auto"/>
<div className="absolute top-20 w-56 md:w-80 p-8 md:top-48 sm:top-48">
  <p className="text-white leading-snug font-playfair line font-bold text-lg md:text-4xl pb-2">Your Bridge to the Legal World</p>
  <p className="text-white font-montserrat text-xs md:text-lg  ">We are here to help you get the best of legal services</p>
</div>
</div>

{/* Features Section */}
<div className="bg-lilBlue w-full p-4 flex-col md:inline-grid md:grid-cols-2 md:justify-between items-center">
      <div className="p-12 flex-1 w-full">
        <h2 className="text-navGrey font-playfair font-bold text-lg md:text-3xl">Why do we help with legalization</h2>
        <p className="text-bioText font-poppins text-sm md:text-lg">Navigating the precarious tides of everyday uncertainties leaves many blind,
          we are here to ensure that the law protects you at all times</p>
      </div>
      <div className="w-full inline-flex flex-col items-center md:inline-grid md:grid-cols-2  gap-0">
      <div className="bg-white self-center shadow-lg p-6 md:px-8 md:py-6 w-48 md:w-56 rounded-xl m-2">
        <Circle />
        <h3 className="text-featBrown font-playfair font-bold text-lg md:text-xl pb-2">Litigation and Arbitration</h3>
        <p className="text-navGrey font-poppins text-xs md:text-sm">We protect your interest through litigation and arbitration process for both criminal and civil cases</p>
      </div>
      <div  className="bg-white shadow-lg p-6 md:px-8 md:py-6 w-48 md:w-56 rounded-xl m-2">
       <Bag />
        <h3 className="text-featBrown font-playfair  font-bold text-lg md:text-xl pb-2">Corporate and Commercial</h3>
        <p className="text-navGrey font-poppins text-xs md:text-sm">Serving to business continuity from drafting best-practice business policies to summation of patents trade secrets</p>
      </div>
      <div  className="bg-white shadow-lg p-6 md:px-8 md:py-6 w-48 md:w-56  rounded-xl m-2">
       <Flow />
        <h3 className="text-featBrown font-playfair font-bold text-lg md:text-xl pb-2">Land and Housing</h3>
        <p className="text-navGrey font-poppins text-xs md:text-sm"> We helps in land procurement, tenancy agreements to provide a procurement and leasing process that protects you from future legal issues</p>
      </div>
      <div  className="bg-white shadow-lg p-6 w-48 md:px-8 md:py-6 md:w-56 rounded-xl m-2">
     <Notary />
        <h3 className="text-featBrown font-playfair font-bold text-lg md:text-xl pb-2">Notary Services</h3>
        <p className="text-navGrey font-poppins text-xs md:text-sm"> Administration of oaths, annotation of affidavit evidence, sealing of contracts and deeds, attestation of legal documents and witnessing and certification of documents</p>
      </div>
    </div>
 </div>


{/* User Bio */}
 <div className="p-6 flex flex-col items-center w-full md:inline-flex md:flex-row md:justify-center md:items-center">
  <div className="md:w-2/5 md:ml-32 mb-2">
  <div className="">
    <img src={Barrister_3} alt="" className="w-48 h-48 rounded-full" />
    </div>
    <div>
  <p className="pt-4 text-sm font-poppins font-bold">Esezobor Emmanuel Izibili, Esq</p>
  <p className="text-sm font-poppins">Notary Public & KSM Nigeria</p>
    </div>
  </div>
   


    <div class="flex flex-col w-full items-center border-bioText border-2 shadow-xl px-4 pt-2 pb-4 rounded-2xl md:w-3/5">
        <h2 className="text-base font-bold font-montserrat pt-1 text-bioText rounded-xl mt-4 mb-2">About the Founder</h2>
        <div className="font-poppins text-xs md:text-base">
          <p>Barrister Emmanuel Esezobor Izibili is a legal practitioner and a Notary Public for Nigeria.
            He is a catholic and a member of the Honored Order of The Knights of Saint Mulumba Nigeria.
            A firm believer in upholding fairness and law and a community builder.
            Having served and interned under some of Nigeria's most reputable lawyers; Chief Otunba Kunle Kalejaye SAN, Chief Mike Ozekhome SAN and Chief Akin Olujinmi SAN el ta.
            He founded EE Legal Consult to make law accessible for the common man.</p>
        </div>
        <div className="font-poppins text-sm md:text-lg mt-4 p-3 bg-footStrong flex justify-center text-white rounded-xl w-44"><a  className="flex items-center justify-center" href="https://api.whatsapp.com/send?phone=+2348033820666&text=I%20would%20like%20to%20consult%20your%20services%20regarding%20.."> <Whatsapp /> message</a></div>

    </div>

 </div>


{/* Image Slider */}


<div id="controls-carousel" className="relative" data-carousel="static">
    {/* <!-- Carousel wrapper --> */}
    <div className="overflow-hidden relative h-48 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
         {/* <!-- Item 1 --> */}
        <div className="duration-700 ease-in-out" data-carousel-item>
            <img src={Barri} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
        </div>
        {/* <!-- Item 2 --> */}
        <div className="duration-700 ease-in-out" data-carousel-item="active">
            <img src={Swear} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
        </div>
        {/* <!-- Item 3 --> */}
        <div className="duration-700 ease-in-out" data-carousel-item>
            <img src={Honor} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
        </div>
        {/* <!-- Item 4 --> */}
        <div className="duration-700 ease-in-out" data-carousel-item>
            <img src={Nota} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
        </div>
        {/* <!-- Item 5 --> */}
        <div className="duration-700 ease-in-out" data-carousel-item>
            <img src={Nota2} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
        </div>
    </div>
    {/* <!-- Slider controls --> */}
    <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="hidden">Previous</span>
        </span>
    </button>
    <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="hidden">Next</span>
        </span>
    </button>
</div>



<div className="bg-footBlue mt-8 flex flex-col justify-between text-white items-center md:inline-grid md:grid-cols-2 w-full px-6 pl-10 py-2">
        <div className="py-2">
          <span className="text-white" id="address">
          <Address />
              <a href="XGG3+V7X, 900110, Abuja"></a>
          </span>
          <h3 className="font-playfair text-white text-lg">Address</h3>
          <p className="font-poppins text-sm">Suite 18, Block A, POWA Plaza</p>
          <p className="font-poppins text-sm">Apo, FCT </p>
          <p className="font-poppins text-sm">Abuja, Nigeria.</p>
        </div>
        <div className="font-playfair text-base py-2">
          <i className="icon2" id="email"> <Email /></i>
          <h3 className="text-lg font-playfair">Email</h3>
          <p className="font-poppins text-sm">eelegalconsult@gmail.com</p>
        </div>
        <div className="font-playfair py-4">
          <i className="icon2" id="phone"><Phone /></i>
          <h3 className=" text-lg">Phone Number/Whatsapp</h3>
          <p className="font-poppins text-sm">08033820666</p>
        </div>

        <div className="font-playfair py-4">
          <h3 className="font-poppins text-sm">EE LEGAL CONSULT</h3>
          <p className="font-poppins text-sm">BN: 2575212</p>
        </div>

  </div>
  <div className="bg-legalBlue px-4 text-footFill flex font-poppins items-center justify-between py-4 text-xs md:text-sm">
    <p>2022 EE Legal Consult.</p>
    <p>An Oriasotie Concept</p>
  </div>


</div>
  );
}

export default App;
