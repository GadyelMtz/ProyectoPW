import React, { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';

const RegistroEgresado = () => {
    const [nocontrol, setnocontrol] = useState("");
    const [nombres, setnombres] = useState("");
    const [apellidopaterno, setapellidopaterno] = useState("");
    const [apellidomaterno, setapellidomaterno] = useState("");
    const [fechanacimiento, setfechanacimiento] = useState("");
    const [sexo, setsexo] = useState("");
    const [estadocivil, setestadocivil] = useState("");
    const [ciudad, setciudad] = useState("");
    const [municipio, setmunicipio] = useState("");
    const [estado, setestado] = useState("");
    const [telefono, settelefono] = useState("");
    const [titulado, settitulado] = useState("");
    const [fechaegreso, setfechaegreso] = useState("");
    const [carrera, setcarrera] = useState("");
    const [especialidad, setespecialidad] = useState("");
    const [domicilio, setdomicilio] = useState("");

    const registrarEgresado = async (e) => {
        e.preventDefault();
        try {
            const cuerpoDelRegistro = {
                nocontrol,
                nombres,
                apellidopaterno,
                apellidomaterno,
                fechanacimiento,
                sexo,
                estadocivil,
                ciudad,
                municipio,
                estado,
                telefono,
                titulado,
                fechaegreso,
                carrera,
                especialidad,
                domicilio,
            };

            const respuesta = await fetch("http://localhost:5000/registrar-egresados", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(cuerpoDelRegistro),
            });

            //
            if (!respuesta) console.log("Hubo un error de conexion");
            window.location = "/";
        } catch (error) { }
    };

    return (
        <Fragment>
            <div className="container mt-5">
                <h1 className="text-center mt-5"> Registro de egresados</h1>
                <form className="mt-5" onSubmit={registrarEgresado}>
                    <div className="row">

                        <div className="col-md-3 mb-3">
                            <label htmlFor="apellidopaterno" className="form-label">
                                Apellido Paterno
                            </label>
                            <input
                                id="apellidopaterno"
                                type="text"
                                className="form-control"
                                value={apellidopaterno}
                                onChange={(e) => setapellidopaterno(e.target.value)}
                            />
                        </div>

                        <div className="col-md-3 mb-3">
                            <label htmlFor="apellidomaterno" className="form-label">
                                Apellido Materno
                            </label>
                            <input
                                id="apellidomaterno"
                                type="text"
                                className="form-control"
                                value={apellidomaterno}
                                onChange={(e) => setapellidomaterno(e.target.value)}
                            />
                        </div>

                        <div className="col-md-3 mb-3">
                            <label htmlFor="nombres" className="form-label">
                                Nombres
                            </label>
                            <input
                                id="nombres"
                                type="text"
                                className="form-control"
                                value={nombres}
                                onChange={(e) => setnombres(e.target.value)}
                            />
                        </div>

                        <div className="col-md-3 mb-3">
                            <label htmlFor="nocontrol" className="form-label">
                                Número de Control
                            </label>
                            <input
                                id="nocontrol"
                                type="text"
                                className="form-control"
                                value={nocontrol}
                                onChange={(e) => setnocontrol(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="fechanacimiento" className="form-label">
                                Fecha de Nacimiento
                            </label>
                            <input type="date" data-date="" data-date-format="dd-mm-yyyy"
                                onChange={(date) => setfechanacimiento(date)}></input>
                            {/* <DatePicker
                            selected={fechanacimiento}
                            onChange={(date) => setfechanacimiento(date)}
                            dateFormat="dd-MM-yyyy"
                            isClearable
                            showYearDropdown
                            scrollableYearDropdown
                        /> */}
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className="form-label">Sexo</label>
                            <div className="row">
                                <div className="form-check col-md-3 mb-3">
                                    <input class="form-check-input" type="radio" value="Mujer" name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => setsexo(e.target.value)} />
                                    <label class="form-check-label" >Mujer
                                    </label>
                                </div>
                                <div className="form-check col-md-3 mb-3">
                                    <input class="form-check-input" type="radio" value="Hombre" name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => setsexo(e.target.value)} />
                                    <label class="form-check-label" >Hombre
                                    </label>
                                </div>
                            </div>
                            {/* <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="sexo"
                                        value="Mujer"
                                        onChange={(e) => setsexo(e.target.value)}
                                    />
                                    Mujer
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="sexo"
                                        value="Hombre"
                                        onChange={(e) => setsexo(e.target.value)}
                                    />
                                    Hombre
                                </label>
                            </div> */}
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className="form-label">Estado civil</label>
                            <div className="row">
                                <div className="form-check col-md-4 mb-3">
                                    <input class="form-check-input" type="radio" value="Soltero" name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => setestadocivil(e.target.value)} />
                                    <label class="form-check-label" >Soltero
                                    </label>
                                </div>
                                <div className="form-check col-md-4 mb-3">
                                    <input class="form-check-input" type="radio" value="Casado" name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => setestadocivil(e.target.value)} />
                                    <label class="form-check-label" >Casado
                                    </label>
                                </div>
                                <div className="form-check col-md-4 mb-3">
                                    <input class="form-check-input" type="radio" value="otro" name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => setestadocivil(e.target.value)} />
                                    <label class="form-check-label" >Otro
                                    </label>
                                </div>

                            </div>
                            {/* <div>
                                <label>
                                    <input
                                        type="radio"
                                        value="Soltero"
                                        onChange={(e) => setestadocivil(e.target.value)}
                                    />
                                    Soltero
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="Casado"
                                        onChange={(e) => setestadocivil(e.target.value)}
                                    />
                                    Casado
                                </label>
                                <label>
                                    Otro
                                    <input
                                    type="radio"
                                        value="otro"
                                        onChange={(e) => setestadocivil(e.target.value)}
                                    />
                                </label>
                            </div> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <label htmlFor="domicilio" className="form-label">
                                Domicilio
                            </label>
                            <input
                                id="domicilio"
                                type="Text"
                                className="form-control"
                                value={domicilio}
                                onChange={(e) => setdomicilio(e.target.value)}
                            />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="ciudad" className="form-label">
                                Ciudad
                            </label>
                            <input
                                id="ciudad"
                                type="Text"
                                className="form-control"
                                value={ciudad}
                                onChange={(e) => setciudad(e.target.value)}
                            />
                        </div>

                        <div className="col-md-3 mb-3">
                            <label htmlFor="municipio" className="form-label">
                                Municipio
                            </label>
                            <input
                                id="municipio"
                                type="Text"
                                className="form-control"
                                value={municipio}
                                onChange={(e) => setmunicipio(e.target.value)}
                            />
                        </div>

                        <div className="col-md-3 mb-3">
                            <label htmlFor="estado" className="form-label">
                                Estado
                            </label>
                            <input
                                id="estado"
                                type="Text"
                                className="form-control"
                                value={estado}
                                onChange={(e) => setestado(e.target.value)}
                            />
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="telefono" className="form-label">
                                Teléfono
                            </label>
                            <input
                                id="telefono"
                                type="Text"
                                className="form-control"
                                value={telefono}
                                onChange={(e) => settelefono(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="fechaegreso" className="form-label">
                                Fecha de egreso
                            </label>
                            <input type="date" data-date="" data-date-format="dd-mm-yyyy"
                                onChange={(date) => setfechaegreso(date)}></input>
                            {/* <DatePicker
                                selected={fechaegreso}
                                onChange={(date) => setfechaegreso(date)}
                                dateFormat="dd-MM-yyyy"
                                isClearable
                                showYearDropdown
                                scrollableYearDropdown
                            /> */}
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor="titulado" className="form-label">Titulado:</label>
                            <div className="row">
                                <div className="form-check col-md-3 mb-3">
                                    <input class="form-check-input" type="radio" value="Si" name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => settitulado(e.target.value)} />
                                    <label class="form-check-label" >Sí
                                    </label>
                                </div>
                                <div className="form-check col-md-3 mb-3">
                                    <input class="form-check-input" type="radio" value="No" name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => settitulado(e.target.value)} />
                                    <label class="form-check-label" >No
                                    </label>
                                </div>
                            </div>
                            {/* <div>
                                <input
                                    type="radio"
                                    value="Si"
                                    onChange={(e) => settitulado(e.target.value)}
                                />
                                Sí
                                <label>
                                    <input
                                        type="radio"
                                        value="No"
                                        onChange={(e) => settitulado(e.target.value)}
                                    />
                                    No
                                </label>
                            </div> */}
                        </div>



                    </div>

                    <div className="row">

                        <div className="col-md-6 mb-3">
                            <label htmlFor="carrera" className="form-label">
                                Carrera
                            </label>
                            <input
                                id="carrera"
                                type="Text"
                                className="form-control"
                                value={carrera}
                                onChange={(e) => setcarrera(e.target.value)}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="especialidad" className="form-label">
                                Especialidad
                            </label>
                            <input
                                id="especialidad"
                                type="Text"
                                className="form-control"
                                value={especialidad}
                                onChange={(e) => setespecialidad(e.target.value)}
                            />
                        </div>
                    </div>
                            <div className="text-center">

                    <button className="btn btn-success btn-lg">Insertar</button>
                            </div>
                </form>
            </div>
        </Fragment>
    );
};

export default RegistroEgresado;
