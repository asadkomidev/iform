export const generateBlueColors = () => {
  const colors = [
    "hsl(210, 100%, 90%)",
    "hsl(210, 100%, 80%)",
    "hsl(210, 100%, 70%)",
    "hsl(210, 100%, 60%)",
    "hsl(210, 100%, 50%)",
    "hsl(210, 100%, 40%)",
    "hsl(210, 100%, 30%)",
    "hsl(210, 100%, 20%)",
    "hsl(210, 100%, 10%)",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const generateChartColors = () => {
  const colors = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))",
    "hsl(var(--chart-6))",
    "hsl(var(--chart-7))",
    "hsl(var(--chart-8))",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const reshapeChartData = (data: any[]) => {
  const chartData = data.map((question) => {
    return {
      ...question,
      fill: generateChartColors(),
    };
  });

  return chartData;
};
