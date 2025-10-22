//'use strict';


class BarChart {
    constructor(canvas) {
        this.canvas = canvas;
    }
    draw(values){
        const context = this.canvas.getContext("2d");
        context.fillstyle = '#00AA00'
        context.fillRect(0,0,this.canvas.width,this.canvas.height)      
    }
}

const tbValue = document.getElementById("tbValue").value;
const add = document.getElementById("Add");
const canvasChart = document.getElementById("canvasChart");

const barChart = new BarChart(canvasChart)
barChart.draw() 

//alert(tbValue);
function a()
{
    alert(tbValue)
}

add.addEventListener("Add", ()=>{
    const value = eval('['+tbValue+']');
    alert(typeof(tbValue));
    const chart = new BarChart(canvasChart)
    chart.fillRect
    }
)




