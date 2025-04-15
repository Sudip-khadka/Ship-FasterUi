import { useState } from "react";
import  {CustomPieChart, ChartDataItem } from "../components/internal/pieChart/PieChart";

export const PieChartExample = () => {
  // State to control tooltip visibility
  const [showTooltips, setShowTooltips] = useState(true);

  // Common data for all chart types
  const chartData: ChartDataItem[] = [
    { name: "Category A", value: 400, color: "#8884d8" },
    { name: "Category B", value: 300, color: "#83a6ed" },
    { name: "Category C", value: 300, color: "#8dd1e1" },
    { name: "Category D", value: 200, color: "#82ca9d" },
    { name: "Category E", value: 100, color: "#a4de6c" },
  ];

  return (
    <div className="p-4 space-y-8">
      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showTooltips}
            onChange={(e) => setShowTooltips(e.target.checked)}
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          <span className="text-sm font-medium">Show Tooltips</span>
        </label>
      </div>

      <div>
        <h1>test</h1>
        <h2 className="text-lg font-medium mb-4">Pie Chart</h2>
        <div className="flex flex-wrap gap-8">
          <div>
            <p className="text-sm text-gray-600 mb-2">
              Default Pie Chart with Hover
            </p>
            <CustomPieChart
              type="Pie"
              data={chartData}
              width={320}
              height={320}
              showTooltip={showTooltips}
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-medium mb-4">Donut Chart</h2>
        <div className="flex flex-wrap gap-8">
          <div>
            <p className="text-sm text-gray-600 mb-2">Donut Chart</p>
            <CustomPieChart
              type="Donut"
              data={chartData}
              width={320}
              height={320}
              showTooltip={showTooltips}
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-medium mb-4">Half Donut Chart</h2>
        <div className="flex flex-wrap gap-8">
          <div>
            <p className="text-sm text-gray-600 mb-2">Half Donut Chart</p>
            <CustomPieChart
              type="Half"
              data={chartData}
              width={320}
              height={320}
              showTooltip={showTooltips}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChartExample;
