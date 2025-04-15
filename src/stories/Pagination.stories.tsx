import { Meta, StoryObj } from "@storybook/react"
import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  PaginationWrapper,
  PaginationInfo,
} from "@/components/ui/pagination/pagination"

export default {
  title: "Components/Pagination",
  component: Pagination,
  subcomponents: {
    PaginationContent,
    PaginationLink,
    PaginationItem,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
    PaginationWrapper,
    PaginationInfo,
  },
} as Meta

// const Template: StoryObj<typeof Pagination> = {
//   render: (args) => <Pagination {...args} />
// }

export const DefaultPagination: StoryObj<typeof Pagination> = {
  args: {}
}

export const PaginationWithPreviousNext = () => (
  <PaginationContent>
    <PaginationPrevious>Previous</PaginationPrevious>
    <PaginationWrapper variant="middle">
    <PaginationContent>
      <PaginationItem>
        <PaginationLink isActive>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink>2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink>3</PaginationLink>
      </PaginationItem>
    </PaginationContent>
  </PaginationWrapper>
    <PaginationNext>Next</PaginationNext>
  </PaginationContent>
)

export const PaginationWithEllipsis = () => (
  <PaginationWrapper variant="middle">
    <PaginationPrevious>Previous</PaginationPrevious>
    <PaginationContent variant="compressed">
      <PaginationItem>
        <PaginationLink isActive>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink>2</PaginationLink>
      </PaginationItem>
      <PaginationEllipsis />
      <PaginationItem>
        <PaginationLink>5</PaginationLink>
      </PaginationItem>
    </PaginationContent>
    <PaginationNext>Next</PaginationNext>
  </PaginationWrapper>
)

export const PaginationWithInfo = () => (
  <PaginationWrapper variant="distributed">
    <PaginationPrevious>Previous</PaginationPrevious>
    <PaginationContent>
      <PaginationItem>
        <PaginationLink isActive>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink>2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink>3</PaginationLink>
      </PaginationItem>
    </PaginationContent>
    <PaginationNext>Next</PaginationNext>
    <PaginationInfo totalItems={100} currentPage={1} />
  </PaginationWrapper>
)

export const PaginationWithCustomVariant = () => (
  <PaginationWrapper variant="leftAndRight">
    <PaginationPrevious>Previous</PaginationPrevious>
    <PaginationContent>
      <PaginationItem>
        <PaginationLink isActive>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink>2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink>3</PaginationLink>
      </PaginationItem>
    </PaginationContent>
    <PaginationNext>Next</PaginationNext>
  </PaginationWrapper>
)

export const PaginationMinimalVariant = () => (
  <PaginationWrapper variant="middle">
    <PaginationPrevious variant="minimal">Previous</PaginationPrevious>
    <PaginationContent>
      <PaginationItem>
        <PaginationLink variant="minimal" isActive>
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink variant="minimal">2</PaginationLink>
      </PaginationItem>
    </PaginationContent>
    <PaginationNext variant="minimal">Next</PaginationNext>
  </PaginationWrapper>
)

export const PaginationOutlinedVariant = () => (
  <PaginationWrapper variant="middle">
    <PaginationPrevious variant="outlined">Previous</PaginationPrevious>
    <PaginationContent>
      <PaginationItem>
        <PaginationLink variant="outlined" isActive>
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink variant="outlined">2</PaginationLink>
      </PaginationItem>
    </PaginationContent>
    <PaginationNext variant="outlined">Next</PaginationNext>
  </PaginationWrapper>
)
