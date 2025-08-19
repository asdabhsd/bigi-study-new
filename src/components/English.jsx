import { NavLink } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCallSharp } from "react-icons/io5";
import { TbMessageDots } from "react-icons/tb";
import tg from "../logos/tg.png"
import fc from "../logos/fc.png"
import inst from "../logos/inst.png"
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import quality from "../assets/quality.png";
import truck from "../assets/truck.png";
import rightarrow from "../assets/rightarrow.png"
import langs from "../assets/language.png"
import arava from "../flowing images/arava.jpg"
import artel from "../flowing images/artell.png"
import dock from "../flowing images/dock.jpg"
import express from "../flowing images/express.jpg"
import global from "../flowing images/global.jpg"
import hally from "../flowing images/hally.jpg"
import itpark from "../flowing images/itpark.jpg"
import noor from "../flowing images/noor.jpg"
import taxir from "../flowing images/taxir.webp"
import v1  from "../videos/vv (1).mp4"
import v2  from "../videos/w1 (1).mp4"
import v3  from "../videos/w2 (1).mp4"
import v4  from "../videos/w4 (1).mp4"
import v5  from "../videos/v5 (1).mp4"
import v6  from "../videos/v6 (1).mp4"
import v7  from "../videos/v7 (1).mp4"
import v8  from "../videos/v8 (1).mp4"
import v9  from "../videos/v9 (1).mp4"
import v10 from "../videos/v10 (1).mp4"



