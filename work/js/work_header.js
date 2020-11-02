//作品別ページ＿共通ヘッダー読み込みJS
function header(rootDir){
    $.ajax({
        url: rootDir + "include/work_header.html", // ディレクトリー変更
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}
