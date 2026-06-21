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
    link: "#developer",
    badge: "GROWING",
    badgeColor: "#2BF0FF"
  },
  {
    icon: Globe,
    title: "Blockchain Community",
    description: "Join discussions, stay updated on ecosystem growth, and connect with blockchain enthusiasts.",
    link: "#channels",
    badge: "ACTIVE",
    badgeColor: "#2BF0FF"
  },
  {
    icon: Handshake,
    title: "Partners",
    description: "Collaboration opportunities, integrations, and strategic partnerships to expand the ecosystem.",
    link: "#partners",
    badge: "VERIFIED",
    badgeColor: "#7A3CFF"
  },
  {
    icon: Users,
    title: "Users",
    description: "Better access to blockchain data, intuitive explorers, and powerful analytics tools.",
    link: "#",
    badge: "EXPANDING",
    badgeColor: "#2BF0FF"
  }
];

const devResources = [
  {
    icon: FileCode,
    title: "API Docs",
    description: "REST and GraphQL APIs for blockchain data, transactions, and smart contract interactions.",
    badge: "LIVE",
    badgeColor: "#2BF0FF",
    toolIcon: "{ }"
  },
  {
    icon: BookOpen,
    title: "SDKs",
    description: "Comprehensive guides, API references, and integration tutorials for developers.",
    badge: "STABLE",
    badgeColor: "#7A3CFF",
    toolIcon: "PKG"
  },
  {
    icon: Zap,
    title: "Builder Tools",
    description: "CLI tools, testing environments, and utilities to accelerate blockchain development.",
    badge: "BETA",
    badgeColor: "#2BF0FF",
    toolIcon: "CLI"
  },
  {
    icon: Code,
    title: "Open Source",
    description: "Contribute to Blockscan open source projects and collaborate with the community.",
    badge: "ACTIVE",
    badgeColor: "#7A3CFF",
    toolIcon: "<>"
  }
];

const communityChannels = [
  {
    icon: MessageSquare,
    title: "Discord",
    description: "Community discussions",
    members: "1250 members",
    action: "Join →",
    link: "https://discord.com"
  },
  {
    icon: MessageSquare,
    title: "Twitter / X",
    description: "Latest updates and news",
    members: "45K followers",
    action: "Follow →",
    link: "https://twitter.com"
  },
  {
    icon: MessageCircle,
    title: "Telegram",
    description: "Announcements",
    members: "680 members",
    action: "Join →",
    link: "https://telegram.org"
  },
  {
    icon: Globe,
    title: "LinkedIn",
    description: "Professional network",
    members: "12K connections",
    action: "Connect →",
    link: "https://linkedin.com"
  },
  {
    icon: Code,
    title: "GitHub",
    description: "Open source collaboration",
    members: "48 repositories",
    action: "Explore →",
    link: "https://github.com"
  }
];

const events = [
  {
    icon: Calendar,
    title: "Blockchain Events",
    description: "Hackathons, conferences, and meetups worldwide. Connect with the community in person.",
    badge: "UPCOMING",
    badgeColor: "#2BF0FF"
  },
  {
    icon: Bell,
    title: "Product Updates",
    description: "Stay informed about new features, improvements, and platform enhancements.",
    badge: "LIVE",
    badgeColor: "#7A3CFF"
  },
  {
    icon: Radio,
    title: "Community Announcements",
    description: "Important updates, governance proposals, and ecosystem news.",
    badge: "NEW",
    badgeColor: "#2BF0FF"
  },
  {
    icon: BookOpen,
    title: "Technical Blogs",
    description: "Deep dives into blockchain technology, tutorials, and engineering insights.",
    badge: "WEEKLY",
    badgeColor: "#7A3CFF"
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
      {/* Hero Section - Ecosystem Hub */}
      <section className="engagement-hero">
        <div className="engagement-hero__bg" />
        <div className="container">
          <span className="tag">Ecosystem</span>
          <h1 className="engagement-hero__title">
            Ecosystem Hub
          </h1>
          <p className="engagement-hero__subtitle">
            Connect, build and collaborate across the Blockscan ecosystem.
          </p>
          
          {/* Stats Row */}
          <div className="ecosystem-stats">
            <div className="ecosystem-stat">
              <span className="ecosystem-stat__value">1250+</span>
              <span className="ecosystem-stat__label">Members</span>
            </div>
            <div className="ecosystem-stat__divider" />
            <div className="ecosystem-stat">
              <span className="ecosystem-stat__value">12</span>
              <span className="ecosystem-stat__label">Contributors</span>
            </div>
            <div className="ecosystem-stat__divider" />
            <div className="ecosystem-stat">
              <span className="ecosystem-stat__value">8</span>
              <span className="ecosystem-stat__label">Community Channels</span>
            </div>
            <div className="ecosystem-stat__divider" />
            <div className="ecosystem-stat">
              <span className="ecosystem-stat__value">4</span>
              <span className="ecosystem-stat__label">Ecosystem Projects</span>
            </div>
          </div>

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

      {/* Partnership Section - Premium Ecosystem Orbit */}
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
              <div className="ecosystem-orbit">
                <div className="ecosystem-orbit__center">
                  <Layers size={32} />
                  <span>Blockscan</span>
                </div>
                <div className="ecosystem-orbit__ring ecosystem-orbit__ring--1">
                  <div className="ecosystem-orbit__node">
                    <Code size={16} />
                    <span>Developers</span>
                  </div>
                </div>
                <div className="ecosystem-orbit__ring ecosystem-orbit__ring--2">
                  <div className="ecosystem-orbit__node">
                    <Users size={16} />
                    <span>Community</span>
                  </div>
                </div>
                <div className="ecosystem-orbit__ring ecosystem-orbit__ring--3">
                  <div className="ecosystem-orbit__node">
                    <Globe size={16} />
                    <span>Projects</span>
                  </div>
                </div>
                <div className="ecosystem-orbit__ring ecosystem-orbit__ring--4">
                  <div className="ecosystem-orbit__node">
                    <Handshake size={16} />
                    <span>Partners</span>
                  </div>
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