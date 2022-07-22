import React from "react";
import cavern from '../../JacWeb/images/cavern.jpg'
import fiji from '../../JacWeb/images/fiji-islands.jpg'
import redSea from '../../JacWeb/images/redsea-1-1024x768.jpg'
import style from '../../JacWeb/css/style.css'
import toucan from '../../JacWeb/images/toucan-barbet.jpg'
import trek from '../../JacWeb/images/trek-to-k2-2.jpg'

const ContactScreen = () => {
    return (
        <body className={style.body}>
        <div>
        <header id="showcase" class="grid">
        <div className="bgimage"></div>
        <div class="contentwrap">
            <h1>Welcome to Jac Enterprises</h1>
            <p>We are an organization that specializes in offering niche adventures dedicated to learning about Earth's various ecosystems and unique terrains. Our motto is, "Vincit Qui Se Vincit" which means, "He/she conquers who conquers him/herself."</p>
            <a href="#section-b" class="btn">Read More</a>
        </div>
    </header>

    {/* <!-- Main Area--> */}
    <main id="main">
        {/* <!-- Section A --> */}
        <section id="section-a" class="grid">
            <div class="contentwrap">
                <h2 class="contenttitle">Adventure Offerings</h2>
                <div class="contenttext">
                    <p>JacKr prides itself on educating all their clients on what adventures are provided and what can be expected on a chosen adventure.  Jac is constantly changing and seeking to innovate adventures that offer the ultimate in adventure excitement in a fun and safe way.  Past adventures offered include JacKr's Spelunking!, EYA! bka Experience Your Aquarium!,  Skip 2 My Cay! aka Island Hopping, JT,B! bka Just Trek Baby!, and Twitchers! adventures.</p>
                </div>
            </div>
        </section>

        {/* <!-- Section B--> */}
        <section id="section-b" class="grid">
            <ul>
                <li>
                    <div class="card">
                    <img className={style.card} src={redSea} alt='redsea' />
                        
                        <div class="cardcontent">
                            <h2 class="cardtitle">EYA!&#8482;</h2>
                            <p>Own an aquarium?  Enjoy visiting major aquariums? Love to visit the tropical fish store?  Is the answer...YES!  Come experience those questions...LIVE AND IN LIVING COLOR!</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                    <img className={style.card} src={cavern} alt='cavern.jpg' />
                        <div class="cardcontent">
                            <h2 class="cardtitle">Spelunking!&#8482;</h2>
                            <p>Sure.  The tourist caves are beautiful, fun, and unique to visit.  But why do the tourist thing when you can tame the wilds and mark new paths for future tourists to follow.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                    <img className={style.card} src={fiji} alt='fiji-islands.jpg' />
                        <img src="./assets/images/fiji-islands.jpg" alt="" srcset=""/>
                        <div class="cardcontent">
                            <h2 class="cardtitle">Skip 2 My Cay!&#8482;</h2>
                            <p>What's the fun in just exploring that single island you flew into?!  Why not explore a subset of that island's chain? so just take the opportunity to...Skip to My Cay!&#8482;</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                    <img className={style.card} src={trek} alt='trek-to-k2-2.jpg' />
                        <img src="./assets/images/trek-to-k2-2.jpg" alt="" srcset=""/>
                        <div class="cardcontent">
                            <h2 class="cardtitle">JT,B!&#8482;</h2>
                            <p>"Just Trek Baby!&#8482;" is what we say here at Jac.  Come test your fortitude with treks that make you forget that the word civilization even exists. </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                    <img className={style.card} src={toucan} alt='toucan' />
                        <img src="./assets/images/toucan-barbet.jpg" alt="" srcset=""/>
                        <div class="cardcontent">
                            <h2 class="cardtitle">Twitchers!&#8482;</h2>
                            <p>“There are approximately ten thousand species of birds on the planet and no single individual has seen them all. -Bernd Brunner”...Accept the challenge!</p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>

        {/* <!-- Section C--> */}
        <section id="section-c" class="grid">
            <div class="contentwrap">
                <h2 class="contenttitle">Jac will handle all your cravings for adventure</h2>
                <p>EYA!&#8482;, Spelunking!&#8482;, Skip 2 My Cay!&#8482;, JT,B!&#8482;, and Twitchers!&#8482; are just a sampling of the various exhilarating and thrilling eco-friendly global outdoor adventure.</p>
            </div>
        </section>

        {/* <!-- Section D--> */}
        <section id="section-d" class="grid">
            <div class="box">
                <h2 class="contenttitle">Contact Us</h2>
                <p>2645 N High Street Columbus, OH 43202</p>
                <p>1.844.932.2626</p>
                <p>greatadventures@jac.biz</p>
            </div>
            <div class="box">
                <h2 class="contenttitle">About Our Company</h2>
                <p>Founded in 2019 by a group of wild and crazy individuals for a tremendous love for the great outdoors and the many adventures the Earth has to offer.  These fab people chose to start guiding friends, family, and co-workers on the many adventures that they had experienced over their many years.  And due to the number of requests for guiding, <strong>Jac</strong> was born.</p>
            </div>
        </section>
    </main>

    {/* <!-- Footer --> */}
    <footer id="main-footer" class="grid">
        <div>Jac Enterprises</div>
        <div>Web Site Created By <a href="http://wecancodeit.org" target="_blank">We Can Code IT</a></div>
    </footer>
    
    
        </div>
        </body>
    );
}

export default ContactScreen;