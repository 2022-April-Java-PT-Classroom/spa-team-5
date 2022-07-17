import Adam from '../../assets/Adam.jpg';
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
                <img src={Adam} alt='Adam profile pic' />
            
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
            <img src={SamHeroPic} alt='2nd profile pic' />
            
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
            </section>
            
            <section className={style.row}>
            <article className={style.card}>
                
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
            <article className={style.card}>
                
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
            
            <img src={Adam} alt='6th profile pic' />
            
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
            <img src={Adam} alt='7th profile pic' />
            
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
         </div>
      
            
        );
}

export default BioScreen;