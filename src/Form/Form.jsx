import {React, useState} from "react"
import "./form.css"
import swal from "sweetalert"

export default function Form ({linea}) {
	const [errors, setErrors] = useState({});
	const [input, setInput] = useState({
		nombreCompleto:"",
		email:"",
		celular:"",
		edad:""
	})

	  const handleFormChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit =(e) =>{
	  e.preventDefault()
	  let validacion = validate(input);
	  setErrors(validacion);

	    if (Object.keys(validacion).length > 0) {
      swal({
			 title: "Error",
			 text: "Por favor completar todos los campos",
			 icon: "warning"
		 });
    } else {
		 console.log(input)
		 document.getElementById("formulario").reset()
		 swal({
			 title:"Completado",
			 text: "Tu información fue enviada con éxito, estaremos en contacto contigo",
			 icon: "success",
			 buttons: false,
			 timer: "5000",
		 })
		setInput("");
	 }
	  function validate(input) {
      let errors = {}
		var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
		
      if (!input.nombreCompleto) {
			errors.nombreCompleto = "nombre Completo requerido";
      }else if (!/^[A-Za-z\s]+$/.test(input.nombreCompleto)){
			errors.nombreCompleto= "no se permiten caracteres especiales ni numeros"
		}
		if(!input.email) {
			errors.email="ingresar correo electronico"
		} else if(!expReg.test(input.email)){
			errors.email="correo electronico no valido"
		}
		if(!input.celular) {
			errors.celular="ingresar numero de contacto"
		}else if(isNaN(input.celular)){
			errors.celular="solo incluir numeros"
		}
		if (!input.edad) {
		  errors.edad = "la edad es obligatoria";
		} else if (Number(input.edad) > 100 || Number(input.edad) <18 ) {
		  errors.edad = "ingresa una edad entre 18 y 100 años";
		}
		return errors }
		}
	 
	const handleClose =(e) => {
		document.getElementById("formulario").reset()
	  let close= document.getElementById("open")
	close.className ="container_form"
	setInput("");
}

	return(
		<div id= "open" className="container_form">
			<div className="total">
				<div className="btnClose">
					<button id="close" onClick={(e) => handleClose(e)}>X</button>
				</div>
			<h2 className="linea">Hola, bienvenido, sabemos que quieres viajar con {linea}, 
				por favor diligencia el siguiente formulario:
			</h2>
			<form id="formulario">
				<div className="row">
					<label>Nombre Completo</label>
				<input name="nombreCompleto" onChange={(e) => handleFormChange(e)}
				autoComplete="off" maxLength={50}></input>
					</div>
				{errors.nombreCompleto && <p className="error">{errors.nombreCompleto}</p>}
				<div className="row">
					<label>Email</label>
				<input name="email" onChange={(e) => handleFormChange(e)} type="email"
				autoComplete="off"></input>
					</div>
				{errors.email && <p className="error">{errors.email}</p>}
				<div className="row">
					<label>Celular</label>
				<input name="celular" onChange={(e) => handleFormChange(e)}
				autoComplete="off"></input>
					</div>
				{errors.celular && <p className="error">{errors.celular}</p>}
				<div className="row">
					<label>Edad</label>
				<input name="edad" type="number" min={18}
            max={100} onChange={(e) => handleFormChange(e)} autoComplete="off"></input>
					</div>
				{errors.edad && <p className="error">{errors.edad}</p>}
					<button onClick={(e) => handleSubmit(e)}>Enviar</button>
			</form>
			
		</div>
	</div>
		
	)
}