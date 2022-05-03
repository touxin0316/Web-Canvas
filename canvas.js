/*initialize*/

var mode = 0;
var fillmode = 0;
var gradientmode = 0;

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d"); // 設置2D畫布環境 

/* 儲存畫布函式進行re/undo */

var steps_array = new Array();
var steps = -1;
var imgdata;

function Save() 
{
    steps++;
    if (steps < steps_array.length)
    { 
        steps_array.length = steps; 
    }

    steps_array.push(canvas.toDataURL());

    console.log("save");
}  

Save(); // 儲存初始狀態
  
/*畫筆樣式設定*/

//調整畫筆顏色



//畫筆狀態

var drawing = false;

// 現在滑鼠的座標

var x = 0;
var y = 0; 


// 筆的形狀

ctx.lineCap = "round"; //The lineCap property sets or returns the style of the end caps for a line. 
ctx.lineJoin = "round"; //Create a rounded corner when the two lines meet.

// 調整畫筆粗度

var linewidth = document.getElementById("penwidth");
ctx.lineWidth = linewidth.value; // The lineWidth property sets or returns the current line width, in pixels.
linewidth.oninput = function() 
{
    ctx.lineWidth = this.value;
    console.log(linewidth.value);
}

// 調整字型大小與字體

var textsize = document.getElementById("textsize");

var font = document.getElementById("font");

var text_size = textsize.calue;

var fonttype = font.value;

textsize.oninput = function() 
{
    text_size = this.value;
    console.log(font_size);
}

font.oninput = function()
{
    fonttype = this.value;
    console.log(fonttype);
}

// 調整字體
                  
var text = document.getElementById("text");
var textcontent = text.value;
text.oninput = function() 
{
    textcontent = this.value;
    console.log(textcontent);
}

/*讀取滑鼠狀態*/
// The offsetX/offsetY property returns the x/y-coordinate of the mouse pointer, relative to the target element.

canvas.addEventListener("mouseout", (e) => 
{
    e.preventDefault();
    e.stopPropagation();
    drawing = false; 
    console.log("false"); 
} 
);

canvas.addEventListener("mouseup", (e) =>　
{
    e.preventDefault();
    e.stopPropagation();
    drawing = false; 
    console.log("false");
    Save(); //每次滑鼠點擊都儲存
} 
);

canvas.addEventListener("mousedown", (e) => 
{
    e.preventDefault();
    e.stopPropagation();
    x = e.offsetX;
    y = e.offsetY;
    // 繪製圖形用 紀錄起始點
    console.log("true");
    drawing = true;
    imgdata = ctx.getImageData(0, 0, canvas.width, canvas.height);
} );

canvas.addEventListener("mousemove", (e) => 
    {
        if(drawing == true)
        {       
            if(gradientmode == 1)
            {
                console.log("hi");
                var grd = ctx.createLinearGradient(0,0,1200,0);
                grd.addColorStop(0,"#EDE1DF");
                grd.addColorStop(0.25,"#ffa07a");
                grd.addColorStop(0.5,"#fffacd");
                grd.addColorStop(0.75,"#8fbc8f");
                grd.addColorStop(1,"#afeeee");
                ctx.strokeStyle = grd;
                ctx.fillStyle = grd;
            }
            else
            {
                var color = document.getElementById("colorpicker");

                ctx.strokeStyle = color.value;
                ctx.fillStyle = color.value;

                color.oninput = function()
                {
                    ctx.strokeStyle = this.value;
                    ctx.fillStyle = this.value;
                    console.log(color.value);
                }
            }
                console.log("drawing");
                ctx.beginPath();
                //畫筆的初始位置
                if(mode == 1 || mode == 2)
                {
                    if(mode == 1) //pen
                    {
                        ctx.globalCompositeOperation="source-over";
                    
                    }
                    else if(mode == 2) //erase
                    {
                        ctx.globalCompositeOperation="destination-out";
                    }

                    ctx.moveTo(x,y);
                    //畫筆的終末位置
                    ctx.lineTo(e.offsetX, e.offsetY);      
                    ctx.stroke();
                    ctx.closePath();
                    //初位置變成末位置
                    x = e.offsetX;
                    y = e.offsetY;
                }
                else if(mode == 3) // text
                {
                    ctx.globalCompositeOperation="source-over"
                    var text_size_1 = text_size + "px" + " " + fonttype;
                    ctx.font = text_size_1;
                    ctx.fillText(textcontent, x, y);
                }
                else if(mode == 4) //circle
                {
                    ctx.putImageData(imgdata, 0, 0);
                    ctx.globalCompositeOperation="source-over"
                    if(fillmode == 0)
                    {
                        var radius = Math.abs(x - e.offsetX);
                        //ctx.clearRect(0,0,canvas.width,canvas.height);
                        ctx.arc(x , y, radius, 0, 2 * Math.PI);
                        ctx.stroke();
                    }
                    else
                    {
                        var radius = Math.abs(x - e.offsetX);
                        //ctx.clearRect(0,0,canvas.width,canvas.height);
                        ctx.arc(x , y, radius, 0, 2 * Math.PI);
                        ctx.fill();
                    }
                }
                else if(mode == 5) //rectangle
                {
                    ctx.putImageData(imgdata, 0, 0);
                    ctx.globalCompositeOperation="source-over"
                    if(fillmode == 0)
                    {                        
                        //ctx.clearRect(0,0,canvas.width,canvas.height);                     
                        ctx.moveTo(x , y);                      
                        ctx.lineTo(e.offsetX , y);
                        ctx.lineTo(e.offsetX , e.offsetY);
                        ctx.lineTo(x , e.offsetY);
                        ctx.closePath();
                        ctx.stroke();
                    }
                    else
                    {
                        //ctx.clearRect(0,0,canvas.width,canvas.height);
                        ctx.moveTo(x , y);                      
                        ctx.lineTo(e.offsetX , y);
                        ctx.lineTo(e.offsetX , e.offsetY);
                        ctx.lineTo(x , e.offsetY);
                        ctx.fill();
                    }
                }
                else if(mode == 6) // triangle
                {
                    ctx.putImageData(imgdata, 0, 0);
                    ctx.globalCompositeOperation="source-over"
                    if(fillmode == 0)
                    {
                        //ctx.clearRect(0,0,canvas.width,canvas.height); 
                        ctx.moveTo(x , y);
                        ctx.lineTo(e.offsetX , e.offsetY);
                        ctx.lineTo(2 * x - e.offsetX , e.offsetY);
                        ctx.closePath();
                        ctx.stroke();
                    }
                    else
                    {
                        //ctx.clearRect(0,0,canvas.width,canvas.height); 
                        ctx.moveTo(x , y);
                        ctx.lineTo(e.offsetX , e.offsetY);
                        ctx.lineTo(2 * x - e.offsetX , e.offsetY);
                        ctx.fill();
                    }
                }
                else if(mode == 7) // line
                {
                    ctx.putImageData(imgdata, 0, 0);
                    //ctx.clearRect(0,0,canvas.width,canvas.height);
                    ctx.globalCompositeOperation="source-over"
                    ctx.moveTo(x, y);
                    ctx.lineTo(e.offsetX, e.offsetY); 
                    ctx.closePath;
                    ctx.stroke();
                }
        }
        return;
    });

