# Stacksy

Stacksy is opensource modern React component library. Developed & Maintained By --Phoenix

## Installation

```bash
npm install stacksy


```

# import this wherever you want to use in your app (App.jsx or src/yourcomponentName.jsx)

## import your required component with pre defined styles & make sure your project is setup to support tailwind

```tsx
import { Button, Badge, Alert } from "stacksy";
import "stacksy/stacksy.css" /*Dont Forget to add this css*/;
```

<details>
<summary>StatIndicator & Stat Component</summary>

The `StatIndicator` and `Stat` components are used to display statistical information, trends, and related data. These components support customizable variants, sizes, and include options for displaying trend indicators, icons, descriptions, and more.

---

### 📦 Import

```tsx
import { StatIndicator, Stat } from "stacksy";
```
## 🧩 StatIndicator Props

| Property    | Type                          | Default    | Description                                        |
|------------|-------------------------------|------------|----------------------------------------------------|
| variant    | `"upTrend" \| "downTrend"`   | "upTrend"  | Type of trend indicator to display                 |
| size       | `"default" \| "sm" \| "md"`   | "default"  | Size of the indicator                             |
| styles     | `"accent" \| "filled" \| "outline"` | "accent" | Visual style of the indicator                      |
| percentage | `number`                      | 0          | The percentage value to display in the indicator   |
| className  | `string`                      | —          | Custom classes for overriding styles               |
| startIcon  | `React.ReactNode \| boolean`  | —          | Icon or flag for start position                    |
| endIcon    | `React.ReactNode \| boolean`  | —          | Icon or flag for end position                      |

## 🧩 Stat Props

| Property             | Type                                    | Default | Description                                      |
|---------------------|----------------------------------------|---------|--------------------------------------------------|
| variant             | `"simple" \| "stacked" \| "floating"`   | —       | Layout variant of the stat                       |
| size               | `"default" \| "sm" \| "md"`            | —       | Size of the stat component                       |
| className          | `string`                               | —       | Custom classes for overriding styles             |
| overview           | `string`                               | —       | A short text overview of the stat                |
| value              | `string \| number`                     | —       | The main value to display                        |
| description        | `string`                               | —       | A detailed description of the stat               |
| icon               | `React.ReactNode`                      | —       | A custom icon to display with the stat           |
| statIndicator      | `React.ReactNode`                      | —       | A custom StatIndicator component to show trends  |
| button             | `React.ReactNode`                      | —       | A custom button to be shown alongside the stat   |
| iconWrapperClassName | `string`                            | —       | Custom classes for the icon wrapper              |
✅ StatIndicator Example
```tsx
Copy
<StatIndicator
  variant="upTrend"
  size="lg"
  percentage={35}
  startIcon={<ArrowUpIcon />}
  endIcon={<ArrowUpIcon />}
/>
✅ Stat Example
tsx
Copy
<Stat
  variant="simple"
  size="md"
  value="1,235"
  overview="New Users"
  description="The total number of new users this week"
  icon={<ArrowUpIcon />}
/>
```
✅ Stat with Indicator Example
```tsx
Copy
<Stat
  variant="stacked"
  size="lg"
  value="1,235"
  overview="New Users"
  description="The total number of new users this week"
  icon={<ArrowUpIcon />}
  statIndicator={<StatIndicator variant="upTrend" percentage={35} />}
/>
```
🎨 Custom Button Example
```tsx
Copy
<Stat
  variant="withButton"
  size="md"
  value="1,235"
  overview="New Users"
  description="The total number of new users this week"
  icon={<ArrowUpIcon />}
  button={<Button>View Details</Button>}
/>
```
🧩 Customization
Both the StatIndicator and Stat components are highly customizable:

Size and Variants: Use the size and variant props to change the appearance and layout of the components.

Icons: Add custom icons with the startIcon, endIcon, and icon props.

Trend Indicators: The StatIndicator can be used within Stat to show trends like up or down, represented by the variant prop (upTrend, downTrend).

Buttons: Add custom buttons in the Stat component with the button prop.

💡 Advanced Example: Stat with Custom Trigger
```tsx
Copy
<Stat
  variant="floating"
  size="lg"
  value="1,235"
  overview="New Users"
  description="The total number of new users this week"
  icon={<ArrowUpIcon />}
  statIndicator={<StatIndicator variant="downTrend" percentage={-10} />}
  button={<Button>More Info</Button>}
/>
```
🎨 Responsive Design
Both components support responsive design out of the box using Tailwind CSS classes, and can be customized to adjust for different screen sizes using the size and variant props.

</details>



<details>
<summary>InputDropDown</summary>

The `InputDropDown` is a versatile combobox-style component with support for single or multi-selection, custom images or icons, searchable data, and inline tag-style selected items.

---

### 📦 Import

```tsx
import { InputDropDown,type DataItem } from "stacksy"
//Make sure you explictly pass type DropDownItems to your items Array to avoid type eror
{
  /*const items:DataItem[]=[...]*/
}
```

---

## 🧩 Props

| **Property**        | **Type**                              | **Default**          | **Description**                                   |
| ------------------- | ------------------------------------- | -------------------- | ------------------------------------------------- |
| `className`         | `string`                              | —                    | Tailwind classes for the main trigger.            |
| `dropDownTrigger`   | `React.ReactNode`                     | —                    | Optional custom trigger node.                     |
| `multiSelect`       | `boolean`                             | `false`              | Enable selection of multiple items.               |
| `placeholder`       | `string`                              | `"Select item..."`   | Placeholder when no value is selected.            |
| `searchPlaceholder` | `string`                              | `"Search item..."`   | Placeholder inside search input.                  |
| `emptyMessage`      | `string`                              | `"No item found."`   | Message when no results are found.                |
| `data`              | `DataItem[]`                          | `datas`              | List of available options.                        |
| `onChange`          | `(value: string \| string[]) => void` | —                    | Callback triggered when selection changes.        |
| `scrollable`        | `boolean`                             | `false`              | Adds horizontal scroll if too many selected tags. |
| `maxHeight`         | `string`                              | `"120px"`            | Height limit for scrollable area.                 |
| `endIcon`           | `React.ReactNode`                     | `<ChevronsUpDown />` | Custom icon beside the dropdown button.           |

---

## 🧩 DataItem Type

Each option in `data` should be an object of:

```ts
interface DataItem {
  value: string;
  label: string;
  secondaryLabel?: string;
  image?: string;
  icon?: React.ReactNode;
}
```

---

## ✅ Basic Example

```tsx
<InputDropDown
  data={[
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2", icon: <SomeIcon /> },
    { value: "3", label: "Option 3", image: "/img.jpg" },
  ]}
  onChange={(val) => console.log(val)}
/>
```

---

## ✅ Multi-Select with Scroll Example

```tsx
<InputDropDown
  multiSelect
  scrollable
  data={[
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "js", label: "JavaScript" },
    { value: "ts", label: "TypeScript" },
    { value: "react", label: "React" },
  ]}
  onChange={(val) => console.log("Selected:", val)}
/>
```

---

## 🎨 Custom Trigger Example

```tsx
<InputDropDown
  dropDownTrigger={<Button>Choose Framework</Button>}
  data={[
    { value: "next", label: "Next.js" },
    { value: "remix", label: "Remix" },
  ]}
  onChange={(val) => console.log(val)}
/>
```

</details>

<details>
<summary>CustomDropDown</summary>

The `CustomDropDown` component is a dynamic dropdown menu that supports multiple item types including labels, separators, groups, submenus (default and collapsible), and clickable links. It is built on Radix UI's `DropdownMenu`.

---

### 📦 Import

```tsx
import {CustomDropDown, type DropdownItemType } from "stacksy";
//Make sure you explictly pass type DropDownItems to your items Array to avoid type eror
{
  /*const items:DropdownItemType[]=[...]*/
}
```

---

## 🧩 Props

| **Property**       | **Type**                           | **Default**  | **Description**                                         |
| ------------------ | ---------------------------------- | ------------ | ------------------------------------------------------- |
| `trigger`          | `React.ReactNode`                  | —            | Custom element to trigger the dropdown.                 |
| `items`            | `DropdownItemType[]`               | **Required** | Array of items (label, group, separator, submenu, etc). |
| `align`            | `"start"` \| `"end"` \| `"center"` | `"end"`      | Alignment of dropdown content.                          |
| `className`        | `string`                           | —            | Tailwind classes for the trigger.                       |
| `contentClassName` | `string`                           | `"w-56"`     | Tailwind classes for the dropdown content.              |
| `itemClassName`    | `string`                           | —            | Custom style for each dropdown item.                    |
| `open`             | `boolean`                          | —            | Control open state externally.                          |
| `onOpenChange`     | `(open: boolean) => void`          | —            | Callback for when dropdown state changes.               |

---

## 🎨 DropdownItemType

| **Type**        | **Description**                                                            |
| --------------- | -------------------------------------------------------------------------- |
| `ItemType`      | Regular item with optional icon, image, link, click handler, and shortcut. |
| `GroupType`     | Groups multiple items under an optional label.                             |
| `LabelType`     | Non-clickable text label.                                                  |
| `SeparatorType` | Horizontal divider between items.                                          |
| `SubmenuType`   | Nested submenu of type `"default"` or `"collapsible"`.                     |

---

## ✅ Basic Example

