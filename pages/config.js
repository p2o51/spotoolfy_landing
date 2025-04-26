import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import NavigationBar from '../src/components/layout/NavigationBar';

const ConfigPage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="subpage-container">
        <h1 className="subpage-title">Config</h1>
        <p className="subpage-subtitle">Customize your Spotoolfy experience with these powerful configuration options</p>
        
        <div className="content-card">
          <h3 className="subpage-subtitle">General Settings</h3>
          <p className="subpage-paragraph">
            Configure the core functionality of Spotoolfy to match your workflow. Personalize your experience
            with these easy-to-use settings.
          </p>
          <ul className="modern-list">
            <li>Theme customization with light and dark mode support</li>
            <li>Language preferences for multilingual interface</li>
            <li>Notification settings for activity alerts</li>
            <li>Data synchronization options across devices</li>
          </ul>
        </div>
        
        <hr className="subpage-divider" />
        
        <div className="content-card">
          <h3 className="subpage-subtitle">Integration Options</h3>
          <p className="subpage-paragraph">
            Connect Spotoolfy with your favorite platforms and services for a seamless experience.
            Our API provides robust integration capabilities for maximum flexibility.
          </p>
          <p className="subpage-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
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

export default ConfigPage; 