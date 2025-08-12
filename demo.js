//use of FormData()
const s = document.querySelector(".summit");
s.addEventListener("click",function(event)
{
    event.preventDefault();
    const putdata=document.querySelector(".putdata");
    console.log(putdata)
    const data = new FormData(putdata)
    console.log(data);
    const sno=data.get("s.no");
    const name=data.get("name");
    const marks=data.get("marks");

    if(!sno || !name || !marks)
    {
        console.log("Plz enter all input fields")
    }
    else
    {
        adddata(sno,name,marks);
    }
});

function adddata(sno,name,marks)
{
    const table=document.getElementsByClassName("container")[0].querySelector("table")
    const el2=`<tr> <td>${sno}</td>
                    <td>${name}</td>
                    <td>${marks}</td>
                 </tr>`;
    table.innerHTML+=el2;
}







//setting dark mode
const btn = document.querySelector(".mode");


btn.addEventListener("click",function()
{
    const el = document.body;
    el.style.backgroundColor="Black";
    el.style.color="White";
});