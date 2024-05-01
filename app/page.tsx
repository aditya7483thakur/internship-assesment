"use client";

import Parent from "./components/Parent";
import React, { useState } from "react";

import ColorPalette from "./components/ColorPalette";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

interface Color {
  id: string;
  name: string;
  value: string;
}

export default function Home() {
  const [colors, setColors] = useState<Color[]>([
    { id: "primary", name: "Primary", value: "#007bff" },
    { id: "secondary", name: "Secondary", value: "#6c757d" },
    { id: "success", name: "Success", value: "#28a745" },
    { id: "danger", name: "Danger", value: "#dc3545" },
    { id: "warning", name: "Warning", value: "#ffc107" },
    { id: "info", name: "Info", value: "#17a2b8" },
    { id: "light", name: "Light", value: "#f8f9fa" },
    { id: "dark", name: "Dark", value: "#343a40" },
  ]);

  const handleColorChange = (id: string, newValue: string) => {
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.id === id ? { ...color, value: newValue, key: color.id } : color
      )
    );
  };

  const getTaskPos = (id: string) =>
    colors.findIndex((color) => color.id === id);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setColors((colors) => {
      const orginalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(colors, orginalPos, newPos);
    });
  };

  return (
    <>
      <Parent />
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <ColorPalette colors={colors} handleColorChange={handleColorChange} />
      </DndContext>
    </>
  );
}
