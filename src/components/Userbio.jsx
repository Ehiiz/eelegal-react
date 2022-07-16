import Barrister_3 from '../img/Barrister 3.jpeg'
import {ReactComponent as Whatsapp} from '../svg/whatsapp.svg'

export default function Userbio(){

    return (
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
          <p>Barrister Esezobor Emmanuel Izibili is a legal practitioner and a Notary Public for Nigeria.
            He is a catholic and a worthy brother of the Honored Order of The Knights of Saint Mulumba Nigeria.
            A firm believer in upholding fairness and law and a community builder.
            Having served and interned under some of Nigeria's most reputable lawyers; Chief Otunba Kunle Kalejaye SAN, Chief Mike Ozekhome SAN and Chief Akin Olujinmi SAN el ta.
            He founded EE Legal Consult to make law accessible for the common man.</p>
        </div>
        <div className="font-poppins text-sm md:text-lg mt-4 p-3 bg-footStrong flex justify-center text-white rounded-xl w-44"><a  className="flex items-center justify-center" href="https://api.whatsapp.com/send?phone=+2348033820666&text=I%20would%20like%20to%20consult%20your%20services%20regarding%20.."> <Whatsapp /> message</a></div>

    </div>

 </div>
    )
}