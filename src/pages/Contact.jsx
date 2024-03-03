import React from 'react'

export default function Contact({data}) {
  return (
    <div className="informationcontainer" id="informationcontainer">
      <div id="information" className="information reveal active">
        <div className="textInformationBox">
          <div className="contactWritten">
            <span className="material-symbols-outlined">location_on</span>
            <p>89269 Illertissen Marktpl. 6</p>
            <span className="material-symbols-outlined">mail</span>
            <p>omaskleiderschrank@gmail.com</p>
            <span className="material-symbols-outlined">call</span>
            <p>0000 666 789 987</p>
          </div>

          <div className="openTimeWritten">
            <table>
              <thead>
                <tr>
                  <td>{data && data.open}</td>
                </tr>
              </thead>
              <tbody>
                {data &&
                  Object.keys(data.days).map((key, i) => (
                    <tr key={i}>
                      <td>{key}</td>
                      <td>{data.days[key]}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mapBox">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4568.452419248439!2d10.10127192037161!3d48.22181488620668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479be16e651cfbbb%3A0x6973c96265a12b8f!2sMarktpl.%206%2C%2089257%20Illertissen%2C%20N%C3%A9metorsz%C3%A1g!5e0!3m2!1shu!2shu!4v1674120671089!5m2!1shu!2shu"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
