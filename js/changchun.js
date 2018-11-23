/**
 * Created by sll on 2018/11/23.
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    var changchun = "js/changchun.json";
    // var jiangxi = "/asset/get/s/data-1518338017111-rJK1gtpUM.json";
    // var yingtan = "/asset/get/s/data-1518338860057-By447tpLf.json";
    // var yichun = "/asset/get/s/data-1518338852969-Hy677KTIf.json";
    // var xinyu = "/asset/get/s/data-1518338838010-SyAzQYTIf.json";
    // var shangrao = "/asset/get/s/data-1518338829670-H1UfQYa8G.json";
    // var pingxiang = "/asset/get/s/data-1518338823093-HkyMQtpUf.json";
    // var nanchang = "/asset/get/s/data-1518338805373-S1Temta8G.json";
    // var jiujiang = "/asset/get/s/data-1518338799987-S1deQFTLz.json";
    // var jingdezhen = "/asset/get/s/data-1518338783915-HJOJXtaLf.json";
    // var jian = "/asset/get/s/data-1518338772507-BJnAMKTIz.json";
    // var ganzhou = "/asset/get/s/data-1518338763250-S17RfKpLM.json";
    // var fuzhou = "/asset/get/s/data-1518338684239-S1EFGtp8f.json";

    echarts.extendsMap = function(id, opt){
        // 实例
        var chart = this.init(document.getElementById(id));

        var curGeoJson = {};
        // var cityMap = {
        //     "南昌市": nanchang,
        //     "景德镇市": jingdezhen,
        //     "萍乡市": pingxiang,
        //     "九江市": jiujiang,
        //     "新余市": xinyu,
        //     "鹰潭市": yingtan,
        //     "赣州市": ganzhou,
        //     "吉安市": jian,
        //     "宜春市": yichun,
        //     "抚州市": fuzhou,
        //     "上饶市": shangrao
        // };
        var geoCoordMap = {
            '长春市':[125.35,43.88],
            '榆树市':[126.5396080000,44.8454410000],
            '德惠市':[125.7345110000,44.5271620000,],
            '九台区':[125.8455680000,44.1577920000,],
            '农安县':[125.1914850000,44.4389030000,],
        };
        var levelColorMap = {
            '1': 'rgba(241, 109, 115, .8)',
            '2': 'rgba(255, 235, 59, .7)',
            '3': 'rgba(147, 235, 248, 1)'
        };

        var defaultOpt = {
            mapName: 'wuxi',     // 地图展示
            goDown: false,        // 是否下钻
            bgColor: '#404a59',   // 画布背景色
            activeArea: [],       // 区域高亮,同echarts配置项
            data: [{name: '长春市', value: 51},
                {name: '榆树市', value: 50},
                {name: '德惠市', value: 49},
                {name: '九台区', value: 48},
                {name: '农安县', value: 47},],
            // 下钻回调(点击的地图名、实例对象option、实例对象)
            callback: function(name, option, instance){}
        };
        if(opt) opt = this.util.extend(defaultOpt, opt);

        // 层级索引
        var name = [opt.mapName];
        var idx = 0;
        var pos = {
            leftPlus: 115,
            leftCur: 150,
            left: 198,
            top: 50
        };

        var line = [[0, 0], [8, 11], [0, 22]];
        // style
        var style = {
            font: '18px "Microsoft YaHei", sans-serif',
            textColor: '#eee',
            //左上角的名称下面的下划线的颜色
            lineColor: 'transparent'
        };

        var handleEvents = {
            /**
             * i 实例对象
             * o option
             * n 地图名
             **/
            resetOption: function(i, o, n){
                var breadcrumb = this.createBreadcrumb(n);

                var j = name.indexOf(n);
                var l = o.graphic.length;
                if(j < 0){
                    o.graphic.push(breadcrumb);
                    o.graphic[0].children[0].shape.x2 = 145;
                    o.graphic[0].children[1].shape.x2 = 145;
                    if(o.graphic.length > 2){
                        for(var x = 0; x < opt.data.length; x++){
                            if(n === opt.data[x].name + '市'){
                                o.series[0].data = handleEvents.initSeriesData([opt.data[x]]);
                                break;
                            }else o.series[0].data = [];
                        }
                    };
                    name.push(n);
                    idx++;
                }else{
                    o.graphic.splice(j + 2, l);
                    if(o.graphic.length <= 2){
                        o.graphic[0].children[0].shape.x2 = 60;
                        o.graphic[0].children[1].shape.x2 = 60;
                        o.series[0].data = handleEvents.initSeriesData(opt.data);
                    };
                    name.splice(j + 1, l);
                    idx = j;
                    pos.leftCur -= pos.leftPlus * (l - j - 1);
                };

                o.geo.map = n;
                o.geo.zoom = 0.4;
                i.clear();
                i.setOption(o);
                this.zoomAnimation();
                opt.callback(n, o, i);
            },

            /**
             * name 地图名
             **/
            createBreadcrumb: function(name){
                var cityToPinyin = {
                    // "南昌市": "nanchang",
                    // "景德镇市": "jingdezhen",
                    // "萍乡市": "pingxiang",
                    // "九江市": "jiujiang",
                    // "新余市": "xinyu",
                    // "鹰潭市": "yingtan",
                    // "赣州市": "ganzhou",
                    // "吉安市": "jian",
                    // "宜春市": "yichun",
                    // "抚州市": "fuzhou",
                    // "上饶市": "shangrao"
                };
                var breadcrumb = {
                    type: 'group',
                    id: name,
                    left: pos.leftCur + pos.leftPlus,
                    top: pos.top + 3,
                    children: [{
                        type: 'polyline',
                        left: -90,
                        top: -5,
                        shape: {
                            points: line
                        },
                        style: {
                            stroke: '#fff',
                            key: name,
                            lineWidth: 2,
                        },
                        onclick: function(){
                            var name = this.style.key;
                            handleEvents.resetOption(chart, option, name);
                        }
                    }, {
                        type: 'text',
                        left: -68,
                        top: 'middle',
                        style: {
                            text: name,
                            textAlign: 'center',
                            fill: style.textColor,
                            font: style.font
                        },
                        onclick: function(){
                            var name = this.style.text;
                            handleEvents.resetOption(chart, option, name);
                        }
                    }, {
                        type: 'text',
                        left: -68,
                        top: 10,
                        style: {

                            name: name,
                            text: cityToPinyin[name] ? cityToPinyin[name].toUpperCase() : '',
                            textAlign: 'center',
                            fill: style.textColor,
                            font: '12px "Microsoft YaHei", sans-serif',
                        },
                        onclick: function(){
                            // console.log(this.style);
                            var name = this.style.name;
                            handleEvents.resetOption(chart, option, name);
                        }
                    }]
                }

                pos.leftCur += pos.leftPlus;

                return breadcrumb;
            },

            // 设置effectscatter
            initSeriesData: function(data){
                var temp = [];
                for(var i = 0;i < data.length;i++){
                    var geoCoord = geoCoordMap[data[i].name];
                    if(geoCoord){
                        temp.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value, data[i].level)
                        });
                    }
                };
                return temp;
            },

            zoomAnimation: function(){
                var count = null;
                var zoom = function(per){
                    if(!count) count = per;
                    count = count + per;
                    // console.log(per,count);
                    chart.setOption({
                        geo: {
                            zoom: count
                        }
                    });
                    if(count < 1) window.requestAnimationFrame(function(){
                        zoom(0.2);
                    });
                };
                window.requestAnimationFrame(function(){
                    zoom(0.2);
                });
            }
        };

        var option = {

        tooltip : {
            trigger: 'item',
            formatter: function (obj) {
                var data=obj.data,value = data.value[2],name=data.name
                 ;
                return "<div style='padding:10px;background:#fab9b9';'>" +
                    "<p>"+name + ':  <b style="font-size: 18px;">' + value+'</b></p>' +
                    '</div>';

            }
        },

        backgroundColor: opt.bgColor,
            graphic: [{
                type: 'group',
                left: pos.left,
                top: pos.top - 4,
                children: [{
                    type: 'line',
                    left: 0,
                    top: -20,
                    shape: {
                        x1: 0,
                        y1: 0,
                        x2: 60,
                        y2: 0
                    },
                    style: {
                        stroke: style.lineColor,
                    }
                }, {
                    type: 'line',
                    left: 0,
                    top: 20,
                    shape: {
                        x1: 0,
                        y1: 0,
                        x2: 60,
                        y2: 0
                    },
                    style: {
                        stroke: style.lineColor,
                    }
                }]
            },
                    {
                    type: 'text',
                    left: 0,
                    top: 10,
                    style: {
                        text: '',
                        textAlign: 'center',
                        fill: style.textColor,
                        font: '12px "Microsoft YaHei", sans-serif',
                    },
                    onclick: function(){
                        handleEvents.resetOption(chart, option, '长春');
                    }
                }
                // ]
            // }
            ],
            geo: {
                map: opt.mapName,
                // roam: true,
                zoom: 1,
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        //区域的边框样色
                        borderColor: 'rgba(147, 235, 248, 1)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        // shadowColor: 'rgba(255, 255, 255, 1)',
                        shadowOffsetX: -2,
                        shadowOffsetY: 2,
                        shadowBlur: 10
                    },
                    emphasis: {
                        //区域的背景色
                        areaColor: 'rgba(147, 235, 248, 0.6)',
                        borderWidth: 0
                    }
                },
                regions: opt.activeArea.map(function(item){
                    if(typeof item !== 'string'){
                        return {
                            name: item.name,
                            itemStyle: {
                                normal: {
                                    areaColor: item.areaColor || '#389BB7'
                                }
                            },
                            label: {
                                normal: {
                                    show: item.showLabel,
                                    textStyle: {
                                        color: '#fff'
                                    }
                                }
                            }
                        }
                    }else{
                        return {
                            name: item,
                            itemStyle: {
                                normal: {
                                    borderColor: '#91e6ff',
                                    areaColor: '#389BB7'
                                }
                            }
                        }
                    }
                })
            },
            series: [{
                name:'数据',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: handleEvents.initSeriesData(opt.data),
                symbolSize: function (val) {
                    return val[2]/5;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: function (param) {
                         return param.data.value[2];
                       },
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        //想要展示省/市数据的颜色
                        color: '#ff0',
                        shadowBlur: 4,
                        shadowColor: 'rgba(0,0,0,.3)',
                    }
                },
            }]
        };

        chart.setOption(option);
        // 添加事件
        // chart.on('click', function(params){
        //     var _self = this;
        //     if(opt.goDown && params.name !== name[idx]){
        //         if(cityMap[params.name]){
        //             var url = cityMap[params.name];
        //             $.get(url, function(response){
        //                 // console.log(response);
        //                 curGeoJson = response;
        //                 echarts.registerMap(params.name, response);
        //                 handleEvents.resetOption(_self, option, params.name);
        //             });
        //         }
        //     }
        // });

        // chart.setMap = function(mapName){
        //     var _self = this;
        //     if(mapName.indexOf('市') < 0) mapName = mapName + '市';
        //     var citySource = cityMap[mapName];
        //     if(citySource){
        //         var url = './map/' + citySource + '.json';
        //         $.get(url, function(response){
        //             // console.log(response);
        //             curGeoJson = response;
        //             echarts.registerMap(mapName, response);
        //             handleEvents.resetOption(_self, option, mapName);
        //         });
        //     }
        //     // handleEvents.resetOption(this, option, mapName);
        // };

        return chart;
    };

    $.getJSON(changchun, function(geoJson){
        echarts.registerMap('长春', geoJson);
        var myChart = echarts.extendsMap('map', {
            bgColor: 'transparent', // 画布背景色
            mapName: '长春',    // 地图名
            goDown: true,       // 是否下钻
            // 下钻回调
            callback: function(name, option, instance){
                console.log(name, option, instance);
            },
            // 数据展示
           data : [
                {name: '长春市', value: 51},
                {name: '榆树市', value: 50},
                {name: '德惠市', value: 49},
                {name: '九台区', value: 48},
                {name: '农安县', value: 47},
            ]
        });
    })
}));