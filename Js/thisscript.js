// JavaScript Document


function validate()
{
	var fname = document.getElementById("f1").value;
	var lname = document.getElementById("f2").value;
	
	if(fname.length < 3 || fname.length > 11)
		{
			alert("Invalid Firstname name length");
			document.getElementById("f1").focus();
		}
	else if(lname.length < 3 || lname.length > 7)
		{
			alert("Invalid Lastname name length");
			document.getElementById("f2").focus();
		}
	else
		alert(fname+" "+lname + " your input was valid.");
}

function hint()
{
	document.getElementById("leaf").style.background="grey";
	//return ("I love you my joy");
	return ("Need more info? <a href='#'>Find out more</a>"+
	"<aside><br>");
}

function hint2()
{
	alert ("Thank you! Call again");
}

function confirmed()
		{
			alert("Good to go!");
		}

function today()
{
	var ndate = Date();
	return ndate;
}

function inquiry()
{
		/*document.getElementById('stem').innerHTML = 
		 (
		"Comment here: <a href='#frame' target='_self'>comment</a>"+
		"<div id='frame'><iframe src='Form.html' height='100%' width='50%'></iframe></div>"
	);*/
	document.write('<a href="Form.html" target="_blank">Review</a>');
}

function call() {
	document.getElementById("leaf").innerHTML+=hint();
	//document.getElementById("stem").innerHTML+=inquiry();
}

function fallBack()
{
	window.alert("Thank you for your feedback! We're doing our best to serve you better");
}

function update()
{
	var rate_value = document.getElementById('rate').value;
	document.getElementById('rate_val').innerText = rate_value;
}

function showBranches()
{
	txt = "<ul><li>Twapia-Old</li><li>Twapia-New</li><li>Chifubu-market</li><li>Kawama</li></ul>";
	document.getElementById("branch").innerHTML=txt;
}