```tsx
<CustomDropDown
  trigger={<Button>Options</Button>}
  items={[
    { id: "1", type: "item", label: "Profile" },
    { id: "2", type: "item", label: "Settings", shortcut: "⌘S" },
    { id: "3", type: "separator" },
    {
      id: "4",
      type: "submenu",
      label: "More",
      items: [
        { id: "4-1", type: "item", label: "Theme" },
        { id: "4-2", type: "item", label: "Extensions" },
      ],
    },
  ]}
/>
```

---

## ✅ Collapsible Submenu Example

```tsx
<CustomDropDown
  items={[
    {
      id: "main",
      type: "submenu",
      label: "View Options",
      submenuType: "collapsible",
      items: [
        { id: "zoomIn", type: "item", label: "Zoom In" },
        { id: "zoomOut", type: "item", label: "Zoom Out" },
      ],
    },
  ]}
/>
```

</details>

<details>
<summary>Pagination</summary>

The `Pagination` component provides a flexible navigation system for paginated content. Built with accessibility and customization in mind, it supports different styles and layouts.

---

### 📦 Import

```tsx
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
} from "stacksy";
```

---

## 🧩 Components & Props

### `<Pagination />`

| **Property** | **Type**                      | **Description**                |
| ------------ | ----------------------------- | ------------------------------ |
| `...props`   | `React.ComponentProps<"nav">` | Root container for pagination. |

---

### `<PaginationContent />`

| **Property** | **Type**                                                            | **Default**     | **Description**                      |
| ------------ | ------------------------------------------------------------------- | --------------- | ------------------------------------ |
| `variant`    | `"compressed"` \| `"distributed"` \| `"leftAndRight"` \| `"middle"` | `"distributed"` | Controls layout of pagination links. |
| `...props`   | `React.ComponentProps<"ul">`                                        | —               | Container for pagination items.      |

---

### `<PaginationItem />`

| **Property** | **Type**                     | **Description**                   |
| ------------ | ---------------------------- | --------------------------------- |
| `...props`   | `React.ComponentProps<"li">` | Wrapper for each pagination link. |

---

### `<PaginationLink />`

| **Property** | **Type**                                                  | **Default** | **Description**                          |
| ------------ | --------------------------------------------------------- | ----------- | ---------------------------------------- |
| `isActive`   | `boolean`                                                 | `false`     | Highlights the link as the current page. |
| `variant`    | `"minimal"` \| `"outlined"` \| `"primary"` \| `"default"` | `"default"` | Button style variant.                    |
| `size`       | `"sm"` \| `"md"` \| `"lg"`                                | `"md"`      | Size of the pagination link.             |
| `...props`   | `React.ComponentProps<"a">`                               | —           | Additional anchor props.                 |

---

### `<PaginationPrevious />` / `<PaginationNext />`

| **Property** | **Type**                                                  | **Default** | **Description**            |
| ------------ | --------------------------------------------------------- | ----------- | -------------------------- |
| `iconOnly`   | `boolean`                                                 | `false`     | Show only the icon.        |
| `textOnly`   | `boolean`                                                 | `false`     | Show only the text.        |
| `variant`    | `"minimal"` \| `"outlined"` \| `"primary"` \| `"default"` | `"default"` | Style of the button.       |
| `...props`   | `React.ComponentProps<typeof PaginationLink>`             | —           | Props for underlying link. |

---

### `<PaginationEllipsis />`

| **Property** | **Type**                       | **Description**                 |
| ------------ | ------------------------------ | ------------------------------- |
| `...props`   | `React.ComponentProps<"span">` | Used to display an ellipsis (…) |

---

### `<PaginationWrapper />`

| **Property** | **Type**                                                            | **Default**     | **Description**                       |
| ------------ | ------------------------------------------------------------------- | --------------- | ------------------------------------- |
| `variant`    | `"compressed"` \| `"distributed"` \| `"middle"` \| `"leftAndRight"` | `"distributed"` | Layout variant.                       |
| `children`   | `React.ReactNode`                                                   | —               | Elements inside the wrapper.          |
| `...props`   | `React.HTMLAttributes<HTMLDivElement>`                              | —               | Wrapper around the pagination system. |

---

### `<PaginationInfo />`

| **Property**         | **Type**                                                  | **Default** | **Description**                                   |
| -------------------- | --------------------------------------------------------- | ----------- | ------------------------------------------------- |
| `currentPage`        | `number`                                                  | `1`         | The currently active page.                        |
| `totalItems`         | `number`                                                  | —           | Total number of pages or items.                   |
| `variant`            | `"minimal"` \| `"outlined"` \| `"primary"` \| `"default"` | `"default"` | Style of the info bar.                            |
| `highlightClassName` | `string`                                                  | —           | Custom class for the page number highlight.       |
| `customText`         | `React.ReactNode`                                         | —           | Replace default message with a custom text block. |

---

## ✅ Basic Example

```tsx
<Pagination>
  <PaginationContent variant="distributed">
    <PaginationPrevious />
    <PaginationItem>
      <PaginationLink href="/?page=1" isActive>
        1
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/?page=2">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/?page=10">10</PaginationLink>
    </PaginationItem>
    <PaginationNext />
  </PaginationContent>
</Pagination>
```

---

## ✅ With Info and Wrapper

```tsx
<PaginationWrapper>
  <PaginationInfo currentPage={2} totalItems={10} />
  <Pagination>
    <PaginationContent variant="middle">
      <PaginationPrevious />
      <PaginationItem>
        <PaginationLink>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink isActive>2</PaginationLink>
      </PaginationItem>
      <PaginationNext />
    </PaginationContent>
  </Pagination>
</PaginationWrapper>
```

</details>

<details>
<summary>Rating</summary>

The `Rating` component displays a customizable star-based rating input. It supports half-star values, tooltips, click interaction, and multiple variants.

---

### 📦 Import

```tsx
import { Rating, type RatingProps } from "stacksy";
```

---

## 🧩 Props

| **Property**       | **Type**                               | **Default** | **Description**                                 |
| ------------------ | -------------------------------------- | ----------- | ----------------------------------------------- |
| `value`            | `number`                               | `0`         | Current rating value (supports half values).    |
| `max`              | `number`                               | `5`         | Total number of stars.                          |
| `readonly`         | `boolean`                              | `true`      | If true, disables click interaction.            |
| `size`             | `"sm"` \| `"md"` \| `"lg"` \| `"xl"`   | `"md"`      | Controls the star icon size.                    |
| `variant`          | `"yellow"` \| `"neutral"`              | `"yellow"`  | Color theme of the rating stars.                |
| `starStyle`        | `"filled"` \| `"outline"`              | `"filled"`  | Controls if stars are solid or outlined.        |
| `onRatingChange`   | `(value: number) => void`              | —           | Callback when user changes rating.              |
| `showTooltip`      | `boolean`                              | `true`      | Shows a tooltip with value on hover.            |
| `tooltipClassname` | `string`                               | —           | Custom Tailwind classes for tooltip.            |
| `className`        | `string`                               | —           | Tailwind classes for the rating container.      |
| `...props`         | `React.HTMLAttributes<HTMLDivElement>` | —           | Additional props passed to the outer container. |

---

## 🎨 Variants

### ✅ `variant`

| Variant   | Description                   |
| --------- | ----------------------------- |
| `yellow`  | Uses yellow fill and borders. |
| `neutral` | Uses neutral/gray tone.       |

### ✅ `size`

| Size | Description |
| ---- | ----------- |
| `sm` | Small stars |
| `md` | Medium size |
| `lg` | Large stars |
| `xl` | Extra large |

### ✅ `starStyle`

| Style     | Description                |
| --------- | -------------------------- |
| `filled`  | Filled star appearance     |
| `outline` | Outlined star with no fill |

---

## ✅ Basic Example

```tsx
<Rating value={4.5} />
```

---

## ✅ Interactive Example

```tsx
<Rating
  value={3.5}
  max={5}
  readonly={false}
  onRatingChange={(val) => console.log("Rated:", val)}
  showTooltip
  size="lg"
  variant="neutral"
  starStyle="outline"
/>
```

</details>

<!-- <details>
<summary>Dialog</summary>

The `DialogComponent` is a flexible prebuilt modal with multiple variants like media, icon, or slot-based layouts. Built on top of the `Dialog` primitive, it provides a fully styled and configurable user experience.

---

### 📦 Import

```tsx
import {DialogComponent} from "stacksy";
```

---

## 🧩 Props

| **Property**             | **Type**                                                                    | **Default**   | **Description**                                                 |
| ------------------------ | --------------------------------------------------------------------------- | ------------- | --------------------------------------------------------------- |
| `variant`                | `"slot"` \| `"media"` \| `"default"` \| `"defaultLeft"`                     | **Required**  | Defines the style of dialog presentation.                       |
| `alignment`              | `"horizontal"` \| `"vertical"`                                              | **Required**  | Button/footer layout direction.                                 |
| `triggerBtn`             | `string`                                                                    | **Required**  | Label text of the button that triggers the dialog.              |
| `icon`                   | `React.ReactNode`                                                           | —             | Icon displayed inside the dialog (for "default"/"defaultLeft"). |
| `title`                  | `string`                                                                    | **Required**  | Dialog title.                                                   |
| `description`            | `string`                                                                    | **Required**  | Dialog description text.                                        |
| `primaryBtn`             | `string`                                                                    | —             | Label of the primary action button.                             |
| `secondaryBtn`           | `string`                                                                    | —             | Label of the secondary action button.                           |
| `innerContent`           | `React.ReactNode`                                                           | —             | Custom content inside the dialog.                               |
| `image`                  | `string`                                                                    | —             | Image URL used in `media` variant.                              |
| `triggerBtnVarient`      | `"default"` \| `"destructive"` \| `"tertiary"` \| `"secondary"` \| `"link"` | `"default"`   | Variant for the trigger button.                                 |
| `primaryBtnVarient`      | Same as above                                                               | `"default"`   | Variant for primary button.                                     |
| `secondaryBtnVarient`    | Same as above                                                               | `"secondary"` | Variant for secondary button.                                   |
| `primaryButtonOnClick`   | `() => void`                                                                | —             | Callback when primary button is clicked.                        |
| `secondaryButtonOnClick` | `() => void`                                                                | —             | Callback when secondary button is clicked.                      |

