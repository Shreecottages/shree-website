import React from 'react'
import ContactJumbotron from './ContactJumbotron'
import ContactContent from './ContactContent'
import { Helmet } from 'react-helmet'

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact us - Shree Cottages</title>
        <meta 
          name='description'
          content='Conatct shree cottages'
        />
      </Helmet>
      <ContactJumbotron />
      <ContactContent />
    </div>
  )
}

export default Contact
