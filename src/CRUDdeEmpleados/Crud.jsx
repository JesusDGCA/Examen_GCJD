import { useState, useEffect } from "react";
import "./Crud.css";
const initialForm = { nombre: "", puesto: "", correo: "" };

function filtrarPorPuesto(empleados, puesto) {
  return empleados.filter((e) =>
    e.puesto.toLowerCase().includes(puesto.toLowerCase())
  );
}

const Crud = () => {
  const [empleados, setEmpleados] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editIndex, setEditIndex] = useState(null);
  const [filtro, setFiltro] = useState("");

  /* Simula carga inicial de empleados */
  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            nombre: "Juan",
            puesto: "Desarrollador",
            correo: "juan@ejemplo.com",
          },
          { nombre: "María", puesto: "Analista", correo: "maria@ejemplo.com" },
        ]);
      }, 1000);
    }).then((data) => setEmpleados(data));
  }, []);

  /* Funcion async para obtener empleado random */
  async function obtenerEmpleadoRandom() {
    try {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      const user = data.results[0];
      setEmpleados([
        ...empleados,
        /* Defaults si la API no provee todos los campos */
        {
          nombre: user.name.first || "Sin nombre",
          puesto: "Empleado",
          correo: user.email || "Sin correo",
        },
      ]);
    } catch {
      // Error al obtener empleado
    }
  }

  /* Funciones de manejo del formulario */
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  /* Funcion para manejar el submit del formulario */
  function handleSubmit(e) {
    e.preventDefault();
    if (editIndex !== null) {
      const nuevos = [...empleados];
      nuevos[editIndex] = form;
      setEmpleados(nuevos);
      setEditIndex(null);
    } else {
      setEmpleados([...empleados, form]);
    }
    setForm(initialForm);
  }

  /* Funciones para editar y eliminar empleados */
  function handleEdit(idx) {
    setForm(empleados[idx]);
    setEditIndex(idx);
  }

  function handleDelete(idx) {
    setEmpleados(empleados.filter((_, i) => i !== idx));
    if (editIndex === idx) {
      setForm(initialForm);
      setEditIndex(null);
    }
  }

  /* Filtrado de empleados */
  const empleadosFiltrados = filtro
    ? filtrarPorPuesto(empleados, filtro)
    : empleados;

  return (
    <div className="container my-4" id="crud">
      <h2 className="mb-3">Empleados CRUD</h2>
      <form className="mb-3" onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
        <input
          className="form-control mb-2"
          name="puesto"
          value={form.puesto}
          onChange={handleChange}
          placeholder="Puesto"
          required
        />
        <input
          className="form-control mb-2"
          name="correo"
          value={form.correo}
          onChange={handleChange}
          placeholder="Correo"
          required
        />
        <button className="btn btn-primary me-2" type="submit">
          {editIndex !== null ? "Actualizar" : "Agregar"}
        </button>
        {editIndex !== null && (
          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => {
              setEditIndex(null);
              setForm(initialForm);
            }}
          >
            Cancelar
          </button>
        )}
      </form>
      <input
        className="form-control mb-2"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Filtrar por puesto"
      />
      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>Nombre</th>
            <th>Puesto</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {empleadosFiltrados.map((emp, idx) => (
            <tr key={idx}>
              <td>{emp.nombre}</td>
              <td>{emp.puesto}</td>
              <td>{emp.correo}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-1"
                  onClick={() => handleEdit(idx)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(idx)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button className="btn btn-info" onClick={obtenerEmpleadoRandom}>
          Obtener empleado random (fetch)
        </button>
      </div>
    </div>
  );
};

export default Crud;
