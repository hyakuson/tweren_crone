function sync(e) {
    // 文字数カウント
    count(e.target);

    var i = $('div[name=editor_wrapper]').index($(e.target).parent());

    $('#flat_text_area').children().eq(i).html(formatText($(e.target).val()));
}

function add(e) {
    if (e.ctrlKey) {
        if (e.keyCode === 13) {
            console.log(e);

            // 左エリアにtextareaを追加
            $(e.target).parent().after(textarea());

            // TODO: フォーカスを新しいテキストエリアに移す

            // 右エリアにparagraghを追加
            var i = $('div[name=editor_wrapper]').index($(e.target).parent());
            $('#flat_text_area').children().eq(i).after(p());

            return false; //Enterを実行させない
        }
    }
}

function textarea() {
    var div = $('<div>')
        .attr('name', 'editor_wrapper');

    var textarea = $('<textarea>')
        .attr('placeholder', "140文字以内で入力。Ctrl+Enterでテキストエリアを挿入。")
        .appendTo(div);

    var sapn = $('<span>')
        .attr('class', 'char_count')
        .text('140')
        .appendTo(div);

    return div;
}

function p() {
    var div = $('<div>').attr('name', 'flat_text_wrapper');
    var p = $('<p>').html("&nbsp").appendTo(div);

    return div;
}

// 入力文字列を整形する
function formatText(str) {
    var ret = str.replace(/\n/g, '<br>');
    return ret;
};

// テキストエリアの文字数のカウント
function count(textarea) {
    $(textarea).next('span').text(140 - textarea.value.length);
}