import { useState, useEffect } from 'react';
import { useScrollFadeIn } from '../useScrollFadeIn';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
}



const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [fadeRef, isVisible] = useScrollFadeIn<HTMLDivElement>();
  const [gridRef, gridVisible] = useScrollFadeIn<HTMLDivElement>();

  const projects: Project[] = [

    {
      id: 1,
      title: 'Insta Spam Detection',
      description: 'A machine learning model to detect spam comments on Instagram, improving user safety and experience.',
      image: 'instaspam.png',
      tags: ['ML', 'NLP', 'Python'],
      demoLink: 'https://demo.com/instaspam',
      codeLink: 'https://github.com/Karthikpasupuleti11/Instagram_Spam_Detection_and_Filtering',
    },
    {
      id: 2,
      title: 'Geolocation-Based Attendance System',
      description: 'A location-aware system for tracking and managing attendance using GPS data.',
      image: 'geocheckin.png',
      tags: ['React', 'MongoDB', 'Node.js', 'Geolocation'],
      demoLink: 'https://geocheckin.netlify.app/',
      codeLink: 'https://github.com/Karthikpasupuleti11/Geolocation-Based-Attendance-Tracking-System',
    },
    {
      id: 3,
      title: 'Water Level Monitoring System',
      description: 'Real-time water level monitoring using piezometer data, with predictive analysis and Z-score anomaly detection.',
      image: 'DWLR.png',
      tags: ['Python', 'IoT', 'ML'],
      demoLink: 'https://demo.com/waterlevel',
      codeLink: 'https://github.com/Karthikpasupuleti11/Automated-Data-Monitoring-and-Alert-System-for-DWLRs',
    },
    {
      id: 4,
      title: 'Video to Reel Summarizer',
      description: 'Automatically converts long videos into 30-second reels using FFmpeg, Whisper, and NLP.',
      image: 'videotoreels.png',
      tags: ['Python', 'FFmpeg', 'Whisper', 'NLP'],
      demoLink: 'https://demo.com/reel',
      codeLink: 'https://github.com/Karthikpasupuleti11/Video-to-Reel-Summarizer',
    },
    {
      id: 5,
      title: 'InjuryShield',
      description: 'An AI-based application to classify the severity of injuries using image processing.',
      image: 'injuryshield.png',
      tags: ['AI', 'Computer Vision', 'Healthcare'],
      demoLink: 'https://soft-marigold-2f9026.netlify.app/',
      codeLink: 'https://github.com/Karthikpasupuleti11/Injury_Shield',
    },
    {
      id: 6,
      title: 'Virtual Art Gallery',
      description: 'A 3D web-based art gallery experience for showcasing digital artworks.',
      image: 'artgallery.png',
      tags: ['Three.js', 'React', '3D'],
      demoLink: 'https://virtual-art-gallery-wsth.onrender.com/second',
      codeLink: 'https://github.com/Karthikpasupuleti11/virtual_art_gallery-main',
    },
  ];

  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)));

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.tags.includes(selectedCategory))
      );
    }
  }, [selectedCategory]);

  return (
    <section id="projects" className="relative py-20 min-h-screen flex flex-col justify-center text-white overflow-hidden">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 bg-hero-bg bg-cover bg-center bg-no-repeat bg-fixed"
        aria-hidden="true"
      ></div>

      {/* Dark overlay with blur effect */}
      <div className="absolute inset-0 bg-black opacity-70 backdrop-blur-md-custom"></div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div
          ref={fadeRef}
          className={`flex flex-col items-center mb-12 ${isVisible ? 'fade-in-up' : 'fade-init'}`}
        >
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
          <p className="mt-6 text-center max-w-2xl text-white">
            Here are some of my recent projects. Each project is a unique piece of development,
            from planning and design all the way to solving real-life problems with code.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10 relative z-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedCategory(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === tag
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ${gridVisible ? 'fade-in-up' : 'fade-init'}`}
        >
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-background/80 border border-border rounded-lg overflow-hidden shadow-sm transform transition-all duration-200 ease-out hover:-translate-y-4 hover:shadow-2xl hover:scale-103 hover:border-primary text-white"
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="aspect-video bg-secondary/20 relative">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4 text-gray-200">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary/50 text-gray-200 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md text-center text-sm hover:bg-primary/90 transition-colors transform hover:scale-105 duration-200"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-center text-sm hover:bg-secondary/80 transition-colors transform hover:scale-105 duration-200"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center mt-10 p-8 bg-background/80 border border-border rounded-lg text-white">
            <p className="text-lg">
              No projects found in this category. Please select another category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
