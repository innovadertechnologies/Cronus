import { LibraryBig } from "lucide-react";
import { DEPARTMENT_ICONS, type DepartmentIconKey } from "./department-icons";

export type CategoryOption = { value: string; label: string; count: number; icon?: DepartmentIconKey };

type Props = {
  options: CategoryOption[]; // first option is "All articles"
  active: string;
  onSelect: (value: string) => void;
};

// Filter pills. Phones and tablets: one horizontally scrolling row that bleeds
// to the screen edges (the page itself never scrolls sideways). Desktop: the
// pills wrap onto as many centred rows as they need. Each department keeps its
// own icon (the same as the homepage Departments section); the selected pill
// takes the brand teal.
export function BlogCategories({ options, active, onSelect }: Props) {
  return (
    <nav aria-label="Article categories" className="-mx-4 sm:-mx-8 lg:mx-0">
      <ul className="flex gap-2 overflow-x-auto px-4 py-1 [scrollbar-width:none] sm:px-8 lg:flex-wrap lg:justify-center lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
        {options.map(({ value, label, count, icon }) => {
          const selected = value === active;
          const Icon = icon ? DEPARTMENT_ICONS[icon] : LibraryBig;
          return (
            <li key={value} className="shrink-0">
              <button
                type="button"
                aria-pressed={selected}
                onClick={() => onSelect(value)}
                className={`flex h-10 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E7C86] ${
                  selected
                    ? "bg-[#0E7C86] text-white"
                    : "bg-white text-[#0B3446] ring-1 ring-inset ring-[#0B3446]/15 hover:bg-[#E3F6F7] hover:ring-[#0E7C86]/40"
                }`}
              >
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className={`h-4 w-4 shrink-0 ${selected ? "text-white" : "text-[#5B6B73]"}`}
                />
                {label}
                <span className={`tabular-nums ${selected ? "text-white/75" : "text-[#8A979D]"}`}>{count}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
