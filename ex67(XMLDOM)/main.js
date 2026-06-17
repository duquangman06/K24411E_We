var ascending=true;
function load_customer(dataset_path,bodycustomer)
{
    var xhr=new XMLHttpRequest();
    xhr.open("GET",dataset_path,true);
    xhr.send(
    );
    xhr.onreadystatechange=function()
    {
        if(xhr.readyState==4 && xhr.status==200)
        {
            // Mô hình dom giống các bài trước
        var xmlDoc= xhr.responseXML;
        if (xmlDoc == null)
        {
            alert ("Error, Can not parser the xml file, please recheck xml file!")
            return;
        }
        tag_students=xmlDoc.getElementsByTagName("student")
        for(i=0; i < tag_students.length;i++)
        {
            value_tag_id=tag_students[i].getElementsByTagName("id")[0].childNodes[0].nodeValue
            value_tag_name=tag_students[i].getElementsByTagName("name")[0].childNodes[0].nodeValue
            value_tag_birthday=tag_students[i].getElementsByTagName("birthday")[0].childNodes[0].nodeValue
            value_tag_gender=tag_students[i].getElementsByTagName("gender")[0].childNodes[0].nodeValue
                
                tr=document.createElement("tr")

                tr.onclick=function()
                {
                localStorage.setItem("id",this.cells[0].innerHTML);
                localStorage.setItem("name",this.cells[1].innerHTML);
                localStorage.setItem("birthday",this.cells[2].innerHTML);
                localStorage.setItem("gender",this.cells[3].innerHTML);

                window.location.href="in4.html";
                }

                td_id=document.createElement("td")
                td_id.innerHTML=value_tag_id
                
                td_name=document.createElement("td")
                td_name.innerHTML=value_tag_name
                
                td_birthday=document.createElement("td")
                td_birthday.innerHTML=value_tag_birthday;       
               
                td_gender=document.createElement("td")
                td_gender.innerHTML=value_tag_gender
               
                tr.appendChild(td_id)
                tr.appendChild(td_name)
                tr.appendChild(td_birthday)
                tr.appendChild(td_gender)
                
                bodycustomer.appendChild(tr)
        }
    }
    else
    {
        //handling data can't load
    }
    }
    
}
//sort khi click tiêu đề cột
var ascending=true;

function sortTable(col)
{
var table=document.getElementById("studentTable");
var tbody=table.tBodies[0];
var rows=Array.from(tbody.rows);

rows.sort(function(a,b)
{
    var x=a.cells[col].innerHTML.trim();
    var y=b.cells[col].innerHTML.trim();
// js tự so sánh a-z ( cho ra kết quả 1 và -1)
    if(ascending)
    {return x.localeCompare(y);}
    else
    {return y.localeCompare(x)}
});
ascending=!ascending;
for(var i=0;i<rows.length;i++)
{tbody.appendChild(rows[i]);}
}
