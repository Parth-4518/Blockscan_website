import ServiceCard, { icons } from '../components/ServiceCard';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: icons.search,
      title: 'Blockchain Explorer',
      description: 'Real-time transaction tracking, block verification, and wallet analytics across multiple chains with enterprise-grade reliability.',
      features: ['Multi-chain support', 'Real-time indexing', 'Advanced filtering', 'API access']
    },
    {
      icon: icons.shield,
      title: 'Security Audits',
      description: 'Comprehensive smart contract auditing and vulnerability assessment to protect your decentralized applications.',
      features: ['Static analysis', 'Dynamic testing', 'Manual review', 'Remediation reports']
    },
    {
      icon: icons.chart,
      title: 'Analytics Platform',
      description: 'Deep insights into on-chain activity, token metrics, and network health with customizable dashboards.',
      features: ['Custom dashboards', 'Alert system', 'Historical data', 'Export tools']
    },
    {
      icon: icons.link,
      title: 'Node Infrastructure',
      description: 'High-availability RPC nodes and validator services ensuring 99.9% uptime for your blockchain operations.',
      features: ['Global distribution', 'Auto-scaling', 'Load balancing', '24/7 monitoring']
    },
    {
      icon: icons.coins,
      title: 'Token Integration',
      description: 'Seamless token listing, verification, and integration services for exchanges and DeFi platforms.',
      features: ['ERC-20/721/1155', 'Custom standards', 'Metadata management', 'Verification badges']
    },
    {
      icon: icons.wallet,
      title: 'Wallet Solutions',
      description: 'Secure multi-signature wallet infrastructure with institutional-grade key management and recovery.',
      features: ['Multi-sig support', 'HSM integration', 'Social recovery', 'Hardware compatibility']
    }
  ];

  const processSteps = [
    { number: '01', title: 'Discovery', description: 'We analyze your requirements and identify the optimal blockchain strategy.' },
    { number: '02', title: 'Architecture', description: 'Our engineers design scalable, secure infrastructure tailored to your needs.' },
    { number: '03', title: 'Implementation', description: 'Rapid deployment with continuous integration and rigorous testing protocols.' },
    { number: '04', title: 'Optimization', description: 'Ongoing monitoring, performance tuning, and feature enhancements post-launch.' }
  ];

  return (
    <div className="services-page">
      {/* Services Hero */}
      <section className="services-section services-hero">
        <div className="services-container">
          <span className="services-label">What We Do</span>
          <h1 className="services-title">Our Services</h1>
          <p className="services-subtitle">
            End-to-end blockchain infrastructure and tooling for enterprises, 
            developers, and DeFi protocols. Built for scale, designed for trust.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section services-grid">
        <div className="services-container">
          <span className="services-label">Solutions</span>
          <h2 className="services-section-title">Services We Offer</h2>
          <div className="services-cards-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="services-section services-process-section">
        <div className="services-container">
          <span className="services-label">How We Work</span>
          <h2 className="services-section-title">Our Process</h2>
          <div className="services-process-grid">
            {processSteps.map((step, index) => (
              <div className="services-process-card" key={index}>
                <span className="services-process-number">{step.number}</span>
                <h3 className="services-process-title">{step.title}</h3>
                <p className="services-process-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
