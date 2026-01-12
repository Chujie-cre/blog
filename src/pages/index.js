import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHero from '@site/src/components/HomepageHero';
import HomepageScrollAnimation from '@site/src/components/HomepageScrollAnimation';
import HomepageLinks from '@site/src/components/HomepageLinks';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <main>
        <HomepageHero />
        <HomepageScrollAnimation />
        <HomepageLinks />
      </main>
    </Layout>
  );
}
