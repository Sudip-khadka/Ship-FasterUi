import { Pagination, PaginationContent, PaginationInfo, PaginationNext, PaginationPrevious, } from '@/components/ui/pagination'


function Middle({iconOnly}:{iconOnly?:boolean}) {
  return (
    <Pagination>
            <PaginationContent>
              {/* <PaginationItem>
                <PaginationLink variant="primary">
                  Showing 1 of 10 results
                </PaginationLink>
              </PaginationItem> */}
                <PaginationPrevious  iconOnly={iconOnly} />
             <PaginationInfo  currentPage={2} totalItems={100}/>
                <PaginationNext iconOnly={iconOnly}/>
            </PaginationContent>
          </Pagination>
  )
}

export default Middle
