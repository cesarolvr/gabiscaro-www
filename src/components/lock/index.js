import React, { useState } from "react";
import { Formik } from "formik";

const Lock = ({ children }) => {
  const [isRightPassword, setIsRightPassword] = useState(false);
  const a = "cesar";
  const isClientAndSessionSuport =
    typeof window !== "undefined" && window.sessionStorage;
  const savePermission = () =>
    isClientAndSessionSuport && sessionStorage.setItem("a", true);
  const getPermission = () =>
    isClientAndSessionSuport && sessionStorage.getItem("a");

  return getPermission() || isRightPassword ? (
    children
  ) : (
    <div className="lock">
      <Formik
        initialValues={{ password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.password) {
            errors.password = "Digite a senha que a Gabi te passou";
          }
          return errors;
        }}
        onSubmit={(values, { setErrors }) => {
          if (values.password === a) {
            setIsRightPassword(true);
            savePermission();
          } else {
            setErrors({
              password: "Senha inválida",
            });
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default Lock;
