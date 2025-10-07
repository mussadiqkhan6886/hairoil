import Link from "next/link";
import { FiFacebook, FiInstagram, FiTwitter, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-main text-primary py-12 px-6 md:px-20">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold tracking-wide">Iqzaib Essence</h2>
          <p className="text-sm mt-3 text-primary/80 leading-6">
            Experience nature’s secret to healthy, shiny, and strong hair.
            Our herbal oils are crafted with care and love to rejuvenate your hair naturally.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-primary/90">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/products" className="hover:text-white transition">Products</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-primary/90">
            <li>Email: <a href="mailto:info@iqzaibessence.com" className="hover:text-white transition">info@iqzaibessence.com</a></li>
            <li>Phone: +92 300 1234567</li>
            <li>Address: Islamabad, Pakistan</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-5 text-2xl">
            <a href="#" className="hover:text-white transition"><FiFacebook /></a>
            <a href="#" className="hover:text-white transition"><FiInstagram /></a>
            <a href="#" className="hover:text-white transition"><FiTwitter /></a>
            <a href="mailto:info@iqzaibessence.com" className="hover:text-white transition"><FiMail /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary/30 mt-10 pt-6 text-center text-primary/80 text-sm">
        © {new Date().getFullYear()} Iqzaib Essence. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
