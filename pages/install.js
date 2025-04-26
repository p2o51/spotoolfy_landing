import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import NavigationBar from '../src/components/layout/NavigationBar';

const InstallPage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="subpage-container">
        <h1 className="subpage-title">Get Started</h1>
        <p className="subpage-subtitle">Begin your journey with Spotoolfy in just a few simple steps</p>
        
        <div className="content-card">
          <h3 className="subpage-subtitle">Installation Guide</h3>
          <p className="subpage-paragraph">
            Follow these steps to install Spotoolfy on your system. The process is quick and straightforward,
            allowing you to start using all features within minutes.
          </p>
          <ol className="numbered-list">
            <li>Download the latest version from our official website</li>
            <li>Run the installer and follow the on-screen instructions</li>
            <li>Launch Spotoolfy and sign in with your account</li>
            <li>Complete the initial setup wizard to personalize your experience</li>
          </ol>
        </div>
        
        <div className="content-card">
          <h3 className="subpage-subtitle">System Requirements</h3>
          <p className="subpage-paragraph">
            Ensure your system meets these minimum requirements for optimal performance:
          </p>
          <ul className="modern-list">
            <li>Operating System: Windows 10/11, macOS 10.14+, or Ubuntu 20.04+</li>
            <li>Processor: Intel Core i5 or equivalent (4 cores recommended)</li>
            <li>Memory: 8GB RAM minimum, 16GB recommended</li>
            <li>Storage: 250MB available space plus additional storage for data</li>
            <li>Internet Connection: Broadband connection for cloud features</li>
          </ul>
          <p className="subpage-paragraph">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident.
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

export default InstallPage; 