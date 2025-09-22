import '@/app/globals.css';
import { useState } from 'react';
import Image from 'next/image';
import ExperiencePopup from './ExperiencePopup';
// Markdown Content Imports
import softwareEngineerContent from '@/app/content/experiences/software-engineer.md';
import datalabContent from '@/app/content/experiences/datalab-datascience.md';

function Experience() {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [selectedExperience, setSelectedExperience] = useState(null);

    const experiences = [
        {
            id: '1',
            title: 'Software Engineer Mentor',
            description: 'Led hackathon to teach prototyping, design, and coding to 50 students & created data report analyzing 370+ MESA students',
            period: 'Oct \'24 - Present',
            image: '/experiences/MESA.png',
            url: 'https://mesausa.org/'
        },
        {
            id: '2',
            title: 'Product Manager',
            description: 'Managed product development for UC Davis student exclusive ride-sharing website for 1100+ users',
            period: 'Jul \'24 - Present',
            image: '/experiences/aggieworks.png',
            url: 'https://aggieworks.org/'
        },
        {
            id: '3',
            title: 'Assistant Data Scientist',
            description: 'Collected literature corpus for upcoming AI Humanities Center developed by College of Letters and Science',
            period: 'Mar \'24 - Jun \'24',
            image: '/experiences/Datalab.png',
            url: 'https://datalab.ucdavis.edu/'
        },
        {
            id: '4',
            title: 'Assistant Visualization Researcher',
            description: 'Integrated 3D Gaussian Splatting into Linux environment to improve accuracy and clarity of images in VR spaces',
            period: 'Nov \'23 - Sept \'24',
            image: '/experiences/Datalab.png',
            url: 'https://datalab.ucdavis.edu/'
        },
        {
            id: '5',
            title: 'Software Engineer',
            description: 'Developed flashcard website that integrated space reptition to improve learning efficiency',
            period: 'Oct \'23 - Jun \'24',
            image: '/experiences/codelablogo.png',
            url: 'https://www.codelabdavis.com/'
        },
        {
            id: '6',
            title: 'Software Engineer Intern',
            description: 'Developed AI powered travel iternerary planner and optimized finacial model for travel agency in Tokyo, Japan',
            period: 'Jun \'23 - Aug \'23',
            image: '/experiences/TOKI.png',
            url: 'https://www.toki.tokyo/'
        }
    ];

    return (
        <div className="w-full">
            {experiences.map((exp) => (
                <div 
                    key={exp.id}
                    className="mb-10 avgar-font group hover:cursor-pointer hover:text-red-400 relative"
                    onMouseEnter={() => setHoveredItem(exp.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={() => exp.url && window.open(exp.url, '_blank')}
                >
                    <h2 className="text-4xl md:text-5xl mb-4 transition-transform duration-300 group-hover:translate-x-2">{exp.title}</h2>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                        <p className="text-lg transition-transform duration-300 group-hover:translate-x-2 mb-2 md:mb-0">{exp.description}</p>
                        <span className="text-lg text-left md:text-right relative transition-transform duration-300 md:transition-none group-hover:translate-x-2 md:group-hover:translate-x-0">
                            {exp.period}
                            
                            {/* Image that appears on hover - only on larger screens */}
                            {hoveredItem === exp.id && (
                                <div className="hidden lg:block absolute bottom-full right-0 mb-2 z-10 animate-slide-in-from-right">
                                    <div className="max-w-[300px] h-[150px] relative overflow-hidden rounded-md animate-scale-in flex items-end justify-end">
                                        <Image 
                                            src={exp.image} 
                                            alt={exp.title}
                                            width={0}
                                            height={150}
                                            sizes="300px"
                                            style={{ height: '75px', width: 'auto', objectFit: 'contain', objectPosition: 'bottom' }}
                                        />
                                    </div>
                                </div>
                            )}
                        </span>
                    </div>
                    <div className="pt-2 w-full">
                        <div className="border-t-2 border-black"></div>
                    </div>
                </div>
            ))}
            
            {/* Render popup when an experience is selected */}
            {/* {selectedExperience && (
                <ExperiencePopup 
                    experience={selectedExperience} 
                    onClose={() => setSelectedExperience(null)}
                />
            )} */}
        </div>
    );
}

export default Experience;