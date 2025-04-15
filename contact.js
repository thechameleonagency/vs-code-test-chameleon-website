import Head from 'next/head';
import { useEffect } from 'react';
import gsap from 'gsap';
import Nav from './Nav';

export default function Contact() {
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
        <title>The Chameleon Agency | Contact Us</title>
        <meta name="description" content="Get in touch with The Chameleon Agency for your next project." />
      </Head>

      <Nav />

      <section>
        <h2>Change Your Colors With Us</h2>
        <p>Got a project that needs a chameleon’s touch? Drop us a note, and let’s make some magic.</p>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="cta-button">Let’s Blend</button>
        </form>
      </section>

      <div className="page-transition"></div>
    </div>
  );
}