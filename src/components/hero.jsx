import { useEffect } from "react";
import "./Hero.css";
import heroImage from "../assets/dp.png";

function Hero() {
  useEffect(() => {
    const textList = ["Nicko Balmes", "UI/UX Designer", "Frontend Developer"];
    const target = document.querySelector(".typewriter-text");
    let index = 0,
      charIndex = 0,
      isDeleting = false;

    function type() {
      const current = textList[index];
      target.textContent = current.substring(0, charIndex);

      if (!isDeleting && charIndex < current.length) {
        charIndex++;
        setTimeout(type, 120);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 60);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) index = (index + 1) % textList.length;
        setTimeout(type, 1000);
      }
    }

    type();
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          HI, I'M <span className="typewriter-text"></span>
        </h1>
        <p className="hero-description">
          Aut commodi neque aut quas neque ea autem aspernatur quo nisi internos
          in officiis nihil? Ea quas possimus aut corporis iusto ut iusto
          consequatur ut animi enim sit dolor corrupti. Eos quia tenetur aut
          quas ipsam et aliquam dolores.
        </p>
        <img src={heroImage} alt="Nicko Balmes" className="hero-image" />
        <a href="#contact" className="hire-button">
          HIRE ME <span className="mail-icon">📧</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
