import React, { createContext, useState, useEffect } from "react"

export const FeedbackCardContext = createContext() 

const FeedbackCardProvider = ({ children }) => {

    const [feedbackCards, setFeedbackCards] = useState([])
    const baseApiUri = 'https://win24-assignment.azurewebsites.net/api/testimonials/'

    const getData = async () => {

        try {
            const res = await fetch(baseApiUri)
            if(!res.ok) {
                console.error('data could not be fetched')
            }
            const data = await res.json()

            setFeedbackCards(data)
        } catch (error) {
            console.error(error.message)
        }

    }

    useEffect(() => {

        getData()

    }, [])

    return (
        <FeedbackCardContext.Provider value={{feedbackCards}}>
            {children}
        </FeedbackCardContext.Provider>
    )


}

export default FeedbackCardProvider