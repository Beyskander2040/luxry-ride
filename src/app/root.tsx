import { Header } from './components/header';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Fleet } from './components/fleet';
import { BusinessOverview } from './components/business-overview';
import { Operations } from './components/operations';
import { SafetyCompliance } from './components/safety-compliance';
import { ExpansionPlan } from './components/expansion-plan';
import { TrustCommitment } from './components/trust-commitment';
import { Contact } from './components/contact';
import { Footer } from './components/footer';

export default function Root() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        <Hero />
        <About />
        <Fleet />
        <BusinessOverview />
        <Operations />
        <SafetyCompliance />
        <ExpansionPlan />
        <TrustCommitment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
