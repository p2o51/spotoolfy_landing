import React from 'react';
import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const SpotoolfyLanding = dynamic(
  () => import('../src/components/SpotoolfyLanding/SpotoolfyLanding'),
  { ssr: false }
);

export default function Home() {
  return (
    <div>
      <SpotoolfyLanding />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
} 