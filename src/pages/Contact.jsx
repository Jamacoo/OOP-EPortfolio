import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin, Code } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: <Mail className="text-primary" />, label: "Email", value: "janngadicho2005@gmail.com", href: "mailto:janngadicho2005@gmail.com" },
    { icon: <MessageSquare className="text-primary" />, label: "Messenger", value: "Jamaco Gadicho", href: "#" },
    { icon: <Code className="text-primary" />, label: "GitHub", value: "Maco", href: "https://github.com/Maco" },
    { icon: <MapPin className="text-primary" />, label: "Location", value: "Philippines", href: "#" },
  ];


  return (
    <div className="max-w-4xl mx-auto space-y-16">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">Let's Connect</h1>
        <p className="text-muted-foreground text-xl max-w-xl mx-auto">
          Feel free to reach out for collaborations, questions, or just to say hi! I'm always open to discussing new opportunities.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {contactInfo.map((item, index) => (
          <motion.a 
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(var(--primary-rgb), 0.05)" }}
            className="flex items-center gap-6 p-6 rounded-2xl border border-border bg-card shadow-sm transition-all hover:border-primary/50"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{item.label}</p>
              <p className="text-lg font-bold">{item.value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="p-8 rounded-3xl border border-border bg-gradient-to-br from-primary/5 to-transparent text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Availability</h2>
        <p className="text-muted-foreground text-lg">
          I am currently available for new projects and learning opportunities. <br />
          Drop me a message and let's create something great together!
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;