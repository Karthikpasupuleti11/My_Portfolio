const SkillsSection = () => {
  const frontendSkills = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 88 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'Flask', percentage: 92 },
    { name: 'Power BI', percentage: 87 },
    { name: 'Tableau', percentage: 80 },
  ];

  const backendSkills = [
    { name: 'Python', percentage: 95 },
    { name: 'SQL', percentage: 90 },
    { name: 'MongoDB', percentage: 85 },
    { name: 'PostgreSQL', percentage: 80 },
    { name: 'TimescaleDB', percentage: 78 },
    { name: 'REST API', percentage: 82 },
  ];

  const aimlSkills = [
    { name: 'Machine Learning', percentage: 92 },
    { name: 'Deep Learning', percentage: 88 },
    { name: 'Computer Vision', percentage: 85 },
    { name: 'NLP', percentage: 86 },
    { name: 'LLMs & Transformers', percentage: 83 },
    { name: 'Data Visualization', percentage: 87 },
  ];

  const otherSkills = [
  'Git & GitHub',
  'Jupyter Notebook & Google Colab',
  'VS Code & PyCharm',
  'Prompt Engineering',
  'Cloud Integration',
  'Agile Methodology',
  'API Integration',
  'Data Visualization',
  'DBeaver',
  'Hugging Face',
  'TimescaleDB',
  'Google Cloud Basics',
  'Real-Time Alert Systems',
  'Project Documentation',
  'Technical Presentation',
];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
          <p className="mt-6 text-center max-w-2xl text-muted-foreground">
            I've worked with a wide range of technologies across AI/ML, backend systems, and data visualization.
            Here are some of my technical skills and areas of expertise.
          </p>
        </div>

        {/* 3-column layout for Frontend, Backend, and AI/ML */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Frontend
            </h3>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                      role="progressbar"
                      aria-valuenow={skill.percentage}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
              Backend
            </h3>
            <div className="space-y-6">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                      role="progressbar"
                      aria-valuenow={skill.percentage}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI/ML */}
          <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h4M3 13h2l3 8 4-16 3 8h5" />
              </svg>
              AI / ML
            </h3>
            <div className="space-y-6">
              {aimlSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                      role="progressbar"
                      aria-valuenow={skill.percentage}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other Skills */}
        <div className="mt-12 bg-background border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Other Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {otherSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
