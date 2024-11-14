import React, { createContext, useState, useEffect } from "react"

export const AccordionItemContext = createContext() 

const AccordionItemProvider = ({ children }) => {

    const baseApiUri = 'https://win24-assignment.azurewebsites.net/api/faq'
    const [AccordionItems, setAccordionItems] = useState([])

  
    const getFAQAccordion = async () => {
  
      try {
        const res = await fetch(baseApiUri)
        
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
        <AccordionItemContext.Provider value={{AccordionItems}}>
            {children}
        </AccordionItemContext.Provider>
    )


}

export default AccordionItemProvider