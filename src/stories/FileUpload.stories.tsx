import type { Meta, StoryObj } from "@storybook/react";
import { CustomFileUpload } from "../components/internal/CustomFileUpload";

const meta: Meta<typeof CustomFileUpload> = {
  title: "Components/CustomFileUpload",
  component: CustomFileUpload,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Disables the file upload component",
    },
    promptTitle1: {
      control: "text",
      description: "Title for drag and drop upload type",
    },
    promptTitle2: {
      control: "text",
      description: "Title for browse upload type",
    },
    promptTitle3: {
      control: "text",
      description: "Title for combined upload type",
    },
    showPromptDescription: {
      control: "boolean",
      description: "Shows or hides the prompt description",
    },
    showLeadingIcon: {
      control: "boolean",
      description: "Shows or hides the leading icon",
    },
    uploadType: {
      control: "select",
      options: ["drag-drop", "browse", "combined"],
      description: "Type of upload interface to display",
    },
    allowedFileTypes: {
      control: "object",
      description: "Array of allowed MIME types",
    },
    maxFileSize: {
      control: "number",
      description: "Maximum file size in bytes",
    },
    description: {
      control: "text",
      description: "Description text below the title",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CustomFileUpload>;

export const DragAndDrop: Story = {
  args: {
    uploadType: "drag-drop",
    promptTitle1: "Upload a file or drag and drop",
    showPromptDescription: true,
    showLeadingIcon: true,
    allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
    maxFileSize: 5 * 1024 * 1024,
    description: "PNG, JPG, GIF up to 5MB",
  },
};

export const BrowseFiles: Story = {
  args: {
    uploadType: "browse",
    promptTitle2: "Browse files to upload",
    showPromptDescription: true,
    showLeadingIcon: true,
    allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
    maxFileSize: 5 * 1024 * 1024,
    description: "PNG, JPG, GIF up to 5MB",
  },
};

export const Combined: Story = {
  args: {
    uploadType: "combined",
    promptTitle3: "Drag and drop a file to upload",
    showPromptDescription: true,
    showLeadingIcon: true,
    allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
    maxFileSize: 5 * 1024 * 1024,
    description: "PNG, JPG, GIF up to 5MB",
  },
};

export const Disabled: Story = {
  args: {
    ...Combined.args,
    disabled: true,
  },
};

export const DocumentUpload: Story = {
  args: {
    ...Combined.args,
    promptTitle3: "Drag and drop document to upload",
    allowedFileTypes: [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
    ],
    description: "PDF, DOCX, TXT up to 10MB",
    maxFileSize: 10 * 1024 * 1024,
  },
};

export const CustomStyle: Story = {
  args: {
    ...Combined.args,
    className: "bg-gray-50 border-primary-300 hover:bg-blue-50",
  },
};

export const NoDescription: Story = {
  args: {
    ...Combined.args,
    showPromptDescription: false,
  },
};

export const NoIcon: Story = {
  args: {
    ...Combined.args,
    showLeadingIcon: false,
  },
};

export const CustomFileSize: Story = {
  args: {
    ...Combined.args,
    maxFileSize: 20 * 1024 * 1024, // 20MB
    description: "PNG, JPG, GIF up to 20MB",
  },
};