---

## 🎨 Variants

### ✅ `variant`

| Variant       | Description                                                    |
| ------------- | -------------------------------------------------------------- |
| `slot`        | Clean layout for inner content with optional header/footer.    |
| `media`       | Includes an image at the top, followed by content and actions. |
| `default`     | Shows an icon above the title, all centered.                   |
| `defaultLeft` | Shows an icon above the title, left-aligned.                   |

---

### ✅ `alignment`

| Alignment    | Description                                    |
| ------------ | ---------------------------------------------- |
| `vertical`   | Stacks footer buttons vertically (full width). |
| `horizontal` | Places buttons side-by-side, right-aligned.    |

---

## ✅ Basic Example

```tsx
<DialogComponent
  variant="media"
  alignment="vertical"
  triggerBtn="View More"
  title="Preview Image"
  description="Here's a quick look at the product image."
  image="/preview.jpg"
  primaryBtn="Approve"
  secondaryBtn="Cancel"
  primaryButtonOnClick={() => console.log("Approved")}
  secondaryButtonOnClick={() => console.log("Cancelled")}
/>
```

</details> -->

<details>
<summary>Dialog</summary>

The `Dialog` component is a modal UI built with Radix Dialog and styled using TailwindCSS. It supports headers, descriptions, custom content, and close functionality.

---

### 📦 Import

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "stacksy";
```

---

## 🧩 Components & Props

### `<Dialog />`

| **Property** | **Type**                                            | **Description**             |
| ------------ | --------------------------------------------------- | --------------------------- |
| `...props`   | `React.ComponentProps<typeof DialogPrimitive.Root>` | Root wrapper of the dialog. |

---

### `<DialogTrigger />`

| **Property** | **Type**                                               | **Description**                        |
| ------------ | ------------------------------------------------------ | -------------------------------------- |
| `...props`   | `React.ComponentProps<typeof DialogPrimitive.Trigger>` | Element that triggers the dialog open. |

---

### `<DialogPortal />`

| **Property** | **Type**                                              | **Description**                           |
| ------------ | ----------------------------------------------------- | ----------------------------------------- |
| `...props`   | `React.ComponentProps<typeof DialogPrimitive.Portal>` | Container for overlay and dialog content. |

---

### `<DialogOverlay />`

| **Property** | **Type**                                               | **Description**                   |
| ------------ | ------------------------------------------------------ | --------------------------------- |
| `className`  | `string`                                               | Tailwind styles for the backdrop. |
| `...props`   | `React.ComponentProps<typeof DialogPrimitive.Overlay>` | Fullscreen dark overlay.          |

---

### `<DialogContent />`

| **Property** | **Type**                                               | **Description**                             |
| ------------ | ------------------------------------------------------ | ------------------------------------------- |
| `className`  | `string`                                               | Custom styles for the modal box.            |
| `...props`   | `React.ComponentProps<typeof DialogPrimitive.Content>` | Content area where children and close live. |

---

### `<DialogClose />`

| **Property** | **Type**                                             | **Description**    |
| ------------ | ---------------------------------------------------- | ------------------ |
| `...props`   | `React.ComponentProps<typeof DialogPrimitive.Close>` | Closes the dialog. |

---

### `<DialogHeader />`

| **Property** | **Type**                      | **Description**              |
| ------------ | ----------------------------- | ---------------------------- |
| `className`  | `string`                      | Optional custom styles.      |
| `...props`   | `React.ComponentProps<"div">` | Wraps title and description. |

---

### `<DialogFooter />`

| **Property** | **Type**                      | **Description**               |
| ------------ | ----------------------------- | ----------------------------- |
| `className`  | `string`                      | Optional custom styles.       |
| `...props`   | `React.ComponentProps<"div">` | Footer container for actions. |

---

### `<DialogTitle />`

| **Property** | **Type**                                             | **Description**             |
| ------------ | ---------------------------------------------------- | --------------------------- |
| `className`  | `string`                                             | Title text styles.          |
| `...props`   | `React.ComponentProps<typeof DialogPrimitive.Title>` | Main heading of the dialog. |

---

### `<DialogDescription />`

| **Property** | **Type**                                                   | **Description**               |
| ------------ | ---------------------------------------------------------- | ----------------------------- |
| `className`  | `string`                                                   | Subtext or secondary message. |
| `...props`   | `React.ComponentProps<typeof DialogPrimitive.Description>` | Description under the title.  |

---

## ✅ Basic Example

```tsx
<Dialog>
  <DialogTrigger asChild>
    <button className="btn">Open Dialog</button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Delete Confirmation</DialogTitle>
      <DialogDescription>
        Are you sure you want to delete this item?
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <button className="btn-secondary">Cancel</button>
      <button className="btn-primary">Delete</button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

</details>

<details>
<summary>Progress</summary>

The `Progress` component is a minimal and customizable progress bar built using Radix UI, allowing easy styling and progress indication.

---

### 📦 Import

```tsx
import { Progress } from "stacksy";
```

---

## 🧩 Props

| **Property**         | **Type**                                              | **Default** | **Description**                                     |
| -------------------- | ----------------------------------------------------- | ----------- | --------------------------------------------------- |
| `value`              | `number`                                              | —           | The current progress value (between `0` and `100`). |
| `rootClassName`      | `string`                                              | —           | Custom Tailwind classes for the outer progress bar. |
| `indicatorClassName` | `string`                                              | —           | Custom classes for the inner progress indicator.    |
| `...props`           | `React.ComponentProps<typeof ProgressPrimitive.Root>` | —           | Additional props for the root container.            |

---

## ✅ Basic Example

```tsx
<Progress value={60} />
```

---

## 🎨 Custom Styling Example

```tsx
<Progress
  value={80}
  rootClassName="h-3 bg-muted"
  indicatorClassName="bg-green-500"
/>
```

</details>

<details>
<summary>Accordion</summary>

The `Accordion` component is a collapsible content UI built using Radix UI and styled with TailwindCSS. It supports multiple variants and flexible usage for interactive sections.

---

### 📦 Import

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "stacksy";
```

---

## 🧩 Components & Props

### `<Accordion />`

| **Property** | **Type**                                               | **Default** | **Description**                           |
| ------------ | ------------------------------------------------------ | ----------- | ----------------------------------------- |
| `variant`    | `"rounded"` \| `"outline"` \| `"filled"`               | `"rounded"` | Sets default variant for accordion items. |
| `...props`   | `React.ComponentProps<typeof AccordionPrimitive.Root>` | —           | Root container of accordion group.        |

---

### `<AccordionItem />`

| **Property** | **Type**                                               | **Default** | **Description**                               |
| ------------ | ------------------------------------------------------ | ----------- | --------------------------------------------- |
| `variant`    | `"rounded"` \| `"outline"` \| `"filled"`               | `"rounded"` | Sets the visual style of the individual item. |
| `...props`   | `React.ComponentProps<typeof AccordionPrimitive.Item>` | —           | Props passed to the item container.           |

---

### `<AccordionTrigger />`

| **Property** | **Type**                                                  | **Default** | **Description**                                   |
| ------------ | --------------------------------------------------------- | ----------- | ------------------------------------------------- |
| `variant`    | `"rounded"` \| `"outline"` \| `"filled"`                  | `"rounded"` | Controls the style of the clickable title/header. |
| `...props`   | `React.ComponentProps<typeof AccordionPrimitive.Trigger>` | —           | Props passed to the trigger element.              |

---

### `<AccordionContent />`

| **Property** | **Type**                                                  | **Default** | **Description**                        |
| ------------ | --------------------------------------------------------- | ----------- | -------------------------------------- |
| `variant`    | `"rounded"` \| `"outline"` \| `"filled"`                  | `"rounded"` | Controls animation and padding styles. |
| `...props`   | `React.ComponentProps<typeof AccordionPrimitive.Content>` | —           | Shown or hidden content area.          |

---

## 🎨 Variants

### ✅ `variant`

| Variant   | Description                                            |
| --------- | ------------------------------------------------------ |
| `rounded` | Rounded borders, standard padding and hover effect.    |
| `outline` | Flat layout with bottom border separation.             |
| `filled`  | Background filled panel with shadow and inner padding. |

---

## ✅ Basic Example

```tsx
<Accordion type="single" collapsible defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>What is Shipfaster UI?</AccordionTrigger>
    <AccordionContent>
      Shipfaster UI is a design system that helps build apps faster with
      prebuilt components.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>How do I install it?</AccordionTrigger>
    <AccordionContent>
      You can install it via npm or yarn and import components as needed.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

</details>

<details>
<summary>ListField</summary>

The `ListField` component is a flexible, multi-purpose horizontal layout UI used for rendering items with optional icons, descriptions, and actions. It supports different variants, sizes, alignments, and usage as a button.

