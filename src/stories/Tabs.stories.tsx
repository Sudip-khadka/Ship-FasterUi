
import { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs/tabs";

// Define the story metadata
const meta: Meta<typeof Tabs> = {
  title: "UI/Tabs",
  component: Tabs,
  argTypes: {
  },
};

export default meta;

// Story for Dot Variant (TabsTrigger Variant)
export const DotVariantTabs: StoryObj<typeof Tabs> = {
  args: {
    children: (
      <>
        <TabsList variant="dot">
          <TabsTrigger value="tab1" variant="dot">Dot Tab 1</TabsTrigger>
          <TabsTrigger value="tab2" variant="dot">Dot Tab 2</TabsTrigger>
          <TabsTrigger value="tab3" variant="dot">Dot Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Dot Tab Content 1</TabsContent>
        <TabsContent value="tab2">Dot Tab Content 2</TabsContent>
        <TabsContent value="tab3">Dot Tab Content 3</TabsContent>
      </>
    ),
  },
};

// Story for Button Variant (TabsTrigger Variant)
export const ButtonVariantTabs: StoryObj<typeof Tabs> = {
  args: {
    children: (
      <>
        <TabsList variant="button">
          <TabsTrigger value="tab1" variant="button">Button Tab 1</TabsTrigger>
          <TabsTrigger value="tab2" variant="button">Button Tab 2</TabsTrigger>
          <TabsTrigger value="tab3" variant="button">Button Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Button Tab Content 1</TabsContent>
        <TabsContent value="tab2">Button Tab Content 2</TabsContent>
        <TabsContent value="tab3">Button Tab Content 3</TabsContent>
      </>
    ),
  },
};

// Story for ButtonOutlined Variant (TabsTrigger Variant)
export const ButtonOutlinedVariantTabs: StoryObj<typeof Tabs> = {
  args: {
    children: (
      <>
        <TabsList variant="buttonOutlined">
          <TabsTrigger value="tab1" variant="buttonOutlined">Button Outlined Tab 1</TabsTrigger>
          <TabsTrigger value="tab2" variant="buttonOutlined">Button Outlined Tab 2</TabsTrigger>
          <TabsTrigger value="tab3" variant="buttonOutlined">Button Outlined Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Button Outlined Tab Content 1</TabsContent>
        <TabsContent value="tab2">Button Outlined Tab Content 2</TabsContent>
        <TabsContent value="tab3">Button Outlined Tab Content 3</TabsContent>
      </>
    ),
  },
};

// Story for Divider Variant (TabsTrigger Variant)
export const DividerVariantTabs: StoryObj<typeof Tabs> = {
  args: {
    children: (
      <>
        <TabsList variant="divider">
          <TabsTrigger value="tab1" variant="divider">Divider Tab 1</TabsTrigger>
          <TabsTrigger value="tab2" variant="divider">Divider Tab 2</TabsTrigger>
          <TabsTrigger value="tab3" variant="divider">Divider Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Divider Tab Content 1</TabsContent>
        <TabsContent value="tab2">Divider Tab Content 2</TabsContent>
        <TabsContent value="tab3">Divider Tab Content 3</TabsContent>
      </>
    ),
  },
};

// Story for LineTop Variant (TabsTrigger Variant)
export const LineTopVariantTabs: StoryObj<typeof Tabs> = {
  args: {
    children: (
      <>
        <TabsList variant="lineTop">
          <TabsTrigger value="tab1" variant="lineTop">LineTop Tab 1</TabsTrigger>
          <TabsTrigger value="tab2" variant="lineTop">LineTop Tab 2</TabsTrigger>
          <TabsTrigger value="tab3" variant="lineTop">LineTop Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">LineTop Tab Content 1</TabsContent>
        <TabsContent value="tab2">LineTop Tab Content 2</TabsContent>
        <TabsContent value="tab3">LineTop Tab Content 3</TabsContent>
      </>
    ),
  },
};

// Story for LineBottom Variant (TabsTrigger Variant)
export const LineBottomVariantTabs: StoryObj<typeof Tabs> = {
  args: {
    children: (
      <>
        <TabsList variant="lineBottom">
          <TabsTrigger value="tab1" variant="lineBottom">LineBottom Tab 1</TabsTrigger>
          <TabsTrigger value="tab2" variant="lineBottom">LineBottom Tab 2</TabsTrigger>
          <TabsTrigger value="tab3" variant="lineBottom">LineBottom Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">LineBottom Tab Content 1</TabsContent>
        <TabsContent value="tab2">LineBottom Tab Content 2</TabsContent>
        <TabsContent value="tab3">LineBottom Tab Content 3</TabsContent>
      </>
    ),
  },
};
