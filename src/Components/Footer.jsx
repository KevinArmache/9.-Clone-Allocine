import Facebook from "../Images/facebook.svg"
import Whatsapp from "../Images/whatsapp-square-brands.svg"
import Twitter from "../Images/twitter.svg"

function Footer () {
    return (
        <div className="Footer">

           
            <div className="Footer__FollowUs">
                <p>FOLLOW US</p>
                <div className="Footer__SocialMedia">
                    <a href="..."><img src={Facebook} alt="..."/></a>
                    <a href="..."><img src={Whatsapp} alt="..."/></a>
                    <a href="..."><img src={Twitter} alt="..."/></a>
                </div>
                <p className="Footer__Copyright">Copyright © 2021 Kevin Armache. All rights reserved.</p>
            </div>
            {/* <div className="Footer__Newsletter">
                <label>Newsletter</label>
                <div className="Footer__Newsletter__Input">
                <input type="text" name="Newsletter" placeholder="monmail@gmail.com" />
                <button>Subscribe</button>
                </div>
            </div> */}
           
        </div>
    )
}

export default Footer;