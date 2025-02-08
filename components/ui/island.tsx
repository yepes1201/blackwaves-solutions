import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Island({ children, className, ...props }: Props) {
  return (
    <span
      className={cn(
        `text-sm sm:text-base px-4 py-2 rounded-full backdrop-blur supports-[backdrop-filter]:bg-island/50 border border-primary/10`,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
