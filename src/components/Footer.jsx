import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-8 px-8 border-t border-secondary text-center text-primary/60">
      <div className="flex items-center justify-center gap-5 mb-5">
        <FaInstagram className="w-6 h-6 hover:text-accent" />
        <FaFacebook className="w-6 h-6 hover:text-accent" />
        <FaTwitter className="w-6 h-6 hover:text-accent" />
      </div>
      © 2025 Prime. All rights reserved.
    </footer>
  )
}