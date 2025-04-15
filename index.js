import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import gsap from 'gsap';
import Nav from './Nav';

export default function Home() {
  useEffect(() => {
    // Split text animation
    const letters = document.querySelectorAll('.hero h1 span');
    gsap.from(letters, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: 'power2.out',
    });

    // Page transition
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

  const title = 'The Chameleon Agency. We blend in, then stand out.'.split('');
  return (
    <div>
      <Head>
        <title>The Chameleon Agency | Blend In, Stand Out</title>
        <meta name="description" content="The Chameleon Agency - A creative design agency that adapts and dazzles." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <section
        className="hero"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)` }}
      >
        <h1>
          {title.map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </h1>
        <Link href="/work">
          <a className="cta-button">See Our Work</a>
        </Link>
      </section>

      <div className="page-transition"></div>
    </div>
  );
}