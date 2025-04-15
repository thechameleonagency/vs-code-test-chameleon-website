import Head from 'next/head';
import { useEffect } from 'react';
import gsap from 'gsap';
import Nav from './Nav';

export default function Work() {
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
        <title>The Chameleon Agency | Our Work</title>
        <meta name="description" content="Explore our portfolio of adaptable, bold designs." />
      </Head>

      <Nav />

      <section className="work-grid">
        <div className="work-item">
          <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="BrewBuddy Project" />
          <h3>BrewBuddy Coffee</h3>
        </div>
        <div className="work-item">
          <img src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Urban Threads" />
          <h3>Urban Threads</h3>
        </div>
        <div className="work-item">
          <img src="https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="TechTrend App" />
          <h3>TechTrend App</h3>
        </div>
      </section>

      <div className="page-transition"></div>
    </div>
  );
}