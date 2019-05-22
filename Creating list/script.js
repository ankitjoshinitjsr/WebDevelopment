var button=document.getElementById("button");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");
var rinput=document.getElementById("userinput2");
var rbutton=document.getElementById("remove");

function create_element()
{
	var li =document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
}

function remove_element()
{
	var ul=document.querySelector("ul");
	var search=document.querySelectorAll("li");
	for (i=0;i < search.length;i++)
	{
		if (rinput.value === search[i].innerText)
		{
		   ul.removeChild(search[i]);
		}
	}
}

button.addEventListener("click", function(){
	if (input.value.length >0)
	{
       create_element();
	}
})

input.addEventListener("keypress", function(event){
	if (input.value.length > 0 && event.keyCode === 13)
	{
	   create_element();	
	}
})

rbutton.addEventListener("click", function(){
	if (rinput.value.length >0)
	{
       remove_element();
	   rinput.value="";
	}
})

rinput.addEventListener("keypress", function(event){
	if (rinput.value.length > 0 && event.keyCode === 13)
	{
	   remove_element();
       rinput.value="";	   
	}
})