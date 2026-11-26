import { LibraryBig } from "lucide-react";
import { DEPARTMENT_ICONS, type DepartmentIconKey } from "./department-icons";

export type CategoryOption = { value: string; label: string; count: number; icon?: DepartmentIconKey };

type Props = {
  options: CategoryOption[]; // first option is "All articles"
  active: string;
  onSelect: (value: string) => void;
};

// Phones and tablets: one horizontally scrolling row of chips that bleeds to
// the screen edges (the page itself never overflows).
// Desktop: a sticky sidebar. "All articles" on its own, then the departments,
// each with its own icon (the same as the homepage Departments section) and
// its article count. The selected row is a small surface step; its icon
// takes the accent.
export function BlogCategories({ options, active, onSelect }: Props) {
  const [all, ...departments] = options;

  const row = ({ value, label, count, icon }: CategoryOption) => {
    const selected = value === active;
    const Icon = icon ? DEPARTMENT_ICONS[icon] : LibraryBig;
    return (
      <li key={value} className="shrink-0">
        <button
          type="button"
          aria-pressed={selected}
          onClick={() => onSelect(value)}
          className={[
            "group flex items-center gap-2 whitespace-nowrap text-sm transition-colors",
            // chip (phones, tablets)
            "h-10 rounded-full px-4 font-medium",
            // sidebar row (desktop)
            "lg:h-9 lg:w-full lg:gap-2.5 lg:rounded-lg lg:px-3 lg:font-normal lg:ring-0",
            selected
              ? "bg-[#0B3446] text-white lg:bg-[#F6F3EE] lg:font-medium lg:text-[#0B3446]"
              : "bg-white text-[#0B3446] ring-1 ring-inset ring-[#0B3446]/15 hover:ring-[#0B3446]/40 lg:text-[#46575F] lg:hover:bg-[#F6F3EE]/60 lg:hover:text-[#0B3446]",
          ].join(" ")}
        >
          <Icon
            aria-hidden="true"
            strokeWidth={1.5}
            className={`h-4 w-4 shrink-0 ${selected ? "lg:text-[#0B6A73]" : "lg:text-[#5B6B73] lg:group-hover:text-[#0B3446]"}`}
          />
          <span className="lg:min-w-0 lg:flex-1 lg:truncate lg:text-left">{label}</span>
          <span className={`hidden tabular-nums lg:inline ${selected ? "text-[#0B3446]" : "text-[#5B6B73]"}`}>{count}</span>
        </button>
      </li>
    );
  };

  return (
    <nav aria-label="Article categories" className="-mx-4 sm:-mx-8 lg:sticky lg:top-28 lg:mx-0">
      <ul className="flex gap-2 overflow-x-auto px-4 py-1 [scrollbar-width:none] sm:px-8 lg:block lg:space-y-0.5 lg:overflow-visible lg:p-0 [&::-webkit-scrollbar]:hidden">
        {row(all)}
        <li aria-hidden="true" className="hidden px-3 pb-2 pt-6 text-sm text-[#5B6B73] lg:block">
          By department
        </li>
        {departments.map(row)}
      </ul>
    </nav>
  );
}
