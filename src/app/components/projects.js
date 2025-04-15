import '@/app/globals.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

function Projects() {
    const projects = [
        {
            id: 1,
            title: "Moober",
            description: "Moober is a carpooling and uber/lyft splitting platform for UC Davis students to save money and gas",
            image: "/projects/Moober-project.png"
        },
        {
            id: 2,
            title: "Espresso",
            description: "Espresso combines the space reptition of Anki and Quizlet for ",
            image: "/projects/Espresso-project.png"
        }
    ];

    return (
        <div className="pb-16 px-10 lg:px-20 bg-gray-950">
            <div className="flex flex-col gap-8 max-w-4xl mx-auto">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        className="relative h-[60vh] rounded-2xl overflow-hidden group"
                    >
                        {/* Project image as background */}
                        <div className="absolute inset-0">
                            <Image 
                                src={project.image}
                                alt={project.title}
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'center 0%'}}
                            />
                        </div>
                        
                        {/* Content overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <div className="flex justify-between items-baseline mb-4">
                                    <h2 className="text-4xl font-bold text-white vouge-font">{project.title}</h2>
                                </div>
                                <p className="text-xl text-white/90 avgar-font max-w-2xl">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Projects;