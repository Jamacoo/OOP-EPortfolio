import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Edit3, Activity, Award, Image as ImageIcon, ExternalLink } from 'lucide-react';
import ImageModal from '../components/ImageModal';

const Midterm = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
        { name: "Midterm Seatwork 1: Operators", date: "Feb 18, 2026", image: "https://placehold.co/600x400/10b981/white?text=Seatwork+1" },
      ]
    },
    {
      title: "Midterm Activities",
      icon: <Activity className="text-purple-500" />,
      items: [
        { 
          name: "Midterm Activity 1: Variables", 
          date: "Mar 05, 2026", 
          image: "/images/MidtermActivity1.jpg",
          explanation: "In this activity, I practiced making and using different kinds of variables like int and String.",
          learning: "I learned how to pick the right kind of variable so the code runs better and doesn't waste space.",
          document: "/docs/MidtermAvtivity1Variables.pdf"
        },
        { 
          name: "Midterm Activity 2: Operators", 
          date: "Mar 12, 2026", 
          image: [
            "/images/MidtermAcitivity2.jpg",
            "/images/MidtermAcitivity2-2.jpg",
            "/images/MidtermAcitivity2-3.jpg"
          ],
          explanation: "I used math and logic symbols to solve different problems and equations.",
          learning: "I learned which symbols to use first in math problems and how to use 'if' statements correctly."
        },
        { 
          name: "Midterm Activity 3: ATM with Transaction Counter", 
          date: "Mar 15, 2026", 
          image: [
            "/images/MidtermActivity3.jpg",
            "/images/MidtermActivity3-2.jpg",
            "/images/MidtermActivity3-3.jpg"
          ],
          explanation: "I made a simple ATM that counts how many times you withdraw or check your balance.",
          learning: "I learned how to keep a counter running even when the user does many things in a row."
        },
        { 
          name: "Midterm Activity 4: Student Payment System with Validation Counter", 
          date: "Mar 18, 2026", 
          image: [
            "/images/MidtermActivity4.jpg",
            "/images/MidtermActivity4-2.jpg",
            "/images/MidtermActivity4-3.jpg"
          ],
          explanation: "I built a system for student fees that checks if the input is wrong or empty.",
          learning: "I learned how to stop the program from crashing when a user types the wrong thing."
        },
        { 
          name: "Midterm Activity 5: Personal Expense Tracker", 
          date: "Mar 22, 2026", 
          image: [
            "/images/MidtermActivity5.jpg",
            "/images/MidtermActivity5-2.jpg",
            "/images/MidtermActivity5-3.jpg"
          ],
          explanation: "I made a tool to list down things I buy and how much they cost.",
          learning: "I learned how to put many items into a list and show them all at once."
        },
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
                onClick={() => setSelectedImage(item)}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-xl hover:border-primary/50 cursor-zoom-in"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={Array.isArray(item.image) ? item.image[0] : item.image} 
                    alt={item.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  {Array.isArray(item.image) && (
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white px-2 py-1 rounded-md text-xs font-bold border border-white/20">
                      {item.image.length} Photos
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <ImageIcon size={18} /> View Full Image
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{item.name}</h3>
                    {item.document && (
                      <a 
                        href={item.document} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-white transition-colors"
                        title="View Document"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}

      <ImageModal 
        isOpen={!!selectedImage} 
        item={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </div>
  );
};

export default Midterm;