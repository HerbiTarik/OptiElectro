const contraints = {
  first_name: {
    presence: {
      allowEmpty: false,
      message: '^First name is required',
    },
  },
  last_name: {
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

  number: {
    presence: {
      allowEmpty: false,
      message: '^Le champ numéro de téléphone est requis',
    },
    format: {
      pattern: /^0[1-9]\d{8}$/,
      message:
        "^Le numéro de téléphone n'est pas valide. Veuillez entrer un numéro de 10 chiffres commençant par 0",
    },
  },
  location: {
    presence: {
      allowEmpty: false,
      message: "^L'adresse de résidence est requise",
    },
    length: {
      minimum: 5,
      message: "^L'adresse doit contenir au moins 5 caractères",
    },
    format: {
      pattern: /^[a-zA-Z0-9\s,'-]*$/,
      message: "^L'adresse de résidence contient des caractères non valides",
    },
  },
  countrynumber: {
    presence: {
      allowEmpty: false,
      message: '^Le champ indicatif du pays est requis',
    },
  },
};

export default contraints;
