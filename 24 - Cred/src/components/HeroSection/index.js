import React from "react"
import Button from "../common/Button";
import './heroSection.css'

const HeroSection = () => {
    return <div className="hero-section-wrapper">
        <div className="hero-claim-label flex absolute-center">
            <div>pay credit card bill. earn guaranteed &#8377;200 back.</div>
            <div className="claim-anchor"> claim now</div>
        </div>
        <div className="flex absolute-center flex-col hero-section max-width">
            <div className="hero-heading">rewards for paying credit card bills.</div>
            <div className="hero-subheading">Join 7.5M+ members who win rewards and cashback everyday</div>
            <Button buttonText='Download Cred'/>
        </div>
    </div>
}

export default HeroSection;