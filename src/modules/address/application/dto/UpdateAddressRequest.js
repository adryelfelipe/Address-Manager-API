export default class UpdateAddressRequest {
  constructor(data) {
    this.street = data.street;
    this.number = data.number;
    this.complement = data.complement;
    this.neighborhood = data.neighborhood;
    this.city = data.city;
    this.state = data.state;
    this.zipCode = data.zipCode;
  }
}