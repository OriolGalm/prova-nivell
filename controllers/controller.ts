let car: Car;


function submitCar() {
    let errores = 0;
    let plateInput = <HTMLInputElement>document.getElementById("plateInput");
    let brandInput = <HTMLInputElement>document.getElementById("brandInput");
    let colorInput = <HTMLInputElement>document.getElementById("colorInput");

	//EX1. Validar los campos de matricula (formato: 1234ABC), marca y color, antes de hacer el new Car
	
    if( /^[0-9]{4}[A-Z]{3}$/.test(plateInput.value) != true){
        plateInput.style.border = "2px solid red";
        errores++;
    }else{
        plateInput.style.border = "2px solid green";
    }
    if(brandInput.value == ''){
        errores++;
        brandInput.style.border = "2px solid red";
    }else{
        brandInput.style.border = "2px solid green";
    }
    if(colorInput.value == ''){
        errores++;
        colorInput.style.border = "2px solid red";
    }else{
        colorInput.style.border = "2px solid green";
    }
    if(errores == 0){
        car = new Car(plateInput.value, colorInput.value, brandInput.value);
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
            errores++;
            brandWheel.style.border = " 2px solid red"
        }else{
            brandWheel.style.border = " 2px solid green";
        } 
        if(diameterWheel.value == ''){
            errores++;
            diameterWheel.style.border = " 2px solid red";
        }else{
            diameterWheel.style.border = " 2px solid green";
        } 

        const diameterW = (x:Number): Boolean => x >= 1 && x <= 2 ? true : false;
        
        if(diameterW(parseInt(diameterWheel.value)) == false){
            errores++;
            diameterWheel.style.border = " 2px solid red";
        }else{
            diameterWheel.style.border = " 2px solid green";
        }
    }    

    console.log(car)
    if(errores == 0){
        for(let i = 1; i< 5; i++){
            let brandWheel = <HTMLInputElement>document.getElementById("brandWheel" + i);
            let diameterWheel = <HTMLInputElement>document.getElementById("diameterWheel" + i);
            let wheel_generica = new Wheel(Number(diameterWheel.value), brandWheel.value);
            car.addWheel(wheel_generica);
        }
	    showWheels();
    }
}

function showWheels() {
    
	//EX4. Optimizar la función showWheels
    let wheelTitle = <HTMLInputElement>document.getElementById("wheelTitle");
    
    /* let wheelOutput1 = <HTMLInputElement>document.getElementById("wheelOutput1") ;
    let wheelOutput2 = <HTMLInputElement>document.getElementById("wheelOutput2");
    let wheelOutput3 = <HTMLInputElement>document.getElementById("wheelOutput3");
    let wheelOutput4 = <HTMLInputElement>document.getElementById("wheelOutput4"); */
    
    
    wheelTitle.innerText = "Wheels:";
    for(let i = 0; i<car.wheels.length; i++){
        let wheelOutput = <HTMLInputElement>document.getElementById(`wheelOutput${i + 1}`);
        
        wheelOutput.innerText = "Wheel" + [i + 1] + ":  " + "Brand: " + car.wheels[i].brand + "  Diameter: " + car.wheels[i].diameter;
        console.log("WheelOutput: ", wheelOutput);
    }
    /* wheelOutput1.innerText = "Wheel 1:  " + "Brand: " + car.wheels[0].brand + "  Diameter: " + car.wheels[0].diameter;
    wheelOutput2.innerText = "Wheel 2:  " + "Brand: " + car.wheels[1].brand + "  Diameter: " + car.wheels[1].diameter;
    wheelOutput3.innerText = "Wheel 3:  " + "Brand: " + car.wheels[2].brand + "  Diameter: " + car.wheels[2].diameter;
    wheelOutput4.innerText = "Wheel 4:  " + "Brand: " + car.wheels[3].brand + "  Diameter: " + car.wheels[3].diameter; */
    
}


function showWheelForm() {
    let carForm = <HTMLInputElement>document.getElementById("create-car-form");
    let carWheel = <HTMLInputElement>document.getElementById("create-wheel-form");
    carForm.style.display = "none";
    carWheel.style.display = "block";

}