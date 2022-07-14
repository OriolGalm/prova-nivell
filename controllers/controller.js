"use strict";
var car;
function submitCar() {
    var errores = 0;
    var plateInput = document.getElementById("plateInput");
    var brandInput = document.getElementById("brandInput");
    var colorInput = document.getElementById("colorInput");
    //EX1. Validar los campos de matricula (formato: 1234ABC), marca y color, antes de hacer el new Car
    if (/^[0-9]{4}[A-Z]{3}$/.test(plateInput.value) != true) {
        plateInput.style.border = "2px solid red";
        errores++;
    }
    else {
        plateInput.style.border = "2px solid green";
    }
    if (brandInput.value == '') {
        errores++;
        brandInput.style.border = "2px solid red";
    }
    else {
        brandInput.style.border = "2px solid green";
    }
    if (colorInput.value == '') {
        errores++;
        colorInput.style.border = "2px solid red";
    }
    else {
        colorInput.style.border = "2px solid green";
    }
    if (errores == 0) {
        car = new Car(plateInput.value, colorInput.value, brandInput.value);
        showVehicle();
        showWheelForm();
    }
}
function showVehicle() {
    var carTitle = document.getElementById("carTitle");
    var plateOutput = document.getElementById("plateOutput");
    var brandOutput = document.getElementById("brandOutput");
    var colorOutput = document.getElementById("colorOutput");
    carTitle.innerText = "Car:";
    plateOutput.innerText = "Plate: " + car.plate;
    brandOutput.innerText = "Brand: " + car.brand;
    colorOutput.innerText = "Color: " + car.color;
}
function submitWheelForm() {
    var errores = 0;
    //EX2. Solo hacer el "new Wheel" si las 4 ruedas son correctas
    //EX3. Una rueda correcta deberá tener un diámetro entre 1 y 2. Crear una función para validarlas
    for (var i = 1; i <= 4; i++) {
        var brandWheel = document.getElementById("brandWheel" + i);
        var diameterWheel = document.getElementById("diameterWheel" + i);
        if (brandWheel.value == '') {
            errores++;
            brandWheel.style.border = " 2px solid red";
        }
        else {
            brandWheel.style.border = " 2px solid green";
        }
        if (diameterWheel.value == '') {
            errores++;
            diameterWheel.style.border = " 2px solid red";
        }
        else {
            diameterWheel.style.border = " 2px solid green";
        }
        var diameterW = function (x) { return x >= 1 && x <= 2 ? true : false; };
        if (diameterW(parseInt(diameterWheel.value)) == false) {
            errores++;
            diameterWheel.style.border = " 2px solid red";
        }
        else {
            diameterWheel.style.border = " 2px solid green";
        }
    }
    console.log(car);
    if (errores == 0) {
        for (var i = 1; i < 5; i++) {
            var brandWheel = document.getElementById("brandWheel" + i);
            var diameterWheel = document.getElementById("diameterWheel" + i);
            var wheel_generica = new Wheel(Number(diameterWheel.value), brandWheel.value);
            car.addWheel(wheel_generica);
        }
        showWheels();
    }
}
function showWheels() {
    //EX4. Optimizar la función showWheels
    var wheelTitle = document.getElementById("wheelTitle");
    /* let wheelOutput1 = <HTMLInputElement>document.getElementById("wheelOutput1") ;
    let wheelOutput2 = <HTMLInputElement>document.getElementById("wheelOutput2");
    let wheelOutput3 = <HTMLInputElement>document.getElementById("wheelOutput3");
    let wheelOutput4 = <HTMLInputElement>document.getElementById("wheelOutput4"); */
    wheelTitle.innerText = "Wheels:";
    for (var i = 0; i < car.wheels.length; i++) {
        var wheelOutput = document.getElementById("wheelOutput".concat(i + 1));
        wheelOutput.innerText = "Wheel" + [i + 1] + ":  " + "Brand: " + car.wheels[i].brand + "  Diameter: " + car.wheels[i].diameter;
        console.log("WheelOutput: ", wheelOutput);
    }
    /* wheelOutput1.innerText = "Wheel 1:  " + "Brand: " + car.wheels[0].brand + "  Diameter: " + car.wheels[0].diameter;
    wheelOutput2.innerText = "Wheel 2:  " + "Brand: " + car.wheels[1].brand + "  Diameter: " + car.wheels[1].diameter;
    wheelOutput3.innerText = "Wheel 3:  " + "Brand: " + car.wheels[2].brand + "  Diameter: " + car.wheels[2].diameter;
    wheelOutput4.innerText = "Wheel 4:  " + "Brand: " + car.wheels[3].brand + "  Diameter: " + car.wheels[3].diameter; */
}
function showWheelForm() {
    var carForm = document.getElementById("create-car-form");
    var carWheel = document.getElementById("create-wheel-form");
    carForm.style.display = "none";
    carWheel.style.display = "block";
}
