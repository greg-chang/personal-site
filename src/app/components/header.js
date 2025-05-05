import '@/app/globals.css';
import Link from 'next/link';
function Header({ scrollToExperience, scrollToProjects }) {
  const handleExperienceClick = (e) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      window.location.href = '/#experience';
    } else {
      scrollToExperience();
    }
  };
  
  const handleProjectsClick = (e) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      window.location.href = '/#projects';
    } else {
      scrollToProjects();
    }
  };
  return (
    <nav className="pb-2 flex flex-col items-center bg-transparent absolute top-0 left-0 right-0 z-10">
      <ul className="flex space-x-4 ml-10 mr-10 mt-4 items-center text-white">
        <div className="flex space-x-4 sm:text:xl md:text-2xl lg:text-3xl avgar-font ">
          <Link href="/" className="text-white hover:text-red-400 transition-colors duration-200 avgar-font">Home</Link>
          <Link href="/#experience" onClick={handleExperienceClick} className="text-white hover:text-red-400 transition-colors duration-200 avgar-font">Experience</Link>
          <Link href="/#projects" onClick={handleProjectsClick} className="text-white hover:text-red-400 transition-colors duration-200 avgar-font">Projects</Link>
          <Link href="/contact" className="text-white hover:text-red-400 transition-colors duration-200 avgar-font">Contact</Link>
          <Link href="/Resume/Greg Chang Resume.pdf" target="_blank" className="text-white hover:text-red-400 transition-colors duration-200 avgar-font">Resume</Link>
        </div>
      </ul>
      <div className="pt-2 w-full">
        <div className="border-t-2 border-white mx-10 md:mx-10 lg:mx-20"></div>
      </div>
    </nav>
  );    
}

export default Header;