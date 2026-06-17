function load_customer_fromxml(dataset_path,bodycustomerbodycustomer){
    var xhr=new XMLHttpRequest();
    xhr.open("GET",dataset_path,true);
    xhr.send();
    xhr.onreadystatechange=function(){
        xhr.onreadystatechange=function()​

{​

if (xhr.readyState==4 && xhr.status==200)​
{
//handling when loading data successfully​
}
else
{
//handling when data can't be loaded​
}
}
}
}