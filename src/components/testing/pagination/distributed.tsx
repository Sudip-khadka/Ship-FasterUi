import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationWrapper } from '@/components/ui/pagination/pagination'

function DistributedPagination({iconOnly,variant}:{iconOnly?:boolean;variant?:"minimal"|"primary"|"outlined"|"default"}) {
  return (
    <Pagination>
            <PaginationContent>
              {/* <PaginationItem>
                <PaginationLink variant="primary">
                  Showing 1 of 10 results
                </PaginationLink>
              </PaginationItem> */}
              <PaginationWrapper>
                <PaginationItem>
                  <PaginationPrevious iconOnly={iconOnly} href="/previous" variant={variant}/>
                </PaginationItem>
                <PaginationWrapper variant="middle">
                  <PaginationItem>
                    <PaginationLink href="/?page=1" variant={variant}>01</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="/?page=2" variant={variant} isActive>
                      02
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="/?page=2" variant={variant}>03</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="/?page=8" variant={variant}>08</PaginationLink>
                  </PaginationItem>
                </PaginationWrapper>
                <PaginationItem>
                  <PaginationNext variant={variant} href="/?page=next" iconOnly={iconOnly} />
                </PaginationItem>
              </PaginationWrapper>
            </PaginationContent>
          </Pagination>
  )
}

export default DistributedPagination
