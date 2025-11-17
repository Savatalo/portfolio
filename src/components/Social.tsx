import portfolioImg from "../assets/portfolio.gif";

export default function Social() {
    return(
    <div className="social-box">

            <p className="name">Marko Savic</p>
            <p className="title">Junior Software Developer</p>
            <img className="characterImg" src={portfolioImg} alt="Portfolio"/>
            <p>Contact</p>
    <div className="link-div">
        <div>
            <span className="link">&lt;Location&gt;</span>
            <a href="https://www.google.com/maps/place/Belgrade/@44.815344,20.4224682,39539m/data=!3m2!1e3!4b1!4m6!3m5!1s0x475a7aa3d7b53fbd:0x1db8645cf2177ee4!8m2!3d44.8125449!4d20.4612299!16zL20vMGZoemY?entry=ttu" 
            target="_blank"
            rel="noopener noreferrer">
            Belgrade, Serbia
            </a>
            </div>
            
        <div>
            <span className="link">&lt;Email&gt;</span>
            <a href="" 
            target="_blank"
            rel="noopener noreferrer">
            mare.programer25@gmail.com
            </a>
        </div>

         <div>
            <span className="link">&lt;Linkedin&gt;</span>
            <a href="https://www.linkedin.com/in/marko-savic-9390162bb/" 
            target="_blank"
            rel="noopener noreferrer">
            in/marko-savic/
            </a>
        </div>

         <div>
            <span className="link">&lt;GitHub&gt;</span>
            <a href="https://github.com/Savatalo" 
            target="_blank"
            rel="noopener noreferrer">
            Savatalo
            </a>
        </div>

         <div>
            <span className="link">&lt;CV&gt;</span>
            <a href="" 
            target="_blank"
            rel="noopener noreferrer">
            Download
            </a>
        </div>
    </div>

    </div>
    )
}