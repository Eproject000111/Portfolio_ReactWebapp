import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Experience from './Experience'
import Skills from './Skill'
import Projects from './Projects'
import Education from './Education'
import Blog from './Blog'
import ContactSection from './Contact'
import { personalData } from '../Constant/Personal_Info';

export default function Pages() {
	// const blogs = ''
	// async function getData() {
	// 	const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

	// 	if (!res.ok) {
	// 		throw new Error('Failed to fetch data')
	// 	}

	// 	const data = await res.json();

	// 	blogs = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
	// 	console.log(data, 'll')
	// }

	// getData();

  return (
    <>
        <HeroSection/>
        <About/>
        <Experience />
        <Skills />
        <Projects />
        <Education />
        {/* <Blog blogs={blogs} /> */}
        <ContactSection />
    </>
  )
}
