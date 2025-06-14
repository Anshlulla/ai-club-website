
import React from "react";
import { Instagram, Linkedin, Mail, Github } from "lucide-react";

const links = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/", // Replace with your club's Instagram URL
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/", // Replace with your club's LinkedIn URL
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:info@aiclub.com", // Replace with your club's email
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/", // Replace with your club's GitHub org link
  },
];

const Footer = () => (
  <footer className="w-full bg-gradient-to-t from-indigo-100 via-white to-blue-50 py-8 mt-auto border-t border-blue-100">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
      <div className="flex gap-6">
        {links.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-700 hover:text-indigo-700 transition-colors hover-scale"
            aria-label={item.name}
          >
            <item.icon size={24} />
            <span className="hidden sm:inline">{item.name}</span>
          </a>
        ))}
      </div>
      <span className="text-xs text-muted-foreground text-center select-none">
        &copy; {new Date().getFullYear()} AI Club. All rights reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
