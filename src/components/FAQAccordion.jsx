import React, { useEffect, useState } from 'react'
import AccordionItem from './AccordionItem'

const FAQAccordion = () => {

  const [AccordionItems, setAccordionItems] = useState([

  ])

  
  const getFAQAccordion = async () => {

    try {
      const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
      
      if(!res.ok) {
        console.error('Could not fetch data')
      }

      const data = await res.json()

      setAccordionItems(data)

    } catch (error) {
      console.log(error.message)
    }
  }
  

  useEffect( () => {

      getFAQAccordion()

  }, [])





  return (

    <div className="accordion">
      {
        AccordionItems.map( (item) => {
          return <AccordionItem key={item.id} item={item} />
        })

      }
    </div>
  )
}

export default FAQAccordion