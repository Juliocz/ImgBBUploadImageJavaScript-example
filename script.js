
var myapikeyimgbb="7c565e4bc44a1232c7742a1e252b62c6";//api key de imgbb.com
function clickUpload(){
	alert("Subiendo imagen.");
	var file = document.getElementById('input_img');
var formData = new FormData();
formData.append("image", file.files[0])
var buttonsubir=document.getElementById('botonUpload');
//configuro post para subir
var settings = {
  "url": "https://api.imgbb.com/1/upload?key="+myapikeyimgbb,
  "method": "POST",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": formData
};

buttonsubir.value="Subiendo imagen...";
//subo post
$.ajax(settings).done(function (response) {
	//recibo post respuesta 
  console.log(response);
  var jx = JSON.parse(response);
  console.log(jx.data.url);
  
  //asigno imagen al html,y demas vista
  buttonsubir.value="Subir imagen";
  document.getElementById('img').src=jx.data.url;//asigno imagen al src
  document.getElementById("urlimage").innerHTML = jx.data.url;//muestro url en html
  document.getElementById("jsonresponse").innerHTML = response;//muestro json en html
  console.log(jx.data.id);
  //opcional, muestro los parametros del json
  for (key in jx) {
  if (jx.hasOwnProperty(key)) {
      console.log("%c "+key + " = " + jx[key],"color:cyan");
  }
  }
  //JSONObject json = new JsonObject(response);
  //alert(json.get("data"));
  
 // var file = document.getElementById('img');
  //file.src=response.getAttribute("data").getAttribute("url");
});
	
	
//settings.data = formData;

            /*fetch("https://api.imgur.com/3/upload", {
                method: "post",
                headers: {
                    Authorization: "Client-ID YOUR_CLIENT_ID"
                },
                body: form
            }).then(data => data.json()).then(data => {
                img.src = data.data.link
                url.innerText = data.data.link
            });*/


/* settings = {
  "url": "https://api.imgbb.com/1/upload?key=8d5867a9512390fb5e5dc97839aa36f6",
  "method": "POST",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};


$.ajax(settings).done(function (response) {
  console.log(response);
  var jx = JSON.parse(response);
  console.log(jx.data.url);
*/

}
	
	
	/*$.post("https://api.imgbb.com/1/upload?key=8d5867a9512390fb5e5dc97839aa36f6",
	function(data,status){
		console.log("${data} and status is $(status)");
	});*/
