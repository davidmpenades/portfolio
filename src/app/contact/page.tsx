"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es requerido"),
  email: Yup.string().email("Email inválido").required("El email es requerido"),
  message: Yup.string().required("El mensaje es requerido"),
  recaptcha: Yup.string().required("El reCAPTCHA es requerido"),
});

export default function ContactForm() {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  return (
    <div className="flex max-w-screen items-center h-full bg-gray-900">
      <div className="max-w-screen-md mx-auto p-10 rounded-lg bg-black">
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-400">
            Contacte <span className="text-indigo-600">conmigo</span>
          </h3>
        </div>
        <div className="bg-gray-900 text-gray-200 p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            <p className="font-mono text-green-500">
              $ Introduzca variables de entorno
            </p>
          </div>
          <Formik
            initialValues={{ name: "", email: "", message: "", recaptcha: "" }}
            validationSchema={contactSchema}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const response = await fetch("/api/sendMail", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ ...values, recaptcha: recaptchaToken }),
                });
                if (response.ok) {
                  console.log("Mensaje enviado correctamente");
                  toast.success("Mensaje enviado correctamente");
                  setTimeout(() => {
                    window.location.href = "/";
                  }, 1500);
                } else {
                  const errorData = await response.json();
                  toast.error("Error al enviar el mensaje");
                  console.error("Error al enviar el mensaje:", errorData.error);
                }
              } catch (error) {
                toast.error(`Error en la solicitud fetch: ${error}`);
                console.error("Error en la solicitud fetch:", error);
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form className="w-full font-mono">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block tracking-wide text-gray-400 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Nombre:
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-green-500">
                        $
                      </span>
                      <Field
                        className="appearance-none block w-full bg-gray-800 text-gray-200 border border-gray-700 rounded py-3 px-4 pl-8 leading-tight focus:outline-none focus:bg-gray-700"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Vicente"
                      />
                    </div>
                    <ErrorMessage
                      className="text-red-500 text-xs italic"
                      name="name"
                      component="p"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block tracking-wide text-gray-400 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Correo eléctronico:
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-green-500">
                        $
                      </span>
                      <Field
                        className="appearance-none block w-full bg-gray-800 text-gray-200 border border-gray-700 rounded py-3 px-4 pl-8 leading-tight focus:outline-none focus:bg-gray-700"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="ejemplo@gmail.com"
                      />
                    </div>
                    <ErrorMessage
                      className="text-red-500 text-xs italic"
                      name="email"
                      component="p"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block tracking-wide text-gray-400 text-xs font-bold mb-2"
                      htmlFor="message"
                    >
                      Mensaje:
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-green-500">
                        $
                      </span>
                      <Field
                        className="appearance-none block w-full bg-gray-800 text-gray-200 border border-gray-700 rounded py-3 px-4 pl-8 leading-tight focus:outline-none focus:bg-gray-700"
                        id="message"
                        name="message"
                        as="textarea"
                        rows="5"
                        placeholder="Contacto contigo porque..."
                      />
                    </div>
                    <ErrorMessage
                      className="text-red-500 text-xs italic"
                      name="message"
                      component="p"
                    />
                  </div>
                </div>

                <div className="flex justify-center mb-6">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
                    onChange={(value) => {
                      setRecaptchaToken(value);
                      setFieldValue("recaptcha", value);
                    }}
                  />
                  <ErrorMessage
                    className="text-red-500 text-xs italic"
                    name="recaptcha"
                    component="p"
                  />
                </div>

                <div className="flex justify-start w-full px-3 mb-6">
                  <button
                    className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-2 rounded"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Enviar mensaje
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
