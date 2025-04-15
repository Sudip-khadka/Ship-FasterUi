import { useState } from "react";
import {
  Tooltip,
  type TooltipColor,
  type TooltipDirection,
  type PointerPosition,
} from "../components/internal/tooltip/Tooltip";

export default function TooltipDemo() {
  const [color, setColor] = useState<TooltipColor>("Primary");
  const [direction, setDirection] = useState<TooltipDirection>("Bottom");
  const [pointerPosition, setPointerPosition] =
    useState<PointerPosition>("Leading");
  const [showDescription, setShowDescription] = useState(true);
  const [showTitle, setShowTitle] = useState(true);
  const [showAction, setShowAction] = useState(true);
  const [showClose, setShowClose] = useState(true);

  return (
    <div className="p-8 space-y-12">
      <h1 className="text-2xl font-bold">Tooltip Component Demo</h1>
      {/* 
      <div className="space-y-8">
        <h2 className="text-xl font-semibold">Primary Color Variations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 text-center rounded">
              Primary (Large)
            </div>
            <div className="flex items-center justify-center h-80 border rounded-lg">
              <Tooltip
                color="Primary"
                direction="Bottom"
                pointerPosition="Leading"
                description={true}
                showAction={true}
                showClose={true}
              >
                <div className="px-4 py-2 bg-gray-100 rounded cursor-pointer">
                  Hover me
                </div>
              </Tooltip>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-100 p-4 text-center rounded">
              Primary (Small)
            </div>
            <div className="flex items-center justify-center h-80 border rounded-lg">
              <Tooltip
                color="Primary"
                direction="Right"
                pointerPosition="Leading"
                description={false}
                showAction={false}
                showClose={true}
              >
                <div className="px-4 py-2 bg-gray-100 rounded cursor-pointer">
                  Hover me
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </div> */}

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Customizable Tooltip</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Color</label>
            <select
              className="w-full p-2 border rounded"
              value={color}
              onChange={(e) => setColor(e.target.value as TooltipColor)}
            >
              <option value="White">White</option>
              <option value="Primary">Primary (Green)</option>
              <option value="Neutral">Neutral (Gray)</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Direction</label>
            <select
              className="w-full p-2 border rounded"
              value={direction}
              onChange={(e) => setDirection(e.target.value as TooltipDirection)}
            >
              <option value="Top">Top</option>
              <option value="Right">Right</option>
              <option value="Bottom">Bottom</option>
              <option value="Left">Left</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Pointer Position
            </label>
            <select
              className="w-full p-2 border rounded"
              value={pointerPosition}
              onChange={(e) =>
                setPointerPosition(e.target.value as PointerPosition)
              }
            >
              <option value="Leading">Leading</option>
              <option value="Middle">Middle</option>
              <option value="Trailing">Trailing</option>
              <option value="Off">Off</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="showDescription"
              checked={showDescription}
              onChange={() => setShowDescription(!showDescription)}
              className="mr-2"
            />
            <label htmlFor="showDescription">Show Description</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="showTitle"
              checked={showTitle}
              onChange={() => setShowTitle(!showTitle)}
              className="mr-2"
            />
            <label htmlFor="showTitle">Show Title</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="showAction"
              checked={showAction}
              onChange={() => setShowAction(!showAction)}
              className="mr-2"
            />
            <label htmlFor="showAction">Show Action</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="showClose"
              checked={showClose}
              onChange={() => setShowClose(!showClose)}
              className="mr-2"
            />
            <label htmlFor="showClose">Show Close</label>
          </div>
        </div>

        <div className="flex items-center justify-center h-80 border rounded-lg">
          <Tooltip
            color={color}
            direction={direction}
            pointerPosition={pointerPosition}
            description={showDescription}
            showTitle={showTitle}
            showAction={showAction}
            showClose={showClose}
          >
            <div className="px-4 py-2 bg-gray-100 rounded cursor-pointer">
              Hover me
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
