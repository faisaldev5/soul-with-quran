import { CourseAudience } from "@/components/courses/detail/course-audience";
import { CourseDetailHero } from "@/components/courses/detail/course-detail-hero";
import { CourseFaq } from "@/components/courses/detail/course-faq";
import { CourseFinalCta } from "@/components/courses/detail/course-final-cta";
import { CourseJourney } from "@/components/courses/detail/course-journey";
import { CourseLearningFocus } from "@/components/courses/detail/course-learning-focus";
import { CourseLessonFormat } from "@/components/courses/detail/course-lesson-format";
import { RelatedCourses } from "@/components/courses/detail/related-courses";
import { CourseTutorPreview } from "@/components/courses/detail/course-tutor-preview";
import type { CourseDetail } from "@/content/courses/types";
import { siteUrl } from "@/lib/site";

type CourseDetailPageProps = {
  course: CourseDetail;
};

function CourseStructuredData({ course }: CourseDetailPageProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: course.breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.label,
      ...(breadcrumb.href
        ? {
            item: new URL(breadcrumb.href, siteUrl).toString(),
          }
        : {}),
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: course.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([breadcrumbSchema, faqSchema]),
      }}
    />
  );
}

export function CourseDetailPage({ course }: CourseDetailPageProps) {
  return (
    <>
      <CourseDetailHero course={course} />
      <CourseAudience course={course} />
      <CourseLearningFocus course={course} />
      <CourseLessonFormat course={course} />
      <CourseJourney course={course} />
      <CourseTutorPreview course={course} />
      <CourseFaq course={course} />
      <RelatedCourses course={course} />
      <CourseFinalCta course={course} />
      <CourseStructuredData course={course} />
    </>
  );
}
