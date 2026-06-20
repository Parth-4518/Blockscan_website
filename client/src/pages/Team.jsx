import React from 'react';
import TeamCard from '../components/TeamCard';
import './Team.css';

const Team = () => {
  const leadership = [
    {
      name: 'Alex Chen',
      role: 'Chief Executive Officer',
      bio: 'Former VP of Engineering at Chainalysis. 15 years in distributed systems and blockchain infrastructure.',
      imagePlaceholder: null
    },
    {
      name: 'Sarah Williams',
      role: 'Chief Technology Officer',
      bio: 'PhD in Cryptography from MIT. Led protocol development at Ethereum Foundation before founding OpenScan.ai.',
      imagePlaceholder: null
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Security',
      bio: 'Ex-NSA cybersecurity specialist. Certified ethical hacker with 200+ smart contract audits completed.',
      imagePlaceholder: null
    }
  ];

  const teamMembers = [
    {
      name: 'Emily Zhang',
      role: 'Lead Frontend Engineer',
      bio: 'React ecosystem expert. Previously built trading interfaces at Coinbase.',
      imagePlaceholder: null
    },
    {
      name: 'David Park',
      role: 'Blockchain Architect',
      bio: 'Core contributor to multiple L1 protocols. Specialist in consensus mechanisms and sharding.',
      imagePlaceholder: null
    },
    {
      name: 'Lisa Kumar',
      role: 'Product Designer',
      bio: 'Award-winning UX designer. Passionate about making complex systems accessible to everyone.',
      imagePlaceholder: null
    },
    {
      name: 'James Rodriguez',
      role: 'DevOps Lead',
      bio: 'Kubernetes and cloud-native infrastructure expert. Maintains 99.99% uptime across all services.',
      imagePlaceholder: null
    },
    {
      name: 'Anna Petrov',
      role: 'Data Scientist',
      bio: 'Specializes in on-chain analytics and anomaly detection. Former quantitative researcher at Two Sigma.',
      imagePlaceholder: null
    },
    {
      name: 'Michael Foster',
      role: 'Business Development',
      bio: 'Closed $50M+ in enterprise blockchain contracts. Deep network in TradFi and DeFi sectors.',
      imagePlaceholder: null
    }
  ];

  return (
    <div className="team-page">
      {/* Team Hero */}
      <section className="team-section team-hero">
        <div className="team-container">
          <span className="team-label">The People</span>
          <h1 className="team-title">Our Team</h1>
          <p className="team-subtitle">
            A world-class collective of engineers, cryptographers, and designers 
            united by a shared vision of decentralized infrastructure.
          </p>
        </div>
      </section>

      {/* Leadership Profiles */}
      <section className="team-section team-leadership">
        <div className="team-container">
          <span className="team-label">Leadership</span>
          <h2 className="team-section-title">Executive Team</h2>
          <div className="team-leadership-grid">
            {leadership.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                imagePlaceholder={member.imagePlaceholder}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="team-section team-members">
        <div className="team-container">
          <span className="team-label">The Crew</span>
          <h2 className="team-section-title">Team Members</h2>
          <div className="team-members-grid">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                imagePlaceholder={member.imagePlaceholder}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
