import Ride1 from '~/assets/Ride1.png';
import Ride2 from '~/assets/Ride2.png';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import musicSite from '~/assets/musicSite.png';
import foodDel from '~/assets/foodDel.png';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import styles from './home.module.css';
import {Book} from '~/components/books/books';
import { Heading } from '~/components/heading';
import { IconCloudDemo } from "~/components/skills/IconCloudDemo";
import { CoolModeDemo } from '~/components/momo/CoolModeDemo';
import { Text } from '~/components/text';
import {SkillSet} from '~/components/skills/clipPath';


// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: ' Developer + Designer',
    description: `Portfolio of Florence Li — Welcome to my Personal Website`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Food Delivery Platform"
        description="Food delivery platform allows users to browse menus, place orders, and have their favorite meals delivered right to their doorstep. With real-time order tracking, secure payment options, and a wide variety of cuisines to choose from, the platform makes it easy for users to enjoy restaurant-quality food from the comfort of their homes."
        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${foodDel} 1280w, ${foodDel} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Full-Stack Ride-Sharing App"
        description="The ride-sharing app is designed to connect passengers with drivers for convenient, on-demand transportation. Users can easily request a ride from their current location, view available drivers nearby, and track their ride in real time."
        buttonText="View website"
        buttonLink="###"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${Ride1} 375w, ${Ride1} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${Ride2} 375w, ${Ride2} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Music Streaming Site"
        description="The Music Streaming Site is a Spotify-like platform where users can browse, search, and stream music seamlessly. It features curated playlists, song recommendations, and a user-friendly interface. The admin panel allows administrators to manage content and upload tracks"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${musicSite} 800w, ${musicSite} 1920w`,
              placeholder: musicSite,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Heading className={styles.reading}>Reading List</Heading>
  <div className={styles.bookp}>
    <Book src="https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg" alt="Book 1" title="JavaScript: The Good Parts" />
    <Book src="https://image.tmdb.org/t/p/original/2P31jhd1dWUAPD8dmnSrwkQ8CNN.jpg" alt="I Origins" title="I Origins" />
    <Book src="https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg" alt="Book 3" title="The Lean Startup" />
    <Book src="https://covers.oreillystatic.com/images/9781491912058/lrg.jpg" alt="Book 1" title="Data Engineering " />
    <Book src="https://covers.oreillystatic.com/images/0636920012726/lrg.jpg" alt="Book 2" title="CSS: The Definitive Guide" />
    <Book src="https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg" alt="Book 3" title="1989" />
  </div>
  <div className={styles.skills}>
  <Heading className={styles.skillhead}>My Skills</Heading>
  <SkillSet></SkillSet>
  </div>

  <div className={styles.btn}>
    <CoolModeDemo/>
  </div>
      <Heading className={styles.touch}>Get In Touch</Heading>
      <div className={styles.mlb}>
      <Text className={styles.subtitle}>Want to chat? Just shoot me a dm! and I will respond whenever I can.</Text>
      </div>
      <Footer />
    </div>
  );
};
