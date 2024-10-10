"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import CustomButton from "../CustomButton";
import TimelineComponent from "../Testing/TimelineComponent";
export const description = "A multiple bar chart";
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const OrdersStatusItem = ({ status }: any) => {
  const content = [
    {
      data: {
        single: { time: "9 30am", action: "Eat" },
        second: { time: "9 30am", action: "Eat" },
      },
    },
    {
      data: {
        single: { time: "9 30am", action: "Eat" },
      },
    },
    {
      data: {
        single: { time: "10am", action: "Sleep" },
        second: { time: "630pm", action: "Exercise" },
      },
    },
    {
      data: {
        single: { time: "10am", action: "Sleep" },
        second: { time: "630pm", action: "Exercise" },
      },
    },
    {
      data: {
        single: { time: "10am", action: "Sleep" },
        second: { time: "630pm", action: "Exercise" },
      },
    },
    {
      data: {
        single: { time: "10am", action: "Sleep" },
        second: { time: "630pm", action: "Exercise" },
      },
    },
  ];
  const [open, setOpen] = useState<boolean>();
  return (
    <div className="flex justify-between border-2 py-14 p-7 border-black rounded-md">
      <div className="flex gap-5">
        <p>ID: 1234</p>
        <div>
          {status == 0 && (
            <p className="bg-yellow-400 bg-opacity-50 px-2 rounded-lg">
              Pending
            </p>
          )}
          {status == 1 && (
            <p className="bg-red-400 bg-opacity-50 px-2 rounded-lg">Rejected</p>
          )}
          {status == 2 && (
            <p className="bg-green-400 bg-opacity-50 px-2 rounded-lg">
              Completed
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <CustomButton onClick={() => setOpen(true)}>View Details</CustomButton>
        <CustomButton>Report</CustomButton>
      </div>
      <Sidebar
        visible={open}
        position="right"
        onHide={() => setOpen(false)}
        className="bg-white border-black w-[75%] text-black"
      >
        <div className="grid grid-cols-4 grid-rows-4 h-full">
          <div className="col-span-2 row-span-2 p-10">
            Order Graph
            <ChartContainer config={chartConfig}>
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dashed" />}
                />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
              </BarChart>
            </ChartContainer>
          </div>
          <div className="grid grid-rows-2 col-span-2 row-span-2">
            <p className="border-2 row-span-1 m-2 border-black rounded-md text-center">
              2
            </p>
            <p className="border-2 row-span-1 m-2 border-black rounded-md text-center">
              3
            </p>
          </div>
          <div className="flex flex-col justify-center col-span-4 row-span-2 mt-10">
            <p className="mx-8">Order Details</p>
            <TimelineComponent content={content} />
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default OrdersStatusItem;
