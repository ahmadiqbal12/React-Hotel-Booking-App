import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Header from '../../Components/header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import MailList from '../../Components/mailList/MailList'
import Footer from '../../Components/Footer/Footer'
import './hotel.css'
import { useState } from 'react'

const Hotel = () => {

  const[slideNumber, setSlideNumber]= useState(0)
  const[open, setOpen]= useState(false)

  const photoes =[
    {
      src: "https://media.istockphoto.com/photos/luxury-construction-hotel-with-swimming-pool-at-sunset-picture-id903417402?b=1&k=20&m=903417402&s=170667a&w=0&h=ZmirQvTTWNy0JcJDaZrm3IW50LNgra8EKmf5ux9HN_w="
    },
    {
      src: "https://media.istockphoto.com/photos/loft-room-picture-id953800430?b=1&k=20&m=953800430&s=170667a&w=0&h=6QPwklAHN1Enz3d3klxtDP_SBLInpX6xeevievgK4II="
    },
    {
      src:"https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?k=20&m=472899538&s=612x612&w=0&h=ZuEBl5Pq1_cn9pUsG_jAGQmiT0UgL1jyl7TZY6w-K0g="
    },
    {
      src:"https://images.unsplash.com/photo-1580977276076-ae4b8c219b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      src:"https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      src:"https://media.istockphoto.com/photos/aerial-view-of-las-vegas-strip-in-nevada-picture-id621843450?b=1&k=20&m=621843450&s=170667a&w=0&h=semauQCoQ5EiFhuLOEFAQGlDwkafw1_Gaf4nBWbVy0o="
    },
  ];

  const handleOpen =(i)=>{
    setSlideNumber(i);
    setOpen(true);
  }
  const handleMove =(direction)=>{
    let newSlideNumber;
    if(direction=="l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
     }
     setSlideNumber(newSlideNumber)
  };

  return (  
  
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
         
          <div className="slideWrapper">
            <img src={photoes[slideNumber].src} alt="" className="slideImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
        <button className='BookNow'>Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">Excellent Location 500m from center</span>
          <span className="hotelpriceHighlight">
              Book a Stay over $114at this property and get a free Airport taxi
          </span>
          <div className="hotelImages">
            {photoes.map((photo,i) =>(
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailText">
              <h1 className="hotelTitle">Stay in the Heart of krakow</h1>
              <p className='hotelDesc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia dolore enim ipsa incidunt dignissimos nesciunt eius quaerat placeat praesentium? Asperiores maxime, animi praesentium aliquam blanditiis cupiditate reiciendis amet fugit quam temporibus et inventore quaerat! Maxime dolore sapiente exercitationem? Minima enim accusantium beatae cumque dignissimos. Culpa voluptatum deserunt asperiores eos ad animi alias facilis labore fugit incidunt, officia dignissimos consectetur veniam. Aut qui eaque quae voluptas voluptatem magnam, ab vero natus explicabo? Adipisci ad, laboriosam eligendi dolores esse reiciendis rem praesentium!</p>
            </div>
            <div className="hotelDetailPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>Located  in the real heart of Karkow, this property has an excellent location score of 9.8!</span>
              <h2><b>$954</b>(9 nights)</h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel