import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      

      <Benefits data={benefitOne} />
      <Video videoId="fZ0D0cnR88E" />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <SectionTitle
        preTitle="Nextly Benefits"
        title=" Why should you use this landing page"
      >
       Vercel usually configures the build settings automatically for Next.js apps, but you can modify any settings as needed. Ensure that
      </SectionTitle>
      

      



      <Cta />
    </Container>
  );
}
