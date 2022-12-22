import React from "react";
import "../assets/styles/ShipppingForm.css";
import { useForm } from "react-hook-form";

const ShippingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullNameRemitente: "",
      addressRemitente: "",
      suiteRemitente: "",
      stateRemitente: "",
      cityRemitente: "",
      zipRemitente: "",
      emailRemitente: "",
      phoneRemitente: "",
      fullNameDestinatario: "",
      addressDestinatario: "",
      suiteDestinatario: "",
      stateDestinatario: "",
      cityDestinatario: "",
      zipDestinatario: "",
      emailDestinatario: "",
      phoneDestinatario: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div>
        <h2>
          Debe de llenar esta planilla en su totalidad para proceder con su
          solicitud
        </h2>
        <p>
          Por favor, antes de completar cualquier planilla de envío en Zucarga
          Express para utilizar nuestros servicios de envíos, es de suma
          importancia que lea con atención y detenimiento todo lo estipulado en
          nuestro contrato de términos y condiciones haciendo CLIC AQUÍ.
        </p>
        <ol>
          <li>
            El servicio de pickup debe ser obligatoriamente agendado con 48
            horas de anticipación a la fecha de recolecta de carga según nuestro
            calendario de pickup.
          </li>
          <li> Llene con detalle los campos a continuación.</li>
          <li>
            Especifique en su totalidad y detalle el contenido de sus paquetes
          </li>
          <li>
            Asegúrese de explicar cualquier detalle adicional que sea importante
            tomar en cuenta para sus paquetes, si necesita servicio de embalaje
            o reempaque de nuestra parte.
          </li>
          <li>
            Tenga en cuenta que a partir de este momento usted pasa a ser
            nuestro cliente y en base a ello deberá declarar, aceptar y
            contratar nuestros servicios bajo contrato.
          </li>
        </ol>
        <p>
          SEGURO DE CARGA: Nuestro "seguro de carga básico" respalda a nuestros
          clientes por un máximo de $100 en bono de consumo en nuestros
          servicios. Recomendamos ampliamente asegurar el valor total de su
          carga contratando el "seguro de carga a todo riesgo" por un adicional
          de 10% del valor declarado de las facturas de su envío. De lo
          contrario Zucarga Express LLC no se hará responsable bajo ningún
          motivo por deterioro, daño, perdida, robo, extravío o hurto, de su
          envío.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-area">
        <h2>DATOS DEL REMITENTE</h2>
        <div className="form-shipper">
          <div className="form-input">
            <p className="form-text-name">Nombre y Apellido</p>
            <input
              {...register("fullNameRemitente", {
                required: "Este campo es obligatorio *",
              })}
              className="form-input"
              placeholder="Juan Lopez"
            />
            <span className="form-error">
              {errors.fullNameRemitente?.message}
            </span>
          </div>
          <div className="form-input">
            <p className="form-text-name">Direccion</p>
            <input
              {...register("addressRemitente", {
                required: "Este campo es obligatorio",
              })}
              className="form-input"
              placeholder="254 Convention Dr"
            />
            <span className="form-error">
              {errors.addressRemitente?.message}
            </span>
          </div>
          <div className="form-input">
            <p className="form-text-name">Suite / Apt</p>
            <input
              {...register("suiteRemitente")}
              className="form-input"
              placeholder="823"
            />
            <span className="form-error">{errors.suiteRemitente?.message}</span>
          </div>
          <div className="form-input">
            <p className="form-text-name">Estado</p>
            <input
              {...register("stateRemitente", {
                required: "Este campo es obligatorio",
              })}
              className="form-input"
              placeholder="Texas"
            />
            <span className="form-error">{errors.stateRemitente?.message}</span>
          </div>
          <div className="form-input">
            <p className="form-text-name">City</p>
            <input
              {...register("cityRemitente", {
                required: "Este campo es obligatorio",
              })}
              className="form-input"
              placeholder="Plano"
            />
            <span className="form-error">{errors.cityRemitente?.message}</span>
          </div>
          <div className="form-input">
            <p className="form-text-name">Codigo postal</p>
            <input
              {...register("zipRemitente", {
                required: "Este campo es obligatorio",
              })}
              className="form-input"
              placeholder="75895"
            />
            <span className="form-error">{errors.zipRemitente?.message}</span>
          </div>
          <div className="form-input">
            <p className="form-text-name">Correo Electronico</p>
            <input
              {...register("emailRemitente", {
                required: "Este campo es obligatorio",
              })}
              className="form-input"
              placeholder="juanlopez@gmail.com"
            />
            <span className="form-error">{errors.emailRemitente?.message}</span>
          </div>
          <div className="form-input">
            <p className="form-text-name">Numero de Telefono</p>
            <input
              {...register("phoneRemitente", {
                required: "Este campo es obligatorio",
              })}
              className="form-input"
              placeholder="6823699878"
            />
            <span className="form-error">{errors.phoneRemitente?.message}</span>
          </div>
        </div>
        <h2>DATOS DEL DESTINATARIO</h2>
        {/* <div className="form-shipper">
          <div className="form-input">
            <p className="form-text-name">Nombre y Apellido</p>
            <input
              {...register("fullName", {
                required: "Este campo es obligatorio *",
              })}
              className="form-input"
              placeholder="Juan Lopez"
            />
            <span className="form-error">{errors.fullName?.message}</span>
          </div>
          <div className="form-input">
            <p className="form-text-name">Direccion</p>
            <input
              {...register("address", {
                required: "Este campo es obligatorio",
              })}
              className="form-input"
              placeholder="254 Convention Dr"
            />
            <span className="form-error">{errors.address?.message}</span>
          </div>
          <div className="form-input">
            <p className="form-text-name">Suite / Apt</p>
            <input
              {...register("suite")}
              className="form-input"
              placeholder="823"
            />
            <span className="form-error">{errors.suite?.message}</span>
          </div>
          <div className="form-input">
            <p className="form-text-name">Estado</p>
            <input
              {...register("state", {
                required: "Este campo es obligatorio",
              })}
              className="form-input"
              placeholder="Texas"
            />
            <span className="form-error">{errors.state?.message}</span>
          </div>
          <div className="form-input">
            <p className="form-text-name">City</p>
            <input
              {...register("city", {
                required: "Este campo es obligatorio",
              })}
              className="form-input"
              placeholder="Plano"
            />
            <span className="form-error">{errors.city?.message}</span>
          </div>
          <div className="form-input">
            <p className="form-text-name">Codigo postal</p>
            <input
              {...register("zip", {
                required: "Este campo es obligatorio",
              })}
              className="form-input"
              placeholder="75895"
            />
            <span className="form-error">{errors.zip?.message}</span>
          </div>
          <div className="form-input">
            <p className="form-text-name">Correo Electronico</p>
            <input
              {...register("email", {
                required: "Este campo es obligatorio",
              })}
              className="form-input"
              placeholder="juanlopez@gmail.com"
            />
            <span className="form-error">{errors.email?.message}</span>
          </div>
          <div className="form-input">
            <p className="form-text-name">Numero de Telefono</p>
            <input
              {...register("phone", {
                required: "Este campo es obligatorio",
              })}
              className="form-input"
              placeholder="6823699878"
            />
            <span className="form-error">{errors.phone?.message}</span>
          </div>
        </div> */}
        <input type="submit" />
      </form>
    </div>
  );
};

export default ShippingForm;
