import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {ChevronUp} from 'lucide-react';

export default function ToTopButton(){
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    function toggleVisibility(){
      if(window.scrollY > 300){
        setIsVisible(true);
      }else{
        setIsVisible(false);
      }
    }
      
      window.addEventListener("scroll", toggleVisibility);
     return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  
  function scrollToTop(){
    window.scrollTo({top: 0, behavior: "smooth"})
  }
  
  return(
      <button onClick={scrollToTop}  className={`p-2 bg-accent fixed right-5 bottom-5 shadow hover:bg-accent/80 transition-opacity duration-300 ${
        isVisible ? 'opacity-100'
        : 'opacity-0 pointer-events-none'
      }`}>
        <ChevronUp className="w-6 h-6 text-white" />
      </button>
    );
}