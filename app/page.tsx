"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  CarFront,
  Clock3,
  Cog,
  MapPinned,
  PackageSearch,
  ShieldCheck,
  Shirt,
  Sparkles,
} from "lucide-react";
import clsx from "clsx";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/LanguageContext";

const fleet = [
  { name: "Range Rover", price: "120 OMR" },
  { name: "LX600", price: "100 OMR" },
  { name: "Land Cruiser", price: "80 OMR" },
];

export default function Home() {
  const { lang, isRTL } = useLanguage();
  const ar = lang === "ar";

  const stories = [
    {
      key: "tours",
      title: ar ? "الجولات والتنقل الفاخر" : "Tours & Luxury Mobility",
      description: ar
        ? "سيارات دفع رباعي بيضاء فاخرة، مع سائق أو بدون، لاجتماعات الأعمال والاستقبال من المطار والجولات الخاصة في عُمان."
        : "White luxury SUVs, with or without a driver, for executive meetings, airport arrivals, and private journeys across Oman.",
      image: "/images/tours-airport-arrival-branded.png",
      href: "/tours",
      label: ar ? "استكشف الجولات" : "Explore Tours",
      icon: CarFront,
      featured: true,
    },
    {
      key: "events",
      title: ar ? "الفعاليات والإنتاج" : "Events & Production",
      description: ar
        ? "تنفيذ متقن، وإنتاج إبداعي، وتنسيق سلس للفعاليات المؤسسية والخاصة."
        : "Refined execution, creative production, and seamless coordination for corporate and private occasions.",
      image: "/images/Conference_TwoInOne.png",
      href: "/events",
      label: ar ? "خطط لفعاليتك" : "Plan an Event",
      icon: CalendarCheck,
      featured: false,
    },
    {
      key: "facilities",
      title: ar ? "خدمات المرافق" : "Facility Services",
      description: ar
        ? "صيانة وإدارة مرافق وأنظمة ذكية ودعم تشغيلي بمعيار واحد واضح."
        : "Maintenance, facility management, smart systems, and operational support under one clear standard.",
      image: "/images/Facility_management.png",
      href: "/services",
      label: ar ? "خدمات المرافق" : "View Facility Services",
      icon: Building2,
      featured: false,
    },
  ];

  const supporting = [
    {
      title: ar ? "الزي المهني" : "Professional Uniforms",
      description: ar
        ? "ملابس عمل وحماية مصنّعة حسب متطلبات القطاع."
        : "Purpose-built workwear and protective clothing.",
      href: "/uniforms",
      icon: Shirt,
    },
    {
      title: ar ? "الآلات وقطع الغيار" : "Machinery & Auto Parts",
      description: ar
        ? "توريد وتوزيع موثوق لاحتياجات التشغيل."
        : "Reliable sourcing and distribution for operations.",
      href: "/auto-parts",
      icon: Cog,
    },
    {
      title: ar ? "السلع والمواد" : "Commodities & Materials",
      description: ar
        ? "الغذاء والزراعة والصلب والكبريت في وجهة واحدة."
        : "Food, agriculture, steel, and sulfur in one place.",
      href: "/commodities",
      icon: PackageSearch,
    },
  ];

  return (
    <main className="overflow-hidden bg-background">
      <section className="relative min-h-[760px] bg-[#05080b] text-white lg:min-h-[820px]">
        <Image
          src="/images/tours-airport-arrival-branded.png"
          alt={
            ar
              ? "خدمة استقبال فاخرة بسيارة دفع رباعي بيضاء في مسقط"
              : "Luxury airport welcome beside a white SUV in Muscat"
          }
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] lg:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05080b] via-[#05080b]/84 to-[#05080b]/22 rtl:bg-gradient-to-l" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05080b] via-transparent to-[#05080b]/20" />

        <div className="container relative z-10 mx-auto flex min-h-[760px] items-center px-5 py-20 sm:px-8 lg:min-h-[820px] lg:px-12">
          <div className={clsx("max-w-3xl", isRTL && "text-start")}>
            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-8 bg-accent" />
              {ar ? "اثنين في واحد ش.م.م · عُمان" : "Two in One LLC · Oman"}
            </div>

            <h1
              className={clsx(
                "max-w-3xl text-balance font-serif text-[clamp(2.35rem,5vw,4.9rem)] font-bold uppercase leading-[0.98] tracking-[-0.045em]",
                isRTL && "font-arabic leading-[1.16]"
              )}
            >
              {ar ? (
                <>
                  نربط الخبرات والموارد والفرص
                  <span className="mt-2 block text-accent">
                    لنقدّم حلولاً بلا حدود
                  </span>
                </>
              ) : (
                <>
                  Connecting Expertise, Resources, and Opportunities
                  <span className="mt-2 block text-accent">
                    Delivering Solutions Without Boundaries
                  </span>
                </>
              )}
            </h1>

            <p className="mt-8 max-w-2xl text-balance text-base leading-7 text-white/76 sm:text-lg">
              {ar
                ? "من الاستقبال التنفيذي والرحلات الخاصة إلى الفعاليات الراقية ودعم المرافق الموثوق، ننسّق كل تفصيل بعناية."
                : "From executive arrivals and private journeys to refined events and dependable facility support, we coordinate every detail with care."}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/tours"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-7 text-xs font-bold uppercase tracking-[0.18em] text-[#061016] transition-colors hover:bg-white"
              >
                {ar ? "استكشف الجولات" : "Explore Tours"}
                <ArrowRight
                  className={clsx(
                    "h-4 w-4 transition-transform group-hover:translate-x-1",
                    isRTL && "rotate-180 group-hover:-translate-x-1"
                  )}
                />
              </Link>
              <Link
                href="/events"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/35 bg-black/15 px-7 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white hover:text-[#061016]"
              >
                {ar ? "خطط لفعالية" : "Plan an Event"}
                <ArrowRight
                  className={clsx(
                    "h-4 w-4 transition-transform group-hover:translate-x-1",
                    isRTL && "rotate-180 group-hover:-translate-x-1"
                  )}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/12 bg-black/35 backdrop-blur-md">
          <div className="container mx-auto grid grid-cols-1 gap-px sm:grid-cols-3 sm:px-8 lg:px-12">
            {[
              {
                icon: Clock3,
                title: ar ? "9 صباحاً – 9 مساءً" : "9 AM – 9 PM",
                text: ar ? "خدمة السائق" : "Driver service",
              },
              {
                icon: ShieldCheck,
                title: ar ? "تنسيق موثوق" : "Trusted coordination",
                text: ar ? "من الحجز إلى الوصول" : "From booking to arrival",
              },
              {
                icon: MapPinned,
                title: ar ? "في جميع أنحاء عُمان" : "Across Oman",
                text: ar ? "أعمال وجولات خاصة" : "Business and private tours",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-center gap-4 border-white/10 px-5 py-5 sm:border-r sm:last:border-r-0 rtl:sm:border-l rtl:sm:border-r-0 rtl:sm:last:border-l-0"
                >
                  <Icon className="h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {item.title}
                    </div>
                    <div className="mt-0.5 text-xs text-white/55">{item.text}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="container mx-auto">
          <AnimatedSection
            direction="up"
            className={clsx(
              "mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end",
              isRTL && "text-start"
            )}
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-accent">
                {ar ? "ما نقوم به اليوم" : "What we do today"}
              </span>
              <h2
                className={clsx(
                  "mt-5 text-balance text-4xl font-bold uppercase leading-[0.98] tracking-tight text-foreground md:text-6xl",
                  isRTL && "font-arabic leading-[1.15]"
                )}
              >
                {ar ? "خدمة مترابطة، من اللحظة الأولى." : "One connected service, from the first moment."}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-muted md:text-lg">
              {ar
                ? "نركّز على ثلاث تجارب أساسية: تنقّل فاخر يليق بضيوفكم، فعاليات تُنفّذ بدقة، ومرافق تعمل بسلاسة كل يوم."
                : "Our focus is now clear: distinguished mobility for your guests, events delivered with precision, and facilities that work seamlessly every day."}
            </p>
          </AnimatedSection>

          <div className="grid gap-6 lg:grid-cols-2">
            {stories.map((story) => {
              const Icon = story.icon;
              return (
                <AnimatedSection
                  key={story.key}
                  direction="up"
                  className={clsx(
                    "group relative min-h-[430px] overflow-hidden rounded-2xl bg-[#081017] shadow-premium",
                    story.featured && "lg:row-span-2 lg:min-h-[886px]"
                  )}
                >
                  <Link
                    href={story.href}
                    aria-label={story.label}
                    className="absolute inset-0 z-20"
                  />
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes={story.featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05080b] via-[#05080b]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 z-10 p-7 text-white md:p-10">
                    <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/25 backdrop-blur-sm">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-3xl font-bold md:text-4xl">{story.title}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-white/70 md:text-base">
                      {story.description}
                    </p>
                    <div className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">
                      {story.label}
                      <ArrowRight className={clsx("h-4 w-4", isRTL && "rotate-180")} />
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="container mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <AnimatedSection
            direction="left"
            className="relative aspect-[16/10] overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/tours-white-fleet-branded.png"
              alt={ar ? "أسطول من ثلاث سيارات دفع رباعي بيضاء فاخرة" : "Fleet of three white luxury SUVs"}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </AnimatedSection>

          <AnimatedSection direction="right" className={clsx(isRTL && "text-start")}>
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-accent">
              {ar ? "تنقّل مصمم حولك" : "Mobility designed around you"}
            </span>
            <h2
              className={clsx(
                "mt-5 text-4xl font-bold uppercase leading-none tracking-tight text-foreground md:text-6xl",
                isRTL && "font-arabic leading-[1.18]"
              )}
            >
              {ar ? "عُمان، بطريقتك." : "Oman, your way."}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted">
              {ar
                ? "اختر سيارتك البيضاء المفضلة، مع سائق محترف أو بدون سائق. مثالية للاجتماعات والتنقل اليومي والرحلات الخاصة."
                : "Choose your preferred white SUV, with a professional driver or without. Ideal for meetings, daily movement, and private touring."}
            </p>

            <div className="mt-8 divide-y divide-line border-y border-line">
              {fleet.map((vehicle) => (
                <div
                  key={vehicle.name}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <span className="font-serif text-lg font-semibold text-foreground">
                    {vehicle.name}
                  </span>
                  <span className="text-sm font-bold text-accent" dir="ltr">
                    {vehicle.price}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/tours"
              className="group mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-accent"
            >
              {ar ? "عرض السيارات والوجهات" : "See vehicles and destinations"}
              <ArrowRight
                className={clsx(
                  "h-4 w-4 transition-transform group-hover:translate-x-1",
                  isRTL && "rotate-180 group-hover:-translate-x-1"
                )}
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#06090d] px-5 py-24 text-white sm:px-8 md:py-32 lg:px-12">
        <div className="container mx-auto grid gap-8 lg:grid-cols-2">
          <AnimatedSection
            direction="up"
            className="relative min-h-[520px] overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/Conference_TwoInOne_Speaker.png"
              alt={ar ? "فعالية مؤسسية بإنتاج متكامل" : "Corporate event with integrated production"}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
          </AnimatedSection>

          <AnimatedSection
            direction="up"
            className={clsx("flex flex-col justify-center lg:px-10", isRTL && "text-start")}
          >
            <Sparkles className="h-7 w-7 text-accent" />
            <span className="mt-6 text-xs font-bold uppercase tracking-[0.28em] text-accent">
              {ar ? "تجارب تُذكر" : "Experiences, precisely delivered"}
            </span>
            <h2
              className={clsx(
                "mt-5 text-balance text-4xl font-bold uppercase leading-none tracking-tight md:text-6xl",
                isRTL && "font-arabic leading-[1.18]"
              )}
            >
              {ar ? "من الفكرة إلى آخر ضيف." : "From concept to the final guest."}
            </h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/65">
              {ar
                ? "نجمع بين التنسيق المنظّم والتفاصيل الجمالية والتكامل التقني لتقديم فعاليات مؤسسية وخاصة بمعيار مرتفع، بالتعاون مع شريكنا الموثوق في التنفيذ."
                : "We combine structured coordination, aesthetic detail, and technical integration to deliver corporate and private events at an elevated standard, together with our trusted execution partner."}
            </p>
            <Link
              href="/events"
              className="group mt-9 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-accent"
            >
              {ar ? "خدمات الفعاليات" : "Discover Event Services"}
              <ArrowRight
                className={clsx(
                  "h-4 w-4 transition-transform group-hover:translate-x-1",
                  isRTL && "rotate-180 group-hover:-translate-x-1"
                )}
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="container mx-auto grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <AnimatedSection
            direction="left"
            className={clsx("lg:pr-8 rtl:lg:pl-8 rtl:lg:pr-0", isRTL && "text-start")}
          >
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-accent">
              {ar ? "أماكن تعمل بشكل أفضل" : "Places that work beautifully"}
            </span>
            <h2
              className={clsx(
                "mt-5 text-balance text-4xl font-bold uppercase leading-none tracking-tight text-foreground md:text-6xl",
                isRTL && "font-arabic leading-[1.18]"
              )}
            >
              {ar ? "خمسة مجالات. معيار واحد." : "Five capabilities. One standard."}
            </h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted">
              {ar
                ? "من الصيانة والمرافق إلى الأنظمة الذكية والتوزيع، نوفّر دعماً عملياً واضحاً للمواقع والأصول والعمليات."
                : "From maintenance and facility management to smart systems and distribution, we provide practical, accountable support for sites, assets, and operations."}
            </p>
            <Link
              href="/services"
              className="group mt-9 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-accent"
            >
              {ar ? "استكشف خدمات المرافق" : "Explore Facility Services"}
              <ArrowRight
                className={clsx(
                  "h-4 w-4 transition-transform group-hover:translate-x-1",
                  isRTL && "rotate-180 group-hover:-translate-x-1"
                )}
              />
            </Link>
          </AnimatedSection>

          <AnimatedSection
            direction="right"
            className="relative aspect-[16/11] overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/Facility_management.png"
              alt={ar ? "خدمات إدارة المرافق في عُمان" : "Facility management services in Oman"}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="border-y border-line bg-surface px-5 py-20 sm:px-8 lg:px-12">
        <div className="container mx-auto">
          <AnimatedSection
            direction="up"
            className={clsx(
              "mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end",
              isRTL && "text-start"
            )}
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-accent">
                {ar ? "أنشطة داعمة" : "Supporting activities"}
              </span>
              <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
                {ar ? "عندما يتطلب العمل أكثر." : "When the work needs more."}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-muted">
              {ar
                ? "تدعم مجالاتنا التجارية والتصنيعية احتياجات المشاريع عندما تتجاوز الخدمة الأساسية."
                : "Our trading and manufacturing activities support projects when the requirement extends beyond the core service."}
            </p>
          </AnimatedSection>

          <div className="grid gap-4 md:grid-cols-3">
            {supporting.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-2xl border border-line bg-background p-7 transition-colors hover:border-accent/50"
                >
                  <Icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-8 text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
                  <ArrowRight
                    className={clsx(
                      "mt-8 h-5 w-5 text-accent transition-transform group-hover:translate-x-1",
                      isRTL && "rotate-180 group-hover:-translate-x-1"
                    )}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <AnimatedSection
          direction="up"
          className="container mx-auto overflow-hidden rounded-3xl bg-accent px-6 py-16 text-center text-[#041018] md:px-12 md:py-20"
        >
          <span className="text-xs font-bold uppercase tracking-[0.28em]">
            {ar ? "ابدأ المحادثة" : "Start the conversation"}
          </span>
          <h2
            className={clsx(
              "mx-auto mt-5 max-w-4xl text-balance text-4xl font-bold uppercase leading-none tracking-tight md:text-6xl",
              isRTL && "font-arabic leading-[1.18]"
            )}
          >
            {ar ? "أخبرنا إلى أين تريد أن تصل." : "Tell us where you want to go."}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#041018]/70">
            {ar
              ? "رحلة خاصة، فعالية مهمة، أو موقع يحتاج إلى دعم أفضل — سننسّق الخطوة التالية."
              : "A private journey, an important event, or a site that needs better support—we will coordinate the next step."}
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-[#041018] px-8 text-xs font-bold uppercase tracking-[0.18em] text-white transition-transform hover:-translate-y-0.5"
          >
            {ar ? "تواصل معنا" : "Contact Two in One"}
          </Link>
        </AnimatedSection>
      </section>
    </main>
  );
}
