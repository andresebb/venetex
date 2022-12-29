import React, { useState } from "react";
import "../assets/styles/ShipppingForm.css";
import { useForm } from "react-hook-form";

const ShippingForm = () => {
  const [check, setCheck] = useState(false);

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
      checkbox: check,
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    console.log("si");
  };

  return (
    <div className="shipping-form-area">
      <div className="shipping-legal">
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
        <div className="form-destiny">
          <div className="form-input">
            <p className="form-text-name">Nombre y Apellido</p>
            <input
              {...register("fullNameDestinatario", {
                required: "Este campo es obligatorio *",
              })}
              className="form-input"
              placeholder="Juan Lopez"
            />
            <span className="form-error">
              {errors.fullNameDestinatario?.message}
            </span>
          </div>
          <div className="form-input">
            <p className="form-text-name">Direccion</p>
            <input
              {...register("addressDestinatario", {
                required: "Este campo es obligatorio",
              })}
              className="form-input"
              placeholder="254 Convention Dr"
            />
            <span className="form-error">
              {errors.addressDestinatario?.message}
            </span>
          </div>
          <div className="form-input">
            <p className="form-text-name">Suite / Apt</p>
            <input
              {...register("suiteDestinatario")}
              className="form-input"
              placeholder="823"
            />
            <span className="form-error">
              {errors.suiteDestinatario?.message}
            </span>
          </div>
          <div className="form-input">
            <p className="form-text-name">Estado</p>
            <input
              {...register("stateDestinatario", {
                required: "Este campo es obligatorio",
              })}
              className="form-input"
              placeholder="Texas"
            />
            <span className="form-error">
              {errors.stateDestinatario?.message}
            </span>
          </div>
          <div className="form-input">
            <p className="form-text-name">City</p>
            <input
              {...register("cityDestinatario", {
                required: "Este campo es obligatorio",
              })}
              className="form-input"
              placeholder="Plano"
            />
            <span className="form-error">
              {errors.cityDestinatario?.message}
            </span>
          </div>
          <div className="form-input">
            <p className="form-text-name">Codigo postal</p>
            <input
              {...register("zipDestinatario", {
                required: "Este campo es obligatorio",
              })}
              className="form-input"
              placeholder="75895"
            />
            <span className="form-error">
              {errors.zipDestinatario?.message}
            </span>
          </div>
          <div className="form-input">
            <p className="form-text-name">Correo Electronico</p>
            <input
              {...register("emailDestinatario", {
                required: "Este campo es obligatorio",
              })}
              className="form-input"
              placeholder="juanlopez@gmail.com"
            />
            <span className="form-error">
              {errors.emailDestinatario?.message}
            </span>
          </div>
          <div className="form-input">
            <p className="form-text-name">Numero de Telefono</p>
            <input
              {...register("phoneDestinatario", {
                required: "Este campo es obligatorio",
              })}
              className="form-input"
              placeholder="6823699878"
            />
            <span className="form-error">
              {errors.phoneDestinatario?.message}
            </span>
          </div>
        </div>
        <div className="form-declaration">
          <p className="form-declaration-text">
            <span className="yellow-letter">VENETEX EXPRESS LLC</span> bajo la
            responsabilidad de cumplir la normativa vigente de envíos
            internacionales expone lo siguiente: A partir de este momento El
            REMITENTE, pasa a ser EL CLIENTE, al momento de completar cualquier
            planilla de envío en el sitio web www.zucarga.com para utilizar los
            servicios de Zucarga Express LLC., EL CLIENTE responsable de sus
            actos declara y contrata que la información proporcionada en el
            formulario de PLANILLA DE ENVIÓ que corresponde a REMITENTE y
            DESTINATARIO son reales y correctas, así como también la cantidad de
            paquetes (cajas, correspondencia, contenedores o productos) a enviar
            y su contenido son completa y totalmente veraz y verificable por
            auditoria de cualquier organismo o departamento que lo requiera, EL
            CLIENTE es responsable de cualquier situación que se presentase con
            la misma.
            <br />
            <br />
            En lo previsto para SEGURO DE CARGA (eventos de deterioro, daño,
            perdida, robo, extravío o hurto) sobre mercancías aseguradas y no
            aseguradas, Zucarga Express LLC expresa lo siguiente: para ENVÍOS
            ASEGURADOS: al momento de asegurar su envío deberá cancelar el 10%
            del valor total de su carga según facturas declaradas y Zucarga
            Express LLC responderá según contrato por el 100% del costo total de
            su carga de la forma preferente del cliente, sea transferencia,
            efectivo o bono de consumo. Para ENVÍOS NO ASEGURADOS: los clientes
            contaran con el respaldo de Zucarga Express LLC por un monto igual a
            100$ en bono de consumo de nuestros servicios.
          </p>
          <div className="form-declaration-checkbox">
            <div className="checkbox-form">
              <input
                {...register("checkbox", {
                  required: "Debe de aceptar las condiciones",
                })}
                type="checkbox"
                checked={check}
                className="checkbox-box"
                onClick={() => setCheck(!check)}
              />
            </div>
            <p className="form-declaration-accept">
              ACEPTO LA DECLARACIÓN JURADA, CONTRATO LEGAL y términos del SEGURO
              DE MI CARGA
            </p>
          </div>
          <span className="form-error">{errors.checkbox?.message}</span>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default ShippingForm;
