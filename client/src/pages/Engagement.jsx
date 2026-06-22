import React from 'react';
import { Link } from 'react-router-dom';
import EngagementCard from '../components/EngagementCard';
import CommunityCard from '../components/CommunityCard';
import StatsCard from '../components/StatsCard';
import CTASection from '../components/CTASection';
import {
  Code, Globe, Handshake, Users, ArrowRight, MessageSquare,
  Calendar, Bell,
  BookOpen, Zap, FileCode, ExternalLink, Layers, Radio, MessageCircle
} from 'lucide-react';
import './Engagement.css';

const communityCards = [
  {
    icon: Code,
    title: "Developer Community",
    description: "Tools, APIs, SDKs, and comprehensive documentation to help developers build on Blockscan.",
    link: "#developer"
  },
  {
    icon: Globe,
    title: "Blockchain Community",
    description: "Join discussions, stay updated on ecosystem growth, and connect with blockchain enthusiasts.",
    link: "#channels"
  },
  {
    icon: Handshake,
    title: "Partners",
    description: "Collaboration opportunities, integrations, and strategic partnerships to expand the ecosystem.",
    link: "#partners"
  },
  {
    icon: Users,
    title: "Users",
    description: "Better access to blockchain data, intuitive explorers, and powerful analytics tools.",
    link: "#"
  }
];

const devResources = [
  {
    icon: FileCode,
    title: "API Access",
    description: "REST and GraphQL APIs for blockchain data, transactions, and smart contract interactions."
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Comprehensive guides, API references, and integration tutorials for developers."
  },
  {
    icon: Zap,
    title: "Developer Tools",
    description: "CLI tools, SDKs, and testing environments to accelerate blockchain development."
  },
  {
    icon: Code,
    title: "Open Source",
    description: "Contribute to Blockscan open source projects and collaborate with the community."
  }
];

const communityChannels = [
  {
    icon: MessageSquare,
    title: "Twitter / X",
    description: "Latest updates, news, and ecosystem highlights.",
    members: "45K+",
    link: "https://twitter.com"
  },
  {
    icon: MessageSquare,
    title: "Discord",
    description: "Real-time chat, support, and community discussions.",
    members: "28K+",
    link: "https://discord.com"
  },
  {
    icon: MessageCircle,
    title: "Telegram",
    description: "Announcements, AMAs, and regional community groups.",
    members: "18K+",
    link: "https://telegram.org"
  },
  {
    icon: Globe,
    title: "LinkedIn",
    description: "Professional network, company updates, and career opportunities.",
    members: "12K+",
    link: "https://linkedin.com"
  },
  {
    icon: Code,
    title: "GitHub",
    description: "Open source repositories, contributions, and developer collaboration.",
    members: "3.5K+",
    link: "https://github.com"
  }
];

const events = [
  {
    icon: Calendar,
    title: "Blockchain Events",
    description: "Hackathons, conferences, and meetups worldwide. Connect with the community in person."
  },
  {
    icon: Bell,
    title: "Product Updates",
    description: "Stay informed about new features, improvements, and platform enhancements."
  },
  {
    icon: Radio,
    title: "Community Announcements",
    description: "Important updates, governance proposals, and ecosystem news."
  },
  {
    icon: BookOpen,
    title: "Technical Blogs",
    description: "Deep dives into blockchain technology, tutorials, and engineering insights."
  }
];

const stats = [
  { icon: Users, value: 85000, suffix: "+", label: "Community Members" },
  { icon: Code, value: 12400, suffix: "+", label: "Developers Reached" },
  { icon: Layers, value: 340, suffix: "+", label: "Projects Supported" },
  { icon: Globe, value: 2.5, suffix: "B+", label: "Blockchain Data Access" }
];

function Engagement() {
  return (
    <div className="engagement-page">
      {/* Hero Section */}
      <section className="engagement-hero">
        <div className="engagement-hero__bg" />
        <div className="container">
          <span className="tag">Community</span>
          <h1 className="engagement-hero__title">
            Engage With the Blockscan Ecosystem
          </h1>
          <p className="engagement-hero__subtitle">
            Connect with developers, blockchain enthusiasts, partners, and the community
            building the future of Web3. Together we create the infrastructure for
            decentralized innovation.
          </p>
          <div className="engagement-hero__cta">
            <a href="#channels" className="btn btn-primary">
              Join Community <ArrowRight size={18} />
            </a>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Community Engagement Section */}
      <section className="engagement-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Community Engagement</h2>
            <p className="section-header__subtitle">
              Four pillars driving the Blockscan ecosystem forward
            </p>
          </div>
          <div className="engagement-grid">
            {communityCards.map((card, index) => (
              <EngagementCard key={index} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Developer Engagement Section */}
      <section id="developer" className="engagement-section engagement-section--alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Developer Resources</h2>
            <p className="section-header__subtitle">
              Everything you need to build on Blockscan
            </p>
          </div>
          <div className="engagement-grid">
            {devResources.map((resource, index) => (
              <EngagementCard key={index} {...resource} />
            ))}
          </div>
          <div className="section-cta">
            <a href="#" className="btn btn-primary">
              Explore Developer Resources <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partners" className="engagement-section">
        <div className="container">
          <div className="partnership-block">
            <div className="partnership-block__content">
              <h2 className="partnership-block__title">
                Build Together With Blockscan
              </h2>
              <p className="partnership-block__desc">
                We collaborate with leading blockchain projects, infrastructure providers,
                and enterprises to expand the ecosystem. Strategic partnerships, deep
                integrations, and joint innovation drive the future of Web3.
              </p>
              <ul className="partnership-block__list">
                <li><ExternalLink size={16} /> Strategic partnerships</li>
                <li><ExternalLink size={16} /> Ecosystem integrations</li>
                <li><ExternalLink size={16} /> Business collaborations</li>
                <li><ExternalLink size={16} /> Joint research initiatives</li>
              </ul>
              <a href="#" className="btn btn-primary">
                Become a Partner <ArrowRight size={18} />
              </a>
            </div>
            <div className="partnership-block__visual">
              <div className="partnership-visual">
                <div className="partnership-visual__center">
                  <Layers size={40} />
                  <span>Blockscan</span>
                </div>
                <div className="partnership-visual__orbit">
                  <div className="orbit-node"><Code size={20} /></div>
                  <div className="orbit-node"><Globe size={20} /></div>
                  <div className="orbit-node"><Handshake size={20} /></div>
                  <div className="orbit-node"><Users size={20} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Channels Section */}
      <section id="channels" className="engagement-section engagement-section--alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Community Channels</h2>
            <p className="section-header__subtitle">
              Join the conversation across platforms
            </p>
          </div>
          <div className="channels-grid">
            {communityChannels.map((channel, index) => (
              <CommunityCard key={index} {...channel} />
            ))}
          </div>
        </div>
      </section>

      {/* Events & Updates Section */}
      <section className="engagement-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Events & Updates</h2>
            <p className="section-header__subtitle">
              Stay connected with the latest happenings
            </p>
          </div>
          <div className="engagement-grid">
            {events.map((event, index) => (
              <EngagementCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="engagement-section engagement-section--alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Ecosystem Impact</h2>
            <p className="section-header__subtitle">
              Numbers that reflect our growing community
            </p>
          </div>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Be Part of the Blockchain Future"
        subtitle="Join Blockscan and contribute to the next generation of blockchain infrastructure. Together we build transparent, accessible, and powerful tools for the Web3 ecosystem."
        buttonText="Join Community"
        buttonLink="#channels"
        variant="gradient"
      />
    </div>
  );
}

export default Engagement;