import { Link } from 'react-router-dom';
import anziPrimeTextLogo from '../assets/anzi-prime-text-logo.svg';

const Navbar = () => {
  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={anziPrimeTextLogo} alt="THE ANZI PRIME" className="h-8" />
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-secondary">Accueil</Link>
          <Link to="/recherche" className="text-white hover:text-secondary">Recherche</Link>
          <Link to="/ajouter" className="text-white hover:text-secondary">Ajouter un film</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
