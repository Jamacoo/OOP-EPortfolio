import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main
        className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        {children}
      </main>
      <footer className="border-t border-border py-8 text-center text-muted-foreground text-sm">
        <p>© 2026 Jann Marco P. Gadicho. BSIT 2-1N. Object Oriented Programming.</p>
      </footer>
    </div>
  );
};

export default Layout;