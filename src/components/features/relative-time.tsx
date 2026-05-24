"use client";

import { useEffect, useState } from "react";
import { formatRelativeTime } from "@/lib/utils";

interface RelativeTimeProps {
  date: string;
  className?: string;
}

export function RelativeTime({ date, className }: RelativeTimeProps) {
  const [label, setLabel] = useState(() => formatRelativeTime(date));

  useEffect(() => {
    const id = setInterval(() => setLabel(formatRelativeTime(date)), 60_000);
    return () => clearInterval(id);
  }, [date]);

  return (
    <time dateTime={date} className={className}>
      {label}
    </time>
  );
}
