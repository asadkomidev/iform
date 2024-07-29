export const generateBlueColors = () => {
  const colors = [
    "hsl(210, 100%, 95%)",
    "hsl(210, 100%, 90%)",
    "hsl(210, 100%, 85%)",
    "hsl(210, 100%, 80%)",
    "hsl(210, 100%, 75%)",
    "hsl(210, 100%, 70%)",
    "hsl(210, 100%, 65%)",
    "hsl(210, 100%, 60%)",
    "hsl(210, 100%, 55%)",
    "hsl(210, 100%, 50%)",
    "hsl(210, 100%, 45%)",
    "hsl(210, 100%, 40%)",
    // "hsl(210, 100%, 35%)",
    // "hsl(210, 100%, 30%)",
    // "hsl(210, 100%, 25%)",
    // "hsl(210, 100%, 20%)",
    // "hsl(210, 100%, 15%)",
    // "hsl(210, 100%, 10%)",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

// a function to generate random gray gradient colors for the chart
export const generateGrayColors = () => {
  const colors = [
    "hsl(0, 0%, 95%)",
    "hsl(0, 0%, 90%)",
    "hsl(0, 0%, 85%)",
    "hsl(0, 0%, 80%)",
    "hsl(0, 0%, 75%)",
    "hsl(0, 0%, 70%)",
    "hsl(0, 0%, 65%)",
    "hsl(0, 0%, 60%)",
    "hsl(0, 0%, 55%)",
    "hsl(0, 0%, 50%)",
    "hsl(0, 0%, 45%)",
    "hsl(0, 0%, 40%)",
    "hsl(0, 0%, 35%)",
    "hsl(0, 0%, 30%)",
    "hsl(0, 0%, 25%)",
    "hsl(0, 0%, 20%)",
    "hsl(0, 0%, 15%)",
  ];

  // always return a unique color never the same color
  return colors[Math.floor(Math.random() * colors.length + 1)];
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
      fill: generateBlueColors(),
    };
  });

  return chartData;
};
