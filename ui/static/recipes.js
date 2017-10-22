function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_detail=document.getElementById("new_detail").value;
 var new_time=document.getElementById("new_time").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='detail_row"+table_len+"'>"+new_detail+"</td><td id='time_row"+table_len+"'>"+new_time+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_detail").value="";
 document.getElementById("new_time").value="";
}
function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var detail=document.getElementById("detail_row"+no);
 var time=document.getElementById("time_row"+no);
	
 var name_data=name.innerHTML;
 var detail_data=detail.innerHTML;
 var time_data=time.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 detail.innerHTML="<input type='text' id='detail_text"+no+"' value='"+detail_data+"'>";
time.innerHTML="<input type='time' id='time_text"+no+"' value='"+time_data+"'>";
}
function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}