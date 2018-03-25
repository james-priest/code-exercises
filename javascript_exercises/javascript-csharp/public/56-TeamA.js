var PragimTech = PragimTech || {};
PragimTech.TeamA = PragimTech.TeamA || {};

PragimTech.TeamA.customer = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    console.log(this); // {customer: f, firstName: "Tom", lastName: "Grover", getFullName: f}
    console.log(this.toString()); // [object Object]
    return this;
};