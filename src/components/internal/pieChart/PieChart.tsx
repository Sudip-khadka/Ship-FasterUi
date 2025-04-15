import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

// Define types
export type ChartType = "Pie" | "Donut" | "Half";

export interface ChartConfig {
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
}

export interface ChartDataItem {
  name: string;
  value: number;
  color?: string;
}

export interface DynamicChartProps {
  type?: ChartType;
  showData?: boolean;
  showTooltip?: boolean;
  data: ChartDataItem[];
  width?: number;
  height?: number;
  className?: string;
  colors?: string[];
  total?: number;
}

export interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    payload: {
      name: string;
      value: number;
      total: number;
    };
  }>;
}

// ✅ Custom Tooltip
const CustomTooltip: React.FC<TooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const item = payload[0];
    const percentage = ((item.value / item.payload.total) * 100).toFixed(1);

    return (
      <div>
        <p className="font-medium text-gray-800">{item.name}</p>
        <p className="text-gray-700">{`Value: ${item.value}`}</p>
        <p className="text-gray-500">{`${percentage}%`}</p>
      </div>
    );
  }
  return null;
};

const CustomPieChart: React.FC<DynamicChartProps> = ({
  type = "Pie",
  showData = true,
  showTooltip = true,
  data = [],
  width = 100,
  height = 100,
  className = "",
  colors = ["#e8f5e9", "#c8e6c9", "#a5d6a7", "#81c784", "#66bb6a", "#4caf50"],
  total,
}) => {
  const calculatedTotal =
    total || data.reduce((sum, item) => sum + item.value, 0);

  const preparedData = data.map((item) => ({
    ...item,
    total: calculatedTotal,
  }));

  const getChartConfig = (): ChartConfig => {
    const radius = Math.min(width, height);
    switch (type) {
      case "Donut":
        return {
          innerRadius: radius * 0.31,
          outerRadius: radius * 0.4,
          startAngle: 0,
          endAngle: 360,
        };
      case "Half":
        return {
          innerRadius: radius * 0.31,
          outerRadius: radius * 0.4,
          startAngle: 180,
          endAngle: 0,
        };
      default:
        return {
          innerRadius: 0,
          outerRadius: radius * 0.4,
          startAngle: 0,
          endAngle: 360,
        };
    }
  };

  const { innerRadius, outerRadius, startAngle, endAngle } = getChartConfig();

  const isHalfChart = type === "Half";
  const isDonutChart = type === "Donut";
  const isPieChart = type === "Pie";

  const totalValue = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div
      className={`flex items-center justify-center relative ${className}`}
      style={{ width, height }}
    >
      <PieChart width={width} height={height}>
        {showTooltip && (
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{
              zIndex: 999,
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              padding: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              fontSize: "12px",
            }}
          />
        )}

        <Pie
          data={preparedData}
          cx="50%"
          cy={isHalfChart ? "80%" : "50%"}
          innerRadius={isPieChart ? 0 : innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          dataKey="value"
          stroke="none"
          cornerRadius={0}
          paddingAngle={1}
        >
          {preparedData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color || colors[index % colors.length]}
            />
          ))}
        </Pie>
      </PieChart>

      {showData && (isDonutChart || isHalfChart) && (
        <div
          className="absolute text-center pointer-events-none"
          style={
            isHalfChart
              ? { bottom: "25%", width: "100%" }
              : {
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                }
          }
        >
          <div className="text-xs font-medium text-gray-600 z-10">
            <div style={{ fontSize: "0.6rem", opacity: 0.7 }}>Total</div>
            {totalValue}
          </div>
        </div>
      )}
    </div>
  );
};

export {CustomPieChart,CustomTooltip};
