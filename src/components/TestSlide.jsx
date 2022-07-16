import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


export default function TestSlide(){


    const slideImages = [
        {
          url: 'images/Swear.jpeg',
          caption: 'Slide 1'
        },
        {
          url: 'images/New Pic.jpeg',
          caption: 'Slide 2'
        },
        {
          url: 'images/Barri.jpeg',
          caption: 'Slide 3'
        },
        {
            url: 'images/Barrister Court.jpeg',
            caption: 'Slide 4'
          },
          {
            url: 'images/Barrister notary 2.jpeg',
            caption: 'Slide 5'
          },
          {
            url: 'images/Barrister 3.jpeg',
            caption: 'Slide 6'
          },
          {
            url: 'images/Notary 12.jpeg',
            caption: 'Slide 7'
          },
      ];

    return (
        <div className="w-full">
        <Fade>
         {slideImages.map((slideImage, index)=> (
            <div className="w-full rounded-2xl object-contain py-2 px-2 flex items-center" key={index}>
              {/* <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div> */}
              <img className="w-full rounded-2xl object-fill h-64 sm:h-96 items-center" src={slideImage.url} alt="" />
            </div>
          ))} 
        </Fade>
      </div>

    )
}