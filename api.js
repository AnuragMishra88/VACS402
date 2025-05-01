const getdata=()=>{
   const val=document.getElementById("search_id").value;
    fetch(`https://api.github.com/users/${val}`)
    .then((res)=>res.json())
    .then((data)=>{
        const myJson=JSON.stringify(data,null,2);
       // document.getElementById("display").innerText=myJson;
        if(data.login){
            document.getElementById("display").innerText+='\n\nUsername: ${data.login}';
        }
        else{
            document.getElementById("display").innerText="user not found";
        }
    })
    .catch((error)=>{
        document.getElementById("display").innerText='Error';
    });
};