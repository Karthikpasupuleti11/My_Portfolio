import { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const timeoutRef = useRef<number | null>(null);  // Corrected type

    const texts = ['AI & ML Engineer', 'Researcher', 'Developer'];

  useEffect(() => {
    // Cleanup function to clear timeout
    return (): void => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const currentWord = texts[textIndex];

    const handleTyping = () => {
      const current = typedText;

      if (isDeleting) {
        const newText = current.slice(0, -1);
        setTypedText(newText);
        setTypingSpeed(newText ? 50 : 700);

        if (!newText) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        const newText = currentWord.slice(0, current.length + 1);
        setTypedText(newText);
        setTypingSpeed(newText === currentWord ? 2000 : 120);

        if (newText === currentWord) setIsDeleting(true);
      }
    };

    timeoutRef.current = setTimeout(handleTyping, typingSpeed);

    return (): void => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [typedText, isDeleting, textIndex, typingSpeed]);

  return (
    <section id="home" className="pt-32 pb-20 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hello, I'm <span className="text-primary">Karthik Pasupuleti</span>
          </h1>

          <div className="h-10 mb-8">
            <h2 className="text-2xl md:text-3xl flex items-center">
              I'm a{' '}
              <span className="text-primary ml-2 relative min-w-20 inline-block">
                {typedText}
                <span className="absolute right-[-4px] top-0 h-full w-[2px] bg-primary animate-pulse" />
              </span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
            Welcome to my portfolio!
I specialize in building intelligent, real-time applications and AI-powered systems using modern technologies. From smart automation to innovative solutions, I bring ideas to life through clean code, creativity, and collaboration. Let’s create something impactful together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <a href="#about" aria-label="Scroll down" className="inline-block">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
