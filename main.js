canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginpath();
ctx.strokeStyle = "grey";
ctx.lineWidth = "3";
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle = "blue";
ctx.lineWidth = "2";
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle = "black";
ctx.lineWidth = "2";
ctx.arc(320, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = "2";
ctx.arc(290, 190, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle = "green";
ctx.lineWidth = "2";
ctx.arc(350, 190, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle = "blue";
ctx.lineWidth = "2";
ctx.arc(390, 210, 40, 0, 2 * Math.PI);
ctx.stroke();