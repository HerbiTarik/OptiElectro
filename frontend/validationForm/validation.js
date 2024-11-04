const constraints = {
  firstName: {
    presence: {
      allowEmpty: false,
      message: '^First name is required',
    },
  },
  lastName: {
    presence: {
      allowEmpty: false,
      message: '^Last name is required',
    },
  },
  email: {
    presence: {
      allowEmpty: false,
      message: '^Email is required',
    },
    email: {
      message: '^Email is not valid',
    },
  },
  password: {
    presence: {
      allowEmpty: false,
      message: '^Password is required',
    },
    length: {
      minimum: 6,
      message: '^Password must be at least 6 characters',
    },
    format: {
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      message:
        '^Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, et un chiffre',
    },
  },
  confirmPassword: {
    presence: {
      allowEmpty: false,
      message: '^Confirm assword is required',
    },
    equality: {
      attribute: 'password',
      message: '^Passwords do not match',
    },
  },
};

export default constraints;
