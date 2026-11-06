import { Contact } from "@/components/contact";
import { Doctors } from "@/components/doctors";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { PatientCenter } from "@/components/patient-center";
import { PracticeIntro } from "@/components/practice-intro";
import { Services } from "@/components/services";
import { TrustMarquee } from "@/components/trust-marquee";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <PracticeIntro />
      <Doctors />
      <Services />
      <PatientCenter />
      <Faq />
      <Contact />
    </>
  );
}
