import Swear from '../img/Swear.jpeg'
import Honor from '../img/New Pic.jpeg'
import Barri from '../img/Barri.jpeg'
import Nota from '../img/Barrister Notary.jpeg'
import Nota2 from '../img/Barrister notary 2.jpeg'

export default function Slider(){

    return (
        
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
    )
}