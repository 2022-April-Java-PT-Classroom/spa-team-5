import { brands, regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import Adam from '../../assets/Adam.jpg';
import CM_Rimal from '../../assets/CM Rimal.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import JamieBarr from '../../assets/JamieBarr.jpg';
import Joe from '../../assets/Joe.png';
import React from "react";
import SamHeroPic from '../../assets/SamHeroPic.jpg';
import Serena from '../../assets/Serena.JPG';
import style from "./style.module.scss";

const BioScreen = () => {
    return (
    
            
    <div className={style.BioScreen} >
       
       
            <section className={style.row}>
            <article className={style.card}>
                <h3>Adam Ackley</h3>
                <img src={Adam} alt='Adam profile pic' />
                            
            <FontAwesomeIcon className={style.icon} icon="fa-brands fa-github-square" 
            href="https://github.com/ackley787" />

            <FontAwesomeIcon className={style.icon} icon="fa-regular fa-address-card" 
            href="https://ackley787.github.io/" />

            <FontAwesomeIcon className={style.icon} icon="fa fa-linkedin-square" 
            href="https://linkedin.com/in/adam-ackley78" />

                 
                 <p>
                
            I am currently enrolled at We Can Code IT 
            to earn a Certificate in Software Development.
            It is my goal to become a Full-Stack Developer. 
            I have a passion for coding and enjoy working with 
            others in a team setting as well as independently. 
            I am an efficient problem solver with excellent 
            troubleshooting skills. I am flexible and always 
            seeking to acquire new skills. Besides having 
            earned an Associates degree in Network Systems 
            Administration. I am an avid computer gamer and 
            have great interest in computer hardware and remote 
            control cars.
                
                </p>
            </article>
                 
            <article className={style.card}>
            <h3>Samuel Leiva</h3>
            <img src={SamHeroPic} alt='2nd profile pic' />
            
            <FontAwesomeIcon className={style.icon} icon="fa-brands fa-github-square" 
            href="https://github.com/samleivadev" />

            <FontAwesomeIcon className={style.icon} icon="fa-regular fa-address-card" 
            href="https://samleivadev.github.io/" />

            <FontAwesomeIcon className={style.icon} icon="fa fa-linkedin-square" 
            href="https://www.linkedin.com/in/samuelleiva/" />
            
            <p>
                
            Hello! My name is Samuel and I enjoy creating things
            that live on the internet. I am a Full-Stack Software 
            Developer specializing in building (and occasionally 
            designing) exceptional digital experiences. Currently, 
            I’m focused on building accessible, human-centered products
            My focus these days is building accessible, inclusive 
            products and digital experiences at Lab275 for a variety
            of clients. I also recently creating a DownTime tracker 
            for Amazon warehouses using Java for Back-End and React 
            JS for the Front-End.
            
            ToolBox:
            JavaScript (ES6+)
            Java
            React
            Node.js
            WordPress
            
            </p>
            </article>
                 
            <article className={style.card}>
            <h3>Joe Buckley</h3>
            <img src={Joe} alt='3rd profile pic' />
            
            <p>
                    
            I have a passion and a mind for efficiency in the flow of commodities across
            the nation, and now for the flow of information across the web: from the actual
            highways, to the information super-highway. An idyllic world is one where the
            customer experience is attractive and user-friendly, with the convenience of both
            mobile applications and the web. Technology should continue to be as accessible and
            forward-facing, as it is vital and integral to our daily lives.
                
            </p>
            </article>
            
            <article className={style.card}>
            <h3>Serena Howard</h3>
            <img src={Serena} alt='4th profile pic' />
            
            <p>
                
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras eleifend ultricies turpis a dignissim. Donec sit 
            amet accumsan orci. Fusce et magna facilisis nibh vestibulum 
            pretium vitae id augue. Etiam at viverra orci. Praesent rutrum
            purus nec faucibus varius. Praesent est erat, rutrum eget
            dictum vitae, mattis eget leo. Integer dictum ultrices blandit.
            Aliquam sed ipsum viverra, molestie metus quis, elementum ex.
            Aenean scelerisque sodales bibendum. Aliquam rutrum euismod
            eros ut pellentesque. Duis scelerisque convallis sagittis. 
            
            </p>
            </article>
            </section>
            
            <section className={style.row}>
                
            <article className={style.card}>
            <h3>Kevin Pak</h3>
            <img src={Adam} alt='5th profile pic' />
            
            <p>
                
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras eleifend ultricies turpis a dignissim. Donec sit 
            amet accumsan orci. Fusce et magna facilisis nibh vestibulum 
            pretium vitae id augue. Etiam at viverra orci. Praesent rutrum
            purus nec faucibus varius. Praesent est erat, rutrum eget
            dictum vitae, mattis eget leo. Integer dictum ultrices blandit.
            Aliquam sed ipsum viverra, molestie metus quis, elementum ex.
            Aenean scelerisque sodales bibendum. Aliquam rutrum euismod
            eros ut pellentesque. Duis scelerisque convallis sagittis. 
            
            </p>
            </article>
            
            <article className={style.card}>
            <h3>Jamie Barr</h3>
            <img src={JamieBarr} alt='6th profile pic' />
            
            <p>
                
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras eleifend ultricies turpis a dignissim. Donec sit 
            amet accumsan orci. Fusce et magna facilisis nibh vestibulum 
            pretium vitae id augue. Etiam at viverra orci. Praesent rutrum
            purus nec faucibus varius. Praesent est erat, rutrum eget
            dictum vitae, mattis eget leo. Integer dictum ultrices blandit.
            Aliquam sed ipsum viverra, molestie metus quis, elementum ex.
            Aenean scelerisque sodales bibendum. Aliquam rutrum euismod
            eros ut pellentesque. Duis scelerisque convallis sagittis. 
            
            </p>
            </article>
            
            <article className={style.card}>
            <h3>Chuda Rimal</h3>
            <img src={CM_Rimal} alt='7th profile pic' />
            <FontAwesomeIcon className={style.icon} icon="fa-brands fa-github-square" 
            href="https://github.com/cmsrimsson" />

            <FontAwesomeIcon className={style.icon} icon="fa-regular fa-address-card" 
            href="https://cmsrimsson.github.io/" />

            <FontAwesomeIcon className={style.icon} icon="fa fa-linkedin-square" 
            href="https://www.linkedin.com/in/chuda-rimal-318b33201/" />

            
            <p>
                
            Hello, this is Chuda Rimal. I am a Full-Stack web developer and
            mostly I am passionate on web coding. I’m quite expert in using
            coding and markuplanguages like:
            Java • Spring • Thymeleaf • JavaScript • MVC • HTML •
            CSS • TDD • Agile (Scrum) • Object Oriented Programming (OOP) •
            JSON • REST APIs • Responsive Design / Mobile • Relational Databases
            • Source Control / GitHub.
            Highly motivated and efficient and quick learner  reskilling to switch careers
            into software development. Consistently recognized for superior  problem-solving
            skills, strong work ethic and passion for serving others at Amazon.
            
            </p>
                 
            
            </article>
            </section>
         </div>
      
            
        );
}

export default BioScreen;