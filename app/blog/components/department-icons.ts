import {
  Activity,
  Baby,
  Bone,
  Brain,
  Droplet,
  Ear,
  Eye,
  HeartPulse,
  Scissors,
  Smile,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import type { Department } from "@/app/homepage/data";

export const DEPARTMENT_ICONS: Record<Department["icon"], LucideIcon> = {
  stethoscope: Stethoscope,
  bone: Bone,
  spine: Activity,
  baby: Baby,
  scissors: Scissors,
  droplet: Droplet,
  ear: Ear,
  brain: Brain,
  heart: HeartPulse,
  eye: Eye,
  smile: Smile,
};

export type DepartmentIconKey = Department["icon"];
