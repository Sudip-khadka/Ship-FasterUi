import {
  Pagination,
  PaginationContent,
  PaginationInfo,
  PaginationNext,
  PaginationPrevious,
  PaginationWrapper,
} from "@/components/ui/pagination";

function LeftAndRight({ iconOnly }: { iconOnly?: boolean }) {
  return (
    <Pagination>
            <PaginationContent variant='distributed'>
              {/* <PaginationItem>
                <PaginationLink variant="primary">
                  Showing 1 of 10 results
                </PaginationLink>
              </PaginationItem> */}
             <PaginationWrapper variant='leftAndRight'>
                <PaginationPrevious href="/?page=2" iconOnly={iconOnly} />
                <PaginationNext href="/?page=2" iconOnly={iconOnly}/>
             </PaginationWrapper>
             <PaginationInfo currentPage={2} totalItems={100}/>
            </PaginationContent>
          </Pagination>
  )
}

export default LeftAndRight;
