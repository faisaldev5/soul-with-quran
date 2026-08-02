import type { LucideIcon } from "lucide-react";
import {
  Baby,
  BookMarked,
  BookOpen,
  BookOpenCheck,
  CalendarCheck,
  Clock3,
  Gauge,
  HeartHandshake,
  Link2,
  ListChecks,
  PenLine,
  Repeat2,
  UserRound,
  UsersRound,
  Volume2,
} from "lucide-react";
import type { CourseIconName } from "@/content/courses/types";

const iconMap: Record<CourseIconName, LucideIcon> = {
  baby: Baby,
  "book-marked": BookMarked,
  "book-open": BookOpen,
  "book-open-check": BookOpenCheck,
  "calendar-check": CalendarCheck,
  clock: Clock3,
  gauge: Gauge,
  "heart-handshake": HeartHandshake,
  link: Link2,
  "list-checks": ListChecks,
  "pen-line": PenLine,
  repeat: Repeat2,
  "user-round": UserRound,
  "users-round": UsersRound,
  volume: Volume2,
};

type CourseIconProps = {
  name: CourseIconName;
  className?: string;
  strokeWidth?: number;
};

export function CourseIcon({
  className,
  name,
  strokeWidth = 1.7,
}: CourseIconProps) {
  const Icon = iconMap[name];

  return (
    <Icon
      aria-hidden="true"
      className={className}
      strokeWidth={strokeWidth}
    />
  );
}
