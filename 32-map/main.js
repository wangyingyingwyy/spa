$(function() {
    var map = new BMap.Map("main");
    var marker;
    var address = new BMap.Point(114.529963,38.003679);
    map.centerAndZoom(address, 25),
    // 添加控件
    map.addControl(new BMap.MapTypeControl({
        mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
    }));
    // 是否启用滚轮，默认禁用
    map.enableScrollWheelZoom(!0);
    // 创建标注
    marker = new BMap.Marker(address,{
        title: "SPA 富应用开发"
    });
    marker.setAnimation(BMAP_ANIMATION_BOUNCE),
    map.addOverlay(marker);
    // 设置地图类型
    map.setMapType(BMAP_HYBRID_MAP);
    var n = new BMap.InfoWindow('<div style="width: 250px"><p>时间：周二、周四下午<br>地点：505 教室</p><a href="https://github.com/wangyingyingwyy" target="_blank"><img src="http://img0.imgtn.bdimg.com/it/u=1972224372,2850391150&fm=26&gp=0.jpg" alt="王" width="40px" height="40px" style="position: relative; top: -58px; left: 190px"></a></div>',{
        width: 230,
        height: 100,
        title: "<strong>SPA 富应用开发</strong>"
    });
    marker.openInfoWindow(n),
    marker.addEventListener("click", function() {
        map.openInfoWindow(n, address)
    })
});
