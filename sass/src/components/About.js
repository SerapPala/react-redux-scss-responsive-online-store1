import React from 'react'
import {RiTShirtAirFill} from 'react-icons/ri'
const About = () => {
    const [state] = React.useState({heading: 'Biz Kimiz?', text: 'Dolore dolor rebum et et ipsum, dolore nonumy sed sit diam et, sea voluptua labore diam duo rebum voluptua consetetur.Sed erat amet sanctus amet sed ipsum nonumy. Diam voluptua dolor erat ea, stet sea elitr ipsum eos et. Accusam.Dolore dolor rebum et et ipsum, dolore nonumy sed sit diam et, sea voluptua labore diam duo rebum voluptua consetetur.Sed erat amet sanctus amet sed ipsum nonumy. Diam voluptua dolor erat ea, stet sea elitr ipsum eos et. Accusam.Dolore dolor rebum et et ipsum, dolore nonumy sed sit diam et, sea voluptua labore diam duo rebum voluptua consetetur.Sed erat amet sanctus amet sed ipsum nonumy. Diam voluptua dolor erat ea, stet sea elitr ipsum eos et. Accusam.Dolore dolor rebum et et ipsum, dolore nonumy sed sit diam et, sea voluptua labore diam duo rebum voluptua consetetur.Sed erat amet sanctus amet sed ipsum nonumy. Diam voluptua dolor erat ea, stet sea elitr ipsum eos et. Accusam.'});
    const [sections] = React.useState ([
        {id: 1, icon : <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-handbag" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 1a2 2 0 0 0-2 2v2h4V3a2 2 0 0 0-2-2zm3 4V3a3 3 0 1 0-6 0v2H3.361a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.356a2.5 2.5 0 0 0 2.472-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 0 0 1 0V6h4z"/>
       </svg>, heading : 'Online Store', text: ' Dolore dolor rebum et et ipsum, dolore nonumy sed.' },
        {id: 2 , icon :<RiTShirtAirFill className="icon"/>, heading: 'T-Shirt Dizayn', text: 'Dolore dolor rebum et et ipsum, dolore nonumy sed.'}
    ]);
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h4 className="about__h4">{state.heading}</h4>
                    </div>
                    <div className="col-9">
                        <div className="about__text">
                        <p>{state.text}</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-60">
                    <div className="about__secondheading"><h3>Neler Yapıyoruz?</h3></div>
                    {sections.map(section => (
                <div className="col-4 pl-15" key={section.id}>
                <div className="about__section">
                    <div className="about__section-icon">
                        {section.icon}
                    </div>
                    <div className="about__section-heading">
                        <h6>{section.heading}</h6>
                    </div>
                    <div className="about__section-text">
                    <p>{section.text}</p>
                    </div>
                </div>
            </div>
                    ))}

            </div>
            </div>

        </div>
    )
}

export default About