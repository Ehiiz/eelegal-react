import {ReactComponent as Bag} from '../svg/Bag.svg'
import {ReactComponent as Flow} from '../svg/User Arrows.svg'
import {ReactComponent as Circle} from '../svg/Circle Layer.svg'
import {ReactComponent as Notary} from '../svg/Notary.svg'

export default function Features(){

    return (
        <div className="bg-lilBlue w-full p-4 flex-col md:inline-grid md:grid-cols-2 md:justify-between items-center">
      <div className="p-12 flex-1 w-full">
        <h2 className="text-navGrey font-playfair font-bold text-lg md:text-3xl">Why do we help with legalization</h2>
        <p className="text-bioText font-poppins text-sm md:text-lg">Navigating the precarious tides of everyday uncertainties leaves many blind,
          we are here to ensure that the law protects you at all times</p>
      </div>
      <div className="w-full inline-flex flex-col items-center md:inline-grid md:grid-cols-2  gap-0">
      <div className="bg-white self-center shadow-lg p-6 md:px-8 md:py-6 w-56 md:w-56 rounded-xl m-2">
        <Circle />
        <h3 className="text-featBrown font-playfair font-bold text-lg md:text-xl pb-2">Litigation and Arbitration</h3>
        <p className="text-navGrey font-poppins text-xs md:text-sm">We protect your interest through litigation and arbitration process for both criminal and civil cases</p>
      </div>
      <div  className="bg-white shadow-lg p-6 md:px-8 md:py-6 w-56 md:w-56 rounded-xl m-2">
       <Bag />
        <h3 className="text-featBrown font-playfair  font-bold text-lg md:text-xl pb-2">Corporate and Commercial</h3>
        <p className="text-navGrey font-poppins text-xs md:text-sm">Serving to business continuity from drafting best-practice business policies to summation of patents trade secrets</p>
      </div>
      <div  className="bg-white shadow-lg p-6 md:px-8 md:py-6 w-56 md:w-56  rounded-xl m-2">
       <Flow />
        <h3 className="text-featBrown font-playfair font-bold text-lg md:text-xl pb-2">Land and Housing</h3>
        <p className="text-navGrey font-poppins text-xs md:text-sm"> We helps in land procurement, tenancy agreements to provide a procurement and leasing process that protects you from future legal issues</p>
      </div>
      <div  className="bg-white shadow-lg p-6 w-56 md:px-8 md:py-6 md:w-56 rounded-xl m-2">
     <Notary />
        <h3 className="text-featBrown font-playfair font-bold text-lg md:text-xl pb-2">Notary Services</h3>
        <p className="text-navGrey font-poppins text-xs md:text-sm"> Administration of oaths, annotation of affidavit evidence, sealing of contracts and deeds, attestation of legal documents and witnessing and certification of documents</p>
      </div>
    </div>
 </div>
    )
}