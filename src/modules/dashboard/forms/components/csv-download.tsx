"use client";

import CsvDownloader from "react-csv-downloader";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";

type Props = {
  datas: any[];
  columns: any[];
};

const CSVDownload = ({ datas, columns }: Props) => {
  return (
    <div className="">
      <CsvDownloader
        filename="form-submissions"
        extension=".csv"
        separator=";"
        datas={datas}
        columns={columns}>
        <Button size="sm" className="flex items-center gap-2">
          <Download className="size-4" />
          <span className="hidden md:flex">Export CSV</span>
        </Button>
      </CsvDownloader>
    </div>
  );
};

export default CSVDownload;
