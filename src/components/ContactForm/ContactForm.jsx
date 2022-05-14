import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  function validate(post) {
    let errors = {};
    if (!post.mail) {
      errors.mail = "Ingresar mail";
    }
    if (!post.titulo) {
      errors.titulo = "Ingresar titulo";
    }
    if (!post.pregunta) {
      errors.pregunta = "Ingresar Pregunta de seguridad";
    }
    return errors;
  }
  const [errors, setErrors] = useState({});
  const [post, setPost] = useState({
    mail: "",
    titulo: "",
    pregunta: "",
  });

  function handleInputChange(e) {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...post,
        [e.target.name]: e.target.value,
      })
    );
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(errors).length > 0)
      alert("Por favor rellenar todos los campos");
    else {
      alert("¡Contacto logrado!");
    }
  }
  return (
    <div className="body-contact">
      <h1 className="contact-title">Please complete all fields</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label className="contact-text">Mail</label>
          <input
            className="contact-input"
            type="text"
            value={post.mail}
            name="mail"
            onChange={(e) => handleInputChange(e)}
          />
          {errors.mail && <p>{errors.mail}</p>}
        </div>
        <div>
          <label className="contact-text">titulo</label>
          <input
            className="contact-input"
            type="text"
            value={post.titulo}
            name="titulo"
            onChange={(e) => handleInputChange(e)}
          />
          {errors.titulo && <p>{errors.titulo}</p>}
        </div>
        <div>
          <label className="contact-text">pregunta</label>
          <input
            className="contact-input"
            type="text"
            value={post.pregunta}
            name="pregunta"
            onChange={(e) => handleInputChange(e)}
          />
          {errors.pregunta && <p>{errors.pregunta}</p>}
        </div>
        <button type="submit" className="contact-button">
          ¡Crear!
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
