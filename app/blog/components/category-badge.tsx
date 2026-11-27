import { departmentIcon, type BlogCategory } from "../data";
import { DEPARTMENT_ICONS } from "./department-icons";

// Department label on article cards: the department's own icon (the same one
// as on the homepage and in the filter pills) on a light teal tag.
export function CategoryBadge({ category }: { category: BlogCategory }) {
  const Icon = DEPARTMENT_ICONS[departmentIcon(category)];
  return (
    <span className="inline-flex h-7 max-w-full items-center gap-1.5 rounded-full bg-[#E3F6F7] px-3 text-[13px] font-medium text-[#0B6A73]">
      <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
      <span className="truncate">{category}</span>
    </span>
  );
}
