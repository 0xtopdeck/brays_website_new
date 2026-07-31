"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  FileCheck2,
  PackageSearch,
  SearchCheck,
  Truck,
  Wheat,
} from "lucide-react";
import clsx from "clsx";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/LanguageContext";

export default function CommoditiesPage() {
  const { lang, isRTL } = useLanguage();
  const ar = lang === "ar";

  const divisions = [
    {
      number: "01",
      eyebrow: ar ? "المنتجات الزراعية والغذائية" : "Agricultural & Food Products",
      title: ar ? "من الحقول والمزارع إلى الأسواق." : "From fields and farms to market.",
      description: ar
        ? "الحبوب والتمور العُمانية والمواد الغذائية الأساسية بالجملة، مع تنسيق المصدر والفحص والشهادات والخدمات اللوجستية."
        : "Grains, Omani dates, and essential wholesale food products, supported by coordinated sourcing, inspection, certification, and logistics.",
      image: "/images/harvesting_brays_hero_product.png",
      imageAlt: ar ? "حصاد المنتجات الزراعية" : "Agricultural products at harvest",
      href: "/commodities/agriculture-food",
      cta: ar ? "استكشف المنتجات" : "Explore Products",
      icon: Wheat,
      points: ar
        ? ["الحبوب والقمح", "التمور العُمانية", "الأرز والسكر والزيوت والدقيق", "تنسيق الجودة والشهادات"]
        : ["Grains & wheat", "Omani dates", "Rice, sugar, oils & flour", "Quality and certification coordination"],
    },
    {
      number: "02",
      eyebrow: ar ? "مواد البناء" : "Construction Materials",
      title: ar ? "مواد موثوقة لمتطلبات المشروع." : "Reliable materials for every project brief.",
      description: ar
        ? "الفولاذ الإنشائي والخشب الرقائقي ومواد الكهرباء والبنية الأساسية والكبريت الصناعي، وفق مواصفات المشروع وبرنامج التسليم."
        : "Structural steel, plywood, electrical and infrastructure materials, and industrial sulfur aligned with project specifications and delivery schedules.",
      image: "/images/steel_brays_hero_product.png",
      imageAlt: ar ? "الفولاذ ومواد البناء" : "Steel and construction materials",
      href: "/commodities/construction-materials",
      cta: ar ? "استكشف المواد" : "Explore Materials",
      icon: Building2,
      points: ar
        ? ["الفولاذ الإنشائي", "الخشب الرقائقي والقوالب", "مواد الكهرباء والبنية الأساسية", "الكبريت الحبيبي"]
        : ["Structural steel", "Plywood & formwork", "Electrical & infrastructure materials", "Granular sulfur"],
    },
  ];

  const process = [
    {
      icon: PackageSearch,
      title: ar ? "اختيار المصدر" : "Source",
      text: ar ? "تحديد المنتج والمنشأ المناسبين للطلب." : "Identify the right product and origin for the requirement.",
    },
    {
      icon: SearchCheck,
      title: ar ? "مطابقة المواصفات" : "Verify",
      text: ar ? "مراجعة المواصفات وخيارات الفحص والجودة." : "Review specifications, inspection options, and quality criteria.",
    },
    {
      icon: FileCheck2,
      title: ar ? "التوثيق" : "Document",
      text: ar ? "تنسيق المستندات والشهادات المطلوبة." : "Coordinate the required documentation and certifications.",
    },
    {
      icon: Truck,
      title: ar ? "التسليم" : "Deliver",
      text: ar ? "تنظيم الشحن والتسليم وفق الجدول المتفق عليه." : "Arrange freight and delivery around the agreed schedule.",
    },
  ];

  return (
    <main className="overflow-hidden bg-background">
      <section className="relative flex min-h-[620px] items-end bg-[#05080b] text-white md:min-h-[700px]">
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="relative overflow-hidden">
            <Image
              src="/images/harvesting_brays_hero_product.png"
              alt={ar ? "منتجات زراعية وغذائية" : "Agricultural and food products"}
              fill
              priority
              sizes="50vw"
              className="object-cover object-center"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/images/steel_brays_hero_product.png"
              alt={ar ? "مواد البناء" : "Construction materials"}
              fill
              priority
              sizes="50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-[#05080b]/48" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05080b] via-[#05080b]/75 to-[#05080b]/30 rtl:bg-gradient-to-l" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05080b] via-transparent to-[#05080b]/20" />

        <div className="container relative z-10 mx-auto px-5 pb-20 pt-24 sm:px-8 md:pb-28 lg:px-12">
          <div className={clsx("max-w-4xl", isRTL && "text-start")}>
            <div className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-8 bg-accent" />
              {ar ? "التجارة والتوريد" : "Trade & Supply"}
            </div>
            <h1
              className={clsx(
                "text-balance text-5xl font-bold uppercase leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-8xl",
                isRTL && "font-arabic leading-[1.12]"
              )}
            >
              {ar ? (
                <>
                  السلع
                  <span className="block text-accent">والمواد</span>
                </>
              ) : (
                <>
                  Commodities
                  <span className="block text-accent">& Materials</span>
                </>
              )}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
              {ar
                ? "مساران متخصصان للتوريد: المنتجات الزراعية والغذائية، ومواد البناء — مع اختيار مصادر موثوقة وفحص الجودة والتوثيق والتنسيق اللوجستي."
                : "Two focused supply pathways: agricultural and food products, and construction materials—supported by trusted sourcing, quality review, documentation, and logistics."}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line px-5 py-10 sm:px-8 lg:px-12">
        <div className="container mx-auto grid gap-5 sm:grid-cols-2">
          {divisions.map((division) => (
            <Link
              key={division.number}
              href={division.href}
              className="group flex items-center justify-between rounded-2xl border border-line bg-surface px-5 py-4 transition-colors hover:border-accent/55"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs font-bold text-accent">{division.number}</span>
                <span className="text-sm font-semibold text-foreground">{division.eyebrow}</span>
              </div>
              <ArrowRight className={clsx("h-4 w-4 text-accent transition-transform group-hover:translate-x-1", isRTL && "rotate-180 group-hover:-translate-x-1")} />
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="container mx-auto">
          <AnimatedSection direction="up" className={clsx("max-w-3xl", isRTL && "text-start")}>
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-accent-2">
              {ar ? "اختر القسم" : "Choose a Division"}
            </span>
            <h2 className={clsx("mt-5 text-balance text-4xl font-bold uppercase leading-none tracking-tight text-foreground md:text-6xl", isRTL && "font-arabic leading-[1.18]")}>
              {ar ? "مساران واضحان. معيار واحد." : "Two clear pathways. One standard."}
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            {divisions.map((division) => {
              const Icon = division.icon;
              return (
                <AnimatedSection key={division.number} direction="up" className="group overflow-hidden rounded-3xl border border-line bg-surface">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={division.image}
                      alt={division.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white md:p-8">
                      <div>
                        <span className="font-mono text-xs font-bold text-accent">{division.number}</span>
                        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em]">{division.eyebrow}</p>
                      </div>
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                  </div>
                  <div className={clsx("p-6 md:p-8", isRTL && "text-start")}>
                    <h3 className={clsx("text-balance text-3xl font-bold leading-tight text-foreground md:text-4xl", isRTL && "font-arabic leading-[1.3]")}>
                      {division.title}
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-muted md:text-base md:leading-7">{division.description}</p>
                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {division.points.map((point) => (
                        <div key={point} className="flex items-start gap-3 text-sm text-foreground/80">
                          <ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={division.href}
                      className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-7 text-xs font-bold uppercase tracking-[0.18em] text-[#041018] transition-transform hover:-translate-y-0.5"
                    >
                      {division.cta}
                      <ArrowRight className={clsx("h-4 w-4", isRTL && "rotate-180")} />
                    </Link>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#06090d] px-5 py-24 text-white sm:px-8 md:py-28 lg:px-12">
        <div className="container mx-auto">
          <AnimatedSection direction="up" className={clsx("grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end", isRTL && "text-start")}>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-accent">
                {ar ? "دعم التوريد" : "Supply Coordination"}
              </span>
              <h2 className={clsx("mt-5 text-4xl font-bold uppercase leading-none tracking-tight md:text-6xl", isRTL && "font-arabic leading-[1.18]")}>
                {ar ? "من الطلب إلى التسليم." : "From requirement to delivery."}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-white/65">
              {ar
                ? "ننسّق خطوات التوريد التجارية والفنية بوضوح، مع مراعاة مواصفات المنتج والكمية والوجهة والجدول الزمني."
                : "We coordinate the commercial and technical supply steps around product specification, volume, destination, and schedule."}
            </p>
          </AnimatedSection>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="bg-[#090d12] p-6 md:p-8">
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-accent" />
                    <span className="font-mono text-[11px] text-white/35">0{index + 1}</span>
                  </div>
                  <h3 className="mt-8 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <AnimatedSection direction="up" className="container mx-auto grid gap-8 rounded-3xl border border-line bg-background p-7 md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <div className={clsx(isRTL && "text-start")}>
            <h2 className={clsx("text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl", isRTL && "font-arabic leading-[1.2]")}>
              {ar ? "شاركنا متطلبات التوريد." : "Share your supply requirement."}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted md:text-base">
              {ar
                ? "أرسل المنتج والكمية والمواصفات والوجهة، وسنراجع خيارات المصدر والفحص والخدمات اللوجستية."
                : "Send the product, volume, specification, and destination, and we will review sourcing, inspection, and logistics options."}
            </p>
          </div>
          <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-7 text-xs font-bold uppercase tracking-[0.18em] text-[#041018]">
            {ar ? "اطلب عرضاً" : "Request a Quote"}
            <ArrowRight className={clsx("h-4 w-4", isRTL && "rotate-180")} />
          </Link>
        </AnimatedSection>
      </section>
    </main>
  );
}
