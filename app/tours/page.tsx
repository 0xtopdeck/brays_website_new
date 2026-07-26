"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import {
  ArrowRight,
  BriefcaseBusiness,
  CarFront,
  Check,
  Clock3,
  KeyRound,
  Landmark,
  MapPinned,
  Mountain,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  Waves,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

const copy = {
  en: {
    eyebrow: "Private mobility · Sultanate of Oman",
    title: "Experience Oman in Ultimate Luxury.",
    intro:
      "Travel in world-class SUVs with professional chauffeur services or self-drive options, tailored to your lifestyle.",
    exploreFleet: "View the fleet",
    planJourney: "Plan your journey",
    facts: [
      ["White luxury fleet", "Newest premium SUVs"],
      ["Driver service", "9:00 AM–9:00 PM"],
      ["Flexible booking", "With or without driver"],
    ],
    storyEyebrow: "One journey, beautifully handled",
    storyTitle: "Your schedule. Our road.",
    storyBody:
      "From a single airport welcome to a full day of meetings or a private route into Oman’s mountains and wadis, we shape the journey around your time, comfort, and purpose.",
    purposes: [
      {
        title: "Business, without the friction.",
        body:
          "Move confidently between the airport, hotel, offices, and meetings. A professional driver keeps the day flowing while you focus on the work ahead.",
        note: "Airport welcome · Meetings · Multi-stop schedules",
      },
      {
        title: "Oman, at your own pace.",
        body:
          "Choose a private destination tour with a driver who follows your preferred rhythm, or reserve the vehicle without a driver for an independent journey.",
        note: "Mountains · Heritage · Wadis · Private itineraries",
      },
    ],
    fleetEyebrow: "The white fleet",
    fleetTitle: "Choose Your Luxury. We’ll Handle the Journey.",
    fleetBody:
      "Vehicle availability and final journey details are confirmed when you book.",
    fleetAlt:
      "White Range Rover, Lexus LX 600, and Toyota Land Cruiser arranged outside an Omani luxury property",
    fleet: [
      {
        name: "Range Rover",
        price: "120 OMR",
        description:
          "A refined arrival for executive meetings, airport welcomes, and private occasions.",
      },
      {
        name: "Lexus LX 600",
        price: "100 OMR",
        description:
          "Quiet, spacious comfort for city schedules and longer days on the road.",
      },
      {
        name: "Land Cruiser",
        price: "80 OMR",
        description:
          "Trusted premium capability for Muscat, mountain roads, and destination tours.",
      },
    ],
    rateLabel: "Listed rate",
    bookingNote:
      "Choose a vehicle with or without a driver. Driver service operates daily from 9:00 AM to 9:00 PM.",
    bidiyah: {
      eyebrow: "Featured desert stay",
      title: "Bidiyah Desert Escape",
      body:
        "Journey into Bidiyah’s golden dunes, settle into a modern panoramic tent with a king-size bed, and end the evening beneath Oman’s clear desert sky.",
      highlights: [
        "Private journey into Bidiyah’s dunes",
        "Modern panoramic dome tent",
        "King-size bed and refined interior",
        "Night-sky stargazing from your deck",
      ],
      cta: "Plan the desert stay",
      nightAlt: "A warm modern desert tent beneath the star-filled night sky in Bidiyah, Oman",
      campAlt: "A modern panoramic dome tent among the golden dunes of Bidiyah, Oman",
      interiorAlt: "Modern desert tent interior with a king-size bed and panoramic dune views",
    },
    salalah: {
      eyebrow: "Featured seasonal escape",
      title: "Salalah: Mountains, Waterfalls & Coast",
      body:
        "Discover Salalah through mist-green mountain roads, flowing wadis and waterfalls, and the wild beaches of Dhofar. We tailor the route to the season, weather, and pace of your private journey.",
      highlights: [
        "Wadi Darbat and seasonal waterfalls",
        "Cloud-wrapped mountain viewpoints",
        "Mughsail and Dhofar’s dramatic coast",
        "Private itinerary with door-to-door transport",
      ],
      cta: "Plan your Salalah journey",
      alt: "A travel collage of Salalah’s turquoise wadis, seasonal waterfalls, green mountains, and dramatic coast in Dhofar, Oman",
    },
    destinationsEyebrow: "Private tours across Oman",
    destinationsTitle: "A different horizon for every day.",
    destinationsBody:
      "Build a private route around one destination or combine several highlights into a journey tailored to your time.",
    destinations: [
      {
        name: "Jebel Akhdar",
        image: "/images/tours-jebel-akhdar.png",
        alt: "Terraced mountain landscape of Jebel Akhdar in Oman",
        description:
          "Cool mountain air, terraced orchards, and sweeping viewpoints high above the interior.",
      },
      {
        name: "Jebel Shams",
        image: "/images/tours-jebel-shams.png",
        alt: "Dramatic canyon and mountain views at Jebel Shams in Oman",
        description:
          "A high-altitude drive to Oman’s dramatic canyon landscapes and expansive ridgelines.",
      },
      {
        name: "Nizwa",
        image: "/images/tours-nizwa.png",
        alt: "Historic Nizwa architecture and palm-lined surroundings in Oman",
        description:
          "Fort, souq, and enduring Omani heritage brought together in one memorable stop.",
      },
      {
        name: "Wadi Bani Khalid",
        image: "/images/tours-wadi-bani-khalid.png",
        alt: "Clear pools, palms, and rock formations at Wadi Bani Khalid in Oman",
        description:
          "Clear pools, palms, and sculpted rock create a refreshing journey into the wadi.",
      },
    ],
    promiseTitle: "A composed experience, from door to destination.",
    promises: [
      "A carefully presented white vehicle",
      "A schedule shaped around your day",
      "Professional coordination before departure",
    ],
    ctaEyebrow: "Your next journey",
    ctaTitle: "Tell us where the day should take you.",
    ctaBody:
      "Share your date, preferred vehicle, driver option, pickup point, and destination. We’ll confirm the right arrangement for your journey.",
    cta: "Request a booking",
  },
  ar: {
    eyebrow: "تنقّل خاص · سلطنة عُمان",
    title: "استكشف عُمان بأقصى درجات الفخامة.",
    intro:
      "استمتع بتجربة تنقّل راقية مع سيارات الدفع الرباعي الفاخرة، مع سائق محترف أو بخيار القيادة الذاتية، بما يلائم أسلوب حياتك واحتياجاتك.",
    exploreFleet: "استعرض الأسطول",
    planJourney: "خطط لرحلتك",
    facts: [
      ["أسطول فاخر باللون الأبيض", "أحدث سيارات الدفع الرباعي"],
      ["خدمة السائق", "9:00 صباحاً–9:00 مساءً"],
      ["حجز مرن", "مع سائق أو بدونه"],
    ],
    storyEyebrow: "رحلة واحدة، تُدار بعناية",
    storyTitle: "جدولك. وطريقنا.",
    storyBody:
      "من استقبال واحد في المطار إلى يوم كامل من الاجتماعات أو مسار خاص نحو جبال عُمان وأوديتها، نصمم الرحلة وفق وقتك وراحتك وهدفك.",
    purposes: [
      {
        title: "أعمال بلا تعقيد.",
        body:
          "تنقّل بثقة بين المطار والفندق والمكاتب والاجتماعات. يحافظ السائق المحترف على انسيابية يومك لتتفرغ لما هو أهم.",
        note: "استقبال المطار · اجتماعات · جدول متعدد المحطات",
      },
      {
        title: "عُمان، وفق إيقاعك.",
        body:
          "اختر جولة خاصة إلى الوجهات مع سائق يراعي برنامجك، أو احجز السيارة من دون سائق لرحلة مستقلة.",
        note: "جبال · تراث · أودية · مسارات خاصة",
      },
    ],
    fleetEyebrow: "الأسطول الأبيض",
    fleetTitle: "اختر مستوى الفخامة الذي يليق بك… ودع الباقي علينا",
    fleetBody:
      "يتم تأكيد توفر السيارة والتفاصيل النهائية للرحلة عند الحجز.",
    fleetAlt:
      "رينج روفر ولكزس LX 600 وتويوتا لاند كروزر باللون الأبيض أمام مبنى فاخر بطابع عُماني",
    fleet: [
      {
        name: "رينج روفر",
        price: "120 ر.ع.",
        description:
          "وصول راقٍ للاجتماعات التنفيذية واستقبال المطار والمناسبات الخاصة.",
      },
      {
        name: "لكزس LX 600",
        price: "100 ر.ع.",
        description:
          "راحة هادئة ورحابة لجداول المدينة والأيام الأطول على الطريق.",
      },
      {
        name: "لاند كروزر",
        price: "80 ر.ع.",
        description:
          "قدرة موثوقة وراقية لمسقط والطرق الجبلية والجولات إلى الوجهات.",
      },
    ],
    rateLabel: "السعر المدرج",
    bookingNote:
      "اختر السيارة مع سائق أو بدونه. تتوفر خدمة السائق يومياً من 9:00 صباحاً إلى 9:00 مساءً.",
    bidiyah: {
      eyebrow: "إقامة صحراوية مميزة",
      title: "رحلة بدية الصحراوية",
      body:
        "انطلق في رحلة خاصة إلى كثبان بدية الذهبية، وأقم في خيمة بانورامية عصرية بنوافذ واسعة وسرير كينغ، واختتم يومك تحت سماء الصحراء المرصعة بالنجوم.",
      highlights: [
        "رحلة خاصة إلى كثبان بدية",
        "خيمة بانورامية عصرية",
        "سرير كينغ وتصميم داخلي راقٍ",
        "تأمل النجوم من شرفتك الخاصة",
      ],
      cta: "خطط لإقامتك الصحراوية",
      nightAlt: "خيمة عصرية مضاءة تحت سماء بدية المرصعة بالنجوم في سلطنة عُمان",
      campAlt: "خيمة قبة بانورامية عصرية بين كثبان بدية الذهبية",
      interiorAlt: "تصميم داخلي عصري لخيمة صحراوية مع سرير كينغ ونوافذ بانورامية",
    },
    salalah: {
      eyebrow: "رحلة موسمية مميزة",
      title: "صلالة: الجبال والشلالات والساحل",
      body:
        "اكتشف صلالة عبر طرقها الجبلية الخضراء، وأوديتها وشلالاتها المتدفقة، وسواحل ظفار الساحرة. نصمم المسار الخاص بما يناسب الموسم والطقس وإيقاع رحلتك.",
      highlights: [
        "وادي دربات والشلالات الموسمية",
        "إطلالات جبلية تلامسها السحب",
        "المغسيل وساحل ظفار المهيب",
        "برنامج خاص وتنقّل من الباب إلى الباب",
      ],
      cta: "خطط لرحلتك إلى صلالة",
      alt: "مجموعة صور لصلالة تشمل الأودية الفيروزية والشلالات الموسمية والجبال الخضراء وساحل ظفار",
    },
    destinationsEyebrow: "جولات خاصة في أنحاء عُمان",
    destinationsTitle: "أفق مختلف لكل يوم.",
    destinationsBody:
      "صمّم مساراً خاصاً حول وجهة واحدة، أو اجمع عدة محطات بارزة في رحلة تناسب وقتك.",
    destinations: [
      {
        name: "الجبل الأخضر",
        image: "/images/tours-jebel-akhdar.png",
        alt: "المدرجات والمناظر الجبلية في الجبل الأخضر بسلطنة عُمان",
        description:
          "هواء جبلي منعش ومدرجات زراعية وإطلالات واسعة فوق مناطق عُمان الداخلية.",
      },
      {
        name: "جبل شمس",
        image: "/images/tours-jebel-shams.png",
        alt: "الأخاديد والمناظر الجبلية في جبل شمس بسلطنة عُمان",
        description:
          "طريق مرتفع يقود إلى أخاديد عُمان المهيبة وحوافها الجبلية الممتدة.",
      },
      {
        name: "نزوى",
        image: "/images/tours-nizwa.png",
        alt: "عمارة نزوى التاريخية والنخيل المحيط بها في سلطنة عُمان",
        description:
          "القلعة والسوق والتراث العُماني الأصيل في محطة واحدة لا تُنسى.",
      },
      {
        name: "وادي بني خالد",
        image: "/images/tours-wadi-bani-khalid.png",
        alt: "البرك الصافية والنخيل والتكوينات الصخرية في وادي بني خالد",
        description:
          "برك صافية ونخيل وصخور منحوتة طبيعياً في رحلة منعشة إلى قلب الوادي.",
      },
    ],
    promiseTitle: "تجربة هادئة من الباب إلى الوجهة.",
    promises: [
      "سيارة بيضاء مقدمة بعناية",
      "جدول مصمم وفق يومك",
      "تنسيق احترافي قبل الانطلاق",
    ],
    ctaEyebrow: "رحلتك القادمة",
    ctaTitle: "أخبرنا إلى أين تريد أن يأخذك اليوم.",
    ctaBody:
      "شاركنا التاريخ والسيارة المفضلة وخيار السائق ونقطة الاستلام والوجهة، وسنؤكد الترتيب الأنسب لرحلتك.",
    cta: "اطلب حجزاً",
  },
} as const;

