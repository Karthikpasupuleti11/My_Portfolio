import { useState, useEffect } from 'react';

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
    <section id="projects" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
          <p className="mt-6 text-center max-w-2xl text-muted-foreground">
            Here are some of my recent projects. Each project is a unique piece of development,
            from planning and design all the way to solving real-life problems with code.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-background border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
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
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-xs"
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
                    className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md text-center text-sm hover:bg-primary/90 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-center text-sm hover:bg-secondary/80 transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center mt-10 p-8 bg-background border border-border rounded-lg">
            <p className="text-lg text-muted-foreground">
              No projects found in this category. Please select another category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