---

### 📦 Import

```tsx
import { ListField, type ListFieldProps } from "stacksy";
```

---

## 🧩 Props

| **Property**              | **Type**                                                               | **Default** | **Description**                                          |
| ------------------------- | ---------------------------------------------------------------------- | ----------- | -------------------------------------------------------- |
| `label`                   | `string`                                                               | —           | The main label text.                                     |
| `description`             | `string`                                                               | —           | Optional description below the label.                    |
| `leftContent`             | `React.ReactNode`                                                      | —           | Optional content shown on the left side.                 |
| `rightContent`            | `React.ReactNode`                                                      | —           | Optional content shown on the right side.                |
| `variant`                 | `"default"` \| `"bordered"` \| `"card"`                                | `"default"` | Controls background and border style.                    |
| `size`                    | `"default"` \| `"sm"` \| `"md"` \| `"lg"`                              | `"default"` | Adjusts the padding and height of the component.         |
| `contentAlign`            | `"left"` \| `"center"` \| `"right"`                                    | `"left"`    | Controls alignment of label/description.                 |
| `contentGap`              | `"default"` \| `"tight"` \| `"loose"`                                  | `"default"` | Controls vertical spacing between label and description. |
| `asButton`                | `boolean`                                                              | `false`     | If true, renders as a `<button>` with click support.     |
| `onClick`                 | `() => void`                                                           | —           | Click handler when `asButton` is enabled.                |
| `fullWidth`               | `boolean` _(not used yet)_                                             | —           | Optional control to make component full width.           |
| `className`               | `string`                                                               | —           | Custom Tailwind classes for container.                   |
| `labelClassName`          | `string`                                                               | —           | Custom class for the label.                              |
| `descriptionClassName`    | `string`                                                               | —           | Custom class for the description.                        |
| `leftWrapperClassName`    | `string`                                                               | —           | Custom class for left content wrapper.                   |
| `rightWrapperClassName`   | `string`                                                               | —           | Custom class for right content wrapper.                  |
| `contentWrapperClassName` | `string`                                                               | —           | Custom class for the middle content wrapper.             |
| `...props`                | `React.HTMLAttributes<HTMLDivElement>` or `React.ButtonHTMLAttributes` | —           | Additional props forwarded to container/button.          |

---

## 🎨 Variants

### ✅ `variant`

| Variant    | Description                         |
| ---------- | ----------------------------------- |
| `default`  | Clean background with hover accent. |
| `bordered` | Adds a border with hover accent.    |
| `card`     | Card-like shadowed box.             |

### ✅ `size`

| Size      | Description                   |
| --------- | ----------------------------- |
| `sm`      | Small padding and font.       |
| `md`      | Medium padding (recommended). |
| `lg`      | Larger layout with base text. |
| `default` | Same as medium.               |

### ✅ `contentAlign`

| Alignment | Description                          |
| --------- | ------------------------------------ |
| `left`    | Aligns content to top-left.          |
| `center`  | Centers vertically and horizontally. |
| `right`   | Aligns content to bottom-right.      |

### ✅ `contentGap`

| Gap       | Description                |
| --------- | -------------------------- |
| `default` | Standard spacing           |
| `tight`   | Less spacing between lines |
| `loose`   | More spacing between lines |

---

## ✅ Basic Example

```tsx
<ListField
  label="Billing Address"
  description="123 Main Street, Springfield"
  leftContent={<MapPinIcon />}
  rightContent={<ChevronRightIcon />}
  variant="bordered"
  size="md"
  asButton
  onClick={() => console.log("clicked")}
/>
```

</details>

<details>
<summary>Skeleton</summary>
The Skeleton is Modern Loader Component that helps to keep user hooked during loading states

### 📦 Import

```tsx
import { Skeleton } from "stacksy";

//usage use custom styles and nest skeleton component using tailwind & div or other wrapper to structure your skeleton
//use bg|| background color to apply custom colors
<div className="flex flex-col gap-3">
  <Skeleton className="w-full h-40 rounded-lg" /> {/* Card image */}
  <Skeleton className="w-3/4 h-6 rounded" /> {/* Card title */}
  <div className="space-y-2">
    {" "}
    {/* Card content */}
    <Skeleton className="w-full h-4 rounded" />
    <Skeleton className="w-full h-4 rounded" />
    <Skeleton className="w-2/3 h-4 rounded" />
  </div>
  <div className="flex justify-between mt-4">
    {" "}
    {/* Card footer */}
    <Skeleton className="w-24 h-8 rounded" />
    <Skeleton className="w-24 h-8 rounded" />
  </div>
</div>;
```

</details>
<details>
<summary>Card</summary>

The `Card` component is a flexible container UI for displaying grouped content with optional header, footer, and action areas.

---

### 📦 Import

```tsx
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "stacksy";
```

---

## 🧩 Components & Props

### `<Card />`

| **Property** | **Type**                      | **Default** | **Description**                                           |
| ------------ | ----------------------------- | ----------- | --------------------------------------------------------- |
| `className`  | `string`                      | —           | Tailwind utility classes for styling.                     |
| `...props`   | `React.ComponentProps<"div">` | —           | Container for the card. Adds border, padding, and shadow. |

---

### `<CardHeader />`

| **Property** | **Type**                      | **Default** | **Description**                                        |
| ------------ | ----------------------------- | ----------- | ------------------------------------------------------ |
| `className`  | `string`                      | —           | Container for the card’s header. Supports grid layout. |
| `...props`   | `React.ComponentProps<"div">` | —           | Use for title, description, and actions.               |

---

### `<CardTitle />`

| **Property** | **Type**                      | **Default** | **Description**                        |
| ------------ | ----------------------------- | ----------- | -------------------------------------- |
| `className`  | `string`                      | —           | Applies bold and leading-none styling. |
| `...props`   | `React.ComponentProps<"div">` | —           | Typically placed inside `CardHeader`.  |

---

### `<CardDescription />`

| **Property** | **Type**                      | **Default** | **Description**                         |
| ------------ | ----------------------------- | ----------- | --------------------------------------- |
| `className`  | `string`                      | —           | Text-muted description below the title. |
| `...props`   | `React.ComponentProps<"div">` | —           | Usually placed under `CardTitle`.       |

---

### `<CardAction />`

| **Property** | **Type**                      | **Default** | **Description**                                   |
| ------------ | ----------------------------- | ----------- | ------------------------------------------------- |
| `className`  | `string`                      | —           | Aligns action buttons to top-right within header. |
| `...props`   | `React.ComponentProps<"div">` | —           | Place icon buttons, menus, or dropdowns here.     |

---

### `<CardContent />`

| **Property** | **Type**                      | **Default** | **Description**                       |
| ------------ | ----------------------------- | ----------- | ------------------------------------- |
| `className`  | `string`                      | —           | Applies horizontal padding.           |
| `...props`   | `React.ComponentProps<"div">` | —           | Use for the main content of the card. |

---

### `<CardFooter />`

| **Property** | **Type**                      | **Default** | **Description**                             |
| ------------ | ----------------------------- | ----------- | ------------------------------------------- |
| `className`  | `string`                      | —           | Horizontal padding and optional top border. |
| `...props`   | `React.ComponentProps<"div">` | —           | Use for actions or secondary content.       |

---

## ✅ Basic Example

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>This is a description inside the card.</CardDescription>
    <CardAction>
      <button className="text-sm underline">Edit</button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p>This is the main content of the card. Add anything here.</p>
  </CardContent>
  <CardFooter>
    <button className="text-primary">Save</button>
  </CardFooter>
