import '@/app/globals.css';

function Experience() {
    return (
        <div className="w-full">
            <div className="mb-10 avgar-font group hover:cursor-pointer hover:text-red-400">
                <h2 className="text-5xl mb-4 transition-transform duration-300 group-hover:translate-x-2 ">Software Engineer Mentor</h2>
                <div className="flex justify-between items-center mb-2">
                    <p className="text-lg transition-transform duration-300 group-hover:translate-x-2">Led hackathon to teach prototyping, design, and coding to 50 students </p>
                    <span className="text-lg mr-20">Oct '24 - Present</span>
                </div>
                <div className="pt-2 w-full">
                    <div className="border-t-2 border-black mr-20"></div>
                </div>
            </div>
            
            <div className="mb-10 avgar-font group hover:cursor-pointer hover:text-red-400">
                <h2 className="text-5xl mb-4 transition-transform duration-300 group-hover:translate-x-2">Product Manager</h2>
                <div className="flex justify-between items-center mb-2">
                    <p className="text-lg transition-transform duration-300 group-hover:translate-x-2">Managed product development for student exclusive ride-sharing website</p>
                    <span className="text-lg text-right mr-20">Jul '24 - Present</span>
                </div>
                <div className="pt-2 w-full">
                    <div className="border-t-2 border-black mr-20"></div>
                </div>
            </div>

            <div className="mb-10 avgar-font group hover:cursor-pointer hover:text-red-400 ">
                <h2 className="text-5xl mb-4 transition-transform duration-300 group-hover:translate-x-2">Assistant Data Scientist</h2>
                <div className="flex justify-between items-center mb-2">
                    <p className="text-lg transition-transform duration-300 group-hover:translate-x-2">Collected literature corpus for upcoming AI Humanities Center developed by College of Letters and Science</p>
                    <span className="text-lg mr-20 text-right">Mar '24 - Jun '24</span>
                </div>
                <div className="pt-2 w-full">
                    <div className="border-t-2 border-black mr-20"></div>
                </div>
            </div>

            <div className="mb-10 avgar-font group hover:cursor-pointer hover:text-red-400">
                <h2 className="text-5xl mb-4 transition-transform duration-300 group-hover:translate-x-2">Assistant Visualization Researcher</h2>
                <div className="flex justify-between items-center mb-2">
                    <p className="text-lg transition-transform duration-300 group-hover:translate-x-2">Integrated 3D Gaussian Splatting into Linux environment to improve accuracy and clarity of images in VR spaces</p>
                    <span className="text-lg mr-20 text-right">Nov '23 - Sept '24</span>
                </div>
                <div className="pt-2 w-full">
                    <div className="border-t-2 border-black mr-20"></div>
                </div>
            </div>

            <div className="mb-10 avgar-font group hover:cursor-pointer hover:text-red-400">
                <h2 className="text-5xl mb-4 transition-transform duration-300 group-hover:translate-x-2">Software Engineer</h2>
                <div className="flex justify-between items-center mb-2">
                    <p className="text-lg transition-transform duration-300 group-hover:translate-x-2">Developed AI powered iternerary chatbot and optimized finacial model for travel agency in Tokyo, Japan</p>
                    <span className="text-lg mr-20 text-right">Jun '23 - Aug '23</span>
                </div>
                <div className="pt-2 w-full">
                    <div className="border-t-2 border-black mr-20"></div>
                </div>
            </div>
        </div>
    );
}

export default Experience;