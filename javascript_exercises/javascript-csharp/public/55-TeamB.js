function customer(firstName, middleName, lastName) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.middleName + " " + this.lastName;
    };
    console.log(this); // customer {firstName: "Tom", middleName: "Grover", lastName: undefined, getFullName: f}
    console.log(this.toString()); // [object Object]
}