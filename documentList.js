(function () {
    window.documentList = {
        start: function (sitename) {
            var milkcocoa = new MilkCocoa("maxicwq67kz.mlkcca.com");
            var ds = milkcocoa.dataStore('lists').child(sitename);

            ds.stream().size(1).next(function (err, data) {
                $('#embeded_html').html(data[0].value.html);
            });
        }
    }
})();