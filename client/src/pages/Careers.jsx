import React from 'react';
import { Link } from 'react-router-dom';
import JobCard from '../components/JobCard';
import CultureCard from '../components/CultureCard';
import BenefitsCard from '../components/BenefitsCard';
import { Lightbulb, Shield, Users, BookOpen, Monitor, TrendingUp, Coffee, Blocks, ArrowRight, Mail } from 'lucide-react';
import './Careers.css';

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote / Mumbai",
    experience: "2-4 Years",
    type: "Full-time",
    description: "Build modern, responsive UIs using React, Vite, and Tailwind CSS. Work on blockchain explorers and analytics dashboards."
  },
  {
    id: 2,
    title: "Backend Developer",
    department: "Engineering",
    location: "Remote / Mumbai",
    experience: "3-5 Years",
    type: "Full-time",
    description: "Design and maintain scalable APIs with Node.js, Fastify, and PostgreSQL. Handle blockchain data ingestion and indexing."
  },
  {
    id: 3,
    title: "Blockchain Engineer",
    department: "Engineering",
    location: "Remote / Mumbai",
    experience: "3-6 Years",
    type: "Full-time",
    description: "Develop smart contract analysis tools, EVM integrations, and blockchain data pipelines. Deep knowledge of XDC and EVM chains."
  },
  {
    id: 4,
    title: "Security Analyst",
    department: "Security",
    location: "Remote / Mumbai",
    experience: "2-5 Years",
    type: "Full-time",
    description: "Audit smart contracts, perform vulnerability assessments, and build security tooling for blockchain applications."
  },
  {
    id: 5,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / Mumbai",
    experience: "2-4 Years",
    type: "Full-time",
    description: "Design intuitive interfaces for blockchain explorers, dashboards, and developer tools. Strong portfolio in web apps."
  }
];

const cultureValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We push boundaries in blockchain exploration and AI-powered analytics."
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Every line of code is written with security and auditability in mind."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Cross-functional teams working together to solve complex problems."
  },
  {
    icon: BookOpen,
    title: "Learning & Growth",
    description: "Continuous learning with workshops, conferences, and research time."
  }
];

const benefits = [
  {
    icon: Monitor,
    title: "Remote / Hybrid Work",
    description: "Work from anywhere or join us at our Mumbai office. Flexible hours."
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Clear growth paths, mentorship, and opportunities to lead projects."
  },
  {
    icon: Coffee,
    title: "Flexible Environment",
    description: "No micromanagement. Results matter more than clock-watching."
  },
  {
    icon: Blocks,
    title: "Real Blockchain Projects",
    description: "Work on production blockchain tools used by thousands of developers."
  }
];

function Careers() {
  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="container">
          <span className="tag">Careers</span>
          <h1 className="careers-hero__title">Build the Future with Us</h1>
          <p className="careers-hero__subtitle">
            Join a team of engineers, designers, and security experts building the infrastructure 
            that powers the future of blockchain. We are OpenScanAI — the fastest growing 
            blockchain explorer platform.
          </p>
          <div className="careers-hero__cta">
            <a href="#positions" className="btn btn-primary">
              View Open Positions <ArrowRight size={18} />
            </a>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="careers-hero__bg" />
      </section>

      {/* Open Positions */}
      <section id="positions" className="careers-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Open Positions</h2>
            <p className="section-header__subtitle">
              Find your next challenge. We are hiring across engineering, design, and security.
            </p>
          </div>
          <div className="jobs-grid">
            {jobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="careers-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Our Culture</h2>
            <p className="section-header__subtitle">
              Values that drive everything we build
            </p>
          </div>
          <div className="culture-grid">
            {cultureValues.map((value, index) => (
              <CultureCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="careers-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Why Join Us</h2>
            <p className="section-header__subtitle">
              Benefits and perks of working at OpenScanAI
            </p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <BenefitsCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="careers-cta">
        <div className="container">
          <div className="careers-cta__card">
            <Mail size={48} className="text-[#DFFF00] mb-4" />
            <h2 className="careers-cta__title">Don't see a suitable role?</h2>
            <p className="careers-cta__subtitle">
              Send us your profile. We are always looking for exceptional talent.
            </p>
            <button className="btn btn-primary">
              Submit Resume <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
