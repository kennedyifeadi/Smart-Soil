import { useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import { onValue, ref } from "firebase/database";
import { db } from "../../firebase/firebase";

export const DataChart = () => {
  const [temperature, setTemperature] = useState(null);
  const [moisture, setMoisture] = useState(null);
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    const updateDashboard = () => {
      onValue(ref(db, "Data"), (snapshot) => {
        const Data = snapshot.val();
        setTemperature(Data?.Temperature || 0);
        setMoisture(Data?.Moisture || 0);
        setHumidity(Data?.Humidity || 0);
      });
    };

    updateDashboard();
  }, []);

  useEffect(() => {
    if (humidity === null || temperature === null || moisture === null) return;

    const options = {
      colors: ["#1A56DB", "#FDBA8C"],
      series: [
        {
          name: "Humidity",
          color: "#ffbc02",
          data: [
            { x: "Mon", y: 200 },
            { x: "Tue", y: humidity },
            { x: "Wed", y: 163 },
            { x: "Thu", y: 21 },
            { x: "Fri", y: 162 },
            { x: "Sat", y: 303 },
            { x: "Sun", y: 190 },
          ],
        },
        {
          name: "Temperature",
          color: "#1A56DB",
          data: [
            { x: "Mon", y: 231 },
            { x: "Tue", y: temperature },
            { x: "Wed", y: 63 },
            { x: "Thu", y: 421 },
            { x: "Fri", y: 122 },
            { x: "Sat", y: 323 },
            { x: "Sun", y: 111 },
          ],
        },
        {
          name: "Moisture",
          color: "#FDBA8C",
          data: [
            { x: "Mon", y: 232 },
            { x: "Tue", y: moisture },
            { x: "Wed", y: 341 },
            { x: "Thu", y: 224 },
            { x: "Fri", y: 522 },
            { x: "Sat", y: 411 },
            { x: "Sun", y: 243 },
          ],
        },
      ],
      chart: {
        type: "bar",
        height: "100%",
        fontFamily: "Inter, sans-serif",
        toolbar: { show: false },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "70%",
          borderRadiusApplication: "end",
          borderRadius: 4,
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        style: { fontFamily: "Inter, sans-serif" },
      },
      states: {
        hover: { filter: { type: "darken", value: 1 } },
      },
      stroke: { show: true, width: 0, colors: ["transparent"] },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: { left: 2, right: 2, top: -20 },
      },
      dataLabels: { enabled: false },
      legend: { show: false },
      xaxis: {
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
        },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: { show: false },
      fill: { opacity: 1 },
    };

    const chartElement = document.getElementById("column-chart");
    if (chartElement) {
      const chart = new ApexCharts(chartElement, options);
      chart.render();
    }
  }, [humidity, temperature, moisture]); 

  return <div className="w-full h-full" id="column-chart"></div>;
};
