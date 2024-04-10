import * as React from "react";
import { observer } from "mobx-react";
import WorkerOptions from "../../../store/WorkerOptions";
import { BarChart } from "@mui/x-charts/BarChart";
import { useEffect, useState } from "react";

const WorkersForYear = observer(() => {
  const [monthlyData, setMonthlyData] = useState(Array(12).fill(0));
  const maxCount = Math.max(...monthlyData);

  useEffect(() => {
    WorkerOptions.getWorkers().then(() => {
      WorkerOptions.listWorkers.forEach((worker) => {
        const joinMonth = new Date(worker.dateOfStartingWork).getMonth();
        setMonthlyData((prevData) => {
          const newData = [...prevData];
          newData[joinMonth]++;
          return newData;
        });
      });
    });
  }, []);

  return (
    <BarChart
      xAxis={[
        {
          id: "barCategories",
          data: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          scaleType: "band",
        },
      ]}
      yAxis={[
        {
          id: "count",
          scaleType: "linear",
          domain: [0, maxCount],
          tickCount: maxCount + 1,
        },
      ]}
      series={[
        {
          data: monthlyData,
        },
      ]}
      width={500}
      height={300}
    />
  );
});
export default WorkersForYear;
