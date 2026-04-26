import { motion } from 'framer-motion';
import { Book, Code, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-8 py-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-white text-4xl font-bold shadow-2xl shadow-orange-500/20 border-4 border-background">
            JG
          </div>
          <div className="bg-secondary text-secondary-foreground border border-border px-4 py-1.5 rounded-full text-sm font-bold tracking-wide shadow-sm">
            BSIT 2-1N
          </div>
        </motion.div>

        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Jann Marco P. Gadicho
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold">
            Object Oriented Programming
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This e-portfolio presents my Midterm Project in Object-Oriented Programming. 
            It includes quizzes, activities, and exams that demonstrate my understanding of OOP concepts.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/midterm"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-primary/25"
          >
            Explore Midterms <ArrowRight size={18} />
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-medium hover:bg-secondary/80 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Quick Info Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Core Concepts",
            description: "Encapsulation, Inheritance, Polymorphism, and Abstraction.",
            icon: <Code className="text-primary" size={24} />,
          },
          {
            title: "Course Work",
            description: "Comprehensive collection of quizzes and hands-on activities.",
            icon: <Book className="text-primary" size={24} />,
          },
          {
            title: "Project Goal",
            description: "Demonstrating mastery of class-based software design.",
            icon: <GraduationCap className="text-primary" size={24} />,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Home;