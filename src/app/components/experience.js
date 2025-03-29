import '@/app/globals.css';
import { useState } from 'react';
import Image from 'next/image';
import ExperiencePopup from './ExperiencePopup';
// Import your markdown content
import softwareEngineerContent from '@/app/content/experiences/software-engineer.md';
// Import other markdown files as needed

function Experience() {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [selectedExperience, setSelectedExperience] = useState(null);

    const experiences = [
        {
            id: '1',
            title: 'Software Engineer Mentor',
            description: 'Led hackathon to teach prototyping, design, and coding to 50 students',
            period: 'Oct \'24 - Present',
            image: '/experiences/MESA.png',
            content: softwareEngineerContent
        },
        {
            id: '2',
            title: 'Product Manager',
            description: 'Managed product development for student exclusive ride-sharing website for 1000+ users',
            period: 'Jul \'24 - Present',
            image: '/experiences/aggieworks.png' 
        },
        {
            id: '3',
            title: 'Assistant Data Scientist',
            description: 'Collected literature corpus for upcoming AI Humanities Center developed by College of Letters and Science',
            period: 'Mar \'24 - Jun \'24',
            image: '/experiences/Datalab.png' 
        },
        {
            id: '4',
            title: 'Assistant Visualization Researcher',
            description: 'Integrated 3D Gaussian Splatting into Linux environment to improve accuracy and clarity of images in VR spaces',
            period: 'Nov \'23 - Sept \'24',
            image: '/experiences/Datalab.png' 
        },
        {
            id: '5',
            title: 'Software Engineer',
            description: 'Developed flashcard website that integrated space reptition to improve learning efficiency',
            period: 'Oct \'23 - Jun \'24',
            image: '/experiences/codelablogo.png',
        },
        {
            id: '6',
            title: 'Software Engineer',
            description: 'Developed AI powered travel iternerary planner and optimized finacial model for travel agency in Tokyo, Japan',
            period: 'Jun \'23 - Aug \'23',
            image: '/experiences/TOKI.png'
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
                    onClick={() => setSelectedExperience(exp)}
                >
                    <h2 className="text-5xl mb-4 transition-transform duration-300 group-hover:translate-x-2">{exp.title}</h2>
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-lg transition-transform duration-300 group-hover:translate-x-2">{exp.description}</p>
                        <span className="text-lg text-right relative">
                            {exp.period}
                            
                            {/* Image that appears on hover */}
                            {hoveredItem === exp.id && (
                                <div className="absolute bottom-full right-0 mb-2 z-10 animate-slide-in-from-right">
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
            {selectedExperience && (
                <ExperiencePopup 
                    experience={selectedExperience} 
                    onClose={() => setSelectedExperience(null)}
                />
            )}
        </div>
    );
}

export default Experience;