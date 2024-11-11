export const PASSWORD_PATTERN =
  /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_{|}~])[A-Za-z0-9!"#$%&'()*+,-./:;<=>?@[\]^_{|}~]+$/
export const USERNAME_PATTERN = /^[0-9A-Za-z_-]+$/
export const FIRST_OR_LAST_NAME_PATTERN = /^[A-Za-zА-Яа-я]/
export const EMAIL_PATTERN =
  /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z{|}~])*@[a-zA-Z](-?[a-zA-Z0-9])*(\.[a-zA-Z](-?[a-zA-Z0-9])*)+$/
export const ABOUT_ME_PATTERN = /^[0-9A-Za-zА-Яа-я\s!@#$%^&*()\-_=+[\]{}|;:,.<>?]*$/
