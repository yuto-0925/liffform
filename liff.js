$(document).ready(function () {

    var liffId = "1656032547-BVbjORVl";
    initializeLiff(liffId);
})

function initializeLiff(liffId) {
    liff
        .init({
            liffId: liffId
        })
        .then(() => {
          // start to use LIFF's api
          initializeApp();
        })
        .catch((err) => {
            console.log('LIFF Initialization failed ', err);
        });
}

function sendText(text) {
        sendMessages(text);
}

// LINEトーク画面上でメッセージ送信
function sendMessages(text) {
    liff.sendMessages(replyToken[{
        'type': 'text',
        'text': "以下の内容で申し込みを受付けました。"
    },{
        'type': 'text',
        'text': text
   }]).then(function () {
        liff.closeWindow();
    }).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}