function English(){
    const [scrolled, setScrolled] = useState(false); // 🔹 State yaratildi

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // 50px pastga tushganda true bo‘ladi
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return(
        <>
           <div className="home">
             
           <div id="navbar" className={`nav ${scrolled ? "scroll" : ""}`}>
            <img id="link" src="/globus.jpg" alt="" />
               <div className="menyu">
                    <RxHamburgerMenu  className="ham"/>
               <div className="pages">
                <h4>pages</h4>
               <div className="UL">
                    <HashLink smooth to="#link0">
                    Home
                    </HashLink>
                    <HashLink smooth to="#link1">
                    About us
                    </HashLink>
                    <HashLink smooth to="#link2">
                   News
                    </HashLink>
                    <HashLink smooth to="#linkvip">
                    Facts
                    </HashLink>
                    <HashLink smooth to="#linkon">
                   Statistics
                    </HashLink>
                    <HashLink smooth to="#linkoff">
                    Partners
                    </HashLink>
                    
                    <button 
                    onClick={() => window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScOVHIgqEwZVlcd4Ymu5-upaQm-ihDYc2Zp_5wWSETtLaQDBA/alreadyresponded"} 
                    className="REGISTER"
                    >
                    register <GoArrowRight className="right-arrow" /> 
                    </button>

                   
                </div>
               </div>
               </div>
                <div className="LANG">
                <NavLink to="/">EN</NavLink>
                    <NavLink to="/rus">RU</NavLink>
                    <NavLink to="/uzb">UZ</NavLink>
                </div>
            </div>
            <div className="txt">
                <h2>Internation Logistics Academy</h2>
                <p>Master an in-demand profession in 3 months! <br />
                International transport logistics with knowledge of English B2! <br />
                3 steps to your dream job!</p>
                <div className="tugma-container">
                    <a href="tel:+998957270017">
                    <div className="tugma1">
                        <IoCallSharp className="call-icon" />
                        <p className="call-p">Call</p>
                    </div>
                    </a>
                   <a href="">
                   <div className="tugma2">
                    <TbMessageDots className="message-icon" />
                    <p className="message-p">message</p>
                    </div>
                   </a>
                </div>
            </div>
            <div className="social-media">
            <a href="https://t.me/DjSsardor" target="_blank">
                <img src={tg} alt="" />
                  </a>
                <a href="https://www.instagram.com/bigiedu_uz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="blank">
                <img src={inst} alt="" />
                </a>
                <a href="https://www.facebook.com/bigi.study/" target="_blank">
                <img src={fc} alt="" />
                </a>
            </div>
            
           </div>

           <section className="about">
                <h2>About us</h2>
                <p>Have you always wanted to try yourself in the field of logistics?</p>
               <div className="about-container">
               <div className="text1">
                    <h2>A Journey of a Thousand Miles Involves Many Small Steps" - by a londor doctor</h2>
                    <p>The BIGI study team, consisting of energetic, enthusiastic and empowering members never thought twice about offering a trucking business classes and sharing their own experiences because of the value it can provide.The BIGI study team, consisting of energetic, enthusiastic and empowering members never thought twice about offering a trucking business classes and sharing their own experiences because of the value it can provide to other businesses by transporting goods from one location to another over and over again. Eventually, the team was able to create the best transportation logistics courses, and we would like to share with you how simple and joyful it can be to be a creative part of this industry if you have an open-minded system and clear goal in place.</p>
                </div>
                <div className="text2">
                A course on "U.S. Trucking" , currently being held at the academy, will be taught in 3 stages. <br /> <br />

                Stage 1️⃣: "English for Logistics" focuses on developing students' English language with the help of general logistical vocabularies and terms. It lasts 2 weeks. The course will enhance general understanding on logistics and put stress on improving "American accent".
                <br /><br />
                Stage 2️⃣: Knowledge, insights and skills necessary for trucking specialists , such as dispatching, updating, fleet, safety, accounting, and ELD management are formed. This stage lasts for 1 month.
                <br /><br />
                Stage 3️⃣: Joining free practice and trainings at our partner companies as an intern for 1 month and move to the "EARNING" stage!
                <br /><br />
                ✅ We select students through an interview. If your English level is B2 or higher, we look forward to seeing you soon.
                </div>
                <div className="text3">
                    <p>Transportation of goods and services has always been one of the main boosters of a country’s economy. Every country, including the Republic of Uzbekistan, relies on its logistics to ensure parties conduct their business seamlessly and improve its economy. The modes of transport support it. You have planes delivering goods, ships delivering more goods, and the railways doing their part in delivering goods in bulk as well. But the most used and active mode of transport that contributes to much of the economy’s boost are the roads and—yes, you guessed it—trucks are the ones doing their part. This is why trucking has become something that interest us because it contributes to the economic growth of a country and the BIGI study, established in 2023, would like you to be an essential part of that contribution</p>
                </div>
               </div>
           </section>

            <div className="news">
                <h2>News</h2>
                <p>You can stay updated with the latest news about our courses</p>
                <div className="news-container">
                    <video controls src="w1 (1).mp4"></video>
                    <video controls src={v2}></video>
                    <video controls src={v3}></video>
                    <video controls src={v4}></video>
                    <video controls src={v5}></video>
                    <video controls src={v6}></video>
                    <video controls src={v7}></video>
                    <video controls src={v8}></video>
                    <video controls src={v9}></video>
                    <video controls src={v10}></video>
                    
                    
                </div>
            </div>

            <div className="facts">
                <h2>Facts about our course</h2>
                <p>Still wondering if you need to go to logistics?</p>
                <div class="cards-container">
        <div class="card card-1">
            <div class="floating-particles">
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
            </div>
            <div class="card-icon">🌐</div>
            <h3 class="card-title">Language Upgrade</h3>
            <p class="card-description">Before the main course, your English will be upgraded through American Business English Expertise!</p>
            <div class="card-arrow">
                <div class="arrow-icon"></div>
            </div>
        </div>

        <div class="card card-2">
            <div class="floating-particles">
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
            </div>
            <div class="card-icon">🚛</div>
            <h3 class="card-title">Trucking Management Mastery</h3>
            <p class="card-description">After the main course, you get armed with all the necessary knowledge on managing trucking business, including carrying out operations through online platforms, websites and app resource kits!</p>
            <div class="card-arrow">
                <div class="arrow-icon"></div>
            </div>
        </div>

        <div class="card card-3">
            <div class="floating-particles">
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
            </div>
            <div class="card-icon">⭐</div>
            <h3 class="card-title">Quality Logistics Education</h3>
            <p class="card-description">During the main course, what you get most is quality education integrated with solid work ethics and long-term experience on transportation logistics!</p>
            <div class="card-arrow">
                <div class="arrow-icon"></div>
            </div>
        </div>
    </div>
            </div>

            <div class="logistics-dashboard-wrapper">
        <div class="stats-main-container">
            <h1 class="primary-heading-text">BIG STATISTICS IN LOGISTICS</h1>
            <p class="secondary-description-text">Thousands of cargo shipments a day and lots of opportunities</p>
            
            <div class="metrics-grid-layout">
                <div class="individual-metric-card">
                    <div class="metric-icon-wrapper shipping-icon-bg">🚢</div>
                    <h3 class="metric-title-text">Statistics #1</h3>
                    <p class="metric-description-text">The trucking industry earned close to $900 billion in revenue in 2023.</p>
                    <div class="progress-bar-container">
                        <div class="progress-fill-bar shipping-progress"></div>
                    </div>
                    <div class="percentage-display-text"></div>
                </div>

                <div class="individual-metric-card">
                    <div class="metric-icon-wrapper delivery-icon-bg">🚚</div>
                    <h3 class="metric-title-text">Statistics #2</h3>
                    <p class="metric-description-text">There are about 3.5 million employed truck drivers in the U.S. as of 2023.</p>
                    <div class="progress-bar-container">
                        <div class="progress-fill-bar delivery-progress"></div>
                    </div>
                    <div class="percentage-display-text"></div>
                </div>

                <div class="individual-metric-card">
                    <div class="metric-icon-wrapper warehouse-icon-bg">🏭</div>
                    <h3 class="metric-title-text">Statistics #3</h3>
                    <p class="metric-description-text">The U.S. trucking industry generated revenue that was worth more than the Gross Domestic Product (GDP) of at least 150 countries combined in 2023</p>
                    <div class="progress-bar-container">
                        <div class="progress-fill-bar warehouse-progress"></div>
                    </div>
                    <div class="percentage-display-text"></div>
                </div>

                <div class="individual-metric-card">
                    <div class="metric-icon-wrapper transport-icon-bg">🚛</div>
                    <h3 class="metric-title-text">Transportation and Logistics</h3>
                    <p class="metric-description-text">There are over 1 million for-hire trucking carriers in the U.S.</p>
                    <div class="progress-bar-container">
                        <div class="progress-fill-bar transport-progress"></div>
                    </div>
                    <div class="percentage-display-text">88%</div>
                </div>

                <div class="individual-metric-card">
                    <div class="metric-icon-wrapper distance-icon-bg">📏</div>
                    <h3 class="metric-title-text">Statistics #5</h3>
                    <p class="metric-description-text">U.S. trucks moved over 11 billion tons of freight in the U.S.</p>
                    <div class="progress-bar-container">
                        <div class="progress-fill-bar distance-progress"></div>
                    </div>
                    <div class="distance-measurement-text">≈ 314,840 km</div>
                </div>
            </div>
        </div>
    </div>
    {/* 
    
    */}
    <div class="partners-container">
        <h2 class="partners-title">Partners</h2>
        <p class="partners-subtitle">Companies who trust us</p>
        
        <div class="logos-wrapper">
            <div class="logos-track">
                {/* <!-- First set of logos --> */}
                <div class="company-logo">
                <a href="https://aravancargo.com/"><img src={arava} alt="" /></a>
                </div>
                <div class="company-logo">
                <a href="https://www.d2dtransport.org/"><img src={dock} alt="" /></a>
                </div>
                <div class="company-logo">
                <a href="https://artellogistics.com/"><img src={artel} alt="" /></a>
                </div>
                <div class="company-logo">
                <a href="https://expresscargo.uz/"><img src={express} alt="" /></a>
                </div>
                <div class="company-logo">
                <a href="https://www.eoglobalinc.com/"><img src={global} alt="" /></a>
                </div>
                <div class="company-logo">
                <a href="https://www.linkedin.com/company/hally-express-inc"><img src={hally} alt="" /></a>
                </div>
                
                {/* <!-- Duplicate set for seamless loop --> */}
                <div class="company-logo">
                <a href="https://aravancargo.com/"><img src={arava} alt="" /></a>
                </div>
                <div class="company-logo">
                <a href="https://www.d2dtransport.org/"><img src={dock} alt="" /></a>
                </div>
                <div class="company-logo">
                <a href="https://artellogistics.com/"><img src={artel} alt="" /></a>
                </div>
                <div class="company-logo">
                <a href="https://expresscargo.uz/"><img src={express} alt="" /></a>
                </div>
                <div class="company-logo">
                <a href="https://www.eoglobalinc.com/"><img src={global} alt="" /></a>
                </div>
                <div class="company-logo">
                <a href="https://www.linkedin.com/company/hally-express-inc"><img src={hally} alt="" /></a>
                </div>
            </div>
        </div>
    </div>
    <footer class="footer-container">
        <div class="footer-content">
        
            <div class="footer-section">
                <h4>Our Address</h4>
                <a href="#">Namangan IT PARK 2nd house, Amir Temur street, Namangan city, Namangan region, Republic of Uzbekistan</a>
                <div class="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d24088.554169029252!2d71.659337!3d41.001857!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAwJzA2LjciTiA3McKwMzknMzMuNiJF!5e0!3m2!1sen!2sus!4v1755135674384!5m2!1sen!2sus" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

            
            <div  class="footer-section ft">
                <h4>Documents</h4>
                <a href="#">Licence</a>
                <a href="#">Certificate</a>
                <a href="#">Affidavit</a>
            </div>

            <div class="footer-section ft">
                <h4>Email</h4>
                <a href="mailto:studybigi@gmail.com">studybigi@gmail.com</a>
            </div>

        
            <div  class="footer-section ft">
                <h4>Contact Numbers</h4>
                <a href="tel:+998957270017">+998 95 727 00 17</a>
                <a href="tel:+998905539095">+998 90 553 90 95</a>
            </div>
        </div>

        <div class="copyright">
            Copyright © 2025 ETAMIN
        </div>
    </footer>
    {/* 
     */}
        </>
    )
}
export default English