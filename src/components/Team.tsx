"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const teamMembers = [
  {
    name: "Ronald Parent",
    role: "CEO & Founder",
    image: "/team/ronald.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/ronald-parent/",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Hilal Aziz",
    role: "CTO & Strategy Head",
    image: "/team/hilal.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/hilal-aziz-32119324a/",
      twitter: "https://twitter.com/hilalaziz",
      instagram: "#",
    },
  },
  {
    name: "Shafique Ur Rehman",
    role: "Technical Lead",
    image: "/team/shafique.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/shafique-ur-rehman-b7b859299/",
      twitter: "https://x.com/shafique_ur_r",
      instagram: "#",
    },
  },
  {
    name: "Talha Farooq",
    role: "Senior AI & Automation Engineer",
    image: "/team/talha.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/talha-farooq-49038823a/",
      twitter: "#",
      instagram: "#",
    },
  },
];

export default function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-orange-500 font-medium mb-2 block">Meet Our Team</span>
            <h2 className="text-4xl font-bold text-gray-900">
              Experienced<br />Team Members
            </h2>
          </div>
          {/* <button className="hidden md:inline-flex items-center px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors">
            See all members →
          </button> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden mb-4 aspect-3/4 bg-gray-100 rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Social Overlay - appears on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={member.socials.linkedin} className="p-2 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href={member.socials.twitter} className="p-2 bg-white rounded-full hover:bg-sky-500 hover:text-white transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href={member.socials.instagram} className="p-2 bg-white rounded-full hover:bg-pink-500 hover:text-white transition-colors">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            {/* <button className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors">
            See all members →
          </button> */}
        </div>
      </div>
    </section>
  );
}
