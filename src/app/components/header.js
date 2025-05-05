import '@/app/globals.css';

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
          <li><a href="/" className="hover:text-red-400 cursor-pointer">Home</a></li>
          <li><a href="/#experience" onClick={handleExperienceClick} className="hover:text-red-400 cursor-pointer">Experience</a></li>
          <li><a href="/#projects" onClick={handleProjectsClick} className="hover:text-red-400 cursor-pointer">Projects</a></li>
          <li><a href="/contact" className="hover:text-red-400">Contact</a></li>
          <li><a href="/Resume/Greg Chang Resume.pdf" target="_blank" className="hover:text-red-400">Resume</a></li>
        </div>
      </ul>
      <div className="pt-2 w-full">
        <div className="border-t-2 border-white mx-10 md:mx-10 lg:mx-20"></div>
      </div>
    </nav>
  );    
}

export default Header;