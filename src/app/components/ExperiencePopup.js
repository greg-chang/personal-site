import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

function ExperiencePopup({ experience, onClose }) {
    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50" onClick={onClose}>
            <div className="bg-white p-8 rounded-lg max-w-4xl w-full mx-4 relative shadow-xl overflow-y-auto max-h-[90vh]" onClick={e => e.stopPropagation()}>
                <button 
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-500 cursor-pointer"
                    onClick={onClose}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                
                <div className="flex flex-col">
                    {/* Header with title and image */}
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-4xl avgar-font mb-2">{experience.title}</h2>
                            <p className="avgar-font text-gray-600">{experience.period}</p>
                        </div>
                        
                    </div>

                    {/* Main content using markdown */}
                    <div className=" prose prose-lg max-w-none avgar-font">
                        {experience.content && (
                            <ReactMarkdown
                                components={{
                                    h1: ({node, ...props}) => <h1 className="text-4xl avgar-font font-semibold text-gray-900 mb-4" {...props} />,
                                    h2: ({node, ...props}) => <h2 className="text-3xl avgar-font font-semibold text-gray-800 mt-6 mb-3" {...props} />,
                                    h3: ({node, ...props}) => <h3 className="text-2xl avgar-font font-semibold text-gray-700 mt-4 mb-2" {...props} />,
                                    ul: ({node, ...props}) => <ul className="list-disc list-inside my-4" {...props} />,
                                    li: ({node, ...props}) => <li className="ml-4 mb-2 avgar-font" {...props} />,
                                    a: ({node, ...props}) => (
                                        <a 
                                            {...props} 
                                            className="text-blue-600 avgar-font hover:text-blue-800 underline"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        />
                                    )
                                }}
                            >
                                {experience.content}
                            </ReactMarkdown>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperiencePopup; 