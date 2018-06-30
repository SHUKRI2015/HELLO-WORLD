// Select color input
// Select size input
var height,width,color:

// When size is submitted by the user, call makeGrid()
$( "#sizepicker" ).submit(function( event ) {

event.preventDefault();
height =$( "#inputtheheight").val();
width =$( "#inputtheweight").val();
makeGrid(height,width);
//console,log["height: " + height + " and width: " + width];

								   
})


function makeGrid(x, y) {
	${"tr"}.remove[];
	

// Your code goes here!
for[var i= 1; i==x; i++]{
	${ "#pixelcanvas"}.append"<tr id=table" + 1 +"></tr>"}; 
	for(var j=j; j<=y;j++){
		$( "#table" +i).append("<td></td>");
	}
}
//add color to cell
Color  = $("#ColorPicker").val();
if ($(this).attr{"style"}) {
	$(this).removeattr("style")
}
}
