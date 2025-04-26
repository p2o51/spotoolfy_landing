import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import NavigationBar from '../src/components/layout/NavigationBar';

const ConfigPage = () => {
  const { t } = useTranslation('config');

  return (
    <div>
      <NavigationBar />
      <div className="subpage-container">
        <h1 className="subpage-title">{t('title', 'Config')}</h1>
        <p className="subpage-paragraph">
          <strong>{t('spotify_premium_required', '您必须拥有 Spotify Premium。')}</strong>
        </p>
        <p className="subpage-paragraph">
          {t('get_started_text', '要开始使用，请注册为 Spotify 开发者并访问您的仪表板：')}
          <a href="https://developer.spotify.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            https://developer.spotify.com/
          </a>
        </p>
        <div className="text-center">
          <img src="https://res.craft.do/user/full/041e2298-2a5f-c9c6-35c0-0d1a6390d363/doc/2925A878-2AD2-48E4-B09E-8D1909779878/2458DFE8-BF76-439F-AEF1-0CD683A00290_2/jyb0D80IDL0bwbsYBOA0nvb51M5flvIClrjKDPksA3Ez/Image.png" 
               alt={t('spotify_dashboard_alt', 'Spotify Developer Dashboard')} 
               className="my-4 rounded-lg shadow" 
               style={{ maxWidth: '50%', margin: '0 auto' }} />
        </div>

        <p className="subpage-paragraph">
          {t('select_create_app', '选择"创建应用程序"并填写所需信息（您可以自定义其他字段）。')}
        </p>
        <p className="subpage-paragraph">
          <strong>{t('important_note', '重要提示：')}</strong> {t('bundle_id_note', '"BUNDLE ID"字段在初次提交时不可用。您需要先提交表单，然后编辑应用程序以添加它。')}
        </p>
        <div className="text-center">
          <img src="https://res.craft.do/user/full/041e2298-2a5f-c9c6-35c0-0d1a6390d363/doc/2925A878-2AD2-48E4-B09E-8D1909779878/693E0E19-345E-445B-9DBC-E4A4F0A6560F_2/v6bAzZ7o8gS5RC3RZcUFqzi2z1CC3y36feyWsxscDTUz/CleanShot%202025-03-24%20at%2002.42.072x.png" 
               alt={t('create_app_form_alt', 'Create App Form')} 
               className="my-4 rounded-lg shadow" 
               style={{ maxWidth: '50%', margin: '0 auto' }} />
        </div>

        <p className="subpage-paragraph">
          {t('enter_client_id', '接下来，将"客户端 ID"输入到 Spotoolfy 应用中的相应字段中。')}
        </p>
        <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center my-4">
            <img src="https://res.craft.do/user/full/041e2298-2a5f-c9c6-35c0-0d1a6390d363/doc/2925A878-2AD2-48E4-B09E-8D1909779878/B8A94E6C-9D79-4172-9DC6-E3528C77B1F2_2/nElePK5VU1phNidfgCzPZ4yVhtXPWSJs71xvfNs88LYz/CleanShot%202025-03-24%20at%2002.43.102x.png" 
                 alt={t('spotify_app_settings_alt', 'Spotify App Settings')} 
                 className="rounded-lg shadow" 
                 style={{ maxWidth: '45%' }} />
            <img src="https://res.craft.do/user/full/041e2298-2a5f-c9c6-35c0-0d1a6390d363/doc/2925A878-2AD2-48E4-B09E-8D1909779878/CFF4F1C5-790F-4103-BCAA-72970D802659_2/KHzJcxsNSZuAjDOmxdW96omLw2Ukkg9uNWB6XhrPGZYz/Screenshot_20250324-024417.png" 
                 alt={t('spotoolfy_app_input_alt', 'Spotoolfy App Input')} 
                 className="rounded-lg shadow" 
                 style={{ maxWidth: '45%' }} />
        </div>

        <p className="subpage-paragraph">
          {t('use_following_values', '请使用以下值：')}
        </p>
        <div className="content-card bg-gray-100 p-4 rounded">
          <h3 className="subpage-subtitle font-mono text-sm">iOS APP BUNDLE:</h3>
          <p className="subpage-paragraph font-mono text-sm">com.gojyuplusone.spotoolfy.spotoolfyFlutter</p>

          <h3 className="subpage-subtitle font-mono text-sm mt-4">CALLBACK URL:</h3>
          <p className="subpage-paragraph font-mono text-sm">spotoolfy://callback</p>

          <h3 className="subpage-subtitle font-mono text-sm mt-4">ANDROID PACKAGE NAME:</h3>
          <p className="subpage-paragraph font-mono text-sm">com.gojyuplusone.spotoolfy.spotoolfy_flutter</p>

          <h3 className="subpage-subtitle font-mono text-sm mt-4">ANDROID SH1A FINGERPRINT:</h3>
          <p className="subpage-paragraph font-mono text-sm">B4:DC:68:C9:BB:AF:5B:A3:AE:D0:2D:15:EF:6C:FC:6C:F4:CF:08:22</p>
        </div>

        <p className="subpage-paragraph mt-4">
          {t('email_precaution', '作为预防措施，请考虑将您自己的电子邮件地址添加为用户。')}
        </p>
        <p className="subpage-paragraph">
          {t('network_environment', '使用此应用程序时，请确保网络环境正常。')}
        </p>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'config'])),
    },
  };
}

export default ConfigPage; 