import React from 'react';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';
import BenefitCard from '../components/BenefitCard';
import ProcessStep from '../components/ProcessStep';
import {
  Shield, Zap, Activity, AlertTriangle, FileCode, Database,
  ArrowRight, Blocks, Brain, Cloud, Code, BarChart3,
  Lock, CheckCircle, Gauge, TrendingUp, Search, Bug, Wrench, LineChart
} from 'lucide-react';
import './Enhancement.css';

const features = [
  {
    icon: Shield,
    title: "Security Improvements",
    description: "Advanced vulnerability scanning, smart contract auditing, and real-time threat detection to protect your blockchain assets."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimize transaction processing, reduce latency, and improve throughput for faster blockchain operations."
  },
  {
    icon: Activity,
    title: "Blockchain Monitoring",
    description: "24/7 monitoring of network health, node performance, and transaction flow with instant alerting."
  },
  {
    icon: AlertTriangle,
    title: "Threat Detection",
    description: "AI-powered anomaly detection identifies suspicious patterns and potential attacks before they cause damage."
  },
  {
    icon: FileCode,
    title: "Smart Contract Analysis",
    description: "Automated code analysis, vulnerability reports, and gas optimization recommendations for deployed contracts."
  },
  {
    icon: Database,
    title: "Data Transparency",
    description: "Enhanced data indexing, searchable transaction history, and comprehensive analytics dashboards."
  }
];

const techStack = [
  { icon: Blocks, title: "Blockchain", desc: "EVM, XDC, Ethereum" },
  { icon: Brain, title: "AI Security", desc: "Machine Learning, NLP" },
  { icon: Cloud, title: "Cloud Infra", desc: "AWS, GCP, Azure" },
  { icon: Code, title: "APIs", desc: "REST, GraphQL, WebSocket" },
  { icon: BarChart3, title: "Analytics", desc: "Real-time, Historical" }
];

const benefits = [
  {
    icon: Lock,
    title: "Improved Security",
    description: "Enterprise-grade security measures protect against exploits, hacks, and unauthorized access."
  },
  {
    icon: CheckCircle,
    title: "Better Reliability",
    description: "Redundant systems and automated failover ensure your blockchain services stay online."
  },
  {
    icon: Gauge,
    title: "Faster Operations",
    description: "Optimized code and infrastructure deliver sub-second response times and high throughput."
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Architecture designed to scale from thousands to millions of transactions seamlessly."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Analyze",
    description: "We analyze your current blockchain infrastructure, smart contracts, and security posture to identify gaps."
  },
  {
    step: "02",
    title: "Identify Issues",
    description: "Our tools detect vulnerabilities, performance bottlenecks, and monitoring blind spots."
  },
  {
    step: "03",
    title: "Implement Improvements",
    description: "We deploy fixes, optimizations, and monitoring tools tailored to your specific needs."
  },
  {
    step: "04",
    title: "Monitor Results",
    description: "Continuous monitoring validates improvements and catches new issues as they emerge."
  }
];

function Enhancement() {
  return (
    <div className="enhancement-page">
      {/* Hero Section */}
      <section className="enhancement-hero">
        <div className="container">
          <span className="tag">Enhancements</span>
          <h1 className="enhancement-hero__title">Enhancing Blockchain Security & Performance</h1>
          <p className="enhancement-hero__subtitle">
            Blockscan delivers cutting-edge enhancements that improve security, scalability, and user experience 
            for blockchain applications. From smart contract audits to real-time monitoring, we fortify your infrastructure.
          </p>
          <div className="enhancement-hero__cta">
            <a href="#features" className="btn btn-primary">
              Explore Enhancements <ArrowRight size={18} />
            </a>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="enhancement-hero__bg" />
      </section>

      {/* Features Section */}
      <section id="features" className="enhancement-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Enhancement Solutions</h2>
            <p className="section-header__subtitle">
              Comprehensive tools to secure, optimize, and monitor your blockchain
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Before vs After Section */}
      <section className="enhancement-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">The Blockscan Difference</h2>
            <p className="section-header__subtitle">See how we transform blockchain operations</p>
          </div>
          <div className="comparison-grid">
            <div className="comparison-card comparison-card--before">
              <h3 className="comparison-card__label">Before</h3>
              <ul className="comparison-card__list">
                <li><Bug size={16} /> Security risks undetected</li>
                <li><AlertTriangle size={16} /> Slow transaction processing</li>
                <li><Search size={16} /> Limited visibility into network activity</li>
                <li><Shield size={16} /> Reactive security approach</li>
                <li><Database size={16} /> Fragmented data access</li>
              </ul>
            </div>
            <div className="comparison-arrow">
              <ArrowRight size={40} className="text-[#2BF0FF]" />
            </div>
            <div className="comparison-card comparison-card--after">
              <h3 className="comparison-card__label comparison-card__label--after">After</h3>
              <ul className="comparison-card__list comparison-card__list--after">
                <li><CheckCircle size={16} /> Proactive threat detection</li>
                <li><Zap size={16} /> Optimized performance</li>
                <li><Activity size={16} /> Real-time monitoring & insights</li>
                <li><Lock size={16} /> Automated security enforcement</li>
                <li><BarChart3 size={16} /> Unified analytics dashboard</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="enhancement-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Technology Stack</h2>
            <p className="section-header__subtitle">Powered by modern, battle-tested technologies</p>
          </div>
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-card">
                <tech.icon size={32} className="text-[#2BF0FF] mb-3" />
                <h3 className="tech-card__title">{tech.title}</h3>
                <p className="tech-card__desc">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="enhancement-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Key Benefits</h2>
            <p className="section-header__subtitle">What you gain with Blockscan enhancements</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="enhancement-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Enhancement Process</h2>
            <p className="section-header__subtitle">Our proven 4-step methodology</p>
          </div>
          <div className="process-container">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                step={step.step}
                title={step.title}
                description={step.description}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="enhancement-cta">
        <div className="container">
          <div className="enhancement-cta__card">
            <Wrench size={48} className="text-[#2BF0FF] mb-4" />
            <h2 className="enhancement-cta__title">Ready to Enhance Your Blockchain Solution?</h2>
            <p className="enhancement-cta__subtitle">
              Get started with Blockscan and unlock the full potential of your blockchain infrastructure.
            </p>
            <button className="btn btn-primary">
              Get Started <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Enhancement;