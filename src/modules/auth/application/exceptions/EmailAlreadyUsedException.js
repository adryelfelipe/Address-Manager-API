class EmailAlreadyUsedException extends Error {
  constructor(email) {
    super(`Email already used: ${email}`);
    this.name = 'EmailAlreadyUsedException';
    this.statusCode = 409;
  }
}

export default EmailAlreadyUsedException;