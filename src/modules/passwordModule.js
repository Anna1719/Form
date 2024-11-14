export class passwordModule {
  constructor(password) {
    this.password = password;
    this.isValid = false;
    this.errors = [];
  }

  isValidPassword() {
    return this.isValid;
  }

  changeValid() {
    this.isValid = !this.isValid;
    return;
  }

  setPassword(password) {
    this.password = password;
    return;
  }

  getErrors() {
    return this.errors;
  }

  cleanErrors() {
    this.errors = [];
    return;
  }

  validatePassword() {
    this.cleanErrors();

    if (this.password.length < 8) {
      this.errors.push("Password must be at least 8 symbols.");
    }

    if (!/[A-Z]/.test(this.password)) {
      this.errors.push("Password must have at least one upper case letter.");
    }

    if (!/[a-z]/.test(this.password)) {
      this.errors.push("Password must have at least one lower case letter.");
    }

    if (!/\d/.test(this.password)) {
      this.errors.push("Password must have at least one digit.");
    }

    if (!/[!@#\$%\^&]/.test(this.password)) {
      this.errors.push(
        "Password must have at least one special symbol (!@#$%^&)."
      );
    }

    if (/[ \-*\/_\\]/.test(this.password)) {
      this.errors.push("Password should not have -*/_ ");
    }

    if (this.errors.length > 0) this.isValid = false;
    if (this.errors.length === 0) this.isValid = true;

    return;
  }
}
