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


function Uzbek(){
    const [scrolled, setScrolled] = useState(false); // 🔹 Holat yaratildi
    // Tilni almashtirish funksiyasi
const handleLanguageChange = (lang) => {
    // Barcha til tugmalaridan active klassini olib tashlash
    document.querySelectorAll('.bigi-logistics-language-button-item')
      .forEach(btn => btn.classList.remove('active'));
    
    // Tanlangan tilga active klassini qo'shish
    document.querySelector(`.bigi-logistics-language-button-item[data-lang="${lang}"]`)
      .classList.add('active');
    
    // Tilni o'zgartirish logikasi...
  };
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // 50px pastga tushganda true bo'ladi
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return(
        <>
                     <div id="home" class="bigi-logistics-main-container">
   
   <nav class="bigi-logistics-navbar-wrapper">
       <div class="bigi-logistics-navbar-content">
           <div class="bigi-logistics-logo-container">
               <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l09seY68s86XStKYuMgLFT02gTO4kl.png" alt="BIG-I STUDY" class="bigi-logistics-logo-image"/>
           </div>
           
           <div class="bigi-logistics-nav-links-container">
            <HashLink smooth to="#home" className="bigi-logistics-nav-link-item">Bosh Sahifa</HashLink>
            <HashLink smooth to="#about" className="bigi-logistics-nav-link-item">Biz Haqimizda</HashLink>
            <HashLink smooth to="#news" className="bigi-logistics-nav-link-item">Yangiliklar</HashLink>
            <HashLink smooth to="#facts" className="bigi-logistics-nav-link-item">Faktlar</HashLink>
            <HashLink smooth to="#statistics" className="bigi-logistics-nav-link-item">Statistika</HashLink>
            <HashLink smooth to="#partners" className="bigi-logistics-nav-link-item">Hamkorlar</HashLink>

           </div>
           
           <a target="_blank"  href="https://docs.google.com/forms/d/e/1FAIpQLScOVHIgqEwZVlcd4Ymu5-upaQm-ihDYc2Zp_5wWSETtLaQDBA/" class="bigi-logistics-register-button-wrapper">
               ro'yxatdan o'tish
               <svg class="bigi-logistics-button-icon-svg" viewBox="0 0 24 24">
                   <path d="M5 12h14m-7-7l7 7-7 7"/>
               </svg>
           </a>
           
           <div class="bigi-logistics-language-switcher-container">
           <NavLink to="/" class="bigi-logistics-language-button-item">EN</NavLink>
               <NavLink to="/russian" class="bigi-logistics-language-button-item">RU</NavLink>
               <NavLink to="/uzbek" class="bigi-logistics-language-button-item">UZ</NavLink>
           </div>
       </div>
   </nav>


   <div class="bigi-logistics-social-media-sidebar">
       <a href="https://t.me/bigi_study" class="bigi-logistics-social-icon-wrapper telegram-specific">
           <svg class="bigi-logistics-social-icon-svg" target="_blank"  viewBox="0 0 24 24">
               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
           </svg>
       </a>
       
       <a href="https://www.instagram.com/bigiedu_uz/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#" class="bigi-logistics-social-icon-wrapper instagram-specific">
           <svg class="bigi-logistics-social-icon-svg" target="_blank"  viewBox="0 0 24 24">
               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
           </svg>
       </a>
       
       <a href="https://www.facebook.com/bigi.study/" target="_blank" class="bigi-logistics-social-icon-wrapper facebook-specific">
           <svg class="bigi-logistics-social-icon-svg" viewBox="0 0 24 24">
               <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
           </svg>
       </a>
   </div>

   
   <div id="h" class="bigi-logistics-content-message-section">
       <h1 class="bigi-logistics-main-title-text">Xalqaro Logistika Akademiyasi</h1>
       <div class="bigi-logistics-description-text">
           <p><strong>3 oy ichida talabgir kasbni egallang!</strong></p>
           <p>Ingliz tili B2 bilim darajasi bilan xalqaro transport logistikasi!</p>
           <p><strong>Orzuingizdagi ishga 3 qadam!</strong></p>
       </div>
       <div class="bigi-logistics-action-buttons-container">
           <a href="tel:+1234567890" target="_blank"class="bigi-logistics-action-button-primary">
               <svg class="bigi-logistics-button-icon-svg" viewBox="0 0 24 24">
                   <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
               </svg>
               Qo'ng'iroq qilish
           </a>
           <a  href="https://t.me/bigiedu_admin"target="_blank" class="bigi-logistics-action-button-primary">
               <svg class="bigi-logistics-button-icon-svg" viewBox="0 0 24 24">
                   <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
               </svg>
               Xabar yuborish
           </a>
       </div>
   </div>
</div>

           <div id="about" class="about-us-wrapper">
        <div class="about-us-container">
            <div class="about-us-header">
                <h1 class="about-us-main-title">Biz Haqimizda</h1>
                <p class="about-us-subtitle">Logistika sohasida o'zingizni sinab ko'rmoqchi emasdingizmi?</p>
            </div>

            <div class="about-us-content-grid">
                <div class="about-us-left-column">
                    <h2 class="about-us-quote-title">"Ming mil yo'l bir qadamdan boshlanadi" - London doktori</h2>
                    <p class="about-us-quote-text">
                        Energik, ishtiyoqli va ilhomlantiruvchi a'zolardan tashkil topgan BIGI study jamoasi, yuk tashish biznesi bo'yicha darslar taklif qilish va o'z tajribalarini baham ko'rish haqida ikki marta o'ylamadi, chunki bu boshqa bizneslar uchun qayta-qayta bir joydan ikkinchi joyga yuk tashish orqali qanday qimmatli qiymat taqdim etishi mumkinligi sababli. Oxir-oqibat, jamoa eng yaxshi transport logistikasi kurslarini yaratishga muvaffaq bo'ldi va biz sizga ochiq fikrlar tizimiga va aniq maqsadga ega bo'lsangiz, ushbu sohada ijodiy qism bo'lish qanchalik oddiy va quvnoq bo'lishi mumkinligini baham ko'rishni istaymiz.
                    </p>
                </div>

                <div class="about-us-center-box">
                    <p class="about-us-course-intro">
                        Akademiyada hozirda o'tkazilayotgan "AQSh Yuk Tashish" kursi 3 bosqichda o'qitiladi.
                    </p>

                    <div class="about-us-stage-item">
                        <div class="about-us-stage-header">
                            <div class="about-us-stage-number">1</div>
                            <div class="about-us-stage-title">"Logistika uchun Ingliz tili"</div>
                        </div>
                        <p class="about-us-stage-description">
                            umumiy logistik lug'at va atamalar yordamida talabalarning ingliz tilini rivojlantirishga qaratilgan. U 2 hafta davom etadi. Kurs logistika bo'yicha umumiy tushunchani oshiradi va "Amerika talaffuzi"ni yaxshilashga urg'u beradi.
                        </p>
                    </div>

                    <div class="about-us-stage-item">
                        <div class="about-us-stage-header">
                            <div class="about-us-stage-number">2</div>
                            <div class="about-us-stage-title">Bilim, tushuncha va ko'nikmalar</div>
                        </div>
                        <p class="about-us-stage-description">
                            yuk tashish mutaxassislari uchun zarur bo'lgan, masalan, dispetcherlik, yangilash, avtopark, xavfsizlik, buxgalteriya hisobi va ELD boshqaruvi shakllantiriladi. Ushbu bosqich 1 oy davom etadi.
                        </p>
                    </div>

                    <div class="about-us-stage-item">
                        <div class="about-us-stage-header">
                            <div class="about-us-stage-number">3</div>
                            <div class="about-us-stage-title">Bepul amaliyot va treninglarga qo'shilish</div>
                        </div>
                        <p class="about-us-stage-description">
                            hamkor kompaniyalarimizda 1 oy muddatida stajor sifatida va "DAROMAD OLISH" bosqichiga o'tish!
                        </p>
                    </div>

                    <div class="about-us-selection-note">
                        <div class="about-us-checkmark">✓</div>
                        <p class="about-us-selection-text">
                            Biz talabalarni suhbat orqali tanlaymiz. Agar sizning ingliz tilingiz darajasi B2 yoki undan yuqori bo'lsa, tez orada ko'rishguncha.
                        </p>
                    </div>
                </div>

                <div class="about-us-right-column">
                    <p class="about-us-right-text">
                        Tovarlar va xizmatlarni tashish har doim mamlakat iqtisodiyotining asosiy omillaridan biri bo'lib kelgan. O'zbekiston Respublikasini o'z ichiga olgan har bir mamlakat, biznesni muammosiz olib borish va iqtisodiyotini yaxshilash uchun o'z logistikasiga tayanadi. Transport turlari buni qo'llab-quvvatlaydi. Tovarlarni yetkazib beradigan samolyotlar, ko'proq tovarlarni yetkazib beradigan kemalar va ulkan miqdordagi tovarlarni yetkazib beradigan temir yo'llar mavjud. Ammo iqtisodiyotning ko'payishiga katta hissa qo'shadigan eng ko'p ishlatiladigan va faol transport turi - bu yo'llar va - ha, siz topdingiz - yuk mashinalari o'z hissasini qo'shadi. Shuning uchun yuk tashish bizni qiziqtirgan narsaga aylandi, chunki u mamlakatning iqtisodiy o'sishiga hissa qo'shadi va 2023 yilda tashkil etilgan BIGI study sizning ushbu hissangizning muhim qismi bo'lishingizni xohlaydi.
                    </p>
                </div>
            </div>
        </div>
    </div>

            <div id="news" className="news">
                <h2>Yangiliklar</h2>
                <p>Kurslarimiz haqidagi so'nggi yangiliklardan xabardor bo'lishingiz mumkin</p>
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

            <div id="facts" className="facts">
                <h2>Kursimiz haqida faktlar</h2>
                <p>Hali ham logistikaga borish kerakmi deb o'ylayapsizmi?</p>
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
            <h3 class="card-title">Tilni Oshirish</h3>
            <p class="card-description">Asosiy kursdan oldin sizning ingliz tilingiz Amerika biznes ingliz tili ekspertizasi orqali yaxshilanadi!</p>
            <div class="card-arrow">
                <a href="https://drive.google.com/file/d/17-7u5S_cnK-HWn_W6HFl2gJbDdU1hzzZ/view?usp=sharing">
                    <div class="arrow-icon"></div>
                </a>
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
            <h3 class="card-title">Yuk Tashish Boshqaruvi Ustunligi</h3>
            <p class="card-description">Asosiy kursdan so'ng, siz onlayn platformalar, veb-saytlar va ilova resurs to'plamlari orqali operatsiyalarni olib borishni o'z ichiga olgan yuk tashish biznesini boshqarish bo'yicha barcha zarur bilimlar bilan qurollanasiz!</p>
           <a href="https://drive.google.com/file/d/1M8JWklyAT5EOD3BzBjVpv3sL8EO-4eZO/view?usp=sharing">
            <div class="card-arrow">
                <div class="arrow-icon"></div>
            </div>
           </a>
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
            <h3 class="card-title">Sifatli Logistika Ta'limi</h3>
            <p class="card-description">Asosiy kurs davomida siz eng ko'p transport logistikasi bo'yicha mustahkam mehnat etikasi va uzoq muddatli tajriba bilan birlashtirilgan sifatli ta'lim olasiz!</p>
            <a href="https://drive.google.com/file/d/1g2C4PeEolDTWiJkWBDeTEZcYWdlcQzAx/view?usp=sharing">
            <div class="card-arrow">
                <div class="arrow-icon"></div>
            </div>  
            </a>
        </div>
    </div>
            </div>

            <div id="statistics" class="logistics-dashboard-wrapper">
        <div class="stats-main-container">
            <h1 class="primary-heading-text">LOGISTIKADA KATTA STATISTIKA</h1>
            <p class="secondary-description-text">Kuniga minglab yuk tashishlar va ko'plab imkoniyatlar</p>
            
            <div class="metrics-grid-layout">
                <div class="individual-metric-card">
                    <div class="metric-icon-wrapper shipping-icon-bg">🚢</div>
                    <h3 class="metric-title-text">Statistika №1</h3>
                    <p class="metric-description-text">Yuk tashish sanoati 2023 yilda daromadi 900 milliard dollarga yaqin edi.</p>
                    <div class="progress-bar-container">
                        <div class="progress-fill-bar shipping-progress"></div>
                    </div>
                    <div class="percentage-display-text"></div>
                </div>

                <div class="individual-metric-card">
                    <div class="metric-icon-wrapper delivery-icon-bg">🚚</div>
                    <h3 class="metric-title-text">Statistika №2</h3>
                    <p class="metric-description-text">2023 yil holatiga ko'ra AQShda taxminan 3,5 million ish bilan ta'minlangan yuk mashinasi haydovchilari mavjud.</p>
                    <div class="progress-bar-container">
                        <div class="progress-fill-bar delivery-progress"></div>
                    </div>
                    <div class="percentage-display-text"></div>
                </div>

                <div class="individual-metric-card">
                    <div class="metric-icon-wrapper warehouse-icon-bg">🏭</div>
                    <h3 class="metric-title-text">Statistika №3</h3>
                    <p class="metric-description-text">AQSh yuk tashish sanoati 2023 yilda kamida 150 mamlakatning YaIMini birlashtirgandan ko'ra ko'proq daromad keltirdi.</p>
                    <div class="progress-bar-container">
                        <div class="progress-fill-bar warehouse-progress"></div>
                    </div>
                    <div class="percentage-display-text"></div>
                </div>

                <div class="individual-metric-card">
                    <div class="metric-icon-wrapper transport-icon-bg">🚛</div>
                    <h3 class="metric-title-text">Transport va Logistika</h3>
                    <p class="metric-description-text">AQShda 1 milliondan ortiq ijaraga olingan yuk tashish tashuvchilari mavjud.</p>
                    <div class="progress-bar-container">
                        <div class="progress-fill-bar transport-progress"></div>
                    </div>
                    <div class="percentage-display-text">88%</div>
                </div>

                <div class="individual-metric-card">
                    <div class="metric-icon-wrapper distance-icon-bg">📏</div>
                    <h3 class="metric-title-text">Statistika №5</h3>
                    <p class="metric-description-text">AQSh yuk mashinalari AQShda 11 milliard tonnadan ortiq yuk tashidi.</p>
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
    <div id="partners" class="partners-container">
        <h2 class="partners-title">Hamkorlar</h2>
        <p class="partners-subtitle">Bizga ishonadigan kompaniyalar</p>
        
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
                <h4>Manzilimiz</h4>
                <a href="#">Namangan shahar, Namangan viloyati, Amir Temur ko'chasi, IT PARK 2-uy, O'zbekiston Respublikasi</a>
                <div class="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d24088.554169029252!2d71.659337!3d41.001857!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAwJzA2LjciTiA3McKwMzknMzMuNiJF!5e0!3m2!1sen!2sus!4v1755135674384!5m2!1sen!2sus" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

            
            <div  class="footer-section ft">
                <h4>Hujjatlar</h4>
                <a href="https://gentle-sunshine-60fff6.netlify.app/static/media/Affidavit.2bf6195cbde30d929bb1.pdf">Litsenziya</a>
                <a href="https://gentle-sunshine-60fff6.netlify.app/static/media/Tasdiqnoma.5d52b6f1064f55a1ac7a.pdf">Sertifikat</a>
                <a href="https://gentle-sunshine-60fff6.netlify.app/static/media/Affidavit.2bf6195cbde30d929bb1.pdf">Afidavit</a>
            </div>

            <div class="footer-section ft">
                <h4>Email</h4>
                <a href="mailto:studybigi@gmail.com">studybigi@gmail.com</a>
            </div>

        
            <div  class="footer-section ft">
                <h4>Aloqa Raqamlari</h4>
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
export default Uzbek