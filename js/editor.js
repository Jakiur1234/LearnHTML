var close = document.querySelector("#close");
var html = document.getElementById("html");
var css = document.getElementById("css");
var js = document.getElementById("js");
var gotocode = document.querySelector(".code")
var run = document.querySelector(".output-btn");
var iframe = document.querySelector(".iframe");
var output_con = document.querySelector(".output-con");
var code = document.getElementById("output").contentWindow.document;
var examplecode = localStorage.getItem("example");
var save = document.querySelector(".save");
var reset = document.querySelector(".reset_setting");

//get all settings items
var editor_ts = localStorage.getItem("editor-text-size");
var editor_tc = localStorage.getItem("editor-text-color");
var editor_bg = localStorage.getItem("editor-canvas-bg");



//set all settings iteams
if(editor_ts != null){
  html.style.fontSize = editor_ts + "px";
}
if(editor_tc != null){
  html.style.color = editor_tc;
}
if(editor_bg != null){
  html.style.backgroundColor = editor_bg;
}

//save all settings items
save.onclick = ()=>{
  var fsize = document.getElementById("fsize").value;
  var fcolor = document.getElementById("fcolor").value;
  var ccolor = document.getElementById("ccolor").value;
  
  if(fsize != ""){
    localStorage.setItem("editor-text-size",fsize);
  }

  if(fcolor != ""){
    localStorage.setItem("editor-text-color",fcolor);
  }

  if(ccolor != ""){
    localStorage.setItem("editor-canvas-bg",ccolor);
  }

  window.location.reload(true);
}

//reset setting
reset.onclick = ()=>{
  localStorage.setItem("editor-text-size","16px");
  localStorage.setItem("editor-text-color","#F92672");
  localStorage.setItem("editor-canvas-bg","#23241F");

  window.location.reload(true);
}

//start html editor system
html.value = examplecode;
iframe.style.display = "none";
output_con.style.display = "none";


close.onclick = function(){
    window.history.back();
}


gotocode.onclick = ()=>{
    html.style.display = "block";
    iframe.style.display = "none";
    output_con.style.display = "none";
    gotocode.style.backgroundColor = "#0076FF";
    gotocode.style.color = "white";
    run.style.backgroundColor = "white";
    run.style.color = "black";
}

run.onclick = ()=>{
    html.style.display = "none";
    iframe.style.display = "block";
    output_con.style.display = "block";
    gotocode.style.backgroundColor = "white";
    gotocode.style.color = "black";
    run.style.backgroundColor = "#0076FF";
    run.style.color = "white";
    code.open();
    code.writeln(
      html.value +
        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"
    );
    code.close();
}

function compile() {
    document.body.onkeyup = function() {
      code.open();
      code.writeln(
        html.value +
          "<style>" +
          css.value +
          "</style>" +
          "<script>" +
          js.value +
          "</script>"
      );
      code.close();
    };
  }
  
  compile();
