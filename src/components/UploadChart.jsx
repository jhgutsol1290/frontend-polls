import React, { useState, useEffect } from "react";
import axios from "axios";

const UploadChart = () => {
  const [data, setData] = useState({
    pollster: "",
    percentage: 0,
    created: "",
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
        setData({
          pollster: "",
          percentage: 0,
          created: "",
        });
      }, 2000);
    }
    if (success) {
      setTimeout(() => {
        setData({
          pollster: "",
          percentage: 0,
          created: "",
        });
        setSuccess(false);
      }, 2000);
    }
  }, [error, success]);

  const handleChange = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACK_ADDRESS}charts`, data);
      setSuccess(true);
      setData({
        pollster: "",
        percentage: 0,
        created: "",
      });
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      {error && (
        <div className="alert alert-danger" role="alert">
          Algo salió mal. Intenta de nuevo más tarde
        </div>
      )}
      <div className="container p-4 mt-4">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
                <div className="card-header text-center">
                    Subir nueva encuesta de aprobación
                </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="pollster">Casa Encuestadora</label>
                    <input
                      type="text"
                      name="pollster"
                      placeholder="Ej. El Universal"
                      className="form-control"
                      onChange={handleChange}
                      value={data.pollster}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="percentage">Porcentaje</label>
                    <input
                      type="number"
                      name="percentage"
                      placeholder="Ej. 69"
                      className="form-control"
                      onChange={handleChange}
                      value={data.percentage}
                      min="1"
                      max="100"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="percentage">Fecha de publicación</label>
                    <input
                      type="date"
                      name="created"
                      className="form-control"
                      onChange={handleChange}
                      value={data.created}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-secondary btn-block">
                      Subir encuesta
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {success && (
        <div className="alert alert-success" role="alert">
          Registro guardado correctamente
        </div>
      )}
    </>
  );
};

export default UploadChart;
