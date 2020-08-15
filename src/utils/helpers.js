import { colors } from "./constants";

export const assignDataToCharts = (data) => {
  return data.map((el, i) => {
    const dates = getdates(el.data);
    const percentages = getPercentages(el.data);
    return {
      x: dates,
      y: percentages,
      name: el._id,
      type: "line",
      mode: "lines+markers",
      marker: { color: colors[i] },
    };
  });
};

export const getdates = (data) => {
  return data.map((date) => date.created.substring(0, 10));
};

export const getPercentages = (data) => {
  return data.map((percentage) => percentage.percentage);
};
