import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

interface ColorProps {
  color: {
    id: string;
    name: string;
    value: string;
  };
  handleColorChange: (id: string, newValue: string) => void;
}

const Color: React.FC<ColorProps> = ({ color, handleColorChange }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: color.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      key={color.id}
      style={style}
    >
      <input
        className=" w-24 h-24"
        type="color"
        id={color.id}
        value={color.value}
        onChange={(e) => handleColorChange(color.id, e.target.value)}
      />
    </div>
  );
};

export default Color;
