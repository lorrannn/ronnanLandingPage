import "./styles.css"
import { ContactButton } from "../ContactButton"

import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";



export const ContactComponent = () => {
    return (
        <>
            <div id="contactComponentContainer">
                <div id="contactContentContainer">
                    <div>
                        <h2>Fale Comigo </h2>
                        <ContactButton />
                    </div>
                    <div id="socialsContainer">
                            <CiLinkedin />
                            <CiInstagram />
                            <CiFacebook />
                            <CiTwitter />
                        <p>ronnan.ct@hotmail.com</p>
                        <p>(21) 99999-8888</p>
                    </div>
                </div>
            </div>
        </>
    )
}

