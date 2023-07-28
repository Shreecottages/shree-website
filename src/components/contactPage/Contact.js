import React from 'react'
import ContactJumbotron from './ContactJumbotron'
import ContactContent from './ContactContent'
import { Helmet } from 'react-helmet'
import shreecontact from "../../images/Hero.webp"

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact for Resort & Event Booking at Sasan Gir - Shree Cottages</title>
        <meta name="description" content="Resort Address. Veraval Road ,Near Essar Petrol Pump Talala Gir 362150, Gir Somnath, Gujarat, India. Call: +91 94274 24157 , Mail: info@shreecottages.com"/>
        <meta name="keywords"content="shree Cottage, shree Party Plot, event booking, resort, contact us, hotel, rooms, hotel rooms, sasan gir, talala gir, gir, gujarat"/>
        <meta name="robots" content="index, follow"/>
        <meta name="canonical" content="https://shreecottages.com/contact"/>
        <meta name="image" content={shreecontact} />

        <meta name="og:title" content="Contact for Resort & Event Booking at Sasan Gir - Shree Cottages"/>
        <meta property="og:site_name" content="Shree Cottgaes" />
        <meta name="og:description" content="Resort Address. Veraval Road ,Near Essar Petrol Pump Talala Gir 362150, Gir Somnath, Gujarat, India. Call: +91 94274 24157 , Mail: info@shreecottages.com"/>
        <meta name="og:image" content={shreecontact} />
      </Helmet>
      <ContactJumbotron />
      <ContactContent />
    </div>
  )
}

export default Contact
