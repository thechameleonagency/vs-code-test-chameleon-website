import Head from 'next/head';
import { useEffect } from 'react';
import gsap from 'gsap';
import Nav from './Nav';

export default function About() {
  useEffect(() => {
    // Panel transition
    gsap.to('.page-transition', {
      y: '-100%',
      duration: 0.5,
      delay: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        document.querySelector('.page-transition').style.display = 'none';
      },
    });
  }, []);

  return (
    <div>
      <Head>
        <title>The Chameleon Agency | About Us</title>
        <meta name="description" content="Meet The Chameleon Agency - adaptable, bold, and a little quirky." />
      </Head>

      <Nav />

      <section>
        <h2>Chameleons of Creativity</h2>
        <p>
          We’re The Chameleon Agency—masters of blending in to understand your vibe, then popping out with designs that dazzles. Whether it’s a startup’s first logo or a big brand’s bold refresh, we adapt, create, and maybe sneak in a coffee break or two.
        </p>
        <div className="about-video">
          <video autoPlay muted loop playsInline>
            <source src="https://coverr.co/videos/abstract-colorful-background-8j6k9m2v" type="video/mp4" />
          </video>
        </div>
        <p>
          Our team? Think artists, strategists, and the occasional pun enthusiast. We’re here to make your brand shine brighter than a chameleon in a neon jungle. Ready to change the game? Let’s talk.
        </p>
      </section>

      <div className="page-transition"></div>
    </div>
  );
}