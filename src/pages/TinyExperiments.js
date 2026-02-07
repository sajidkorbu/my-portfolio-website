import { motion } from 'framer-motion';

const TinyExperiments = () => {
  const experiments = [
    {
      title: "this website",
      description: "my personal home on the internet. i keep iterating on it with new tools, new ideas, and a lot of tinkering in public.",
      tech: ["react", "washi theme", "netlify"],
      link: "/home"
    },
    {
      title: "cricketclaw on openclaw",
      description: "a wild experiment: i launched a cricket-themed ai agent on moltbook from a cheap hetzner vps. it now posts t20 world cup takes and chats with other agents.",
      tech: ["openclaw", "moltbook", "kimi k2.5", "hetzner vps", "telegram"],
      link: "https://www.moltbook.com/u/CricketClaw"
    },
    {
      title: "compound interest calculator",
      description: "explore the power of compound interest with this interactive calculator. input your principal, interest rate, and time to see how your money grows.",
      tech: ["html", "css", "javascript"],
      link: "/compoundinterest"
    },
    {
      title: "principles webpage",
      description: "a collection of timeless principles and insights for better living. wisdom distilled into actionable thoughts.",
      tech: ["html", "css", "javascript"],
      link: "/principles"
    },
    {
      title: "currency exchange visualizer",
      description: "visualize currency exchange rates and trends. built to understand how different currencies perform against each other.",
      tech: ["python", "flask"],
      link: "/currency"
    },
    {
      title: "learn rag",
      description: "exploring retrieval-augmented generation through a hands-on playground. upload documents, ask questions, and see how AI combines search with generation to provide accurate answers.",
      tech: ["langchain", "openai", "supabase"],
      link: "https://learnrag.netlify.app/"
    },
    {
      title: "the art of prompt",
      description: "exploring the craft of prompt engineering and AI interaction. a deep dive into the techniques and strategies for effective AI communication.",
      tech: ["AI", "prompt engineering", "replit"],
      link: "https://theartofprompt.replit.app/"
    },
    {
      title: "visualize your life",
      description: "a simple tool to help you reflect on life during stressful times. see your life in weeks, and gain perspective.",
      tech: ["javascript", "netlify"],
      link: "https://visualizelife.netlify.app"
    },
    {
      title: "unagi - friends universe",
      description: "complete timeline of FRIENDS characters' life events with interactive filters, statistics, and behind-the-scenes trivia. could this BE any more nostalgic?",
      tech: ["javascript", "github pages", "data viz"],
      link: "https://sajidkorbu.github.io/Unagi/"
    },
    {
      title: "90s 2d game",
      description: "my attempt at building a simple 2d game. reminds me of the games we used to play in the 90s.",
      tech: ["javascript", "netlify"],
      link: "https://90s2dgame.netlify.app/"
    },
    {
      title: "linkedin & x post analyzer",
      description: "this is not what i expected but taught me to work with API keys. a chrome extension that analyzes posts using AI-powered readability detection.",
      tech: ["javascript", "chrome extension", "AI"],
      link: "https://github.com/sajidkorbu/LinkedinXChromeExtenstion.git"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <div className="washi-page">
      <motion.div
        className="washi-content"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Page Header */}
        <motion.header className="washi-header" variants={titleVariants}>
          <h1 className="washi-title">tiny experiments</h1>
          <p className="washi-subtitle">
            small projects, big learnings. each one an attempt at something new—some work, some don't. but always, i learn.
          </p>
        </motion.header>

        {/* Experiments Grid */}
        <motion.div className="washi-grid" variants={containerVariants}>
          {experiments.map((experiment, index) => (
            <motion.a
              key={index}
              href={experiment.link}
              target={experiment.link.startsWith('http') ? "_blank" : "_self"}
              rel={experiment.link.startsWith('http') ? "noopener noreferrer" : undefined}
              className="washi-card"
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Decorative number */}
              <span className="washi-card-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="washi-card-content">
                <h2 className="washi-card-title">{experiment.title}</h2>
                <p className="washi-card-description">{experiment.description}</p>

                <div className="washi-card-footer">
                  <div className="washi-tags">
                    {experiment.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="washi-tag">{tech}</span>
                    ))}
                  </div>
                  <span className="washi-card-link">
                    view →
                  </span>
                </div>
              </div>

            </motion.a>
          ))}
        </motion.div>

        {/* Footer quote */}
        <motion.footer
          className="washi-footer"
          variants={titleVariants}
        >
          <p className="washi-quote">
            "the only way to do great work is to love what you do"
          </p>
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default TinyExperiments;