</Card>
```

</details>

<details>
<summary>Tabs</summary>

The `Tabs` component is a flexible navigation UI built with Radix UI and styled with TailwindCSS. It supports multiple visual variants like buttons, outlines, dividers, lines, and dot indicators.

---

### 📦 Import

```tsx
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsLabel,
} from "stacksy";
```

---

## 🧩 Components & Props

### `<Tabs />`

| **Property** | **Type**                                          | **Default** | **Description**                |
| ------------ | ------------------------------------------------- | ----------- | ------------------------------ |
| `...props`   | `React.ComponentProps<typeof TabsPrimitive.Root>` | —           | Root wrapper of the tab group. |
| `className`  | `string`                                          | —           | Tailwind classes for styling.  |

---

### `<TabsList />`

| **Property** | **Type**                                                                                                   | **Default** | **Description**                          |
| ------------ | ---------------------------------------------------------------------------------------------------------- | ----------- | ---------------------------------------- |
| `variant`    | `"default"` \| `"button"` \| `"buttonOutlined"` \| `"divider"` \| `"lineTop"` \| `"lineBottom"` \| `"dot"` | `"default"` | Defines the tab list style variant.      |
| `...props`   | `React.ComponentProps<typeof TabsPrimitive.List>`                                                          | —           | Props forwarded to `TabsPrimitive.List`. |

---

### `<TabsTrigger />`

| **Property**  | **Type**                                                                                                   | **Default** | **Description**                                   |
| ------------- | ---------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------- |
| `variant`     | `"default"` \| `"button"` \| `"buttonOutlined"` \| `"divider"` \| `"lineTop"` \| `"lineBottom"` \| `"dot"` | `"default"` | Controls the style of individual tab trigger.     |
| `size`        | `"default"` \| `"sm"` \| `"md"` \| `"lg"`                                                                  | `"default"` | Adjusts padding and spacing.                      |
| `isFullWidth` | `boolean`                                                                                                  | `false`     | Makes each tab fill available space horizontally. |
| `...props`    | `React.ComponentProps<typeof TabsPrimitive.Trigger>`                                                       | —           | Forwarded props for `TabsPrimitive.Trigger`.      |

---

### `<TabsContent />`

| **Property** | **Type**                                             | **Default** | **Description**                    |
| ------------ | ---------------------------------------------------- | ----------- | ---------------------------------- |
| `...props`   | `React.ComponentProps<typeof TabsPrimitive.Content>` | —           | Content shown for the active tab.  |
| `className`  | `string`                                             | —           | Additional styles for tab content. |

---

### `<TabsLabel />`

| **Property** | **Type** | **Default** | **Description**                                |
| ------------ | -------- | ----------- | ---------------------------------------------- |
| `value`      | `number` | —           | Numeric value displayed inside the label chip. |
| `className`  | `string` | —           | Tailwind utility classes.                      |

---

## 🎨 Variants

### ✅ `variant`

| Variant          | Description                                            |
| ---------------- | ------------------------------------------------------ |
| `default`        | Default tab style with muted background.               |
| `button`         | Button-like tabs with background transitions.          |
| `buttonOutlined` | Outlined tabs with active border highlight.            |
| `divider`        | Tabs separated by vertical borders.                    |
| `lineTop`        | Top border indicator for active tab.                   |
| `lineBottom`     | Bottom border indicator for active tab.                |
| `dot`            | Displays a dot below active tab on hover or selection. |

### ✅ `size`

| Size      | Description                    |
| --------- | ------------------------------ |
| `sm`      | Small tabs with tight padding. |
| `md`      | Medium tabs.                   |
| `lg`      | Large tabs with more spacing.  |
| `default` | Fallback to medium padding.    |

---

## ✅ Basic Example

```tsx
<Tabs defaultValue="account" className="w-full">
  <TabsList variant="button">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <p>Account tab content goes here.</p>
  </TabsContent>
  <TabsContent value="password">
    <p>Password tab content goes here.</p>
  </TabsContent>
</Tabs>
```

---

## 🔵 Dot Variant Example

```tsx
<Tabs defaultValue="home">
  <TabsList variant="dot">
    <TabsTrigger value="home" variant="dot">
      Home
    </TabsTrigger>
    <TabsTrigger value="profile" variant="dot">
      Profile
    </TabsTrigger>
  </TabsList>
  <TabsContent value="home">This is the home tab.</TabsContent>
  <TabsContent value="profile">This is the profile tab.</TabsContent>
</Tabs>
```

</details>

<details>  
<summary>Breadcrumb</summary>

The `Breadcrumb` component helps display navigational hierarchy and supports various styles, separators, and item types to create flexible breadcrumb UIs.

### 📦 Import

```js
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  BreadcrumbIcon,
} from "stacksy";
```

---

## 🧩 Components & Props

### `<Breadcrumb />`

| **Property** | **Type**                      | **Default** | **Description**                      |
| ------------ | ----------------------------- | ----------- | ------------------------------------ |
| `...props`   | `React.ComponentProps<"nav">` | —           | Accepts all native `nav` attributes. |

---

### `<BreadcrumbList />`

| **Property** | **Type**                     | **Default** | **Description**                      |
| ------------ | ---------------------------- | ----------- | ------------------------------------ |
| `className`  | `string`                     | —           | Tailwind classes for custom styling. |
| `...props`   | `React.ComponentProps<"ol">` | —           | Native `ol` attributes.              |

---

### `<BreadcrumbItem />`

| **Property** | **Type**                                                   | **Default** | **Description**                             |
| ------------ | ---------------------------------------------------------- | ----------- | ------------------------------------------- |
| `type`       | `"link"` \| `"outline"` \| `"default"`                     | `default`   | Controls item appearance.                   |
| `label`      | `string`                                                   | —           | Text to be shown (if no `children` passed). |
| `startIcon`  | `React.ReactNode`                                          | —           | Icon shown before the text.                 |
| `endIcon`    | `React.ReactNode`                                          | —           | Icon shown after the text.                  |
| `size`       | `"sm"` \| `"md"` \| `"lg"` \| `"xl"` \| `"2xl"` \| `"3xl"` | `3xl`       | Controls text and icon sizing.              |
| `...props`   | `React.ComponentProps<"li">`                               | —           | Native `li` attributes.                     |
| `state`      | `active` \| `disabled`                                     | -           | Can Be Used To Handle Active Page           |

---

### `<BreadcrumbIcon />`

| **Property** | **Type**                                                        | **Default** | **Description**                                        |
| ------------ | --------------------------------------------------------------- | ----------- | ------------------------------------------------------ |
| `type`       | `"filled"` \| `"accent"` \| `"outline"` \| `"grey"` \| `"none"` | `filled`    | Defines the visual style of the icon.                  |
| `disabled`   | `boolean`                                                       | `false`     | If `true`, disables hover and applies reduced opacity. |
| `size`       | `"sm"` \| `"md"` \| `"lg"` \| `"xl"` \| `"2xl"` \| `"3xl"`      | `3xl`       | Adjusts icon size.                                     |
| `...props`   | `React.ComponentProps<"li">`                                    | —           | Native `li` attributes.                                |

---

### `<BreadcrumbLink />`

| **Property** | **Type**                    | **Default** | **Description**                                     |
| ------------ | --------------------------- | ----------- | --------------------------------------------------- |
| `asChild`    | `boolean`                   | `false`     | Allows rendering a custom element via Radix `Slot`. |
| `...props`   | `React.ComponentProps<"a">` | —           | Native anchor tag properties.                       |

---

### `<BreadcrumbPage />`

| **Property** | **Type**                       | **Default** | **Description**                       |
| ------------ | ------------------------------ | ----------- | ------------------------------------- |
| `...props`   | `React.ComponentProps<"span">` | —           | Used to mark the current active page. |

---

### `<BreadcrumbSeparator />`

| **Property** | **Type**                                                   | **Default** | **Description**                        |
| ------------ | ---------------------------------------------------------- | ----------- | -------------------------------------- |
| `variant`    | `"slash"` \| `"chevron"` \| `"colon"` \| `"arrow"`         | `chevron`   | Controls the icon used as a separator. |
| `size`       | `"sm"` \| `"md"` \| `"lg"` \| `"xl"` \| `"2xl"` \| `"3xl"` | `3xl`       | Adjusts separator size.                |
| `...props`   | `React.ComponentProps<"li">`                               | —           | Native `li` attributes.                |

---

### `<BreadcrumbEllipsis />`

| **Property** | **Type**                       | **Default** | **Description**                                  |
| ------------ | ------------------------------ | ----------- | ------------------------------------------------ |
| `...props`   | `React.ComponentProps<"span">` | —           | Used to display ellipsis (`...`) with more menu. |

---

## ✅ Basic Example

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem type="default" label="Home" startIcon={<HomeIcon />} />
    <BreadcrumbSeparator variant="chevron" />
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Projects</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator variant="slash" />
    <BreadcrumbPage>Dashboard</BreadcrumbPage>
  </BreadcrumbList>
</Breadcrumb>
```

</details>

<details> 
<summary>Button</summary>

The Button component is a versatile UI element that supports various configurations, including different styles, sizes, and icons.

```
import {
  Button,
} from "stacksy";
import "stacksy/dist/shipfaster.css";
```

## Args

| **Property** | **Type** | **Options/Default**                                                                                                                           | **Description**                                         |
| ------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| `variant`    | select   | `default`, `destructive`,`destructiveOutline`,`destructiveSecondary`,`destructiveLink`,`destructiveTertiary`, `tertiary`, `secondary`, `link` | Controls the button's style.                            |
| `size`       | select   | `default`, `sm`, `md`, `lg`, `icon`                                                                                                           | Controls the button's size.                             |
| `children`   | text     | Default: `Click me`                                                                                                                           | Text displayed inside the button.                       |
| `disabled`   | boolean  | Default: `false`                                                                                                                              | Controls whether the button is disabled.                |
| `startIcon`  | select   | `pass your Icon Component like <Icon/>`                                                                                                       | Controls the icon displayed at the start of the button. |
| `endIcon`    | select   | `pass your Icon Component like <Icon/>`                                                                                                       | Controls the icon displayed at the end of the button.   |
| `className`  | text     | `pass tailwind classes for custom styles`                                                                                                     | Controls the icon displayed at the end of the button.   |

## Primary Button Example

```jsx
<Button
  variant="default"
  size="sm"
  children="Click Me"
  startIcon={<ChevronLeft />}
  endIcon={<ChevronRight />}
/>
```

</details>

<details>
<summary>Badge</summary>
# Badge Component Documentation

## Props

| Prop      | Type                                                                  | Default     | Description                               |
| --------- | --------------------------------------------------------------------- | ----------- | ----------------------------------------- |
| variant   | `'primary' \| 'destructive' \| 'warning' \| 'secondary' \| 'success'` | `'primary'` | Controls the color scheme of the badge    |
| size      | `'sm' \| 'md' \| 'lg'`                                                | `'sm'`      | Controls the size of the badge            |
| disabled  | `boolean`                                                             | `false`     | Whether the badge is disabled             |
| shape     | `'pill' \| 'rounded' \| 'circle' \| 'dot'`                            | `'dot'`     | Controls the shape of the badge           |
| style     | `'filled' \| 'accent' \| 'outlined'`                                  | `'filled'`  | Controls the style of the badge           |
| children  | `React.ReactNode`                                                     | `'Badge'`   | The content of the badge                  |
| startIcon | `React.ReactNode`                                                     | -           | Icon to display at the start of the badge |
| endIcon   | `React.ReactNode`                                                     | -           | Icon to display at the end of the badge   |

