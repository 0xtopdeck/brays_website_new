"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Factory,
  PackageCheck,
  ShieldCheck,
  Ship,
  Wheat,
} from "lucide-react";
import clsx from "clsx";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/LanguageContext";

export default function CommoditiesPage() {
  const { lang, isRTL } = useLanguage();
  const ar = lang === "ar";

  const dates = [
    {
      name: ar ? "الخلاص" : "Khalas",
      image: "/images/dates_khalas.png",
      description: ar
        ? "صنف فاخر ذو قوام طري ونكهة العسل والكراميل، يُعبّأ في علب 250 غ و500 غ و1 كغ."
        : "A premium variety with soft, dense flesh and honey-caramel notes, packed in 250 g, 500 g, and 1 kg gift boxes.",
    },
    {
      name: ar ? "الفرض" : "Fardh",
      image: "/images/dates_fardh.png",
      description: ar
        ? "تمر التصدير العُماني الرائد؛ داكن ولامع ومطاطي وغني بالحلاوة، متوفر أيضاً في عبوات صب 5 و10 كغ."
        : "Oman’s flagship export date—dark, glossy, chewy, and richly sweet, also available in 5 kg and 10 kg bulk cases.",
    },
    {
      name: ar ? "الخنيزي" : "Khunaizi",
      image: "/images/dates_khunaizi.png",
      description: ar
        ? "تمر بني محمر ذو حلاوة عميقة ونكهة كثيفة، في عبوات 500 غ و1 كغ و5 كغ."
        : "A red-brown variety with deep sweetness and dense flavor, packed in 500 g, 1 kg, and 5 kg formats.",
    },
    {
      name: ar ? "النغال" : "Naghal",
      image: "/images/dates_naghal.png",
      description: ar
        ? "تمر صلب متوسط الحلاوة يُقطف مبكراً، مناسب للاستهلاك الطازج والحلويات الحرفية."
        : "A firm, mildly sweet early-harvest date, ideal for fresh consumption and artisan confectionery.",
    },
    {
      name: ar ? "الخصاب" : "Khasab",
      image: "/images/dates_khasab.png",
      description: ar
        ? "تمر أصفر مقرمش في مرحلة الخلال، بنكهة منعشة، ويُقدّم في عبوات مبردة 500 غ."
        : "Bright yellow, crisp khalal-stage dates with a refreshing character, supplied in chilled 500 g packs.",
    },
    {
      name: ar ? "المبسلي" : "Mabsali",
      image: "/images/dates_mabsali.png",
      description: ar
        ? "تمر صغير رطب وحلو بلطف من مزارع الداخلية، في عبوات 250 غ و500 غ للأسواق المتخصصة."
        : "A small, moist, delicately sweet date from interior groves, packed in 250 g and 500 g specialty formats.",
    },
  ];

  const foodProducts = [
    {
      name: ar ? "الأرز" : "Rice",
      description: ar
        ? "بسمتي، أبيض طويل الحبة، ومكسور في أكياس 5 و25 و50 كغ؛ درجات هندية وباكستانية وتايلاندية."
        : "Basmati, long-grain white, and broken rice in 5, 25, and 50 kg bags; Indian, Pakistani, and Thai grades.",
    },
    {
      name: ar ? "السكر" : "Sugar",
      description: ar
        ? "سكر أبيض مكرر ICUMSA 45 وسكر خام بنسبة 99.7+ بريكس، بأكياس 50 كغ أو شحنات صب."
        : "Refined white sugar ICUMSA 45 and raw sugar at 99.7+ Brix, in 50 kg bags or bulk shipments.",
    },
    {
      name: ar ? "زيوت الطهي" : "Cooking Oils",
      description: ar
        ? "زيوت عباد الشمس والنخيل والذرة في عبوات 1 و5 و20 لتر أو ناقلات صب."
        : "Sunflower, palm, and corn oils in 1, 5, and 20 L packs or bulk tankers.",
    },
    {
      name: ar ? "الدقيق" : "Flour",
      description: ar
        ? "دقيق متعدد الأغراض وعالي البروتين للمخابز في أكياس 25 و50 كغ من مطاحن معتمدة دولياً."
        : "All-purpose and high-protein wheat flour for bakeries in 25 and 50 kg bags from internationally certified mills.",
    },
  ];

  return (
    <main className="overflow-hidden bg-background">
      <section className="relative flex min-h-[620px] items-end bg-[#05080b] text-white md:min-h-[700px]">
        <Image
          src="/images/Food_export_import.png"
          alt={ar ? "توريد السلع الغذائية والمواد الصناعية" : "Food commodities and industrial materials supply"}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05080b] via-[#05080b]/80 to-[#05080b]/25 rtl:bg-gradient-to-l" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05080b] via-transparent to-[#05080b]/20" />

        <div className="container relative z-10 mx-auto px-5 pb-20 pt-24 sm:px-8 md:pb-28 lg:px-12">
          <div className={clsx("max-w-4xl", isRTL && "text-start")}>
            <div className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-8 bg-accent" />
              {ar ? "نشاط تجاري داعم" : "Supporting trading activity"}
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
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
              {ar
                ? "وجهة واحدة للزراعة والأغذية بالجملة والصلب الإنشائي والكبريت — مع توريد وفحص وتنسيق لوجستي يلائم متطلبات كل مشروع."
                : "One destination for agriculture, food wholesale, structural steel, and sulfur—with sourcing, inspection, and logistics shaped around each requirement."}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line px-5 py-12 sm:px-8 lg:px-12">
        <div className="container mx-auto grid gap-6 md:grid-cols-4">
          {[
            ar ? "الزراعة والتمور" : "Agriculture & Dates",
            ar ? "الأغذية بالجملة" : "Food Wholesale",
            ar ? "المواد الصناعية" : "Industrial Materials",
            ar ? "الكبريت" : "Sulfur",
          ].map((label, index) => (
            <div key={label} className="flex items-center gap-4">
              <span className="font-mono text-xs font-bold text-accent">
                0{index + 1}
              </span>
              <span className="text-sm font-semibold text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="agriculture" className="scroll-mt-24 px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="container mx-auto">
          <AnimatedSection
            direction="up"
            className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
          >
            <div className={clsx(isRTL && "text-start")}>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-accent-2">
                <Wheat className="h-5 w-5" />
                {ar ? "الزراعة" : "Agriculture"}
              </div>
              <h2
                className={clsx(
                  "mt-5 text-balance text-4xl font-bold uppercase leading-none tracking-tight text-foreground md:text-6xl",
                  isRTL && "font-arabic leading-[1.18]"
                )}
              >
                {ar ? "حبوب وتمور عُمانية فاخرة." : "Grains and premium Omani dates."}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-muted">
              {ar
                ? "ننسّق توريد الحبوب وفحص الجودة والخدمات اللوجستية، ونقدّم مجموعة مختارة من التمور العُمانية مع خيارات تعبئة للأسواق العالمية."
                : "We coordinate grain sourcing, quality inspection, and logistics, while offering a selected portfolio of Omani dates with packaging options for international markets."}
            </p>
          </AnimatedSection>

          <AnimatedSection
            direction="up"
            className="relative mt-14 aspect-[16/7] min-h-[320px] overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/wheat_loading.png"
              alt={ar ? "مناولة الحبوب والخدمات اللوجستية" : "Grain handling and logistics"}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-10">
              <p className="max-w-2xl text-sm leading-6 text-white/75 md:text-base">
                {ar
                  ? "اختيار المنشأ، فحص طرف ثالث، تنسيق الشحن، وتتبع المستندات من نقطة التحميل حتى التسليم."
                  : "Origin selection, third-party inspection, freight coordination, and document traceability from loading point to delivery."}
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dates.map((date) => (
              <AnimatedSection
                key={date.name}
                direction="up"
                className="group overflow-hidden rounded-2xl border border-line bg-surface"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={date.image}
                    alt={date.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground">{date.name}</h3>
                  <div className="my-4 h-px w-10 bg-accent-2" />
                  <p className="text-sm leading-6 text-muted">{date.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="food" className="scroll-mt-24 bg-surface px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <AnimatedSection
              direction="left"
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/Food_export_import.png"
                alt={ar ? "منتجات غذائية بالجملة للاستيراد والتصدير" : "Wholesale food products for import and export"}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </AnimatedSection>
            <AnimatedSection direction="right" className={clsx(isRTL && "text-start")}>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-accent">
                <PackageCheck className="h-5 w-5" />
                {ar ? "الأغذية بالجملة" : "Food Wholesale"}
              </div>
              <h2
                className={clsx(
                  "mt-5 text-balance text-4xl font-bold uppercase leading-none tracking-tight text-foreground md:text-6xl",
                  isRTL && "font-arabic leading-[1.18]"
                )}
              >
                {ar ? "من المنشأ إلى المستودع." : "From origin to warehouse."}
              </h2>
              <p className="mt-7 text-base leading-7 text-muted">
                {ar
                  ? "نختار منتجين موثوقين في آسيا وأوروبا والأمريكتين، وندير الفحص والشهادات والشحن والتوزيع لتجار التجزئة والموزعين وقطاع الضيافة."
                  : "We select trusted producers across Asia, Europe, and the Americas, then manage inspection, certification, shipping, and distribution for retailers, distributors, and hospitality buyers."}
              </p>

              <div className="mt-8 space-y-4">
                {[
                  ar
                    ? "فحص طرف ثالث عبر SGS أو Bureau Veritas للنقاء والرطوبة وسلامة الغذاء."
                    : "Third-party SGS or Bureau Veritas testing for purity, moisture, and food safety.",
                  ar
                    ? "شحن بالحاويات أو الصب من صلالة وموانئ الخليج مع تتبع كامل."
                    : "Containerized or bulk shipments from Salalah and Gulf ports with full traceability.",
                  ar
                    ? "معايير حلال وISO 22000 وHACCP حسب المنتج والمنشأ."
                    : "Halal, ISO 22000, and HACCP standards according to product and origin.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-6 text-muted">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {foodProducts.map((product) => (
              <AnimatedSection
                key={product.name}
                direction="up"
                className="rounded-2xl border border-line bg-background p-6"
              >
                <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
                <div className="my-4 h-px w-9 bg-accent" />
                <p className="text-sm leading-6 text-muted">{product.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="industrial-materials" className="scroll-mt-24 bg-[#06090d] px-5 py-24 text-white sm:px-8 md:py-32 lg:px-12">
        <div className="container mx-auto">
          <AnimatedSection
            direction="up"
            className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
          >
            <div className={clsx(isRTL && "text-start")}>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-accent">
                <Factory className="h-5 w-5" />
                {ar ? "المواد الصناعية" : "Industrial Materials"}
              </div>
              <h2
                className={clsx(
                  "mt-5 text-4xl font-bold uppercase leading-none tracking-tight md:text-6xl",
                  isRTL && "font-arabic leading-[1.18]"
                )}
              >
                {ar ? "صلب وخشب إنشائي موثوق." : "Steel and structural plywood."}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-white/62">
              {ar
                ? "نؤمّن المواد من منتجين دوليين معتمدين، ونتحقق من المواصفات واختبارات التحمل، ثم ننسّق التسليم إلى الموقع وفق جدول المشروع."
                : "We source from verified international producers, confirm specification and load-bearing requirements, and coordinate timed delivery to the worksite."}
            </p>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {[
              {
                image: "/images/steel_brays_hero_product.png",
                title: ar ? "الفولاذ الإنشائي" : "Structural Steel",
                description: ar
                  ? "توريد درجات ومقاطع مختارة للمشاريع الصناعية والإنشائية مع مراجعة مستندات المصنع."
                  : "Selected grades and profiles for industrial and construction projects, supported by mill documentation review.",
              },
              {
                image: "/images/plywood_deck_construction_use.png",
                title: ar ? "الخشب الرقائقي الهيكلي" : "Structural Plywood",
                description: ar
                  ? "مواد مختارة للقوالب والأسطح والاستخدامات الإنشائية وفق مواصفات المشروع."
                  : "Selected materials for formwork, decking, and structural applications according to project specifications.",
              },
            ].map((item) => (
              <AnimatedSection
                key={item.title}
                direction="up"
                className="group relative min-h-[520px] overflow-hidden rounded-2xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-600 group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                  <h3 className="text-3xl font-bold">{item.title}</h3>
                  <p className="mt-4 max-w-lg text-sm leading-6 text-white/68">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="sulfur" className="scroll-mt-24 px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="container mx-auto grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <AnimatedSection
            direction="left"
            className="relative aspect-[4/3] overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/granular_sulfur.jpg"
              alt={ar ? "كبريت حبيبي صناعي" : "Industrial granular sulfur"}
              fill
              unoptimized
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </AnimatedSection>

          <AnimatedSection direction="right" className={clsx(isRTL && "text-start")}>
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-accent">
              <ShieldCheck className="h-5 w-5" />
              {ar ? "الكبريت" : "Sulfur"}
            </div>
            <h2
              className={clsx(
                "mt-5 text-balance text-4xl font-bold uppercase leading-none tracking-tight text-foreground md:text-6xl",
                isRTL && "font-arabic leading-[1.18]"
              )}
            >
              {ar ? "إمداد صناعي متسق." : "Consistent industrial supply."}
            </h2>
            <p className="mt-7 text-base leading-7 text-muted">
              {ar
                ? "نوفر الكبريت الحبيبي بدرجات صناعية مع التركيز على النقاء والمعالجة المستقرة وتنسيق الشحن للأسواق الإقليمية والعالمية."
                : "We supply industrial-grade granular sulfur with attention to purity, consistent processing, and coordinated freight for regional and international markets."}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ar ? "مراجعة المواصفات والنقاء" : "Specification and purity review",
                ar ? "تنسيق التعبئة والتحميل" : "Packing and loading coordination",
                ar ? "حلول شحن إقليمية وعالمية" : "Regional and global freight options",
                ar ? "توثيق الدفعة والمنشأ" : "Batch and origin documentation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex min-h-20 items-center gap-3 rounded-xl border border-line bg-surface p-4 text-sm font-medium text-foreground"
                >
                  <Check className="h-4 w-4 shrink-0 text-accent" />
                  {item}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-surface px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <AnimatedSection
          direction="up"
          className="container mx-auto grid gap-8 rounded-3xl border border-line bg-background p-7 md:grid-cols-[1fr_auto] md:items-center md:p-12"
        >
          <div className={clsx(isRTL && "text-start")}>
            <Ship className="h-7 w-7 text-accent" />
            <h2 className="mt-5 text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
              {ar ? "شاركنا متطلبات التوريد." : "Share your supply requirement."}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted md:text-base">
              {ar
                ? "أرسل الصنف والكمية والمواصفات والوجهة، وسنراجع خيارات المنشأ والفحص والخدمات اللوجستية."
                : "Send the product, volume, specification, and destination, and we will review origin, inspection, and logistics options."}
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-7 text-xs font-bold uppercase tracking-[0.18em] text-[#041018]"
          >
            {ar ? "اطلب عرضاً" : "Request a Quote"}
            <ArrowRight className={clsx("h-4 w-4", isRTL && "rotate-180")} />
          </Link>
        </AnimatedSection>
      </section>
    </main>
  );
}
