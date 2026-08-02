import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CourseDetailPage } from "@/components/courses/detail/course-detail-page";
import {
  courseSlugs,
  getCourseBySlug,
} from "@/content/courses";

type CourseRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return courseSlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: CourseRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {};
  }

  return {
    title: course.seo.title,
    description: course.seo.description,
    alternates: {
      canonical: course.seo.canonical,
    },
    openGraph: {
      title: course.seo.title,
      description: course.seo.description,
      url: course.seo.canonical,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: course.seo.title,
      description: course.seo.description,
    },
  };
}

export default async function CourseRoute({ params }: CourseRouteProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return <CourseDetailPage course={course} />;
}
