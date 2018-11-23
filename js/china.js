//china.js
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

    echarts.registerMap('china', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"adcode":220000,"name":"吉林省","center":[125.3245,43.886841],"centroid":[126.171246,43.703944],"childrenNum":9,"level":"province","subFeatureIndex":6,"acroutes":[100000],"parent":{"adcode":100000}},"geometry":{"type":"MultiPolygon","coordinates":[[[[125.707523,40.866915],[125.589263,40.931135],[125.674879,40.974516],[125.726617,41.055328],[125.712451,41.095471],[125.791291,41.167577],[125.737088,41.179737],[125.758646,41.232404],[125.646545,41.264344],[125.637306,41.34435],[125.547995,41.401373],[125.534444,41.478073],[125.450061,41.598099],[125.450677,41.674119],[125.325025,41.670097],[125.323793,41.771026],[125.323793,41.771026],[125.319482,41.777273],[125.319482,41.777273],[125.29238,41.83971],[125.29238,41.83971],[125.29238,41.83971],[125.297308,41.861995],[125.297308,41.861995],[125.299156,41.872243],[125.299156,41.872243],[125.291764,41.958618],[125.369989,42.003096],[125.490097,42.136343],[125.353358,42.178923],[125.305931,42.146103],[125.29854,42.290116],[125.175352,42.308261],[125.186439,42.428059],[125.068794,42.499564],[125.097127,42.62252],[125.038613,42.615476],[124.968396,42.72282],[124.996113,42.745234],[124.996113,42.745234],[124.975171,42.802768],[124.897563,42.787841],[124.859375,42.822959],[124.869846,42.988183],[124.840897,43.032372],[124.896331,43.129826],[124.785462,43.117161],[124.686912,43.051176],[124.659195,42.972862],[124.539086,42.867266],[124.514449,42.873406],[124.514449,42.873406],[124.454703,42.823836],[124.435609,42.88086],[124.369087,42.882613],[124.431913,42.930821],[124.422674,42.975927],[124.333363,42.997373],[124.425754,43.076092],[124.284088,43.166058],[124.282856,43.230176],[124.226805,43.241945],[124.226805,43.241945],[124.114704,43.247175],[124.098074,43.29292],[124.032784,43.280724],[123.896046,43.361689],[123.84985,43.415606],[123.87264,43.451234],[123.791952,43.491182],[123.710032,43.417344],[123.703873,43.370824],[123.608402,43.366474],[123.486446,43.445587],[123.419925,43.409955],[123.382968,43.46904],[123.315831,43.49205],[123.304744,43.551055],[123.439019,43.577501],[123.439019,43.577501],[123.5117,43.59267],[123.52525,43.695718],[123.400831,43.979264],[123.332461,44.028326],[123.32815,44.083795],[123.386664,44.161966],[123.323838,44.179991],[123.196955,44.34496],[123.128585,44.366778],[123.125506,44.509466],[123.025108,44.492823],[122.85634,44.398422],[122.76087,44.369772],[122.676486,44.28631],[122.483697,44.237032],[122.319241,44.232745],[122.271198,44.255463],[122.291524,44.310291],[122.28598,44.477883],[122.228082,44.480017],[122.196053,44.559794],[122.13138,44.577697],[122.103046,44.673935],[122.161561,44.728371],[122.114749,44.776386],[122.04946,44.912987],[122.079025,44.914258],[122.074713,45.006553],[122.119677,45.068705],[122.109822,45.142186],[122.143082,45.183108],[122.22993,45.20672],[122.239169,45.276234],[122.147394,45.295598],[122.163408,45.443979],[122.02359,45.490137],[121.966308,45.596157],[122.003264,45.623363],[121.949062,45.711169],[121.867142,45.719942],[121.811091,45.686932],[121.713773,45.701977],[121.644172,45.752516],[121.754425,45.795084],[121.817251,45.875539],[121.809243,45.96087],[121.762432,45.999538],[121.84312,46.02447],[122.040221,45.95879],[122.091344,45.881787],[122.200981,45.85679],[122.258879,45.794666],[122.372828,45.855957],[122.362357,45.917597],[122.446125,45.916764],[122.496016,45.858041],[122.504639,45.787157],[122.555146,45.821359],[122.640761,45.7713],[122.671558,45.700723],[122.741775,45.70532],[122.792283,45.766291],[122.752246,45.834701],[122.828623,45.912185],[122.792898,46.073056],[123.04605,46.10003],[123.112571,46.129894],[123.102716,46.172172],[123.178476,46.247944],[123.248078,46.273178],[123.319527,46.253736],[123.319527,46.253736],[123.373113,46.223112],[123.498765,46.259528],[123.565902,46.22601],[123.610866,46.252909],[123.779633,46.264078],[123.896046,46.303774],[123.982893,46.22601],[123.99398,46.101275],[124.040176,46.019484],[123.970574,45.971267],[123.996444,45.907189],[124.061118,45.886369],[124.064813,45.797586],[124.009379,45.78215],[124.13811,45.68735],[124.129487,45.637589],[124.273001,45.584014],[124.287783,45.539191],[124.354305,45.546734],[124.398652,45.44062],[124.480572,45.456151],[124.544014,45.412066],[124.625318,45.437262],[124.886476,45.442719],[124.923433,45.541286],[124.961005,45.49517],[125.025678,45.493492],[125.06941,45.384757],[125.248649,45.417526],[125.347815,45.395262],[125.398322,45.416686],[125.424807,45.485523],[125.497488,45.469161],[125.628067,45.522006],[125.687813,45.51404],[125.716146,45.421725],[125.697052,45.349447],[125.760494,45.291389],[125.915095,45.196602],[126.166398,45.133323],[126.321615,45.178891],[126.428172,45.2358],[126.567375,45.252651],[126.831613,45.146406],[126.96404,45.132056],[126.968351,45.074621],[127.085995,44.944757],[127.021938,44.899002],[126.984366,44.823936],[127.037336,44.72157],[127.049039,44.567041],[127.094003,44.615189],[127.182082,44.644144],[127.392733,44.632223],[127.557189,44.575566],[127.536247,44.522266],[127.463566,44.484713],[127.50853,44.437312],[127.483892,44.401842],[127.483892,44.401842],[127.623095,44.277743],[127.591066,44.227601],[127.681609,44.167116],[127.724109,44.196723],[127.729036,44.098836],[127.862079,44.063162],[128.059796,44.110007],[128.089977,44.132342],[128.101679,44.290593],[128.049941,44.349239],[128.190375,44.367206],[128.211317,44.431757],[128.373309,44.51416],[128.46262,44.433894],[128.481714,44.375332],[128.450301,44.203157],[128.574721,44.047682],[128.584576,43.990887],[128.644938,43.936193],[128.636315,43.891366],[128.723778,43.894816],[128.760734,43.857724],[128.719467,43.816724],[128.877763,43.540213],[128.949212,43.55409],[129.014501,43.523295],[129.230696,43.59527],[129.211602,43.784336],[129.406855,43.819314],[129.467833,43.874548],[129.742542,43.875841],[129.784426,43.964623],[129.869425,44.005521],[129.869425,44.005521],[129.880512,44.000357],[129.880512,44.000357],[129.98091,44.014128],[130.017251,43.962039],[130.027106,43.851684],[130.079461,43.835285],[130.079461,43.835285],[130.189098,43.940501],[130.260547,43.948256],[130.353554,44.050262],[130.338155,43.949979],[130.338155,43.949979],[130.383119,43.906025],[130.380039,43.783904],[130.423771,43.742853],[130.4133,43.652009],[130.488444,43.655905],[130.823515,43.502901],[130.841378,43.454274],[130.907283,43.434291],[131.026775,43.508542],[131.134565,43.428643],[131.134565,43.428643],[131.294093,43.469909],[131.304564,43.502033],[131.314419,43.392567],[131.275615,43.369084],[131.255289,43.265041],[131.206014,43.23715],[131.218332,43.146853],[131.171521,43.069536],[131.102536,43.021],[131.151195,42.968485],[131.114855,42.915048],[131.034167,42.929069],[131.045869,42.866828],[130.949167,42.876913],[130.890653,42.852793],[130.801957,42.879544],[130.784095,42.842265],[130.666451,42.847968],[130.40714,42.731611],[130.464423,42.688525],[130.586995,42.67621],[130.633806,42.603586],[130.570364,42.557327],[130.558661,42.496035],[130.482285,42.626483],[130.388046,42.603145],[130.242069,42.738643],[130.265474,42.904092],[130.10225,42.922935],[130.144134,42.976365],[129.994461,42.980304],[129.98707,42.977678],[129.939642,43.01225],[129.899606,43.002187],[129.85957,42.966295],[129.858338,42.964544],[129.839244,42.879983],[129.835549,42.866828],[129.821382,42.854109],[129.816454,42.851039],[129.7641,42.716227],[129.764716,42.713149],[129.776418,42.69908],[129.794281,42.684127],[129.741926,42.580681],[129.748701,42.470884],[129.704354,42.427176],[129.612579,42.436892],[129.601492,42.42276],[129.546057,42.361336],[129.452434,42.440866],[129.344029,42.451462],[129.239935,42.36841],[129.231928,42.36001],[129.260261,42.335689],[129.183269,42.262225],[129.215914,42.20818],[129.120443,42.142111],[128.954755,42.083966],[128.930734,42.014211],[128.737945,42.050209],[128.70222,42.020434],[128.60675,42.030212],[128.569177,41.996426],[128.466316,42.020878],[128.090593,42.022656],[128.033926,42.000428],[128.106607,41.950164],[128.112766,41.79378],[128.171897,41.713882],[128.278454,41.658922],[128.317258,41.593177],[128.242114,41.501827],[128.203309,41.411246],[128.113998,41.364561],[127.932296,41.446686],[127.850376,41.422912],[127.636645,41.41349],[127.547334,41.477176],[127.40998,41.463278],[127.294183,41.48659],[127.283096,41.513925],[127.115561,41.540353],[127.179618,41.599888],[127.039184,41.671884],[127.051503,41.744693],[126.943714,41.772365],[126.931395,41.812959],[126.808207,41.748264],[126.798968,41.697354],[126.726903,41.751389],[126.688099,41.674119],[126.608643,41.670543],[126.569838,41.621809],[126.497158,41.406758],[126.539041,41.366806],[126.435564,41.351088],[126.322847,41.231054],[126.293282,41.17073],[126.157775,41.091413],[126.031507,40.927067],[125.959442,40.881845],[125.875059,40.90853],[125.817161,40.866915],[125.785132,40.895867],[125.707523,40.866915]]]],"UTF8Encoding":true}}]})

}));