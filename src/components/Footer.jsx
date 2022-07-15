import {ReactComponent as Address} from '../svg/address.svg'
import {ReactComponent as Phone} from '../svg/phone.svg'
import {ReactComponent as Email} from '../svg/email.svg'

export default function Footer(){

    return (
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
    )
}