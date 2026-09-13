import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { LogoCloud } from "@/components/logo-cloud";
import { Navbar } from "@/components/navbar";
import { Pricing } from "@/components/pricing";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <Pricing />
      </main>
    </>
  );
}
