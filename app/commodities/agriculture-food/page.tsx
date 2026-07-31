"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  PackageCheck,
  SearchCheck,
  Ship,
  Wheat,
} from "lucide-react";
import clsx from "clsx";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/LanguageContext";

export default function AgricultureFoodPage() {
  const { lang, isRTL } = useLanguage();
  const ar = lang === "ar";

  const dates = [
    {
      name: ar ? "الخلاص" : "Khalas",
      image: "/images/dates_khalas.png",
      description: ar
        ? "صنف فاخر ذو قوام طري ونكهة العسل والكراميل، مع خيارات تعبئة مناسبة للتجزئة والهدايا."
        : "A premium variety with soft, dense flesh and honey-caramel notes, with retail and gift-pack options.",
    },
    {
      name: ar ? "الفرض" : "Fardh",
      image: "/images/dates_fardh.png",
      description: ar
        ? "تمر التصدير العُماني الرائد؛ داكن ولامع ومطاطي وغني بالحلاوة، ومناسب لطلبات التجزئة والجملة."
        : "Oman’s flagship export date—dark, glossy, chewy, and richly sweet, suited to retail and wholesale supply.",
    },
    {
      name: ar ? "الخنيزي" : "Khunaizi",
      image: "/images/dates_khunaizi.png",
      description: ar
        ? "تمر بني محمر ذو حلاوة عميقة ونكهة كثيفة، متوفر بخيارات تعبئة متعددة."
        : "A red-brown variety with deep sweetness and dense flavor, available in multiple packing formats.",
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
        ? "تمر أصفر مقرمش في مرحلة الخلال، بطابع منعش وتوريد مبرد حسب متطلبات الطلب."
        : "Bright yellow, crisp khalal-stage dates with a refreshing character and chilled supply options.",
    },
    {
      name: ar ? "المبسلي" : "Mabsali",
      image: "/images/dates_mabsali.png",
      description: ar
        ? "تمر صغير رطب وحلو بلطف من مزارع الداخلية، ملائم للأسواق والعبوات المتخصصة."
        : "A small, moist, delicately sweet date from interior groves, suited to specialty markets and packs.",
    },
  ];

  const foodProducts = [
    {
      name: ar ? "الأرز" : "Rice",
      description: ar
        ? "أرز بسمتي وأبيض طويل الحبة ومكسور، مع خيارات منشأ وتعبئة تلائم التجزئة والجملة."
        : "Basmati, long-grain white, and broken rice with origin and packing options for retail and wholesale buyers.",
    },
    {
      name: ar ? "السكر" : "Sugar",
      description: ar
        ? "سكر أبيض مكرر وسكر خام، مع خيارات التعبئة أو الشحنات السائبة حسب الطلب."
        : "Refined white and raw sugar with bagged or bulk shipment options according to the requirement.",
    },
    {
      name: ar ? "زيوت الطهي" : "Cooking Oils",
      description: ar
        ? "زيوت عباد الشمس والنخيل والذرة بأحجام تعبئة مختلفة أو توريد سائب لقطاع الأغذية."
        : "Sunflower, palm, and corn oils in multiple pack sizes or bulk supply for foodservice operations.",
    },
    {
      name: ar ? "الدقيق" : "Flour",
      description: ar
        ? "دقيق قمح متعدد الأغراض وعالي البروتين للمخابز والمشترين التجاريين من مطاحن موثوقة."
        : "All-purpose and high-protein wheat flour for bakeries and commercial buyers from trusted mills.",
    },
  ];

  const process = [
    {
      icon: Wheat,
      title: ar ? "اختيار المنشأ" : "Origin Selection",
      text: ar ? "تحديد المنتج والمنشأ وخيارات التعبئة الملائمة." : "Match the product, origin, and packing format to the requirement.",
    },
    {
      icon: SearchCheck,
      title: ar ? "فحص الجودة" : "Quality Review",
      text: ar ? "تنسيق الفحص والشهادات حسب المنتج والمنشأ." : "Coordinate inspection and certification according to product and origin.",
    },
    {
      icon: Ship,
      title: ar ? "الشحن والتتبع" : "Freight & Traceability",
      text: ar ? "متابعة المستندات والشحن من نقطة التحميل إلى التسليم." : "Follow documentation and freight from loading point to delivery.",
    },
  ];

  return (
    <main className="overflow-hidden bg-background">
      <section className="relative flex min-h-[640px] items-end bg-[#05080b] text-white md:min-h-[720px]">
        <Image
          src="/images/harvesting_brays_hero_product.png"
          alt={ar ? "حصاد المنتجات الزراعية" : "Agricultural products at harvest"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05080b] via-[#05080b]/78 to-[#05080b]/20 rtl:bg-gradient-to-l" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05080b] via-transparent to-[#05080b]/15" />

        <div className="container relative z-10 mx-auto px-5 pb-20 pt-24 sm:px-8 md:pb-28 lg:px-12">
          <Link href="/commodities" className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-accent">
            <ArrowLeft className={clsx("h-4 w-4", isRTL && "rotate-180")} />
            {ar ? "العودة إلى السلع والمواد" : "Back to Commodities"}
          </Link>
          <div className={clsx("max-w-4xl", isRTL && "text-start")}>
            <div className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-accent-2">
              <span className="h-px w-8 bg-accent-2" />
              {ar ? "الزراعة والأغذية بالجملة" : "Agriculture & Food Wholesale"}
            </div>
            <h1 className={clsx("text-balance text-5xl font-bold uppercase leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-8xl", isRTL && "font-arabic leading-[1.12]")}>
              {ar ? (
                <>
                  المنتجات الزراعية
                  <span className="block text-accent-2">والغذائية</span>
                </>
              ) : (
                <>
                  Agricultural
                  <span className="block text-accent-2">& Food Products</span>
                </>
              )}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
              {ar
                ? "ننسّق توريد الحبوب وفحص الجودة والخدمات اللوجستية، ونوفّر التمور العُمانية الفاخرة والسلع الغذائية الأساسية بالجملة للمشترين في الأسواق الإقليمية والعالمية."
                : "We coordinate grain sourcing, quality inspection, and logistics, while supplying premium Omani dates and wholesale food staples to regional and international buyers."}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#portfolio" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent-2 px-7 text-xs font-bold uppercase tracking-[0.18em] text-[#041018]">
                {ar ? "استعرض المنتجات" : "View the Portfolio"}
                <ArrowRight className={clsx("h-4 w-4", isRTL && "rotate-180")} />
              </Link>
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-7 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-white">
                {ar ? "اطلب عرضاً" : "Request a Quote"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label={ar ? "أقسام المنتجات" : "Product sections"} className="border-b border-line px-5 py-8 sm:px-8 lg:px-12">
        <div className="container mx-auto grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: ar ? "الزراعة والحبوب" : "Agriculture & Grains", href: "#agriculture" },
            { label: ar ? "التمور العُمانية" : "Omani Dates", href: "#dates" },
            { label: ar ? "الأغذية بالجملة" : "Food Wholesale", href: "#food" },
            { label: ar ? "الجودة والخدمات اللوجستية" : "Quality & Logistics", href: "#quality" },
          ].map((item, index) => (
            <Link key={item.href} href={item.href} className="group flex items-center gap-4 rounded-xl border border-transparent px-3 py-3 text-sm font-semibold text-foreground transition-colors hover:border-line hover:bg-surface">
              <span className="font-mono text-xs text-accent-2">0{index + 1}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      <section id="agriculture" className="scroll-mt-24 px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="container mx-auto grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <AnimatedSection direction="left" className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src="/images/wheat_loading.png" alt={ar ? "مناولة الحبوب والخدمات اللوجستية" : "Grain handling and logistics"} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
          </AnimatedSection>
          <AnimatedSection direction="right" className={clsx(isRTL && "text-start")}>
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-accent-2">
              <Wheat className="h-5 w-5" />
              {ar ? "الزراعة والحبوب" : "Agriculture & Grains"}
            </div>
            <h2 className={clsx("mt-5 text-balance text-4xl font-bold uppercase leading-none tracking-tight text-foreground md:text-6xl", isRTL && "font-arabic leading-[1.18]")}>
              {ar ? "من المنشأ إلى السوق." : "From origin to market."}
            </h2>
            <p className="mt-7 text-base leading-7 text-muted">
              {ar
                ? "ننسّق توريد الحبوب وفحص الجودة والخدمات اللوجستية وفق مواصفات المنتج والكمية والوجهة، مع متابعة المستندات من التحميل حتى التسليم."
                : "We coordinate grain sourcing, quality review, and logistics around product specification, volume, and destination, with documentation tracked from loading through delivery."}
            </p>
            <div id="quality" className="mt-9 grid gap-4 sm:grid-cols-3">
              {process.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="rounded-2xl border border-line bg-surface p-5">
                    <Icon className="h-5 w-5 text-accent-2" />
                    <h3 className="mt-5 font-bold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-muted">{step.text}</p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="dates" className="scroll-mt-24 bg-surface px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="container mx-auto">
          <AnimatedSection direction="up" className={clsx("grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end", isRTL && "text-start")}>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-2">{ar ? "من عُمان" : "From Oman"}</span>
              <h2 className={clsx("mt-5 text-balance text-4xl font-bold uppercase leading-none tracking-tight text-foreground md:text-6xl", isRTL && "font-arabic leading-[1.18]")}>
                {ar ? "تمور عُمانية مختارة." : "Selected Omani dates."}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-muted">
              {ar
                ? "مجموعة من الأصناف العُمانية المعروفة، مع خيارات تعبئة تلائم أسواق التجزئة والجملة والهدايا."
                : "A portfolio of recognised Omani varieties with packing options for retail, wholesale, and gifting markets."}
            </p>
          </AnimatedSection>

          <div id="portfolio" className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dates.map((date) => (
              <AnimatedSection key={date.name} direction="up" className="group overflow-hidden rounded-2xl border border-line bg-background">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={date.image} alt={date.name} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
                </div>
                <div className={clsx("p-6", isRTL && "text-start")}>
                  <h3 className="text-2xl font-bold text-foreground">{date.name}</h3>
                  <div className="my-4 h-px w-10 bg-accent-2" />
                  <p className="text-sm leading-6 text-muted">{date.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="food" className="scroll-mt-24 px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <AnimatedSection direction="left" className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image src="/images/Food_export_import.png" alt={ar ? "منتجات غذائية بالجملة للاستيراد والتصدير" : "Wholesale food products for import and export"} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
            </AnimatedSection>
            <AnimatedSection direction="right" className={clsx(isRTL && "text-start")}>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-accent">
                <PackageCheck className="h-5 w-5" />
                {ar ? "الأغذية بالجملة" : "Food Wholesale"}
              </div>
              <h2 className={clsx("mt-5 text-balance text-4xl font-bold uppercase leading-none tracking-tight text-foreground md:text-6xl", isRTL && "font-arabic leading-[1.18]")}>
                {ar ? "من المنشأ إلى المستودع." : "From origin to warehouse."}
              </h2>
              <p className="mt-7 text-base leading-7 text-muted">
                {ar
                  ? "نختار منتجين موثوقين، وننسّق الفحص والشهادات والشحن والتوزيع لتجار التجزئة والموزعين وقطاع الضيافة."
                  : "We select trusted producers, then coordinate inspection, certification, shipping, and distribution for retailers, distributors, and hospitality buyers."}
              </p>
              <div className="mt-8 space-y-4">
                {[
                  ar ? "خيارات فحص طرف ثالث حسب المنتج ومتطلبات الصفقة." : "Third-party inspection options according to product and transaction requirements.",
                  ar ? "شحن بالحاويات أو بكميات سائبة مع تتبع المستندات." : "Containerized or bulk shipment options with document traceability.",
                  ar ? "معايير حلال وISO 22000 وHACCP حسب المنتج والمنشأ." : "Halal, ISO 22000, and HACCP standards according to product and origin.",
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
              <AnimatedSection key={product.name} direction="up" className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
                <div className="my-4 h-px w-9 bg-accent" />
                <p className="text-sm leading-6 text-muted">{product.description}</p>
              </AnimatedSection>
            ))}
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
                ? "أرسل الصنف والكمية والمواصفات والوجهة، وسنراجع خيارات المنشأ والفحص والخدمات اللوجستية."
                : "Send the product, volume, specification, and destination, and we will review origin, inspection, and logistics options."}
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
