let c1=2;
function insert_Row() {
    //Write your code here
	let table=document.getElementById("sampleTable");

	let tablerow=table.insertRow(0);
	let cell1=tablerow.insertCell(0);
	let cell2=tablerow.insertCell(1);

	cell1.innerHTML="New Cell1";
	cell2.innerHTML="New Cell2";
  
}
