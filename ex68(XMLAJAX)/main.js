
function load_customer(dataset_path,bodyin4)
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
        tag_artist=xmlDoc.getElementsByTagName("CD")
        for(i=0; i < tag_artist.length;i++)
        {
            value_tag_name=tag_artist[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue
            value_tag_title=tag_artist[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue
          
                tr=document.createElement("tr")

             

                td_id=document.createElement("td")
                td_id.innerHTML=value_tag_name
                
                td_name=document.createElement("td")
                td_name.innerHTML=value_tag_title
                
      
                tr.appendChild(td_id)
                tr.appendChild(td_name)
           
                bodycustomer.appendChild(tr)
        }
    }
    else
    {
        //handling data can't load
    }
    }
    
}
