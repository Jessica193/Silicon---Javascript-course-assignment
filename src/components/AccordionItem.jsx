import React, { useState } from 'react'

const AccordionItem = ({item}) => {

    const [IsOpen, setIsOpen] = useState(false)
    
    const toggleOpen = () => {

        setIsOpen(prev => !prev)
    }


  return (
    <div onClick={toggleOpen} className={`accordion-item ${IsOpen && 'open'}`}  >
          <div className="question">
              <p>{item.title}
              </p>
              <button >
                  v{/* <img src='public\images\Accordion\grey-arrow-down.svg' alt="arrow icon"/> */}
              </button>
          </div>
          <div className='answer'>
              <div className="expandable">
                  {item.content}
              </div>
          </div>
    </div>
  )
}

export default AccordionItem