import React, { useState, useEffect } from "react";
import axios from "axios";
import Plot from "react-plotly.js";
import { assignDataToCharts } from "../utils/helpers";

const Charts = () => {
  const [dataCharts, setDataCharts] = useState([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const consultAPI = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACK_ADDRESS}charts`
        );
        const chartsData = assignDataToCharts(res.data.data);
        setDataCharts(chartsData);
      } catch (error) {
        console.log(error);
        setErr(true);
      }
    };

    consultAPI();
  }, []);

  return (
    <>
      {err ? (
        <div className="alert alert-danger" role="alert">
          Algo salió mal. Intenta de nuevo más tarde
        </div>
      ) : (
        <div className="mt-4 p-3">
          <Plot
            data={dataCharts}
            layout={{
              width: 850,
              height: 600,
              title:
                "Encuestas de aprobación del Presidente Andrés Manuel López Obrador",
            }}
            config={{ responsive: true, scrollZoom: true }}
          />
        </div>
      )}
    </>
  );
};

export default Charts;
