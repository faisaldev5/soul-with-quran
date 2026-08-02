import type { CourseDetail } from "@/content/courses/types";
import { hifzCourse } from "@/content/courses/hifz";
import { islamicStudiesCourse } from "@/content/courses/islamic-studies";
import { nazraCourse } from "@/content/courses/nazra";
import { qaidaCourse } from "@/content/courses/qaida";
import { tajweedCourse } from "@/content/courses/tajweed";

export const courseRegistry = {
  qaida: qaidaCourse,
  nazra: nazraCourse,
  tajweed: tajweedCourse,
  hifz: hifzCourse,
  "islamic-studies": islamicStudiesCourse,
} satisfies Record<string, CourseDetail>;

export const courseSlugs = Object.keys(courseRegistry);

export function getCourseBySlug(slug: string) {
  return courseRegistry[slug as keyof typeof courseRegistry];
}
