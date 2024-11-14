export class fioModule {
  constructor(fio) {
    this.fio = fio;
    this.isValid = false;
    this.errors = [];
  }

  isValidFIO() {
    return this.isValid;
  }

  changeValid() {
    this.isValid = !this.isValid;
    return;
  }

  setFIO(fio) {
    this.fio = fio;
    return;
  }

  getErrors() {
    return this.errors;
  }

  cleanErrors() {
    this.errors = [];
    return;
  }

  validateFio() {
    this.cleanErrors();
    // ФИО может быть на кириллице и латинице, содержит пробелы, начинается с заглавной буквы
    // Тк не у всех есть отчество, в ФИО минимум 2 слова, а не 3
    const fioPattern = /^[A-ZА-ЯЁ][a-zа-яё]+(?:\s+[A-ZА-ЯЁ][a-zа-яё]+)+$/;
    if (!fioPattern.test(this.fio)) {
      this.errors.push("Use russian and latin alphabet. Minimum 2 words.");
    }

    if (this.errors.length > 0) this.isValid = false;
    if (this.errors.length === 0) this.isValid = true;

    return;
  }
}
