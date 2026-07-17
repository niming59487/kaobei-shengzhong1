function sendPost(){

    const message = document.getElementById("message").value;
    const status = document.getElementById("status");

    if(message.trim() === ""){
        status.innerHTML = "請輸入內容";
        return;
    }

    db.collection("posts").add({

        content: message,
        time: new Date()

    })
    .then(()=>{

        status.innerHTML = "投稿成功！";

        document.getElementById("message").value = "";

    })
    .catch((error)=>{

        console.log(error);

        status.innerHTML = "投稿失敗";

    });

}
