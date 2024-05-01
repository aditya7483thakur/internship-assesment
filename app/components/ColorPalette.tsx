"use client";

import React from "react";
import {
  SortableContext,
  horizontalListSortingStrategy,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Color from "./Color";

interface ColorObject {
  id: string;
  name: string;
  value: string;
}

interface ColorPaletteProps {
  colors: ColorObject[];
  handleColorChange: (id: string, newValue: string) => void;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({
  colors,
  handleColorChange,
}) => {
  return (
    <div>
      <h1>Color Palette</h1>
      <div className="column flex">
        <SortableContext
          items={colors}
          strategy={horizontalListSortingStrategy}
        >
          {colors.map((color) => (
            <Color
              key={color.id}
              color={color}
              handleColorChange={handleColorChange}
            />
          ))}
        </SortableContext>
      </div>
    </div>
  );
};

export default ColorPalette;
