export const dataSource = (label, cases, treated, recovered, death) => {
  return {
    labels: label,
    datasets: [
      {
        label: "Confirmed Cases",
        data: cases,
        backgroundColor: "rgb(251, 53, 117)",
      },
      {
        label: "Treated",
        data: treated,
        backgroundColor: "rgb(247, 188, 67)",
      },
      {
        label: "Recovered",
        data: recovered,
        backgroundColor: "rgb(100, 212, 31)",
      },
      {
        label: "Death",
        data: death,
        backgroundColor: "rgb(0, 0, 0)",
      },
    ],
  };
};

export const options = {
  interaction: {
    mode: "index",
    axis: "y",
  },
  maintainAspectRatio: false,
  scales: {
    xAxex: {
      title: {
        display: true,
        text: "Provinces",
      },
      ticks: {
        autoSkip: false,
        maxRotation: 90,
        minRotation: 90,
      },
    },
    yAxes: {
      title: {
        display: true,
        text: "Number of cases",
      },
    },
  },
};
