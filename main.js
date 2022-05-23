var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
  
        block_image_object.scaleToWidth(150);
        block_image_object.scaleToHeight(140);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
  
      });
    }
function playSound(){
	x.play();
}
