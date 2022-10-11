import { useFormik } from "formik";

const App = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "First name required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Letters must be 15 character or less";
    }

    if (!values.lastName) {
      errors.lastName = "Last name required";
    } else if (values.lastName.length > 10) {
      errors.lastName = "Letter must be less than 10 letters";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: function (x) {
      console.log(JSON.stringify(x, null, 2));
    },
  });

  return (
    <div>
      <h3>Form with formik 🛬 </h3>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Subscribe to our news letter</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <label htmlFor="firstName">First name :</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.firstName && formik.touched.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}

        <label htmlFor="lastName">Last name :</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.lastName && formik.touched.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default App;
