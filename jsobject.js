console.log("It is always working, I dont know why she thinks it is not!")

var type = {
    Salon: "Salon",
    FourWheel: "FourWheel",
    SUV: "SUV",
    Coupe: "Coupe"
};

function Car(model, type, year, color){
    this.model = model;
    this.type = type;
    this.year = year;
    this.color = color;
};

var escape = new Car("Ford", type.SUV, 2017, "Grey");
console.log(escape)