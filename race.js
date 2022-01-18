canvas=new fabric.Canvas("myCanvas")
car_width=60;
car_height=30;
car1_y=10;
car1_x=10;
car2_x=20;
car2_y=20;


car1_image="";
car2_image="";
car_image="";
function new_image1(car1){
fabric.Image.fromURL(car1,function(img){
  car1_image=img;  
  car1_image.scaleToWidth(car_width);
  car1_image.scaleToHeight(car_height);
  car1_image.set({
      top:car1_y,
      left:car1_x
  })
  canvas.add(car1_image)
})
}

function new_image2(car2){
    fabric.Image.fromURL(car2,function(img){
      car2_image=img;  
      car2_image.scaleToWidth(car_width);
      car2_image.scaleToHeight(car_height);
      car2_image.set({
          top:car2_y,
          left:car2_x
      })
      canvas.add(car2_image)
    })
    }

function add(){
   
    car1_imgtag=new Image();
    car1_imgtag.onload=uploadCar1();
    car1_imgtag.src=car1_image;
    car2_imgtag=new Image();
    car2_imgtag.onload=uploadCar2();
    car2_imgtag.src=car2_image;
}

function uploadCar1(){
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car_height,car_width);
}
function uploadCar2(){
    ctx.drawImage(car2_imgtag,car_x,car_y,car_height,car_width);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38'){
        up();
        console.log("up")
    }

    if(keypressed=='40'){
        down();
        console.log("down")
    }

    if(keypressed=='37'){
        left();
        console.log("left")
    }

    if(keypressed=='39'){
        right();
        console.log("right")
    }
    
    if(keypressed=='87'){
        w();
        console.log("w")
    }

    if(keypressed=='65'){
        a();
        console.log("a")
    }

    if(keypressed=='83'){
        s();
        console.log("s")
    }

    if(keypressed=='68'){
        d();
        console.log("d")
    }

    if(keypressed=='80'){
new_image1("Car1.png");
    }
    if(keypressed=='66'){
        new_image1("Car2.png");
            }
}
function up(){
    if(car1_y>0){
        car1_y=car1_y-10;
        canvas.remove(car1_image)
        new_image1('Car1.png');
    }
}

function down(){
    if(car1_y<=500){
        car1_y=car1_y+10;
        
        canvas.remove(car1_image)
        new_image1('Car1.png');
    }
}

function left(){
    if(car1_x>0){
        car1_x=car1_x-10;
        
        canvas.remove(car1_image)
        new_image1('Car1.png');
    }
}

function right(){
    if(car1_x<=700){
        car1_x=car1_x+10;
        
        canvas.remove(car1_image)
        new_image1('Car1.png');
    }
}

function w(){
    if(car2_y>0){
        car2_y=car2_y-10;
        
        canvas.remove(car2_image)
        new_image2('Car2.png');
    }
}

function s(){
    if(car2_y<=500){
        car2_y=car2_y+10;
        
        canvas.remove(car2_image)
        new_image2('Car2.png');
    }
}

function a(){
    if(car2_x>0){
        car2_x=car2_x-10;
        
        canvas.remove(car2_image)
        new_image2('Car2.png');
    }
}

function d(){
    if(car2_x<=700){
        car2_x=car2_x+10;
        
        canvas.remove(car2_image)
        new_image2('Car2.png');
    }
}

function goBack1(){
    window.location="navigate.html"
}

function onLoad() {
    gapi.load('auth2', function() {
      gapi.auth2.init();
    });
  }
  
    function signOut() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log('User signed out.');
      });
      window.location="index.html"
  
    }