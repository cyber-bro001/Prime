import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Menu, X, ShoppingBag, UserCircle } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}, [isOpen]);
  
  return (
    <nav className="w-full flex justify-between items-center px-8 py-6 border-b border-secondary">       
    <button 
    onClick={() => {setIsOpen(!isOpen)}}
    className="z-50 sm:hidden">
      {isOpen ? (
      <X className="w-6 h-6 hover:text-accent z-50" />
      )
        : (
        <Menu className="w-6 h-6 hover:text-accent" />
        )}
    </button>
      
      <h1 className="text-3xl font-serif z-50">Prime</h1>
      
      {/*Desktop Links*/}
      <div className="hidden sm:flex gap-6 items-center">
        <Link to="/" className="hover:text-accent">Home</Link>
        <Link to="/shop" className="hover:text-accent">Shop</Link>
        <Link to="/about" className="hover:text-accent">About</Link>
        <Link to="/contact" className="hover:text-accent">Contact</Link>
      </div>
      
      <div className="flex items-center  gap-2 z-50">
        <ShoppingBag className="w-6 h-6 hover:text-accent" />
        <UserCircle className="w-6 h-6 hover:text-accent" />
      </div>
      
      {/*Mobile Phone Links*/}
      <div className={`fixed h-full w-full top-0 left-0 flex flex-col items-center p-6 gap-6 justify-center bg-secondary z-30 sm:hidden
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `} >
        <Link to="/" className="hover:text-accent">Home</Link>
        <Link to="/shop" className="hover:text-accent">Shop</Link>
        <Link to="/about" className="hover:text-accent">About</Link>
        <Link to="/contact" className="hover:text-accent">Contact</Link>
      </div>
  </nav>
  );
}