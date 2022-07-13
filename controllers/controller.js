"use strict";
var car;
function submitCar() {
    var errores = 0;
    var plateInput = document.getElementById("plateInput");
    var brandInput = document.getElementById("brandInput");
    var colorInput = document.getElementById("colorInput");
    //EX1. Validar los campos de matricula (formato: 1234ABC), marca y color, antes de hacer el new Car
    car = new Car(plateInput.value, colorInput.value, brandInput.value);
    if (/^[0-9]{4}[A-Z]{3}$/.test(plateInput.value) == true && brandInput.value != '' && colorInput.value != '') {
        showVehicle();
        showWheelForm();
    }
    else {
        console.log("Error");
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
        if (brandWheel.value != '') {
            var wheel_generica = new Wheel(Number(diameterWheel.value), brandWheel.value);
            brandWheel.style.border = "2px solid green";
            car.addWheel(wheel_generica);
        }
        else {
            console.log("Error");
            errores = 1;
            brandWheel.style.border = " 2px solid red";
        }
        if (diameterWheel.value != '') {
            var wheel_generica = new Wheel(Number(diameterWheel.value), brandWheel.value);
            diameterWheel.style.border = "2px solid green";
            car.addWheel(wheel_generica);
        }
        else {
            console.log("Error");
            errores = 1;
            diameterWheel.style.border = " 2px solid red";
        }
        if (parseInt(diameterWheel.value) <= 2 && parseInt(diameterWheel.value) >= 1) {
            var wheel_generica = new Wheel(Number(diameterWheel.value), brandWheel.value);
            diameterWheel.style.border = "2px solid green";
            car.addWheel(wheel_generica);
        }
        else {
            console.log("Error");
            errores = 1;
            diameterWheel.style.border = "2px solid red";
        }
    }
    console.log(car);
    if (errores == 0) {
        showWheels();
    }
}
function showWheels() {
    //EX4. Optimizar la función showWheels
    var wheelTitle = document.getElementById("wheelTitle");
    var wheelOutput1 = document.getElementById("wheelOutput1");
    var wheelOutput2 = document.getElementById("wheelOutput2");
    var wheelOutput3 = document.getElementById("wheelOutput3");
    var wheelOutput4 = document.getElementById("wheelOutput4");
    wheelTitle.innerText = "Wheels:";
    wheelOutput1.innerText = "Wheel 1:  " + "Brand: " + car.wheels[0].brand + "  Diameter: " + car.wheels[0].diameter;
    wheelOutput2.innerText = "Wheel 2:  " + "Brand: " + car.wheels[1].brand + "  Diameter: " + car.wheels[1].diameter;
    wheelOutput3.innerText = "Wheel 3:  " + "Brand: " + car.wheels[2].brand + "  Diameter: " + car.wheels[2].diameter;
    wheelOutput4.innerText = "Wheel 4:  " + "Brand: " + car.wheels[3].brand + "  Diameter: " + car.wheels[3].diameter;
}
function showWheelForm() {
    var carForm = document.getElementById("create-car-form");
    var carWheel = document.getElementById("create-wheel-form");
    carForm.style.display = "none";
    carWheel.style.display = "block";
}
