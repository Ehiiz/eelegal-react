import  HeroImg from '../img/Image Hero.png';

export default function Hero(){

    return (
        <div className="static" >
        <img src={HeroImg} alt="" className="w-auto h-auto"/>
        <div className="absolute top-20 w-56 md:w-80 p-8 md:top-48 sm:top-48">
          <p className="text-white leading-snug font-playfair line font-bold text-lg md:text-4xl pb-2">Your Bridge to the Legal World</p>
          <p className="text-white font-montserrat text-xs md:text-lg  ">We are here to help you get the best of legal services</p>
        </div>
        </div>
    )
}