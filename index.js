var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var date = $('input[name="date"]').val();
        var start_time = $('input[name="start_time"]').val();
        //var mes_date = $('textarea[name="end_time"]').val();
        var end_time = $('input[name="end_time"]').val();

        var msg = `${key}\n日付：${date}\n始業時間：${start_time}\n終業時間：${end_time}`;
        sendText(msg);

        return false;
    });
});
