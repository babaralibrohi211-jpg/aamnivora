import { HomeHero } from '@/sections/home-hero';
import { HomeWhyAamnivora } from '@/sections/home-why-aamnivora';
import { HomeServices } from '@/sections/home-services';
import { HomeProcess } from '@/sections/home-process';
import { HomeWhyChooseUs } from '@/sections/home-why-choose-us';
import { HomeCta } from '@/sections/home-cta';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeWhyAamnivora />
      <HomeServices />
      <HomeProcess />
      <HomeWhyChooseUs />
      <HomeCta />
    </>
  );
}