function draw()
{
    mode = 1; // 更改模式
    console.log("mode = ", mode);
    var elementToChange = document.getElementsByTagName("body")[0];  //換鼠標的圖案
    elementToChange.style.cursor = "url('picture_src/pen_cursor.png'), auto";
}

function erase()
{
    mode = 2;
    console.log("mode = ", mode);
    var elementToChange = document.getElementsByTagName("body")[0];
    elementToChange.style.cursor = "url('picture_src/eraser_cursor.png'), auto";
}
    
function textinput()
{
    mode = 3;
    console.log("mode = ", mode);
    var elementToChange = document.getElementsByTagName("body")[0];
    elementToChange.style.cursor = "text";
}

function circle()
{
    mode = 4;
    console.log("mode = ", mode);
    var elementToChange = document.getElementsByTagName("body")[0];
    elementToChange.style.cursor = "url('picture_src/circle_cursor.png'), auto";
}

function rectangle()
{
    mode = 5;
    console.log("mode = ", mode);
    var elementToChange = document.getElementsByTagName("body")[0];
    elementToChange.style.cursor = "url('picture_src/rectangle_cursor.png'), auto";
}

function triangle()
{
    mode = 6;
    console.log("mode = ", mode);
    var elementToChange = document.getElementsByTagName("body")[0];
    elementToChange.style.cursor = "url('picture_src/triangle_cursor.png'), auto";
}

function line()
{
    mode = 7;
    console.log("mode = ", mode);
    var elementToChange = document.getElementsByTagName("body")[0];
    elementToChange.style.cursor = "url('picture_src/line_cursor.png'), auto";
}

function fill()
{
    if(fillmode == 0)
        fillmode = 1;
    else 
        fillmode = 0;

    console.log("fillmode =",fillmode);

}

function upload()
{
    //mode = 8;
    //console.log("mode = ", mode);
    ctx.globalCompositeOperation="source-over"
    var file = document.getElementById("Upload");
    file.addEventListener('change', (e) => 
    {
        var newfile = e.target.files[0]
        // 宣告一個新圖片
        var img = new Image()
        img.src = URL.createObjectURL(newfile)
        
        img.onload = function() 
        {
          ctx.drawImage(img, 0, 0, img.width, img.height)
        }
    })
}

function download()
{
    //mode = 9;
    //console.log("mode = ", mode);
    var image = canvas.toDataURL("image/png")
    let save = document.createElement("a");
    document.body.appendChild(save);
    save.href = image;
    save.download = "img"; // 檔名
    save.target = "_blank";
    save.click();
}

function undo()
{
    //mode = 10;
    //console.log("mode = ", mode);

    if (steps > 0) 
    {
        steps--;
        var canvas_undo = new Image();

        canvas_undo.src = steps_array[steps];
        canvas_undo.onload = function () 
        {
            ctx.clearRect(0,0,canvas.width,canvas.height); // 先清理掉之前的畫布
            ctx.drawImage(canvas_undo, 0, 0); 
        }
        console.log("undo");
    }
}

function redo()
{
    if (steps < steps_array.length) 
    {
        steps++;
        var canvas_undo = new Image();

        canvas_undo.src = steps_array[steps];
        canvas_undo.onload = function () 
        {
            ctx.clearRect(0,0,canvas.width,canvas.height); // 先清理掉之前的畫布
            ctx.drawImage(canvas_undo, 0, 0); 
        }
        console.log("undo");
    }
}

function scalesmaller()
{
    ctx.scale(0.5,0.5);
}

function scalebigger()
{
    ctx.scale(2,2);
}

function reset()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 直接清理掉
}

function gradient()
{
    if(gradientmode == 0)
        gradientmode = 1;
    else 
        gradientmode = 0;

    console.log("gradientmode =",gradientmode);
}
