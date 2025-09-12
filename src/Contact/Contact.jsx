// import { Field, Form, Formik, useFormik } from "formik";
// import { useForm, ValidationError } from "@formspree/react";
// import * as yup from "yup";
// import "./Contact.css";

// const Contact = () => {
//   const formik = useFormik({
//     initialValues: {
//       fullname: "",
//       email: "",
//       message: "",
//     },

//     onSubmit: (values) => {},

//     validationSchema: yup.object({
//       fullname: yup
//         .string()
//         .required("*This Field is required!")
//         .min(3, "Must be at least 3 characters long."),
//       email: yup
//         .string()
//         .required("*This Field is required!")
//         .email("*Email must be Valid"),
//       message: yup.string().required("*This Field is required!"),
//     }),
//   });

//   const [state, formspreeSubmit] = useForm("mqadnnnv");

//   if (state.succeeded) {
//     return <p>Thanks for joining!</p>;
//   }

//   return (
//     <>
//       <section className="contact">
//         <div className="contact_container">
//           <div className="contact_head">
//             <h2>
//               Contact <span>Me</span>
//             </h2>
//             <p>
//               Let's <span>connect!</span> Weather you're looking for{" "}
//               <span>collaboration</span> or just want to <span>chat</span>. Feel{" "}
//               <span>
//                 <i>free</i>
//               </span>{" "}
//               to reach out. <span>I'd love to hear from you!</span>
//             </p>
//           </div>
//           <div className="contact_body">
//             <Formik>
//               {/* <Form onSubmit={formik.handleSubmit}> */}
//               <Form
//                 onSubmit={async (values, { resetForm }) => {
//                   await formspreeSubmit(values);
//                   if (!state.errors) {
//                     resetForm();
//                   }
//                 }}
//               >
//                 <div className="input_cont">
//                   <label htmlFor="">
//                     Full Name <i>*</i>
//                   </label>
//                   <Field
//                     type="text"
//                     placeholder="Enter your name"
//                     name="fullname"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.fullname && (
//                     <div style={{ color: "#f00", fontSize: "13px" }}>
//                       {formik.errors.fullname}
//                     </div>
//                   )}
//                 </div>
//                 <div className="input_cont">
//                   <label htmlFor="">
//                     Email <i>*</i>
//                   </label>
//                   <Field
//                     type="email"
//                     placeholder="Enter your email"
//                     name="email"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.email && (
//                     <div style={{ color: "#f00", fontSize: "13px" }}>
//                       {formik.errors.email}
//                     </div>
//                   )}
//                 </div>
//                 <div className="input_cont">
//                   <label htmlFor="">
//                     Message <i>*</i>
//                   </label>
//                   <textarea
//                     name="message"
//                     id=""
//                     placeholder="Enter your message"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   ></textarea>
//                   {formik.touched.message && (
//                     <div
//                       style={{
//                         color: "#f00",
//                         fontSize: "11px",
//                         fontFamily: "komika axis",
//                       }}
//                     >
//                       {formik.errors.message}
//                     </div>
//                   )}
//                 </div>
//                 <button type="submit" disabled={state.submitting}>
//                   {state.submitting ? "Sending..." : "Send Message"}
//                 </button>
//               </Form>
//             </Formik>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;

import { Field, Form, Formik } from "formik";
import { useForm } from "@formspree/react";
import * as yup from "yup";
import "./Contact.css";

const Contact = () => {
  const [state, formspreeSubmit] = useForm("mqadnnnv");

  const validationSchema = yup.object({
    fullname: yup
      .string()
      .required("*This Field is required!")
      .min(3, "Must be at least 3 characters long."),
    email: yup
      .string()
      .required("*This Field is required!")
      .email("*Email must be Valid"),
    message: yup.string().required("*This Field is required!"),
  });

  if (state.succeeded) {
    return (
      <p
        style={{
          color: "#f00",
          fontSize: "50px",
          fontWeight: "700",
          textAlign: "center",
          padding: "4% 0",
        }}
      >
        Message Sent SuccessFully!
      </p>
    );
  }

  return (
    <section className="contact">
      <div className="contact_container">
        <div className="contact_head">
          <h2>
            Contact <span>Me</span>
          </h2>
          <p>
            Let's <span>connect!</span> Whether you're looking for{" "}
            <span>collaboration</span> or just want to <span>chat</span>. Feel{" "}
            <span>
              <i>free</i>
            </span>{" "}
            to reach out. <span>I'd love to hear from you!</span>
          </p>
        </div>

        <div className="contact_body">
          <Formik
            initialValues={{ fullname: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
              // ✅ send values to Formspree
              await formspreeSubmit(values);

              if (!state.errors) {
                resetForm(); // clear form if successful
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="input_cont">
                  <label>
                    Full Name <i>*</i>
                  </label>
                  <Field
                    type="text"
                    name="fullname"
                    placeholder="Enter your name"
                  />
                  {touched.fullname && errors.fullname && (
                    <div style={{ color: "#f00", fontSize: "13px" }}>
                      {errors.fullname}
                    </div>
                  )}
                </div>

                <div className="input_cont">
                  <label>
                    Email <i>*</i>
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  {touched.email && errors.email && (
                    <div style={{ color: "#f00", fontSize: "13px" }}>
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="input_cont">
                  <label>
                    Message <i>*</i>
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Enter your message"
                  />
                  {touched.message && errors.message && (
                    <div style={{ color: "#f00", fontSize: "11px" }}>
                      {errors.message}
                    </div>
                  )}
                </div>

                <button type="submit" disabled={state.submitting}>
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Contact;
