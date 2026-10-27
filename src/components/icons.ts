import {
  CornerDownRight,
  Shrink,
  Split,
  CircleStop,
  Disc,
  Shapes,
  Ruler,
  CircleGauge,
  Layers,
  PencilRuler,
  ShieldCheck,
  FileText,
  ScanLine,
  Flame,
  FlaskConical,
  Atom,
  type LucideIcon,
} from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
  CornerDownRight,
  Shrink,
  Split,
  CircleStop,
  Disc,
  Shapes,
  Ruler,
  CircleGauge,
  Layers,
  PencilRuler,
  ShieldCheck,
  FileText,
  ScanLine,
  Flame,
  FlaskConical,
  Atom,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Shapes;
}
