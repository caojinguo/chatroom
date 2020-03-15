$(function () {
    let socket = io('http://127.0.0.1:4000');
    $('#sendBtn').on('click',function(e){
        sendMsg()
    });
    socket.on('msg',data=>{
        renderChatList(data);
    });
    $('#chatCon').bind('keyup', function(event) {
    　　if (event.keyCode == "13") {
    　　　　$('#sendBtn').click();
    　　}
    });
    function sendMsg(){
        let chatCon = $('#chatCon').val();
        socket.emit('msg',chatCon);
        $('#chatCon').val('');
    }
    function renderChatList(data){
        let {id,msg} = data;
        let dom = `<div class="chat-item"><span>${id}</span>: ${msg}</div>`;
        $('#chatList').append(dom);
    }
});