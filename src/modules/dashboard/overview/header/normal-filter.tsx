"use client";

import qs from "query-string";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format, subDays } from "date-fns";
import { Calendar } from "lucide-react";

const data = [
  { id: "1", name: "This week" },
  { id: "2", name: "Last two weeks" },
  { id: "3", name: "Last month" },
  { id: "4", name: "Last 60 days" },
];

export const NormalFilter = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const defaultTo = new Date();
  const thisWeek = subDays(defaultTo, 7);
  const twoWeek = subDays(defaultTo, 14);
  const lastMonth = subDays(defaultTo, 30);
  const last60Days = subDays(defaultTo, 60);

  const slug = params.get("slug") || "all";
  const from = params.get("from") || "";
  const to = params.get("to") || "";

  const onChange = (newValue: string) => {
    let query;
    if (newValue === "1") {
      query = {
        from: format(thisWeek, "yyyy-MM-dd"),
        to: format(defaultTo, "yyyy-MM-dd"),
      };
    }
    if (newValue === "2") {
      query = {
        from: format(twoWeek, "yyyy-MM-dd"),
        to: format(defaultTo, "yyyy-MM-dd"),
      };
    }
    if (newValue === "3") {
      query = {
        from: format(lastMonth, "yyyy-MM-dd"),
        to: format(defaultTo, "yyyy-MM-dd"),
      };
    }
    if (newValue === "4") {
      query = {
        from: format(last60Days, "yyyy-MM-dd"),
        to: format(defaultTo, "yyyy-MM-dd"),
      };
    }

    const url = qs.stringifyUrl(
      {
        url: pathname,
        query,
      },
      { skipNull: true, skipEmptyString: true }
    );

    router.push(url);
  };

  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="ml-auto h-8 rounded-md font-normal bg-background  transition shadow-none w-full md:w-48">
        <div className="flex items-center gap-2">
          <Calendar className="size-4" />
          <SelectValue placeholder="This week" />
        </div>
      </SelectTrigger>
      <SelectContent align="end" className="dark:border-muted">
        {/* <SelectItem value="all">Current period</SelectItem> */}
        {data?.map((account) => (
          <SelectItem key={account.id} value={account.id}>
            {account.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
