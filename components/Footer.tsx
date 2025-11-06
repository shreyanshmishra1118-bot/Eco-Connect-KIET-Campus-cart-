import React from 'react';

const Footer: React.FC = () => {
    const footerLinks = ['About', 'Contact', 'Help', 'Privacy', 'Student Support'];
    const socialLinks = ['Facebook', 'Twitter', 'Instagram'];
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
                <h3 className="text-2xl font-bold font-montserrat text-slate-100">
                    <span className="text-emerald-400">Eco</span>-
                    <span className="text-sky-400">Connect</span> KIET
                </h3>
                <p className="text-slate-500 mt-2">A sustainable campus marketplace for students.</p>
            </div>
            <div>
                <h4 className="font-semibold tracking-wider uppercase text-slate-500">Links</h4>
                <ul className="mt-4 space-y-2">
                    {footerLinks.map(link => <li key={link}><a href="#" className="hover:text-emerald-400 transition-colors">{link}</a></li>)}
                </ul>
            </div>
            <div>
                 <h4 className="font-semibold tracking-wider uppercase text-slate-500">Follow Us</h4>
                <div className="flex mt-4 space-x-4">
                     {socialLinks.map(link => <a key={link} href="#" className="hover:text-emerald-400 transition-colors">{link}</a>)}
                </div>
            </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500">
            <p>&copy; {new Date().getFullYear()} Eco-Connect KIET. All Rights Reserved.</p>
            <p className="text-xs text-slate-600 mt-4">
              Designed & Developed by <a href="https://wdesine.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">Shreyannsh Mishra (wdesine)</a>
              {' | '}
              IG: <a href="https://www.instagram.com/shreyslifee" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">@shreyslifee</a>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;