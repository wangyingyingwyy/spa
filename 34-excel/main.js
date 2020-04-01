window.onload= function() {
    // 表格数据定义
    var main = document.getElementById('main');
    var data=[
        ['Java',1,'降','-0.01%'],
        ['C',2,'升','+2.44%'],
        ['Python',3,'升','+1.41%'],
        ['C++',4,'降','-2.58%'],
        ['C#',5,'升','+2.07%'],
        ['Visual Basic .NET',6,'降','-1.17%'],
        ['JavaScript',7,'降','-0.85%'],
    ];
    new Handsontable(main, {
        data: data,
        colHeaders: ["语言名称", "排名", "升或降", "变化幅度"],
        filters: true,
        contextMenu: true,
        manualRowResize: true,
        manualColumnResize: true,
        colWidths: 170,
        rowHeights: 35,
        licenseKey: 'non-commercial-and-evaluation',
        className: "htCenter htMiddle",
        renderer: function(instance, td, row, col, prop, value, cellProperties) {
            Handsontable.renderers.TextRenderer.apply(this, arguments);
            td.style.fontSize = '15px';
        }
    });
};
