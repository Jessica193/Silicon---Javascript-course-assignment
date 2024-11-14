import React, { useContext, useEffect, useState } from 'react'
import AccordionItem from './AccordionItem'
import { AccordionItemContext } from './contexts/AccordionItemContext'

const FAQAccordion = () => {

  const {AccordionItems} = useContext(AccordionItemContext)


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