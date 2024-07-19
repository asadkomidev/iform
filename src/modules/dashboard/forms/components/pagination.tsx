import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  search: string;
  page: number;
  perPages: number;
};

const FormPagination = ({ search, perPages, page }: Props) => {
  return (
    <Pagination>
      <PaginationContent>
        {page > 1 && (
          <>
            <PaginationItem>
              <PaginationPrevious
                className="rounded-full shadow-none text-sm"
                href={`/forms?page=${page - 1}&search=${search}`}
              />
            </PaginationItem>
            {page > 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationLink
                isActive={false}
                href={`/forms?page=${page - 1}&search=${search}`}>
                {page - 1}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationLink
            className="rounded-full shadow-none"
            isActive
            href={`/forms?page=${page}&search=${search}`}>
            {page}
          </PaginationLink>
        </PaginationItem>
        {page < perPages && (
          <>
            <PaginationItem>
              <PaginationLink
                className="rounded-full shadow-none"
                isActive={false}
                href={`/forms?page=${page + 1}&search=${search}`}>
                {page + 1}
              </PaginationLink>
            </PaginationItem>
            {page < perPages - 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationNext
                className="rounded-full shadow-none text-sm"
                href={`/forms?page=${page + 1}&search=${search}`}
              />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default FormPagination;