const destinationIcons = [Mountain, Mountain, Landmark, Waves] as const;

export default function ToursPage() {
  const { lang, isRTL } = useLanguage();
  const c = copy[lang];

  return (
    <div className={clsx("min-h-screen overflow-hidden bg-background text-foreground", isRTL && "font-arabic")}>
      <section
        className="relative flex min-h-[760px] items-end overflow-hidden bg-[#071018] sm:min-h-[800px] lg:min-h-[860px]"
        aria-labelledby="tours-hero-title"
      >
        <Image
          src="/images/tours-airport-welcome-flowers.png"
          alt={
            lang === "ar"
              ? "موظفة استقبال تقدم الزهور لضيفة وتدعوها إلى سيارة رينج روفر بيضاء فاخرة في مطار مسقط"
              : "A formally dressed host presenting flowers to a guest and inviting her to a white luxury Range Rover at Muscat airport"
          }
          fill
          preload
          sizes="100vw"
          className="object-cover object-[61%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05090d]/95 via-[#05090d]/70 to-[#05090d]/5 rtl:bg-gradient-to-l" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05090d] via-transparent to-[#05090d]/35" />

        <div className="container relative z-10 mx-auto px-5 pb-10 pt-36 sm:px-8 md:px-12 md:pb-14">
          <div className={clsx("max-w-3xl", isRTL && "mr-0 ml-auto text-right")}>
            <div className={clsx("mb-6 flex items-center gap-3", isRTL && "flex-row-reverse justify-end")}>
              <span className="h-px w-9 bg-accent" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent sm:text-xs">
                {c.eyebrow}
              </span>
            </div>

            <h1
              id="tours-hero-title"
              className="max-w-2xl text-balance font-serif text-4xl font-bold leading-[0.94] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {c.title}
            </h1>
            <p className="mt-6 max-w-xl text-balance text-base leading-7 text-white/76 sm:text-lg sm:leading-8">
              {c.intro}
            </p>

            <div className={clsx("mt-9 flex flex-col gap-3 sm:flex-row", isRTL && "sm:flex-row-reverse sm:justify-end")}>
              <Link
                href="#fleet"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-background transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <CarFront className="h-4 w-4" aria-hidden="true" />
                {c.exploreFleet}
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/35 bg-black/15 px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-white transition-colors hover:border-white hover:bg-white hover:text-[#071018] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {c.planJourney}
                <ArrowRight className={clsx("h-4 w-4", isRTL && "rotate-180")} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <ul
            className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/12 bg-white/12 sm:grid-cols-3"
            aria-label={lang === "ar" ? "تفاصيل الخدمة الرئيسية" : "Key service details"}
          >
            {c.facts.map(([label, value], index) => {
              const FactIcon = index === 0 ? Sparkles : index === 1 ? Clock3 : KeyRound;
              return (
                <li key={label} className="flex items-start gap-4 bg-[#071018]/82 p-5 backdrop-blur-sm sm:p-6">
                  <FactIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
                      {label}
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-white">{value}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="relative py-20 sm:py-24 lg:py-32" aria-labelledby="tours-story-title">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,var(--planet-glow),transparent_68%)]"
          aria-hidden="true"
        />
        <div className="container relative mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent sm:text-xs">
                {c.storyEyebrow}
              </span>
              <h2
                id="tours-story-title"
                className="mt-5 text-balance font-serif text-4xl font-bold leading-[0.98] tracking-tighter sm:text-5xl"
              >
                {c.storyTitle}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">{c.storyBody}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {c.purposes.map((purpose, index) => {
                const PurposeIcon = index === 0 ? BriefcaseBusiness : MapPinned;
                return (
                  <article
                    key={purpose.title}
                    className="group rounded-[1.6rem] border border-line bg-surface p-6 shadow-sm sm:p-8"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <PurposeIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-8 text-2xl font-bold leading-tight">{purpose.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted">{purpose.body}</p>
                    <p className="mt-7 border-t border-line pt-5 text-[10px] font-bold uppercase leading-5 tracking-[0.16em] text-accent">
                      {purpose.note}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="fleet" className="bg-surface py-20 sm:py-24 lg:py-32" aria-labelledby="tours-fleet-title">
        <div className="container mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid items-end gap-6 lg:grid-cols-[1fr_0.75fr] lg:gap-16">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent sm:text-xs">
                {c.fleetEyebrow}
              </span>
              <h2
                id="tours-fleet-title"
                className="mt-5 max-w-3xl text-balance font-serif text-4xl font-bold leading-[0.98] tracking-tighter sm:text-5xl lg:text-6xl"
              >
                {c.fleetTitle}
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">{c.fleetBody}</p>
          </div>

          <div className="relative mt-12 aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-line bg-background shadow-premium sm:aspect-[16/8]">
            <Image
              src="/images/tours-white-fleet-fully-branded.png"
              alt={c.fleetAlt}
              fill
              sizes="(max-width: 768px) 100vw, 92vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 text-white sm:bottom-7 sm:left-7 sm:right-7">
              <ShieldCheck className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.18em]">
                {lang === "ar" ? "اختيار راقٍ لكل مسار" : "A considered choice for every route"}
              </span>
            </div>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {c.fleet.map((vehicle, index) => (
              <article
                key={vehicle.name}
                className="relative overflow-hidden rounded-[1.5rem] border border-line bg-background p-6 sm:p-8"
              >
                <span
                  className="absolute right-6 top-5 font-mono text-4xl font-bold text-foreground/[0.045] rtl:left-6 rtl:right-auto"
                  aria-hidden="true"
                >
                  0{index + 1}
                </span>
                <CarFront className="h-6 w-6 text-accent" aria-hidden="true" />
                <h3 className="mt-8 text-2xl font-bold">{vehicle.name}</h3>
                <p className="mt-3 min-h-14 text-sm leading-6 text-muted">{vehicle.description}</p>
                <div className="mt-7 border-t border-line pt-5">
                  <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-muted">
                    {c.rateLabel}
                  </span>
                  <span className="mt-1 block font-serif text-3xl font-bold text-accent" dir="ltr">
                    {vehicle.price}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-4 rounded-[1.5rem] border border-accent/25 bg-accent/[0.06] p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-background">
              <UserRoundCheck className="h-5 w-5" aria-hidden="true" />
            </div>
            <p className="text-sm leading-7 text-foreground/80 sm:text-base">{c.bookingNote}</p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-32" aria-labelledby="tour-destinations-title">
        <div className="container mx-auto px-5 sm:px-8 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent sm:text-xs">
              {c.destinationsEyebrow}
            </span>
            <h2
              id="tour-destinations-title"
              className="mt-5 text-balance font-serif text-4xl font-bold leading-[0.98] tracking-tighter sm:text-5xl lg:text-6xl"
            >
              {c.destinationsTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {c.destinationsBody}
            </p>
          </div>

          <article className="mt-14 overflow-hidden rounded-[2rem] border border-line bg-surface shadow-premium">
            <div className="relative min-h-[390px] overflow-hidden sm:min-h-[500px] lg:min-h-[560px]">
              <Image
                src="/images/tours-bidiyah-night.png"
                alt={c.bidiyah.nightAlt}
                fill
                loading="eager"
                sizes="(max-width: 768px) 100vw, 92vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-10 lg:p-12">
                <div className={clsx("flex items-center gap-3", isRTL && "flex-row-reverse justify-end")}>
                  <Sparkles className="h-5 w-5 text-accent" aria-hidden="true" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent sm:text-xs">
                    {c.bidiyah.eyebrow}
                  </span>
                </div>
                <h3 className="mt-4 max-w-3xl text-balance font-serif text-4xl font-bold leading-none tracking-tight sm:text-5xl lg:text-6xl">
                  {c.bidiyah.title}
                </h3>
              </div>
            </div>

            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
                <p className="text-base leading-8 text-muted sm:text-lg">{c.bidiyah.body}</p>
                <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {c.bidiyah.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-sm leading-6 text-foreground/85">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-9 inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-full bg-accent px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-background transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {c.bidiyah.cta}
                  <ArrowRight className={clsx("h-4 w-4", isRTL && "rotate-180")} aria-hidden="true" />
                </Link>
              </div>

              <div className="grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:border-l lg:border-t-0 rtl:lg:border-l-0 rtl:lg:border-r">
                <div className="relative aspect-[4/3] overflow-hidden bg-background">
                  <Image
                    src="/images/tours-bidiyah-camp.png"
                    alt={c.bidiyah.campAlt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden bg-background">
                  <Image
                    src="/images/tours-bidiyah-interior.png"
                    alt={c.bidiyah.interiorAlt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </article>

          <article className="mt-8 grid overflow-hidden rounded-[2rem] border border-line bg-[#08131c] text-white shadow-premium lg:grid-cols-[1.12fr_0.88fr]">
            <div className="relative min-h-[380px] overflow-hidden sm:min-h-[480px] lg:min-h-[560px]">
              <Image
                src="/images/tours-salalah-collage.png"
                alt={c.salalah.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.015]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 lg:bg-gradient-to-r lg:from-transparent lg:to-[#08131c]/20 rtl:lg:bg-gradient-to-l" />
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <div className={clsx("flex items-center gap-3", isRTL && "flex-row-reverse justify-end")}>
                <MapPinned className="h-5 w-5 text-accent" aria-hidden="true" />
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent sm:text-xs">
                  {c.salalah.eyebrow}
                </span>
              </div>
              <h3 className="mt-5 text-balance font-serif text-4xl font-bold leading-none tracking-tight sm:text-5xl">
                {c.salalah.title}
              </h3>
              <p className="mt-6 text-base leading-8 text-white/70 sm:text-lg">{c.salalah.body}</p>
              <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {c.salalah.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-sm leading-6 text-white/85">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-9 inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-full bg-accent px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-background transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {c.salalah.cta}
                <ArrowRight className={clsx("h-4 w-4", isRTL && "rotate-180")} aria-hidden="true" />
              </Link>
            </div>
          </article>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {c.destinations.map((destination, index) => {
              const DestinationIcon = destinationIcons[index];
              return (
                <article
                  key={destination.name}
                  className="group overflow-hidden rounded-[1.6rem] border border-line bg-surface"
                >
                  <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
                    <Image
                      src={destination.image}
                      alt={destination.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 text-white sm:bottom-6 sm:left-6 sm:right-6">
                      <DestinationIcon className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                      <h3 className="text-2xl font-bold">{destination.name}</h3>
                    </div>
                  </div>
                  <p className="p-6 text-sm leading-7 text-muted sm:p-7 sm:text-base">{destination.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#08131c] py-16 text-white sm:py-20" aria-labelledby="tour-promise-title">
        <div className="container mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
            <h2 id="tour-promise-title" className="text-balance font-serif text-3xl font-bold leading-tight sm:text-4xl">
              {c.promiseTitle}
            </h2>
            <ul className="grid gap-4 sm:grid-cols-3">
              {c.promises.map((promise) => (
                <li key={promise} className="flex items-start gap-3 border-t border-white/15 pt-4 text-sm leading-6 text-white/75">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {promise}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface py-20 sm:py-24 lg:py-28" aria-labelledby="tour-cta-title">
        <div
          className="pointer-events-none absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl rtl:-left-24 rtl:right-auto"
          aria-hidden="true"
        />
        <div className="container relative mx-auto px-5 sm:px-8 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent sm:text-xs">
              {c.ctaEyebrow}
            </span>
            <h2
              id="tour-cta-title"
              className="mt-5 text-balance font-serif text-4xl font-bold leading-[0.98] tracking-tighter sm:text-5xl"
            >
              {c.ctaTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">{c.ctaBody}</p>
            <Link
              href="/contact"
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-7 py-3 text-xs font-black uppercase tracking-[0.16em] text-background transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {c.cta}
              <ArrowRight className={clsx("h-4 w-4", isRTL && "rotate-180")} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