## Default Values

The Badge component comes with the following default configuration:

```tsx
<Badge
  variant="primary"
  size="md"
  shape="pill"
  style="filled"
  disabled={false}
  startIcon={<ChevronLeft />}
  endIcon={<ChevronRight />}
>
  Badge
</Badge>
```

</details>

<details>
<summary>InLineAlert</summary>
# Alert Component Documentation

## Props

| Prop      | Type                                                                  | Description                            |
| --------- | --------------------------------------------------------------------- | -------------------------------------- |
| variant   | `'primary' \| 'destructive' \| 'warning' \| 'success' \| 'secondary'` | Controls the color scheme of the alert |
| style     | `'accent' \| 'filled' \| 'outline' `                                  | Controls the visual style of the alert |
| className | `string`                                                              | Additional CSS classes to apply        |
| children  | `React.ReactNode`                                                     | The content of the alert               |

## Default Example

```tsx
<Alert variant="primary" style="accent" className="flex items-center h-15">
  <>
    <span className="w-8 h-8">
      <Info />
    </span>
    <span className="flex flex-col gap-1">
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is a primary alert with accent style.
      </AlertDescription>
    </span>
  </>
</Alert>
```

</details>
<details>
<summary>tooltip </summary>

## Props

| Prop Name         | Type                                                 | Default Value                                                                                | Description                                                                  |
| ----------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `color`           | `"White"` \| `"Primary"` \| `"Neutral"`              | `"White"`                                                                                    | Sets the background color and text color of the tooltip                      |
| `direction`       | `"Top"` \| `"Right"` \| `"Bottom"` \| `"Left"`       | `"Bottom"`                                                                                   | Determines the direction the tooltip appears relative to the trigger element |
| `pointerPosition` | `"Leading"` \| `"Middle"` \| `"Trailing"` \| `"Off"` | `"Leading"`                                                                                  | Controls the position of the pointer/arrow on the tooltip                    |
| `description`     | `boolean`                                            | `true`                                                                                       | Whether to show the description text in the tooltip                          |
| `showTitle`       | `boolean`                                            | `true`                                                                                       | Whether to show the title in the tooltip                                     |
| `showAction`      | `boolean`                                            | `true`                                                                                       | Whether to show the action button in the tooltip                             |
| `showClose`       | `boolean`                                            | `true`                                                                                       | Whether to show the close button in the tooltip                              |
| `title`           | `string`                                             | `"place a Tooltip title"`                                                                    | Text for the tooltip title                                                   |
| `descriptionText` | `string`                                             | `"Tooltips are text labels that appear when the user hovers over or focuses on an element."` | Text for the tooltip description                                             |
| `actionText`      | `string`                                             | `"Button CTA"`                                                                               | Text for the action button                                                   |
| `onAction`        | `() => void`                                         | `undefined`                                                                                  | Callback function when the action button is clicked                          |
| `onClose`         | `() => void`                                         | `undefined`                                                                                  | Callback function when the close button is clicked                           |
| `className`       | `string`                                             | `undefined`                                                                                  | Additional CSS classes to apply to the tooltip                               |
| `isOpen`          | `boolean`                                            | `undefined`                                                                                  | Controls whether the tooltip is open (controlled mode)                       |
| `children`        | `React.ReactNode`                                    | `undefined`                                                                                  | The trigger element that the tooltip attaches to                             |

## Example Usage

```jsx
import { Tooltip } from "stacksy";
import { InfoIcon } from "lucide-react";

export default function TooltipExample() {
  const handleAction = () => {
    console.log("Action button clicked");
    // Add your action logic here
  };

  return (
    <div className="p-8">
      <Tooltip
        color="Primary"
        direction="Top"
        pointerPosition="Middle"
        title="Help Information"
        descriptionText="This is additional information to help you understand this feature."
        actionText="Learn More"
        onAction={handleAction}
      >
        <InfoIcon className="text-blue-500" />
      </Tooltip>
    </div>
  );
}
```

</details>
<details>
<summary> Otp Input</summary>
# OTP Input Component Documentation

A flexible and customizable One-Time Password (OTP) input component for React applications.

## Features

- Multiple visual styles: boxed, lined, and floating
- Three different sizes: small, medium, and large
- Various states: placeholderFocused, typing, filled, disabled, error
- Customizable number of input fields
- Auto-focus support
- Full keyboard navigation (arrow keys, backspace)
- Support for title and helper text
- Customizable placeholder text
- Paste support for quick input
- Typewriter cursor effect
- Callback on completion

## Installation

```bash
npm install @yourlibrary/otp-input
# or
yarn add @yourlibrary/otp-input
```

## Usage

```jsx
import { OTPInput } from "stacksy";

function VerificationForm() {
  const [otpValue, setOtpValue] = React.useState("");

  const handleChange = (value) => {
    setOtpValue(value);
  };

  const handleComplete = (value) => {
    console.log("OTP completed:", value);
    // Verify the OTP
  };

  return (
    <OTPInput
      number={6}
      value={otpValue}
      onChange={handleChange}
      onComplete={handleComplete}
      showTitleText
      titleText="Enter verification code"
      showHelperText
      helperText="Enter the 6-digit code sent to your phone"
      autoFocus
    />
  );
}
```

## Props

| Prop              | Type                                                                  | Default                   | Description                                |
| ----------------- | --------------------------------------------------------------------- | ------------------------- | ------------------------------------------ |
| `number`          | number                                                                | 6                         | Number of input fields                     |
| `value`           | string                                                                | ""                        | Current OTP value                          |
| `onChange`        | function                                                              | -                         | Callback when value changes                |
| `onComplete`      | function                                                              | -                         | Callback when all digits are filled        |
| `disabled`        | boolean                                                               | false                     | Whether the input is disabled              |
| `autoFocus`       | boolean                                                               | false                     | Auto-focus the first input on mount        |
| `className`       | string                                                                | -                         | Additional class for the container         |
| `inputClassName`  | string                                                                | -                         | Additional class for each input            |
| `type`            | "boxed" \| "lined" \| "floating"                                      | "boxed"                   | Visual style of the inputs                 |
| `state`           | "placeholderFocused" \| "typing" \| "filled" \| "disabled" \| "error" | "filled"                  | Current state of the input                 |
| `size`            | "small" \| "medium" \| "large"                                        | "medium"                  | Size of the input fields                   |
| `showTitleText`   | boolean                                                               | false                     | Whether to show the title text             |
| `titleText`       | string                                                                | "Input verification code" | Title text content                         |
| `showHelperText`  | boolean                                                               | false                     | Whether to show helper text                |
| `helperText`      | string                                                                | "Helper text"             | Helper text content                        |
| `placeholderText` | string                                                                | "0"                       | Placeholder text for empty inputs          |
| `divider`         | boolean                                                               | false                     | Whether to display dividers between inputs |

## Styling

The component uses CSS variables for styling and can be customized through Tailwind CSS or direct CSS:

```css
:root {
  --otp-input-border-color: #e2e8f0;
  --otp-input-focus-color: #3b82f6;
  --otp-input-error-color: #ef4444;
  --otp-input-text-color: #1e293b;
  --otp-input-placeholder-color: #94a3b8;
  --otp-input-disabled-bg: #f1f5f9;
}
```

## Examples

### Basic Usage

```jsx
<OTPInput number={6} />
```

### With Error State

```jsx
<OTPInput number={6} state="error" helperText="Invalid verification code" />
```

### Lined Style

```jsx
<OTPInput number={6} type="lined" />
```

### Floating Style with Custom Placeholder

```jsx
<OTPInput number={6} type="floating" placeholderText="•" />
```

### Different Sizes

```jsx
<OTPInput number={6} size="small" />
<OTPInput number={6} size="medium" />
<OTPInput number={6} size="large" />
```

## Accessibility

- Each input has an appropriate aria-label
- Full keyboard navigation support
- Visual states are designed with accessibility in mind

</details>

<details>
<summary>Textarea </summary>
## Overview

`Textarea` is a customizable textarea component with support for labels, helper text, character counting, validation states, and various styling options.

## Props

| Prop Name                    | Type      | Default     | Description                                           |
| ---------------------------- | --------- | ----------- | ----------------------------------------------------- |
| `label`                      | `string`  | `undefined` | Text label for the textarea                           |
| `helperText`                 | `string`  | `undefined` | Helper text displayed below the textarea              |
| `maxLength`                  | `number`  | `undefined` | Maximum character limit                               |
| `showCounter`                | `boolean` | `true`      | Whether to show character count when maxLength is set |
| `showHelperText`             | `boolean` | `true`      | Whether to display helper text                        |
| `showLabel`                  | `boolean` | `true`      | Whether to display the label                          |
| `error`                      | `boolean` | `false`     | Error state (displays red styling)                    |
| `success`                    | `boolean` | `false`     | Success state (displays green styling)                |
| `disabled`                   | `boolean` | `false`     | Disables the textarea                                 |
| `className`                  | `string`  | `undefined` | Additional CSS classes for the textarea element       |
| `containerClassName`         | `string`  | `undefined` | Additional CSS classes for the container div          |
| `labelClassName`             | `string`  | `undefined` | Additional CSS classes for the label                  |
| `helperTextClassName`        | `string`  | `undefined` | Additional CSS classes for helper text                |
| `counterClassName`           | `string`  | `undefined` | Additional CSS classes for the character counter      |
| `textareaContainerClassName` | `string`  | `undefined` | Additional CSS classes for the textarea container     |

