import React from 'react'

const NavigationPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">How to Reach Us</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">By Air</h2>
        <p>Nearest Airport: Dehradun</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">By Train</h2>
        <p className="mb-4">Nearest Railway Station: Saharanpur</p>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="font-semibold mb-2">From Delhi to Saharanpur:</h3>
          <ul className="list-disc pl-6">
            <li>Train: Shatabdi Express (12017)</li>
            <li>Departure: New Delhi station (NDLS) at 06:45</li>
            <li>Arrival: Saharanpur station (SRE) at 09:50</li>
            <li>Stops: 4 stoppages</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">From Saharanpur to Delhi:</h3>
          <ul className="list-disc pl-6">
            <li>Train: Dehradun Shatabdi (12018)</li>
            <li>Departure: Saharanpur at 19:50</li>
            <li>Duration: 2h 55m</li>
            <li>Alternative: Jalandhar City New Delhi Express (14682)</li>
            <li>Departure: Saharanpur at 09:20</li>
            <li>Duration: 3h 30m</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">By Road</h2>
        <p>The temple is well connected by road from:</p>
        <ul className="list-disc pl-6">
          <li>Saharanpur</li>
          <li>Chhutmalpur (via Behat)</li>
          <li>Delhi to Saharanpur route available</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Location Map</h2>
        <div className="w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.3059112905344!2d77.739886376358!3d30.256863874817356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390edc614638511d%3A0xf5221b10df7e7f9a!2sShaktipeeth%20Shri%20Shakambhari%20devi%20ji%20temple%20Saharanpur!5e0!3m2!1sen!2sin!4v1740679853606!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

    </div>
  )
}

export default NavigationPage