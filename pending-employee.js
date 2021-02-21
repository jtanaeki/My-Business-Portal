var table = document.getElementById("p-e");
var xml = new XMLRequest();
xml.onreadystatechange=>{
	if(xml.readyState == 4 && xml.status == 200){
		table = xml.responseText;

		var row = "<tr>";
		for(let employee in login_employee){
			row += "<td>" + employee + "<td>";
		}
	}
};
