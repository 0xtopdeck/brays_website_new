"use client";

import Image from "next/image";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { Landmark, Compass, Target, CheckCircle2, ListChecks } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/lib/translations";
import clsx from "clsx";

export default function AboutPage() {
  const { lang, isRTL } = useLanguage();
  const t = translations[lang];

  const line1 = lang === "ar" ? "من" : "About";
  const line2 = lang === "ar" ? "نحن" : "Us";

  return (
    <div className="bg-background flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative flex h-[68svh] min-h-[540px] w-full items-end overflow-hidden bg-[#06080b] pb-12 pt-36 md:h-[60vh] md:min-h-[460px] md:items-center md:py-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-muttrah-corniche.png"
            alt={
              lang === "ar"
                ? "كورنيش مطرح وميناؤها في مسقط"
                : "Muttrah Corniche and harbour in Muscat"
            }
            fill
            preload
            sizes="100vw"
            className="object-cover object-[72%_center] md:object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,8,11,0.02)_0%,rgba(6,8,11,0.08)_44%,rgba(6,8,11,0.78)_76%,rgba(6,8,11,0.96)_100%)] md:hidden" />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-[#06080b] via-[#06080b]/72 to-transparent md:block rtl:bg-gradient-to-l" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className={clsx("max-w-3xl", isRTL && "ms-auto text-start")}>
            <div className="mb-6 flex items-center gap-3">
              <Landmark className="w-6 h-6 text-accent" />
              <span className="text-accent font-serif italic tracking-wide">
                {t.about.hero.profile}
              </span>
            </div>

            <h1 className={clsx("text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white uppercase tracking-tighter leading-[0.85]", isRTL && "font-arabic")}>
              {line1}
              <br />
              {line2}
            </h1>

            <div>
              <p className="text-white/90 text-base md:text-lg font-normal leading-relaxed max-w-xl text-balance mt-6">
                {t.about.hero.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TEXT CONTENT & CORPORATE STATEMENTS */}
      <section className="py-24 md:py-32 relative z-10 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 lg:gap-24">

            {/* Left Column: Who We Are */}
            <div className="md:col-span-7 lg:col-span-8">
              <AnimatedSection direction="up" className="mb-12">
                <h2 className={clsx("text-4xl md:text-6xl font-serif font-bold text-foreground uppercase tracking-tighter mb-8", isRTL && "font-arabic")}>
                  {lang === 'ar' ? <>من <span className="text-accent italic font-normal font-sans">نحن.</span></> : <>Who We <span className="text-accent italic font-normal">Are.</span></>}
                </h2>
                <div className={clsx("space-y-6 text-foreground/80 font-normal text-base md:text-lg leading-relaxed text-balance", isRTL && "text-start")}>
                  <p className={clsx(isRTL && "font-arabic")}>
                    <strong className={clsx("font-bold text-foreground", isRTL && "font-arabic")}>
                      {lang === 'ar' ? "شركة اثنين في واحد ش.م.م" : "Two in One LLC"}
                    </strong>{" "}
                    {t.about.content.p1}
                  </p>

                  <div className="border-s-2 border-accent ps-6 py-2 my-2">
                    <span className={clsx("block text-[10px] uppercase tracking-[0.25em] text-accent font-bold mb-2", isRTL && "font-arabic")}>
                      {lang === 'ar' ? "تأسست عام 2014" : "Established 2014"}
                    </span>
                    <p className={clsx(isRTL && "font-arabic")}>
                      {t.about.content.heritage}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Vision & Mission */}
            <div className={clsx("md:col-span-5 lg:col-span-4 flex flex-col gap-12 border-t md:border-t-0 border-line pt-12 md:pt-0", isRTL ? "md:border-r md:pr-12 lg:pr-16" : "md:border-l md:pl-12 lg:pl-16")}>

              <AnimatedSection direction={isRTL ? "right" : "left"} className="relative">
                <Compass className="w-8 h-8 text-accent mb-6" />
                <h3 className={clsx("text-2xl font-serif font-bold text-foreground mb-4", isRTL && "text-start font-arabic")}>
                  {t.about.content.visionTitle}
                </h3>
                <p className={clsx("text-muted font-normal text-base leading-relaxed text-balance", isRTL && "text-start")}>
                  {t.about.content.visionDesc}
                </p>
              </AnimatedSection>

              <div className="w-12 h-px bg-line" />

              <AnimatedSection direction={isRTL ? "right" : "left"} className="relative">
                <Target className="w-8 h-8 text-accent mb-6" />
                <h3 className={clsx("text-2xl font-serif font-bold text-foreground mb-4", isRTL && "text-start font-arabic")}>
                  {t.about.content.missionTitle}
                </h3>
                <p className={clsx("text-muted font-normal text-base leading-relaxed text-balance", isRTL && "text-start")}>
                  {t.about.content.missionDesc}
                </p>
              </AnimatedSection>
            </div>
          </div>

        </div>
      </section>

      {/* 3. OBJECTIVES SECTION */}
      <section className="py-24 md:py-32 relative z-10 bg-surface border-t border-line">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection direction="up" className="mb-14 md:mb-16 text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <ListChecks className="w-6 h-6 text-accent" />
              <span className={clsx("text-accent text-xs uppercase font-bold tracking-widest", isRTL && "font-arabic")}>
                {lang === 'ar' ? "ما نلتزم به" : "What We Commit To"}
              </span>
            </div>
            <h2 className={clsx("text-4xl md:text-6xl font-serif font-bold text-foreground uppercase tracking-tighter", isRTL && "font-arabic")}>
              {t.about.content.objectivesTitle}
            </h2>
            <div className="w-24 h-px bg-accent mx-auto mt-8" />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
            {t.about.content.objectives.map((obj, i) => (
              <StaggerItem
                key={i}
                direction="up"
                className={clsx(
                  "flex gap-4 bg-background p-6 md:p-7 rounded-sm border border-line hover:border-accent/40 transition-colors group",
                  isRTL && "flex-row-reverse"
                )}
              >
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-accent shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className={clsx("text-foreground/85 text-sm md:text-base leading-relaxed", isRTL && "font-arabic text-start")}>
                  {obj}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
