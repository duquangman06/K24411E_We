var xmlDoc;

function loadTitle(dataset_path)
{
    var xhr=new XMLHttpRequest();

    xhr.open("GET",dataset_path,true);

    xhr.send();

    xhr.onreadystatechange=function()
    {
        if(xhr.readyState==4 && xhr.status==200)
        {
            xmlDoc=xhr.responseXML;

            if(xmlDoc==null)
            {
                alert("Can not parse XML");
                return;
            }

            var employees=
            xmlDoc.getElementsByTagName("employee");

            var drTitle=
            document.getElementById("drTitle");

            var titles=[];

            for(var i=0;i<employees.length;i++)
            {
                var title=
                employees[i].getAttribute("title");

                if(!titles.includes(title))
                {
                    titles.push(title);

                    option=
                    document.createElement("option");

                    option.value=title;

                    option.innerHTML=title;

                    drTitle.appendChild(option);
                }
            }

            showEmployee();
        }
    }
}
function showEmployee()
{
    var bodyemployee=
    document.getElementById("bodyemployee");

    bodyemployee.innerHTML="";

    var selectedTitle=
    document.getElementById("drTitle").value;

    var employees=
    xmlDoc.getElementsByTagName("employee");

    for(var i=0;i<employees.length;i++)
    {
        var title=
        employees[i].getAttribute("title");

        if(title==selectedTitle)
        {
            var id=
            employees[i].getAttribute("id");

            var name=
            employees[i]
            .getElementsByTagName("name")[0]
            .childNodes[0].nodeValue;

            var phone=
            employees[i]
            .getElementsByTagName("phone")[0]
            .childNodes[0].nodeValue;

            tr=document.createElement("tr");

            td_id=document.createElement("td");
            td_id.innerHTML=id;

            td_name=document.createElement("td");
            td_name.innerHTML=name;

            td_phone=document.createElement("td");
            td_phone.innerHTML=phone;

            tr.appendChild(td_id);
            tr.appendChild(td_name);
            tr.appendChild(td_phone);

            bodyemployee.appendChild(tr);
        }
    }
}