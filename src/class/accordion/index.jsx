import './style.css'
import ArrowDown from './arrow-down.svg'
import ArrowUp from './arrow-up.svg'
import { useState } from 'react'

export default function Accordion() {

    const [ active, setActive ] = useState(false)

    function handleAccordion() {
        return setActive(!active)
    }

    return (
        <div className="accordion-container">
            <div className="accordion-top">
                <h3>Question text goes here</h3>
                <button onClick={handleAccordion}>
                 <img src={active ? ArrowDown : ArrowUp} alt="" />
                </button>
            </div>
            {
                active &&

            <div className="accordion-bottom">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>
            }
        </div>
    )
}