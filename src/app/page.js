'use client'
import Header from "./components/header";
import Experience from "./components/experience";
import Projects from "./components/projects";
import { ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useAnimationControls } from 'framer-motion';

export default function Home() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);
  
  // Create a ref for the experience section
  const experienceRef = useRef(null);
  
  // Function to scroll to experience section
  const scrollToExperience = () => {
    experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const phrases = ["CS student @ UCD", "software engineer", "product manager", "data scientist", "Visual Art Hobbyist"];

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % phrases.length;
      const fullText = phrases[currentIndex];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      // Set typing speed
      if (!isDeleting && text === fullText) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), 1500);
        setTypingSpeed(50); // Faster when deleting
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(100); // Normal speed when typing
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  return (
    <main className="relative">
      <Header scrollToExperience={scrollToExperience} />
      <div className="bg-container relative min-h-screen">
        <div className="flex flex-col items-end pr-10 lg:pr-20">
          <h1 className="text-white text-4xl md:text-6xl lg:text-8xl mt-20">Gregory Chang</h1>
          <div className="text-white text-2xl md:text-3xl lg:text-4xl mt-4 flex">
            <span className="avgar-font">I'm a </span>
            <span className="typing-text ml-2 avgar-font text-red-400">{text}</span>
            <span className="cursor">|</span>
          </div>
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center w-full">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToExperience}
            className="cursor-pointer"
          >
            <ChevronDown className="text-white w-12 h-12 animate-bounce-slow" />
          </motion.div>
        </div>
      </div>

      <div ref={experienceRef} className="flex flex-col items-center pt-20 bg-white">
        <h1 className="text-black text-5xl md:text-6xl lg:text-8xl mb-16">Experiences</h1>
        {/* <h1 className="text-black text-5xl md:text-6xl lg:text-8xl mb-16 ">Experiences</h1> */}
      </div>

      <div className="min-h-[85vh] flex flex-col items-start mx-10 md:mx-20  bg-white">
        <Experience />
      </div>

      <div className="flex flex-col items-center pt-20 bg-gray-950">
        <h1 className="text-white text-5xl md:text-6xl lg:text-8xl mb-16 ">Projects</h1>
      </div>
      <Projects />
    </main>
  );
}
