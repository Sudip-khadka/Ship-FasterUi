import type { Meta, StoryObj } from "@storybook/react";
import {CustomPieChart, ChartDataItem } from "../components/internal/pieChart/PieChart";

const meta: Meta<typeof CustomPieChart> = {
  title: "Components/CustomPieChart",
  component: CustomPieChart,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select", options: ["Pie", "Donut", "Half"] },
      description: "Type of pie chart",
    },
    showData: {
      control: "boolean",
      description: "Show total data in the center",
    },
    showTooltip: {
      control: "boolean",
      description: "Show tooltip on hover",
    },
    width: {
      control: { type: "number", min: 50, max: 500 },
      description: "Width of the chart",
    },
    height: {
      control: { type: "number", min: 50, max: 500 },
      description: "Height of the chart",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomPieChart>;

// Sample data for stories
const budgetData: ChartDataItem[] = [
  { name: "Housing", value: 1200, color: "#FF6384" },
  { name: "Transportation", value: 500, color: "#36A2EB" },
  { name: "Food", value: 700, color: "#FFCE56" },
  { name: "Utilities", value: 300, color: "#4BC0C0" },
  { name: "Entertainment", value: 200, color: "#9966FF" },
];

const projectData: ChartDataItem[] = [
  { name: "Design", value: 40, color: "#FF6384" },
  { name: "Development", value: 120, color: "#36A2EB" },
  { name: "Testing", value: 30, color: "#FFCE56" },
  { name: "Deployment", value: 10, color: "#4BC0C0" },
];

export const Default: Story = {
  args: {
    data: budgetData,
    width: 300,
    height: 300,
    type: "Pie",
  },
  name: "Default Pie Chart",
};

export const DonutChart: Story = {
  args: {
    data: budgetData,
    width: 300,
    height: 300,
    type: "Donut",
    showData: true,
  },
  name: "Donut Chart with Total",
};

export const HalfPieChart: Story = {
  args: {
    data: projectData,
    width: 300,
    height: 200,
    type: "Half",
    showData: true,
  },
  name: "Half Pie Chart",
};

export const CustomColorChart: Story = {
  args: {
    data: budgetData,
    width: 300,
    height: 300,
    type: "Pie",
    colors: ["#1a73e8", "#4285f4", "#34a853", "#fbbc05", "#ea4335"],
  },
  name: "Custom Color Palette",
};

export const SmallChart: Story = {
  args: {
    data: projectData,
    width: 100,
    height: 100,
    type: "Donut",
    showData: false,
    showTooltip: false,
  },
  name: "Small Donut Chart",
};

export const LargeChartWithTooltip: Story = {
  args: {
    data: budgetData,
    width: 500,
    height: 500,
    type: "Donut",
    showData: true,
    showTooltip: true,
  },
  name: "Large Donut Chart with Tooltip",
};
