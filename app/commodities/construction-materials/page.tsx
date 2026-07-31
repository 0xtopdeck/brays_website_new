"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Factory,
  FileCheck2,
  ShieldCheck,
  Truck,
} from "lucide-react";
import clsx from "clsx";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/LanguageContext";

export default function ConstructionMaterialsPage() {
  const { lang, isRTL } = useLanguage();
  const ar = lang === "ar";

  const productAreas = [
    {
      number: "01",
      image: "/images/steel_brays_hero_product.png",
      eyebrow: ar ? "الفولاذ الإنشائي" : "Structural steel",
      title: ar ? "فولاذ مطابق لمتطلبات المشروع." : "Steel aligned to the project brief.",
      description: ar
        ? "توريد العوارض والأعمدة والقنوات والصفائح والمقاطع المجوفة ومنتجات التسليح وفق الدرجات والأبعاد والسماحات المطلوبة، مع مراجعة مستندات المصنع ذات الصلة."
        : "Beams, columns, channels, plates, hollow sections, and reinforcing products sourced against the required grades, dimensions, tolerances, and supporting mill documentation.",
      details: ar
        ? ["درجات ومقاسات محددة", "مراجعة مستندات المصنع", "كميات تناسب نطاق المشروع"]
        : ["Specified grades and sizes", "Mill-document review", "Project-scale quantities"],
    },
    {
      number: "02",
      image: "/images/plywood_deck_construction_use.png",
      eyebrow: ar ? "الخشب الرقائقي والقوالب" : "Plywood & formwork",
      title: ar ? "ألواح مختارة لأداء موثوق في الموقع." : "Panels selected for dependable site performance.",
      description: ar
        ? "خيارات من الخشب الرقائقي الإنشائي والمغلف بطبقة فيلم للقوالب الخرسانية والأسطح وتطبيقات الموقع، تُختار بحسب الأبعاد والسماكة وأداء السطح ومتطلبات إعادة الاستخدام."
        : "Structural and film-faced plywood options for concrete formwork, decking, and site applications, selected for panel dimensions, thickness, surface performance, and expected reuse.",
      details: ar
        ? ["القوالب والأسطح", "سماكات وأبعاد متعددة", "اختيار حسب الاستخدام"]
        : ["Formwork and decking", "Multiple sizes and thicknesses", "Application-led selection"],
    },
    {
      number: "03",
      image: "/images/Construction_cables_park.png",
      eyebrow: ar ? "مواد الكهرباء والبنية الأساسية" : "Electrical & infrastructure",
      title: ar ? "توريد منظم وفق الجدول الفني." : "Coordinated to the technical schedule.",
      description: ar
        ? "كابلات ومواد بنية أساسية مرتبطة بها يتم تنسيقها وفق الجدول الفني المعتمد، مع الاهتمام بمواصفات الموصلات وشهادات المنتج والتعبئة والتسليم المرحلي."
        : "Cables and related infrastructure materials coordinated to the approved technical schedule, with attention to conductor specifications, product certification, packaging, and staged delivery.",
      details: ar
        ? ["مطابقة الجدول الفني", "توثيق المنتج", "تسليم مرحلي"]
        : ["Technical-schedule alignment", "Product documentation", "Staged delivery"],
    },
    {
      number: "04",
      image: "/images/sulfur_pile_hero.png",
      eyebrow: ar ? "الكبريت الحبيبي الصناعي" : "Industrial granular sulfur",
      title: ar ? "مسار توريد صناعي موثق." : "A documented industrial supply stream.",
      description: ar
        ? "كبريت حبيبي بدرجات صناعية يُورّد وفق متطلبات النقاء والتحبيب والمنشأ والتعبئة والشحن المتفق عليها، ومدعوم بمستندات الدفعة والشحن ذات الصلة."
        : "Industrial-grade granular sulfur supplied to agreed purity, granulation, origin, packing, and freight requirements, supported by relevant batch and shipping documentation.",
      details: ar
        ? ["مراجعة النقاء والتحبيب", "خيارات تعبئة مناسبة", "تنسيق الشحن"]
        : ["Purity and granulation review", "Suitable packing options", "Freight coordination"],
    },
  ];

  const process = [
    {
      number: "01",
      icon: FileCheck2,
      title: ar ? "تحديد المواصفات" : "Define the specification",
      description: ar
        ? "نراجع الصنف والدرجة والأبعاد والكمية والوثائق المطلوبة ووجهة التسليم."
        : "We review the product, grade, dimensions, volume, documentation, and delivery destination.",
    },
    {
      number: "02",
      icon: ShieldCheck,
      title: ar ? "التحقق والتوثيق" : "Verify and document",
      description: ar
        ? "ننسّق عروض الموردين والمستندات والفحص عند الحاجة قبل اعتماد الشحنة."
        : "Supplier offers, documentation, and inspection requirements are coordinated before shipment approval.",
    },
    {
      number: "03",
      icon: Truck,
      title: ar ? "تنسيق التسليم" : "Coordinate delivery",
      description: ar
        ? "نخطط التعبئة والشحن والتسليم بما يتوافق مع برنامج المشروع ومتطلبات الموقع."
        : "Packing, freight, and delivery are planned around the project programme and site requirements.",
    },
  ];

  return (
    <main className="overflow-hidden bg-background">
      <section className="relative flex min-h-[660px] items-end bg-[#05080b] text-white md:min-h-[760px]">
        <Image
          src="/images/steel_brays_hero_product.png"
          alt={ar ? "مواد فولاذية إنشائية لمشاريع البناء" : "Structural steel materials for construction projects"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05080b] via-[#05080b]/82 to-[#05080b]/20 rtl:bg-gradient-to-l" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05080b] via-transparent to-[#05080b]/35" />

        <div className="container relative z-10 mx-auto px-5 pb-20 pt-32 sm:px-8 md:pb-28 lg:px-12">
          <div className={clsx("max-w-4xl", isRTL && "text-start")}>
            <Link
              href="/commodities"
              className="mb-9 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-accent"
            >
              {isRTL ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
              {ar ? "العودة إلى السلع والمواد" : "Back to Commodities"}
            </Link>

            <div className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
              <Factory className="h-4 w-4" />
              {ar ? "مواد البناء والتوريد الصناعي" : "Construction & industrial supply"}
            </div>
            <h1
              className={clsx(
                "text-balance text-5xl font-bold uppercase leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-8xl",
                isRTL && "font-arabic leading-[1.12]"
              )}
            >
              {ar ? (
                <>
                  مواد موثوقة
                  <span className="block text-accent">لكل مرحلة من البناء.</span>
                </>
              ) : (
                <>
                  Materials engineered
                  <span className="block text-accent">for the build.</span>
                </>
              )}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
              {ar
                ? "نوفّر الفولاذ الإنشائي والخشب الرقائقي للقوالب ومواد الكهرباء والبنية الأساسية والكبريت الحبيبي، مع مراجعة المواصفات والتوثيق وتنسيق التسليم إلى موقع المشروع."
                : "Structural steel, formwork plywood, electrical and infrastructure materials, and granular sulfur—sourced to specification, documented before dispatch, and coordinated through to delivery."}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line px-5 py-10 sm:px-8 lg:px-12">
        <div className="container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productAreas.map((item) => (
            <div key={item.number} className="flex items-center gap-4">
              <span className="font-mono text-xs font-bold text-accent">{item.number}</span>
              <span className="text-sm font-semibold text-foreground">{item.eyebrow}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="materials" className="scroll-mt-24 px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="container mx-auto">
          <AnimatedSection
            direction="up"
            className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
          >
            <div className={clsx(isRTL && "text-start")}>
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent-2">
                {ar ? "نهج التوريد" : "Supply approach"}
              </div>
              <h2
                className={clsx(
                  "mt-5 text-balance text-4xl font-bold uppercase leading-none tracking-tight text-foreground md:text-6xl",
                  isRTL && "font-arabic leading-[1.18]"
                )}
              >
                {ar ? "شريك توريد واحد. مسارات متعددة للمواد." : "One supply partner. Multiple material streams."}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-muted">
              {ar
                ? "تتحرك المشاريع بكفاءة أكبر عندما تُدار المواصفات والوثائق والتسليم ضمن عملية واحدة. نطابق كل طلب مع المنشأ والدرجة المناسبين، وننسّق متطلبات الفحص والشحن، ونخطط التسليم وفق برنامج المشروع."
                : "Projects move more reliably when specification, documentation, and delivery are coordinated as one process. We match each requirement with suitable origins and grades, align inspection and shipping needs, and plan delivery around the project programme."}
            </p>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {productAreas.map((item) => (
              <AnimatedSection
                key={item.number}
                direction="up"
                className="group overflow-hidden rounded-2xl border border-line bg-surface"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.eyebrow}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05080b]/70 via-transparent to-transparent" />
                  <span className="absolute start-6 top-6 rounded-full border border-white/25 bg-black/35 px-4 py-2 font-mono text-xs font-bold tracking-[0.18em] text-white backdrop-blur-sm">
                    {item.number}
                  </span>
                </div>
                <div id={item.number === "04" ? "sulfur" : undefined} className={clsx("scroll-mt-24 p-7 md:p-9", isRTL && "text-start")}>
                  <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
                    {item.eyebrow}
                  </div>
                  <h3
                    className={clsx(
                      "mt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl",
                      isRTL && "font-arabic leading-[1.35]"
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-muted md:text-base md:leading-7">
                    {item.description}
                  </p>
                  <div className="mt-7 grid gap-3 border-t border-line pt-6 sm:grid-cols-3">
                    {item.details.map((detail) => (
                      <div key={detail} className="flex items-start gap-2 text-xs font-medium leading-5 text-foreground/80">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface px-5 py-24 sm:px-8 md:py-28 lg:px-12">
        <div className="container mx-auto">
          <AnimatedSection direction="up" className={clsx("max-w-3xl", isRTL && "text-start")}>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent-2">
              {ar ? "من المتطلبات إلى الموقع" : "From requirement to site"}
            </div>
            <h2
              className={clsx(
                "mt-5 text-balance text-4xl font-bold uppercase leading-none tracking-tight text-foreground md:text-6xl",
                isRTL && "font-arabic leading-[1.18]"
              )}
            >
              {ar ? "عملية توريد واضحة ومنضبطة." : "A clear, controlled supply process."}
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {process.map((step) => {
              const Icon = step.icon;
              return (
                <AnimatedSection
                  key={step.number}
                  direction="up"
                  className="rounded-2xl border border-line bg-background p-7 md:p-9"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-accent" />
                    <span className="font-mono text-xs font-bold text-muted">{step.number}</span>
                  </div>
                  <h3 className={clsx("mt-10 text-2xl font-bold text-foreground", isRTL && "font-arabic")}>
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-muted">{step.description}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <AnimatedSection
          direction="up"
          className="container mx-auto grid gap-8 rounded-3xl border border-line bg-surface p-7 md:grid-cols-[1fr_auto] md:items-center md:p-12"
        >
          <div className={clsx(isRTL && "text-start")}>
            <Factory className="h-7 w-7 text-accent" />
            <h2
              className={clsx(
                "mt-5 text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl",
                isRTL && "font-arabic leading-[1.2]"
              )}
            >
              {ar ? "شاركنا متطلبات المواد." : "Share your material requirement."}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted md:text-base">
              {ar
                ? "أرسل الصنف والمواصفات والكمية ووجهة التسليم، وسنراجع خيارات المنشأ والتوثيق والفحص والخدمات اللوجستية."
                : "Send the product, specification, volume, and destination, and we will review origin, documentation, inspection, and logistics options."}
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-7 text-xs font-bold uppercase tracking-[0.18em] text-[#041018] transition-transform hover:-translate-y-0.5"
          >
            {ar ? "اطلب عرضاً" : "Request a Quote"}
            <ArrowRight className={clsx("h-4 w-4", isRTL && "rotate-180")} />
          </Link>
        </AnimatedSection>
      </section>
    </main>
  );
}
