import React from 'react'

const AddressSection = () => {
  return (
    <section className='address-section'>
        <div className="container address-container">

            <div className='map'>
                <img src="public\images\contact\map.svg" alt="" />
            </div>

            <div className="medical-centers">

                <div className="medical-center">
                    <h5>Medical Center 1</h5>
                    <div className='medical-center-contacts'>
                        <img src="public\images\contact\pin-map.svg" alt="" />
                        <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                    </div>

                    <div className='medical-center-contacts'>
                        <img src="public\images\contact\phone.svg" alt="" />
                        <p>(406) 555-0120</p>
                    </div>

                    <div className='medical-center-contacts'>
                        <img src="public\images\contact\clock.svg" alt="" />
                        <p>Mon – Fri: 9:00 am – 22:00 am <br />
                        Sat – Sun: 9:00 am – 20:00 am</p>
                    </div>
                </div>

                <div className="medical-center">
                    <h5>Medical Center 2</h5>
                    <div className='medical-center-contacts'>
                        <img src="public\images\contact\pin-map.svg" alt="" />
                        <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
                    </div>

                    <div className='medical-center-contacts'>
                        <img src="public\images\contact\phone.svg" alt="" />
                        <p>(406) 544-0123</p>
                    </div>

                    <div className='medical-center-contacts'>
                        <img src="public\images\contact\clock.svg" alt="" />
                        <p>Mon – Fri: 9:00 am – 22:00 am <br />
                        Sat – Sun: 9:00 am – 20:00 am</p>
                    </div>    
                </div>

                <div className="social-media">

                    <a href="#" className="social-media-icon">
                        <img src="public\images\contact\facebook-icon.svg" alt="" />
                    </a>

                    <a href="#" className="social-media-icon">
                        <img src="public\images\contact\twitter-icon.svg" alt="" />
                    </a>

                    <a href="#" className="social-media-icon">
                        <img src="public\images\contact\instagram-icon.svg" alt="" />
                    </a>

                    <a href="#" className="social-media-icon">
                        <img src="public\images\contact\youtube-icon.svg" alt="" />
                    </a>

                </div>
                
            </div>

        </div>
    </section>
  )
}

export default AddressSection