Additionally, the component accepts all standard HTML textarea attributes.

## States

The component has several visual states:

| State    | Appearance                                |
| -------- | ----------------------------------------- |
| Default  | Regular border, white background          |
| Hovered  | Regular border with subtle shadow effect  |
| Focused  | Green border with light green shadow ring |
| Error    | Red border with light red ring            |
| Success  | Green border with light green ring        |
| Disabled | Gray background with reduced opacity      |

## Usage Example

```tsx
import { Textarea } from "stacksy";

function MyForm() {
  return (
    <Textarea
      label="Your Message"
      helperText="Please enter your feedback"
      maxLength={500}
      placeholder="Type your message here..."
      error={false}
      success={false}
      className="min-h-[150px]"
    />
  );
}
```

## Features

- Adapts styling based on state (hover, focus, error, success, disabled)
- Character counter with optional max length
- Fully customizable with className props for each element
- Optional label and helper text
- Maintains value synchronization with parent components

## Styling Details

The component uses Tailwind CSS for styling with the following characteristics:

- Rounded corners (rounded-lg)
- Smooth transitions (transition-all duration-200)
- Green caret color for text input
- State-specific styling including border colors, shadows, and rings

</details>

<details>
<summary>ToggleButton </summary>
## Props

| Prop Name   | Type                                                      | Default Value | Description                                               |
| ----------- | --------------------------------------------------------- | ------------- | --------------------------------------------------------- |
| `color`     | `"Primary"` \| `"Red"` \| `"Green"`                       | `"Primary"`   | Sets the color of the toggle button when active           |
| `state`     | `"Default"` \| `"Hovered"` \| `"Pressed"` \| `"Disabled"` | `"Default"`   | Controls the visual state of the toggle button            |
| `size`      | `"small"` \| `"medium"` \| `"large"`                      | `"medium"`    | Determines the size of the toggle button                  |
| `active`    | `boolean`                                                 | `false`       | Controls whether the toggle button is in the on/off state |
| `onChange`  | `(isActive: boolean) => void`                             | `() => {}`    | Callback function when the toggle state changes           |
| `id`        | `string`                                                  | `undefined`   | HTML ID attribute for the toggle button                   |
| `className` | `string`                                                  | `undefined`   | Additional CSS classes to apply to the component          |

## Example Usage

```jsx
import { useState } from "react";
import { ToggleButton } from "shifaster-ui";

export default function ToggleButtonExample() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = (newState) => {
    setIsActive(newState);
    console.log("Toggle state changed to:", newState);
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center gap-4">
        <span>Dark Mode:</span>
        <ToggleButton
          color="Primary"
          size="medium"
          active={isActive}
          onChange={handleToggle}
        />
      </div>

      {/* Additional examples */}
      <div className="flex space-x-4">
        <ToggleButton color="Red" size="small" />
        <ToggleButton color="Green" size="large" active={true} />
        <ToggleButton state="Disabled" />
      </div>
    </div>
  );
}
```

</details>

<details>
<summary>ProgressBar</summary>
# Progress Bar Component Documentation

## Props

| Prop               | Type                            | Default | Description                             |
| ------------------ | ------------------------------- | ------- | --------------------------------------- |
| progress           | `number`                        | -       | Progress value (0-100)                  |
| description        | `string`                        | -       | Descriptive text displayed with the bar |
| label              | `string`                        | -       | Label for the progress bar              |
| position           | `'top' \| 'center' \| 'bottom'` | `'top'` | Position of the percentage display      |
| className          | `string`                        | `''`    | CSS classes for the container element   |
| rootClassName      | `string`                        | `''`    | CSS classes for the progress bar itself |
| indicatorClassName | `string`                        | `''`    | CSS classes for the progress indicator  |
| icon               | `React.ReactNode`               | -       | Icon component to display               |

## Example Usage

```tsx
<ProgressBar
  progress={75}
  label="Download Status"
  description="Downloading your files..."
  position="center"
  className="w-full max-w-md"
  rootClassName="h-2 rounded-full"
  indicatorClassName="bg-blue-500"
  icon={<DownloadIcon size={16} />}
/>
```

</details>

<details>
<summary>CustomPieChart</summary>
# CustomPieChart Component

## Component Properties

| Prop          | Type                             | Default                                                              | Description                                               |
| ------------- | -------------------------------- | -------------------------------------------------------------------- | --------------------------------------------------------- |
| `type`        | `"Pie"` \| `"Donut"` \| `"Half"` | `"Pie"`                                                              | Defines the chart type (Pie, Donut, or Half Donut)        |
| `showData`    | `boolean`                        | `true`                                                               | Toggle visibility of total value in Donut and Half charts |
| `showTooltip` | `boolean`                        | `true`                                                               | Enable or disable hover tooltips                          |
| `data`        | `ChartDataItem[]`                | `[]`                                                                 | Array of data points with name, value, and optional color |
| `width`       | `number`                         | `100`                                                                | Width of the chart in pixels                              |
| `height`      | `number`                         | `100`                                                                | Height of the chart in pixels                             |
| `className`   | `string`                         | `""`                                                                 | Additional CSS classes for styling                        |
| `colors`      | `string[]`                       | `["#e8f5e9", "#c8e6c9", "#a5d6a7", "#81c784", "#66bb6a", "#4caf50"]` | Custom color palette for chart segments                   |
| `total`       | `number`                         | `undefined`                                                          | Optional total value for percentage calculations          |

## ChartDataItem Interface

| Property | Type     | Description                           |
| -------- | -------- | ------------------------------------- |
| `name`   | `string` | Name of the data category             |
| `value`  | `number` | Numeric value of the category         |
| `color?` | `string` | Optional custom color for the segment |

## Example Usage

```typescript
const PieChartExample = () => {
  const chartData: ChartDataItem[] = [
    { name: "Category A", value: 400, color: "#8884d8" },
    { name: "Category B", value: 300, color: "#83a6ed" },
    { name: "Category C", value: 300, color: "#8dd1e1" },
    { name: "Category D", value: 200, color: "#82ca9d" },
    { name: "Category E", value: 100, color: "#a4de6c" },
  ];

  return (
    <div>
      <h2>Pie Chart Variations</h2>

      {/* Default Pie Chart */}
      <CustomPieChart type="Pie" data={chartData} width={300} height={300} />

      {/* Donut Chart */}
      <CustomPieChart type="Donut" data={chartData} width={300} height={300} />

      {/* Half Donut Chart */}
      <CustomPieChart type="Half" data={chartData} width={300} height={300} />
    </div>
  );
};

export default PieChartExample;
```

## Tooltip Information

When hovering over chart segments, the tooltip displays:

- Category name
- Absolute value
- Percentage of total
</details>

<details>
<summary>Toast</summary>
# Toast Component

## Component Properties

| Prop       | Type                                                                 | Default       | Description                                                   |
| ---------- | -------------------------------------------------------------------- | ------------- | ------------------------------------------------------------- |
| `message`  | `string`                                                             | _Required_    | Text message to display in the toast                          |
| `variant`  | `"success"` \| `"error"` \| `"warning"` \| `"info"`                  | `"info"`      | Visual style and icon for the toast                           |
| `duration` | `number`                                                             | `5000`        | Time in milliseconds before the toast automatically dismisses |
| `onClose?` | `() => void`                                                         | `undefined`   | Optional callback function when toast closes                  |
| `position` | `"top-left"` \| `"top-right"` \| `"bottom-left"` \| `"bottom-right"` | `"top-right"` | Screen position for the toast                                 |

## Variant Styles

| Variant   | Background Color | Progress Bar Color | Icon                  |
| --------- | ---------------- | ------------------ | --------------------- |
| `success` | Green (100)      | Green (500)        | Green checkmark       |
| `error`   | Red (100)        | Red (500)          | Red X                 |
| `warning` | Yellow (100)     | Yellow (500)       | Yellow alert triangle |
| `info`    | Blue (100)       | Blue (500)         | Blue info icon        |

## Example Usage

```typescript
import React, { useState } from "react";
import { Toast } from "stacksy";

const ToastExample = () => {
  const [activeToast, setActiveToast] = useState(null);

  const showToast = () => {
    setActiveToast({
      message: "Your registration is completed successfully!",
      variant: "success",
      position: "top-right",
      duration: 5000,
      onClose: () => setActiveToast(null),
    });
  };

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>
      {activeToast && <Toast {...activeToast} />}
    </div>
  );
};
```

## Features

- Four customizable toast variants
- Automatic dismissal with progress bar
- Configurable duration and screen position
- Optional close button
- Responsive design with scrollable content
- Supports custom close callback

## Toast Positioning

- `top-left`: Appears in the top-left corner
- `top-right`: Appears in the top-right corner
- `bottom-left`: Appears in the bottom-left corner
- `bottom-right`: Appears in the bottom-right corner

## Accessibility

- Dismissible via close button
- Clear visual feedback with variant-specific icons
- Responsive and readable message display
</details>

<details>
<summary>TimePicker</summary>
# TimePicker Component

## Props

