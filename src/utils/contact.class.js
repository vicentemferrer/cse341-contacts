class Contact {
  constructor({ firstName, lastName, email, favoriteColor, birthday }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.favoriteColor = favoriteColor;
    this.birthday = new Date(birthday);
  }
}

module.exports = { Contact };
