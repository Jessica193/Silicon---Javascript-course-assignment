import React, { useEffect, useState } from 'react'

const DarkmodeSwitch = () => {

    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev)

        if (!isDarkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    useEffect(() => {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark')
        setIsDarkMode(true)
    } else if(savedTheme === 'light') {
        document.documentElement.classList.remove('dark')
        setIsDarkMode(false)
    }
     
    }, [])
    


  return (
    <div id="darkmode-toggle-switch" className="btn-toggle-switch">
        <span className="label">Dark mode</span>
        <label className="toggle" htmlFor="darkmode-switch">
            <input className="toggle-input" id='darkmode-switch' checked={isDarkMode} onChange={toggleDarkMode} type="checkbox" />
            <span className="slider"></span>
        </label>
    </div>
  )
}

export default DarkmodeSwitch