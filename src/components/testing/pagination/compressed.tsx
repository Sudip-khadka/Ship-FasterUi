import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationWrapper,
} from "@/components/ui/pagination/pagination";

function CompressedPagination({ iconOnly }: { iconOnly?: boolean }) {
  return (
    <Pagination>
      <PaginationContent variant="compressed">
        <PaginationWrapper>
          <PaginationItem>
            <PaginationPrevious
              iconOnly={iconOnly}
              href="/?page=previous"
              variant="minimal"
            />
          </PaginationItem>
          <PaginationWrapper variant="middle">
            <PaginationItem>
              <PaginationLink href="/?page=1" variant="minimal">
                01
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/?page=2" variant="minimal" isActive>
                02
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/?page=3" variant="minimal">
                03
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/?page=8" variant="minimal">
                08
              </PaginationLink>
            </PaginationItem>
          </PaginationWrapper>
          <PaginationItem>
            <PaginationNext variant="minimal" href="/?page=next" iconOnly={iconOnly} />
          </PaginationItem>
        </PaginationWrapper>
      </PaginationContent>
    </Pagination>
  );
}

export default CompressedPagination;
