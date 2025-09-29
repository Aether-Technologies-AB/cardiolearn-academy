import Layout from '@/components/Layout';
import Hero from '@/components/sections/Hero';
import LearningPaths from '@/components/sections/LearningPaths';
import Certifications from '@/components/sections/Certifications';
import Teachers from '@/components/sections/Teachers';
import PersonalizedLearning from '@/components/sections/PersonalizedLearning';
import CompanyPartners from '@/components/sections/CompanyPartners';
import Authority from '@/components/sections/Authority';
import Pricing from '@/components/sections/Pricing';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <LearningPaths />
      <Certifications />
      <Teachers />
      <PersonalizedLearning />
      <CompanyPartners />
      <Authority />
      <Pricing />
    </Layout>
  );
}
