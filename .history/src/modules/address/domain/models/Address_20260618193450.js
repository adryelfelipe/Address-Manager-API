class Address {
  constructor({ id, street, number, complement, neighborhood, city, state, zipCode, userId }) {
    this.id = id;
    this.street = street;
    this.number = number;
    this.complement = complement;
    this.neighborhood = neighborhood;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.userId = userId;
  }
}
 
export default Address;