| Prop          | Type                                                  | Default     | Description                                                    |
| ------------- | ----------------------------------------------------- | ----------- | -------------------------------------------------------------- |
| `type`        | `"Stepper"` \| `"Dropdown"` \| `"Input"` \| `"Timer"` | `"Stepper"` | Determines the visual style and interaction of the time picker |
| `period`      | `"AM"` \| `"PM"`                                      | `"AM"`      | Initial period (AM/PM)                                         |
| `hours`       | `string`                                              | `"00"`      | Initial hours value                                            |
| `minutes`     | `string`                                              | `"00"`      | Initial minutes value                                          |
| `seconds`     | `string`                                              | `"00"`      | Initial seconds value                                          |
| `showSeconds` | `boolean`                                             | `true`      | Whether to display seconds input                               |
| `onChange`    | `function`                                            | `undefined` | Callback function triggered when time changes                  |
| `className`   | `string`                                              | `undefined` | Additional CSS classes                                         |

## Usage Example

```tsx
import TimePicker from "stacksy";
import { useState } from "react";

export default function TimePickerDemo() {
  const [selectedTime, setSelectedTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
    period: "AM",
  });

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    console.log("Selected Time:", time);
  };

  return (
    <div>
      <h2>Select a Time</h2>
      <TimePicker
        type="Dropdown"
        hours="10"
        minutes="30"
        onChange={handleTimeChange}
        showSeconds={false}
      />
      <p>
        Current Time: {selectedTime.hours}:{selectedTime.minutes}{" "}
        {selectedTime.period}
      </p>
    </div>
  );
}
```

</details>

<details>
<summary>Avatar</summary>
# Avatar Component Documentation

## Component Props

| Prop              | Type                                                                                              | Description                              | Required | Default         |
| ----------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------- | --------------- |
| type              | `"image"` \| `"initial"` \| `"placeholder"`                                                       | Determines the type of avatar to display | Yes      | -               |
| size              | `"sm"` \| `"md"` \| `"lg"` \| `"xl"` \| `"2xl"` \| `"3xl"`                                        | Sets the size of the avatar              | Yes      | -               |
| action            | `"none"` \| `"verified"` \| `"pending"` \| `"offline"` \| `"online"` \| `"company"` \| `"notify"` | Defines the status or action indicator   | Yes      | -               |
| src               | `string`                                                                                          | Image source URL (for `type="image"`)    | No       | -               |
| initials          | `string`                                                                                          | Text initials (for `type="initial"`)     | No       | -               |
| placeholder       | `React.ReactNode`                                                                                 | Custom placeholder content               | No       | `<User />` icon |
| logoImage         | `string`                                                                                          | Logo image for company action            | No       | -               |
| notificationCount | `number`                                                                                          | Number of notifications                  | No       | -               |

## Example Usage

```tsx
    <Avatar
      type="image"
      size="lg"
      action="online"
      src=""
    />
    <Avatar
      type="initial"
      size="md"
      action="verified"
      initials="JD"
    />
     <Avatar
      type="placeholder"
      size="xl"
      action="notify"
      notificationCount={5}
    />

```

</details>

<details>
<summary>Input</summary>
# Input Component Documentation

## Overview

The `CustomInput` component is a highly customizable React input component with various styles, states, and features like icons, helper text, and character counting.

## Props

| Category              | Prop Name                 | Type                                                                                               | Default      | Description                                      |
| --------------------- | ------------------------- | -------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------ |
| **Main Props**        |                           |                                                                                                    |              |                                                  |
|                       | `type`                    | `"boxed"` \| `"lined"` \| `"outlined"`                                                             | `"outlined"` | Visual style of the input                        |
|                       | `size`                    | `"sm"` \| `"md"` \| `"lg"` \| `"xl"`                                                               | `"md"`       | Size of the input                                |
|                       | `state`                   | `"default"` \| `"typing"` \| `"active"` \| `"disabled"` \| `"hovered"` \| `"success"` \| `"error"` | `"default"`  | State of the input (controlled mode)             |
|                       | `disabled`                | `boolean`                                                                                          | `false`      | Whether the input is disabled                    |
|                       | `inputType`               | `string`                                                                                           | `"text"`     | HTML input type (text, password, email, etc.)    |
| **Label Props**       |                           |                                                                                                    |              |                                                  |
|                       | `label`                   | `string`                                                                                           | `undefined`  | Label text for the input                         |
|                       | `showLabel`               | `boolean`                                                                                          | `true`       | Whether to show the label                        |
| **Placeholder Props** |                           |                                                                                                    |              |                                                  |
|                       | `placeholderText`         | `string`                                                                                           | `undefined`  | Placeholder text                                 |
|                       | `showPlaceholder`         | `boolean`                                                                                          | `true`       | Whether to show the placeholder                  |
| **Helper Text Props** |                           |                                                                                                    |              |                                                  |
|                       | `helperText`              | `string`                                                                                           | `undefined`  | Helper text displayed below the input            |
|                       | `showHelperText`          | `boolean`                                                                                          | `true`       | Whether to show the helper text                  |
| **Counter Props**     |                           |                                                                                                    |              |                                                  |
|                       | `maxLength`               | `number`                                                                                           | `undefined`  | Maximum character count                          |
|                       | `showCounter`             | `boolean`                                                                                          | `false`      | Whether to show the character counter            |
| **Icon Props**        |                           |                                                                                                    |              |                                                  |
|                       | `startIcon`               | `LucideIcon`                                                                                       | `undefined`  | Icon component to show at the start of the input |
|                       | `endIcon`                 | `LucideIcon`                                                                                       | `undefined`  | Icon component to show at the end of the input   |
|                       | `onStartIconClick`        | `() => void`                                                                                       | `undefined`  | Function to call when start icon is clicked      |
|                       | `onEndIconClick`          | `() => void`                                                                                       | `undefined`  | Function to call when end icon is clicked        |
| **Styling Props**     |                           |                                                                                                    |              |                                                  |
|                       | `containerClassName`      | `string`                                                                                           | `undefined`  | Custom class for the container                   |
|                       | `labelClassName`          | `string`                                                                                           | `undefined`  | Custom class for the label                       |
|                       | `inputClassName`          | `string`                                                                                           | `undefined`  | Custom class for the input                       |
|                       | `helperTextClassName`     | `string`                                                                                           | `undefined`  | Custom class for the helper text                 |
|                       | `counterClassName`        | `string`                                                                                           | `undefined`  | Custom class for the counter                     |
|                       | `iconClassName`           | `string`                                                                                           | `undefined`  | Custom class for the icons                       |
|                       | `inputContainerClassName` | `string`                                                                                           | `undefined`  | Custom class for the input container             |

## Type Options

| Type       | Description                        | Visual Style                           |
| ---------- | ---------------------------------- | -------------------------------------- |
| `outlined` | Input with a border on all sides   | Standard input with complete border    |
| `boxed`    | Input with a background and border | Input with background color and border |
| `lined`    | Input with only a bottom border    | Minimal input with only a bottom line  |

## Size Options

| Size | Height      | Text Size | Padding     |
| ---- | ----------- | --------- | ----------- |
| `sm` | 32px (h-8)  | xs        | py-1 px-2   |
| `md` | 40px (h-10) | sm        | py-2 px-3   |
| `lg` | 48px (h-12) | base      | py-2.5 px-4 |
| `xl` | 56px (h-14) | lg        | py-3 px-5   |

## State Options

| State      | Description         | Visual Indicator                 |
| ---------- | ------------------- | -------------------------------- |
| `default`  | Default state       | Normal border                    |
| `typing`   | User is typing      | Darker border                    |
| `active`   | Input has focus     | Green border                     |
| `disabled` | Input is disabled   | Gray background, reduced opacity |
| `hovered`  | Mouse is over input | Darker border                    |
| `success`  | Valid input         | Green border                     |
| `error`    | Invalid input       | Red border                       |

</details>

<details>
<summary>CheckBox</summary>
# Checkbox Component

A customizable checkbox component with support for different shapes, states, and indeterminate mode.

## Usage

| Prop            | Type                                                | Default     | Description                                       |
| --------------- | --------------------------------------------------- | ----------- | ------------------------------------------------- |
| `shape`         | `'square' \| 'rounded' \| 'circle'`                 | `'square'`  | The shape of the checkbox                         |
| `state`         | `'default' \| 'hovered' \| 'pressed' \| 'disabled'` | `'default'` | The interactive state of the checkbox             |
| `checked`       | `boolean`                                           | `false`     | Whether the checkbox is checked                   |
| `indeterminate` | `boolean`                                           | `false`     | Whether the checkbox is in an indeterminate state |
| `onChange`      | `function`                                          | -           | Callback fired when the state changes             |
| `className`     | `string`                                            | -           | Additional CSS classes to apply                   |

```jsx
<Checkbox
  shape="rounded"
  checked={true}
  onChange={(e) => console.log(e.target.checked)}
/>

// Indeterminate state
<Checkbox indeterminate={true} />
```

### Indeterminate State (e.g., for "Select All" functionality)

```jsx
const [checked, setChecked] = useState([true, false]);
const allChecked = checked.every(Boolean);
const indeterminate = checked.some(Boolean) && !allChecked;

return (
  <div>
    <Checkbox
      checked={allChecked}
      indeterminate={indeterminate}
      onChange={(e) => {
        setChecked([e.target.checked, e.target.checked]);
      }}
    />
    <label>Select All</label>
  </div>
);
```

</details>
