import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  eyebrow?: string;
  className?: string;
}

export function PageHeader({
  title,
  description,
  eyebrow,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("py-8 md:py-12 border-b border-border", className)}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl md:text-5xl font-extrabold serif text-balance">
        {title}
      </h1>
      {description && (
        <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
