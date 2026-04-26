import { motion } from 'framer-motion';
import { FileText, Edit3, Activity, Award, Image as ImageIcon } from 'lucide-react';

const Midterm = () => {
  const sections = [
    {
      title: "Midterm Quizzes",
      icon: <FileText className="text-blue-500" />,
      items: [
        { name: "Quiz 1: OOP Basics", date: "Feb 15, 2026", image: "https://placehold.co/600x400/3b82f6/white?text=Quiz+1" },
        { name: "Quiz 2: Classes and Objects", date: "Feb 22, 2026", image: "https://placehold.co/600x400/3b82f6/white?text=Quiz+2" },
      ]
    },
    {
      title: "Midterm Seatwork",
      icon: <Edit3 className="text-green-500" />,
      items: [
        { name: "Seatwork 1: Constructors", date: "Feb 18, 2026", image: "https://placehold.co/600x400/10b981/white?text=Seatwork+1" },
        { name: "Seatwork 2: Encapsulation", date: "Feb 25, 2026", image: "https://placehold.co/600x400/10b981/white?text=Seatwork+2" },
      ]
    },
    {
      title: "Midterm Activities",
      icon: <Activity className="text-purple-500" />,
      items: [
        { name: "Activity 1: Inheritance Model", date: "Mar 05, 2026", image: "https://placehold.co/600x400/8b5cf6/white?text=Activity+1" },
        { name: "Activity 2: Interface Design", date: "Mar 12, 2026", image: "https://placehold.co/600x400/8b5cf6/white?text=Activity+2" },
      ]
    },
    {
      title: "Midterm Exam",
      icon: <Award className="text-red-500" />,
      items: [
        { name: "Midterm Examination", date: "Mar 20, 2026", image: "https://placehold.co/600x400/ef4444/white?text=Midterm+Exam" },
      ]
    }
  ];

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Midterm Requirements</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          A showcase of my progress and accomplishments during the first half of the semester.
        </p>
      </header>

      {sections.map((section, sIndex) => (
        <section key={sIndex} className="space-y-6">
          <div className="flex items-center gap-3 border-b border-border pb-2">
            {section.icon}
            <h2 className="text-2xl font-bold">{section.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {section.items.map((item, iIndex) => (
              <motion.div
                key={iIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-xl hover:border-primary/50"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <ImageIcon size={18} /> View Full Image
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Midterm;