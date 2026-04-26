import { motion } from 'framer-motion';
import { Mail, Code, Briefcase, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Get In Touch</h1>
        <p className="text-muted-foreground text-lg">
          Have a question or want to collaborate? Feel free to reach out.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Contact Details</h2>
            <div className="space-y-4">
              {[
                { icon: <Mail className="text-primary" />, label: "Email", value: "janngadicho2005@gmail.com" },
                { icon: <MessageSquare className="text-primary" />, label: "Messenger", value: "Jamaco Gadicho" },
                { icon: <Code className="text-primary" />, label: "GitHub", value: "Maco" },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-8 rounded-3xl border border-border bg-card shadow-lg space-y-6"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address</label>
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea 
                rows="4"
                placeholder="How can I help you?"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
              ></textarea>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/25">
            <Send size={18} /> Send Message
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;