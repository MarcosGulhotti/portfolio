import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/i18n/config";
import { Hero } from "@/components/site-header";
import { FloatingStack } from "@/components/floating-stack";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ProjectList } from "@/components/project-list";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <FloatingStack dict={dict} />
      <ExperienceTimeline locale={locale} dict={dict} />
      <ProjectList locale={locale} dict={dict} featuredOnly showViewAll />
    </>
  );
}
