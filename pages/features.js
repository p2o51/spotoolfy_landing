import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import NavigationBar from '../src/components/layout/NavigationBar';

const FeaturesPage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="subpage-container">
        <h1 className="subpage-title">Features</h1>
        <p className="subpage-subtitle">Discover the powerful capabilities that make Spotoolfy unique</p>
        
        <div className="content-card">
          <h3 className="subpage-subtitle">Smart Analytics</h3>
          <p className="subpage-paragraph">
            Gain valuable insights with our advanced analytics engine. Track performance metrics
            and visualize data with interactive charts and dashboards.
          </p>
          <ul className="modern-list">
            <li>Real-time data processing and visualization</li>
            <li>Custom report generation and scheduling</li>
            <li>Trend analysis and predictive modeling</li>
          </ul>
        </div>
        
        <div className="content-card">
          <h3 className="subpage-subtitle">AI-Powered Recommendations</h3>
          <p className="subpage-paragraph">
            Let our intelligent recommendation system suggest optimal actions based on your usage patterns
            and preferences. Our machine learning algorithms continuously improve to deliver personalized experiences.
          </p>
          <p className="subpage-paragraph">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
          </p>
        </div>
        
        <div className="content-card">
          <h3 className="subpage-subtitle">Seamless Integration</h3>
          <p className="subpage-paragraph">
            Connect Spotoolfy with your existing workflows through our extensive API and plugin ecosystem.
            Import and export data with ease across multiple platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default FeaturesPage; 