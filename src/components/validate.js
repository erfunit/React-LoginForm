const validate = (data, type) => {
  const errors = {};

  //validate email
  if (!data.email) {
    errors.email = "email is required!";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "email is invalid!";
  } else {
    delete errors.email;
  }

  if (type === "signup") {
    //validated name
    if (!data.name.trim()) {
      errors.name = "name is required!";
    } else {
      delete errors.name;
    }

    //validate confirm password
    if (!data.confirmPassword) {
      errors.confirmPassword = "you must confirm your password!";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "password doesn't match!";
    } else {
      delete errors.confirmPassword;
    }

    if (!data.isAccepted) {
      errors.isAccepted = "you must accept the agreement";
    } else {
      delete errors.isAccepted;
    }
    //validate password
    if (!data.password) {
      errors.password = "password is required!";
    } else if (data.password.length < 8) {
      errors.password = `${8 - data.password.length} characters more...`;
    } else {
      delete errors.password;
    }
  } else {
    //validate password
    if (!data.password) {
      errors.password = "password is required!";
    } else {
      delete errors.password;
    }
  }

  return errors;
};

export default validate;
