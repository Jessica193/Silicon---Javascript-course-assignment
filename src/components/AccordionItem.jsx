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
              <i className="fa-solid fa-chevron-down"></i>
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