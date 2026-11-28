import Image from "next/image";
import { departmentIcon, type BlogPost } from "../data";
import { DEPARTMENT_ICONS } from "./department-icons";

type Props = {
  post: BlogPost;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function PostImage({ post, sizes, priority = false, className = "" }: Props) {
  if (post.image) {
    return (
      <Image
        src={post.image}
        alt={post.imageAlt ?? ""}
        fill
        sizes={sizes}
        priority={priority}
        fetchPriority={priority ? "high" : undefined}
        className={`object-cover ${className}`}
      />
    );
  }
  const Icon = DEPARTMENT_ICONS[departmentIcon(post.category)];
  return (
    <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center bg-[#E3F6F7]">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#0B6A73] ring-1 ring-[#0B3446]/10">
        <Icon className="h-7 w-7" strokeWidth={1.5} />
      </span>
    </span>
  );
}
