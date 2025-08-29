import Hero from "@/app/components/hero";
// import { Features, Services, CTA } from "@/components/Sections";
import ContactForm from "@/app/components/contactForm";
import Container from "@/app/components/container";

export default function Page() {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <Hero />
        {/* <Services />
      <Features />
      <CTA /> */}
      </main>
    </>
  );
}
