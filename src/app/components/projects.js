import '@/app/globals.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

function Projects() {
    const projects = [
        {
            id: 1,
            title: "Project 1",
            description: "Description of project 1",
            image: "/projects/moober.png"
        },
        {
            id: 2,
            title: "Project 2",
            description: "Description of project 2",
            image: "/projects/espresso.png"
        }
    ];

    return (
        <div className="pb-16 px-10 lg:px-20 bg-gray-950">
            <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        className="relative h-72 rounded-2xl overflow-hidden"
                    >
                        {/* Project image */}
                        <div className="w-full h-full relative flex items-center justify-center">
                            <div className="relative w-[100%] h-[100%]">
                                <Image 
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className="transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        </div>
                        
                        {/* Black transparent text box at bottom */}
                        {/* <div className="mt-10 absolute bottom-0 left-0 right-0 bg-black/50 p-4 rounded-b-2xl backdrop-blur-sm">
                            <h3 className="text-xl font-bold mb-1 text-white avgar-font">{project.title}</h3>
                            <p className="text-gray-200 avgar-font">{project.description}</p>
                        </div> */}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Projects;