let car: Car;


function submitCar() {
    let errores = 0;
    let plateInput = <HTMLInputElement>document.getElementById("plateInput");
    let brandInput = <HTMLInputElement>document.getElementById("brandInput");
    let colorInput = <HTMLInputElement>document.getElementById("colorInput");

	//EX1. Validar los campos de matricula (formato: 1234ABC), marca y color, antes de hacer el new Car
	car = new Car(plateInput.value, colorInput.value, brandInput.value);
    if( /^[0-9]{4}[A-Z]{3}$/.test(plateInput.value) != true){
        plateInput.style.border = "2px solid red";
    }else if(brandInput.value == ''){
        brandInput.style.border = "2px solid red";
    }else if(colorInput.value == ''){
        colorInput.style.border = "2px solid red";
    }else{
        showVehicle();
        showWheelForm();
    }
   
}

function showVehicle() {
    let carTitle = <HTMLInputElement>document.getElementById("carTitle");
    let plateOutput = <HTMLInputElement>document.getElementById("plateOutput");
    let brandOutput = <HTMLInputElement>document.getElementById("brandOutput");
    let colorOutput = <HTMLInputElement>document.getElementById("colorOutput");

    carTitle.innerText = "Car:";
    plateOutput.innerText = "Plate: " + car.plate;
    brandOutput.innerText = "Brand: " + car.brand;
    colorOutput.innerText = "Color: " + car.color;

}

function submitWheelForm() {
    let errores = 0;
	
	//EX2. Solo hacer el "new Wheel" si las 4 ruedas son correctas
	//EX3. Una rueda correcta deberá tener un diámetro entre 1 y 2. Crear una función para validarlas

	for (let i = 1; i <= 4; i++) {
		let brandWheel = <HTMLInputElement>document.getElementById("brandWheel" + i);
		let diameterWheel = <HTMLInputElement>document.getElementById("diameterWheel" + i);
        

        if(brandWheel.value == '' ){
            errores = 1;
            brandWheel.style.border = " 2px solid red"
        }else if(diameterWheel.value == ''){
            errores = 1;
            diameterWheel.style.border = " 2px solid red";
        }else if(parseInt(diameterWheel.value) > 2 || parseInt(diameterWheel.value) < 1){
            errores = 1;
            diameterWheel.style.border = " 2px solid red";
        }else{
            diameterWheel.style.border = " 2px solid green";
            brandWheel.style.border = " 2px solid green";
            let wheel_generica = new Wheel(Number(diameterWheel.value), brandWheel.value);
            car.addWheel(wheel_generica);
        }     
         
	}
	console.log(car)
    if(errores == 0){
	    showWheels();
    }
    
}

function showWheels() {
    
	//EX4. Optimizar la función showWheels
    let wheelTitle = <HTMLInputElement>document.getElementById("wheelTitle");
    
    let wheelOutput1 = <HTMLInputElement>document.getElementById("wheelOutput1") ;
    let wheelOutput2 = <HTMLInputElement>document.getElementById("wheelOutput2");
    let wheelOutput3 = <HTMLInputElement>document.getElementById("wheelOutput3");
    let wheelOutput4 = <HTMLInputElement>document.getElementById("wheelOutput4");
    
    
    wheelTitle.innerText = "Wheels:";
    wheelOutput1.innerText = "Wheel 1:  " + "Brand: " + car.wheels[0].brand + "  Diameter: " + car.wheels[0].diameter;
    wheelOutput2.innerText = "Wheel 2:  " + "Brand: " + car.wheels[1].brand + "  Diameter: " + car.wheels[1].diameter;
    wheelOutput3.innerText = "Wheel 3:  " + "Brand: " + car.wheels[2].brand + "  Diameter: " + car.wheels[2].diameter;
    wheelOutput4.innerText = "Wheel 4:  " + "Brand: " + car.wheels[3].brand + "  Diameter: " + car.wheels[3].diameter;
    
}


function showWheelForm() {
    let carForm = <HTMLInputElement>document.getElementById("create-car-form");
    let carWheel = <HTMLInputElement>document.getElementById("create-wheel-form");
    carForm.style.display = "none";
    carWheel.style.display = "block";

}