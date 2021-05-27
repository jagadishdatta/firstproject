export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  } else if (!/^[A-Za-z]+/.test(values.username.trim())) {
    errors.name = "Enter a valid name";
  }
  if (!values.lastname.trim()) {
    errors.lastname = "Last name  required";
  } else if (!/^[A-Za-z]+/.test(values.lastname.trim())) {
    errors.name = "Enter a valid Last name";
  }
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  return errors;
}
