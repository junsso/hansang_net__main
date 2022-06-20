var _IMGAMZ = [];
var _JV = "AMZ2009090102"; //script Version
var _UD = 'undefined';
var _UN = 'unknown';

function _IX(s, t) {
    return s.indexOf(t)
}

function _GV(b, a, c, d) {
    var f = b.split(c);
    for (var i = 0; i < f.length; i++) {
        if (_IX(f[i], (a + d)) == 0) return f[i].substring(_IX(f[i], (a + d)) + (a.length + d.length), f[i].length);
    }
    return '';
}

function _XV(b, a, c, d, e) {
    var f = b.split(c);
    var g = '';
    for (var i = 0; i < f.length; i++) {
        if (_IX(f[i], (a + d)) == 0) {
            try {
                eval(e + "=f[i].substring(_IX(f[i],(a+d))+(a.length+d.length),f[i].length);");
            } catch (_e) {};
            continue;
        } else {
            if (g) g += '&';
            g += f[i];
        };
    }
    return g;
};

function _NOB(a) {
    return (a != _UD && a > 0) ? new Object(a) : new Object()
}

function _ILF(a) {
    var b = 0;
    try {
        eval("b = a.length");
    } catch (_e) {
        b = 0;
    };
    return b;
}

function _NIM() {
    return new Image()
}

function _IL(a) {
    return a != _UD ? a.length : 0
}

function _VF(a, b) {
    return a != _UD && (typeof a == b) ? 1 : 0
}

function _LST(a, b) {
    if (_IX(a, b)) a = a.substring(0, _IL(a));
    return a
}

function _CST(a, b) {
    if (_IX(a, b) > 0) {
        a = a.substring(_IX(a, b) + _IL(b), _IL(a));
    } else {
        a = '';
    };
    return a
}

function _UL(a) {
    a = _LST(a, '#');
    a = _CST(a, '://');
    if (a.length > 512) {
        a = a.substring(0, 511);
    };
    return a
}

function _AA(a) {
    return new Array(a ? a : 0)
}
_DC = document.cookie;

function _AGC(nm) {
    var cn = nm + "=";
    var nl = cn.length;
    var cl = _DC.length;
    var i = 0;
    while (i < cl) {
        var j = i + nl;
        if (_DC.substring(i, j) == cn) {
            var val = _DC.indexOf(";", j);
            if (val == -1) val = _DC.length;
            return unescape(_DC.substring(j, val));
        };
        i = _DC.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return '';
}

function _ASC(nm, val, exp) {
    var expd = new Date();
    if (exp) {
        expd.setTime(expd.getTime() + (exp * 1000));
        document.cookie = nm + "=" + escape(val) + "; expires=" + expd.toGMTString() + "; path=";
    } else {
        document.cookie = nm + "=" + escape(val);
    };
}

function SetUID() {
    var newid = '';
    var d = new Date();
    var t = Math.floor(d.getTime() / 1000);
    newid = 'UID-' + t.toString(16).toUpperCase();
    for (var i = 0; i < 16; i++) {
        var n = Math.floor(Math.random() * 16).toString(16).toUpperCase();
        newid += n;
    }
    return newid;
}
var _FCV = _AGC("ACEFCID");
if (!_FCV) {
    _FCV = SetUID();
    _ASC("ACEFCID", _FCV, 86400 * 30 * 12);
    _FCV = _AGC("ACEFCID");
}

var _AIO = _NIM();
var _AIU = _NIM();
var _AIUT = _NIM(); // total.Korean.net total
var _AIW = _NIM();
var _AIX = _NIM();
var _AIB = _NIM();
var __hdki_xit = _NIM();
var EL_GCD = '2'; // gcode
var _GCDT = ''; // total gcode 

var _GCODELIST = {
    // 2.korean.net
    'korean.net': '2',
    'www.korean.net': '2',
    'sso.korean.net:10443': '2',
    'ssl.korean.net': '2',
    'eng.korean.net': '2',
    'jpn.korean.net': '2',
    'chn.korean.net': '2',
    'spn.korean.net': '2',
    'rus.korean.net': '2',
    'webmail.korean.net': '2',
    'ermsweb.korean.net': '2',
    'festival.korean.net': '2',
    'hanin.korean.net': '2',
    'mail.okf.or.kr': '2',
    'onevent.korean.net': '2',
    'sns.korean.net': '2',
    // 3.homepy.koean.net
    'homepy.korean.net': '3',
    'bjkrst.com': '3',
    'capetownkorea.com': '3',
    'cbugy.com': '3',
    'cwomen.net': '3',
    'jungyang.org': '3',
    'kgkorean.co.kr': '3',
    'kicab.org': '3',
    'koreans.cz': '3',
    'koreansic.com': '3',
    'koreansic.net': '3',
    'koreansic.org': '3',
    'kscchina.net': '3',
    'chchkorean.org': '3',
    'chiangmaihanin.com': '3',
    'daegunschool.com': '3',
    'finnkorean.com': '3',
    'gkwea.kr': '3',
    'glasgowkorean.org.uk': '3',
    'hokkaidokorea.org': '3',
    'jed-hanuri.co.kr': '3',
    'kaprussia.com': '3',
    'kascny.org': '3',
    'khabarovskhanin.com': '3',
    'korea.com.ph': '3',
    'koreanfr.org': '3',
    'koreansingapore.org': '3',
    'mongolhanin.or.kr': '3',
    'moskos.org': '3',
    'mykorean.org': '3',
    'naksmac.org': '3',
    'nzkorea.org': '3',
    'nzsok.co.nz': '3',
    'saipankorean.org': '3',
    'swisskorea.com': '3',
    'thaikorean.kr': '3',
    'uaekorean.com': '3',
    'ukrkorea.org': '3',
    'vietnamkorean.com': '3',
    'www.bjkrst.com': '3',
    'www.capetownkorea.com': '3',
    'www.cbugy.com': '3',
    'www.cwomen.net': '3',
    'www.jungyang.org': '3',
    'www.kgkorean.co.kr': '3',
    'www.kicab.org': '3',
    'www.koreans.cz': '3',
    'www.koreansic.com': '3',
    'www.koreansic.net': '3',
    'www.koreansic.org': '3',
    'www.kscchina.net': '3',
    'www.chchkorean.org': '3',
    'www.chiangmaihanin.com': '3',
    'www.daegunschool.com': '3',
    'www.finnkorean.com': '3',
    'www.gkwea.kr': '3',
    'www.glasgowkorean.org.uk': '3',
    'www.hokkaidokorea.org': '3',
    'www.jed-hanuri.co.kr': '3',
    'www.kaprussia.com': '3',
    'www.kascny.org': '3',
    'www.khabarovskhanin.com': '3',
    'www.korea.com.ph': '3',
    'www.koreanfr.org': '3',
    'www.koreansingapore.org': '3',
    'www.mongolhanin.or.kr': '3',
    'www.moskos.org': '3',
    'www.mykorean.org': '3',
    'www.naksmac.org': '3',
    'www.nzkorea.org': '3',
    'www.nzsok.co.nz': '3',
    'www.saipankorean.org': '3',
    'www.swisskorea.com': '3',
    'www.thaikorean.kr': '3',
    'www.uaekorean.com': '3',
    'www.ukrkorea.org': '3',
    'www.vietnamkorean.com': '3',
    'naksmac.korean.net': '3',
    'saipan.korean.net': '3',
    'ysks.korean.net': '3',
    'nzsok.korean.net': '3',
    'nz.korean.net': '3',
    'chch.korean.net': '3',
    'mongolhanin.korean.net': '3',
    'hanoi.korean.net': '3',
    'hochimin.korean.net': '3',
    'singapore.korean.net': '3',
    'chiangmaihanin.korean.net': '3',
    'thai.korean.net': '3',
    'philippines.korean.net': '3',
    'saka.korean.net': '3',
    'jeddah.korean.net': '3',
    'uae.korean.net': '3',
    'swiss.korean.net': '3',
    'glasgow.korean.net': '3',
    'france.korean.net': '3',
    'finland.korean.net': '3',
    'moskos.korean.net': '3',
    'kaprussia.korean.net': '3',
    'khabarovskhanin.korean.net': '3',
    'ukraine.korean.net': '3',
    'kyrgyzstan.korean.net': '3',
    'phila.korean.net': '3',
    'gkwea.korean.net': '3',
    'hokkaidokorea.korean.net': '3',
    'malaysia.korean.net': '3',
    'kascny.korean.net': '3',
    'cwomen.korean.net': '3',
    'jungyang.korean.net': '3',
    'cbugy.korean.net': '3',
    'kicab.korean.net': '3',
    'kscchina.korean.net': '3',
    'koreansic.korean.net': '3',
    'koreansicnet.korean.net': '3',
    'koreansiccom.korean.net': '3',
    'bjkrst.korean.net': '3',
    'capetown.korean.net': '3',
    'czech.korean.net': '3',
    'daegun.korean.net': '3',
    'alaska.korean.net': '3',
    'bj.korean.net': '3',
    'eg.korean.net': '3',
    'iminmunhak.korean.net': '3',
    'morocco.korean.net': '3',
    'zhuhai.korean.net': '3',
    'thaikrschool.korean.net': '3',
    'winsor.korean.net': '3',
    'geneva.korean.net': '3',
    'china.korean.net': '3',
    'culumbiakor.korean.net': '3',
    'egyptstudents.korean.net': '3',
    'goal.korean.net': '3',
    'houstontx.korean.net': '3',
    'md.korean.net': '3',
    'indonesiakorean.korean.net': '3',
    'israel.korean.net': '3',
    'kagro.korean.net': '3',
    'kagropa.korean.net': '3',
    'khks.korean.net': '3',
    'km.korean.net': '3',
    'mdusa.korean.net': '3',
    'world.korean.net': '3',
    'montpellier.korean.net': '3',
    'ny.korean.net': '3',
    'qld.korean.net': '3',
    'nashville.korean.net': '3',
    'usa.korean.net': '3',
    'annarbor.korean.net': '3',
    'atlanta.korean.net': '3',
    'victoria.korean.net': '3',
    'boston.korean.net': '3',
    'chattanooga.korean.net': '3',
    'stlouis.korean.net': '3',
    'costarica.korean.net': '3',
    'dgschool.korean.net': '3',
    'dkdi.korean.net': '3',
    'detroit.korean.net': '3',
    'russia.korean.net': '3',
    'dg.korean.net': '3',
    'dl.korean.net': '3',
    'gdclkorean.korean.net': '3',
    'hamburg.korean.net': '3',
    'catalunya.korean.net': '3',
    'japanhaninhe.korean.net': '3',
    'spain.korean.net': '3',
    'hb.korean.net': '3',
    'idaho.korean.net': '3',
    'jindalai.korean.net': '3',
    'johor.korean.net': '3',
    'kaanm.korean.net': '3',
    'kaata.korean.net': '3',
    'kansascity.korean.net': '3',
    'columbus.korean.net': '3',
    'connecticut.korean.net': '3',
    'kaz.korean.net': '3',
    'edmonton.korean.net': '3',
    'kmca.korean.net': '3',
    'kochamsh.korean.net': '3',
    'bangladesh.korean.net': '3',
    'aucklandschool.korean.net': '3',
    'chicago.korean.net': '3',
    'argentina.korean.net': '3',
    'azerbaijan.korean.net': '3',
    'canada.korean.net': '3',
    'toronto.korean.net': '3',
    'berlin.korean.net': '3',
    'losangeles.korean.net': '3',
    'swedenschool.korean.net': '3',
    'koreanschools.korean.net': '3',
    'netherlands.korean.net': '3',
    'england.korean.net': '3',
    'queensland.korean.net': '3',
    'kuwait.korean.net': '3',
    'nzkorea.korean.net': '3',
    'bizparaguay.korean.net': '3',
    'ottawa.korean.net': '3',
    'phuket.korean.net': '3',
    'qingdao.korean.net': '3',
    'raleigh.korean.net': '3',
    'sbschurch.korean.net': '3',
    'sandiego.korean.net': '3',
    'sf.korean.net': '3',
    'sanfrancisco.korean.net': '3',
    'tucson.korean.net': '3',
    'sy.korean.net': '3',
    'hawaii.korean.net': '3',
    'turkey.korean.net': '3',
    'vancouver.korean.net': '3',
    'yb.korean.net': '3',
    'www.okmedia.org': '3',
    'okmedia.org': '3',
    'okmedia3.korean.net': '3',
    'khabarovsk.korean.net': '3',
    'myanmarhanin.com': '3',
    'www.myanmarhanin.com': '3',
    'koreanschool.de': '3',
    'www.koreanschool.de': '3',
    'frankfurtschool.korean.net': '3',
    'koreanschoolaa.org': '3',
    'www.koreanschoolaa.org': '3',
    'ecolecoree.korean.net': '3',
    'ecolecoree.fr': '3',
    'www.ecolecoree.fr': '3',
    'koreanschoolny.korean.net': '3',
    'koreanschoolny.com': '3',
    'www.koreanschoolny.com': '3',
    'maryland.korean.net': '3',
    'brasil.korean.net': '3',
    'houston.korean.net': '3',
    'nakahsv.korean.net': '3',
    'escueladecoreano.korean.net': '3',
    'ccgkoreanschool.korean.net': '3',
    'chengduks.korean.net': '3',
    'kosaa.korean.net': '3',
    'koreanschoolnj.korean.net': '3',
    'naksnw.korean.net': '3',
    'evergreenks.korean.net': '3',
    'ecolecoreenne67.korean.net': '3',
    'norgekorskole.korean.net': '3',
    'youngnakschool.korean.net': '3',
    'vkls.korean.net': '3',
    'privateschoollink.korean.net': '3',
    'koreanhcm.korean.net': '3',
    'koreanhcm.org': '3',
    'www.koreanhcm.org': '3',
    'uz.korean.net': '3',
    'londonkorean.ca': '3',
    'www.londonkorean.ca': '3',
    'hochiminh.korean.net': '3',
    'kss.org.au': '3',
    'kssac.org': '3',
    'kaaca.org': '3',
    'msnaks.org': '3',
    'kasco.org': '3',
    'kckoreanschool.org': '3',
    'koreaday.org': '3',
    'okja.or.kr': '3',
    'okmedia.or.kr': '3',
    'romahaninchurch.org': '3',
    'koreanet.org.au': '3',
    'finnkorea.com': '3',
    'gkwea.or.kr': '3',
    'woholer.org.au': '3',
    'gkwea.org': '3',
    'www.kss.org.au': '3',
    'www.kssac.org': '3',
    'www.kaaca.org': '3',
    'www.msnaks.org': '3',
    'www.kasco.org': '3',
    'www.kckoreanschool.org': '3',
    'www.koreaday.org': '3',
    'www.okja.or.kr': '3',
    'www.okmedia.or.kr': '3',
    'www.romahaninchurch.org': '3',
    'www.koreanet.org.au': '3',
    'www.finnkorea.com': '3',
    'www.gkwea.or.kr': '3',
    'www.woholer.org.au': '3',
    'www.gkwea.org': '3',
    'dalian.korean.net': '3',
    'haninspain.korean.net': '3',
    'ksc.korean.net': '3',
    'adcargentina.korean.net': '3',
    'atlantaka.korean.net': '3',
    'mongolia.korean.net': '3',
    'sydneym.korean.net': '3',
    'duisburg.korean.net': '3',
    'rizhao.korean.net': '3',
    'uaekorean.korean.net': '3',
    'ctlvn.korean.net': '3',
    'philkor.korean.net': '3',
    'osjeung.korean.net': '3',
    'ckoreanschools.korean.net': '3',
    'isionschool.korean.net': '3',
    'kasco.korean.net': '3',
    'awtonkoreanschool.korean.net': '3',
    'jungfer.korean.net': '3',
    'simon.korean.net': '3',
    'myanmarhanin.korean.net': '3',
    'koreanschool2.korean.net': '3',
    'wellbeing.korean.net': '3',
    'woholer.korean.net': '3',
    'sydneyhanin.korean.net': '3',
    'rubicon1.korean.net': '3',
    'okmedia.korean.net': '3',
    'kigkc.org': '3',
    'www.kigkc.org': '3',
    'lovekenya.korean.net': '3',
    'deutschland.korean.net': '3',
    'germany.korean.net': '3',
    'duisburggermany.korean.net': '3',
    'germany.korean.net': '3',
    'jeddahkoreaschool.korean.net': '3',
    'nctriangleschool.korean.net': '3',
    'lkeosung.korean.net': '3',
    'kss.korean.net': '3',
    'ktksabah.korean.net': '3',
    'koreanhelpline.korean.net': '3',
    'sykorean.korean.net': '3',
    'ikaa.korean.net': '3',
    'nashvilleschool.korean.net': '3',
    'heritage.korean.net': '3',
    'midri.korean.net': '3',
    'midri.kr': '3',
    'www.midri.kr': '3',
    'hk.korean.net': '3',
    'kocham.hk': '3',
    'www.kocham.hk': '3',
    'kochamhk.org': '3',
    'www.kochamhk.org': '3',
    'wakorean.org.au': '3',
    'www.wakorean.org.au': '3',
    'kagrocpa.com': '3',
    'www.kagrocpa.com': '3',
    'kagrodc.com': '3',
    'www.kagrodc.com': '3',
    'lokea.ca': '3',
    'www.lokea.ca': '3',
    'fvkorean.korean.net': '3',
    'sejongschool.korean.net': '3',
    'chinayantai.korean.net': '3',
    'phcentral.korean.net': '3',
    'ytkorean.net': '3',
    'www.ytkorean.net': '3',
    'ytkorean.com': '3',
    'www.ytkorean.com': '3',
    'kssnj.korean.net': '3',
    'cbks.korean.net': '3',
    'helpline.korean.net': '3',
    'skpc.us': '3',
    'www.skpc.us': '3',
    'skpc.korean.net': '3',
    'mongolkorea.korean.net': '3',
    'mongolkorea.com': '3',
    'www.mongolkorea.com': '3',
    'italia.korean.net': '3',
    'lebanon.korean.net': '3',
    'lebanonhanin.org': '3',
    'www.lebanonhanin.org': '3',
    'cntournews.korean.net': '3',
    'cntournews.tv': '3',
    'www.cntournews.tv': '3',
    'kcntvnews.korean.net': '3',
    'kcntvnews.com': '3',
    'www.kcntvnews.com': '3',
    'midwestusa.korean.net': '3',
    'koreamidwest.org': '3',
    'www.koreamidwest.org': '3',
    'thomepy.korean.net': '3',
    'italy.korean.net': '3',
    'italynew.korean.net': '3',
    'italia.co.kr': '3',
    'www.italia.co.kr': '3',
    'koreanfedus.org': '3',
    'www.koreanfedus.org': '3',
    'kansai.korean.net': '3',
    'kansaikorean.org': '3',
    'www.kansaikorean.org': '3',
    'qdis.korean.net': '3',
    'qdis.org': '3',
    'www.qdis.org': '3',
    'qdkorea.korean.net': '3',
    'qdkorea.or.kr': '3',
    'www.qdkorea.or.kr': '3',
    'ntkna.korean.net': '3',
    'ntkna.org': '3',
    'www.ntkna.org': '3',
    'watk.korean.net': '3',
    'watk.net': '3',
    'www.watk.net': '3',
    'tkd.korean.net': '3',
    'watk1.korean.net': '3',
    'subickc.korean.net': '3',
    'subickc.net': '3',
    'www.subickc.net': '3',
    'qdredcross.korean.net': '3',
    'qdrc.kr': '3',
    'www.qdrc.kr': '3',
    'wwkorean.korean.net': '3',
    'wwkorean.ca': '3',
    'www.wwkorean.ca': '3',
    'poland.korean.net': '3',
    'koreanpl.org': '3',
    'www.koreanpl.org': '3',
    'koreanschoolaa.korean.net': '3',
    'koreadp.net': '3',
    'www.koreadp.net': '3',
    'koreadp.korean.net': '3',
    'koreanschool.org.au': '3',
    'www.koreanschool.org.au': '3',
    'klsm.korean.net': '3',
    'klsm2.korean.net': '3',
    'romaniakoreanschool.korean.net': '3',
    'romaniaks.korean.net': '3',
    'waterloo.korean.net': '3',
    'sydneyhaninv2.korean.net': '3',
    'aucklandschoolv1.korean.net': '3',
    'aucklandschoolv2.korean.net': '3',
    'ccil.korean.net': '3',
    'korea.school.nz': '3',
    'jeddahv2.korean.net': '3',
    'indonesia.korean.net': '3',
    'kaaofstlouis.com': '3',
    'www.kaaofstlouis.com': '3',
    'kowai.korean.net': '3',
    'weihai.korean.net': '3',
    'kowai.co.nz': '3',
    'www.kowai.co.nz': '3',
    'pune.korean.net': '3',
    'punekorean.net': '3',
    'www.punekorean.net': '3',
    'siemreap.korean.net': '3',
    'siemreap.co.kr': '3',
    'www.siemreap.co.kr': '3',
    'indo.korean.net': '3',
    'koreanindo.org': '3',
    'www.koreanindo.org': '3',
    'koreanerberlin.com': '3',
    'berlin.korean.net': '3',
    'www.koreanerberlin.com': '3',
    'koreanerberlin.de': '3',
    'www.koreanerberlin.de': '3',
    'koreaneraugsburg.korean.net': '3',
    'oktavan.korean.net': '3',
    'oktavan.net': '3',
    'www.oktavan.net': '3',
    'kosaa.korean.net': '3',
    'kosaa.org': '3',
    'www.kosaa.org': '3',
    // 4.m.korean.net
    'm.korean.net': '4',
    // 5.okf.or.kr
    'okf.or.kr': '5',
    'eng.okf.or.kr': '5',
    'www.okf.or.kr': '5',
    // 6.study.korean.net
    'study.korean.net': '6',
    // 7.hansang.net
    'hansang.net': '7',
    'www.hansang.net': '7',
    'm.hansang.net': '7',
    'ssl.hansang.net': '7',
    // 8.hansnag.korean.net
    'hansang.korean.net': '8',
    // 9.research.korean.net
    'research.korean.net': '9',
    // 10.webzine.korean.net
    'webzine.korean.net': '10',
    // 11.home.korean.net
    'home.korean.net': '11',
    // 12. ETC
    'hanminjok.net': '12',
    'kscp.ph': '12',
    'kbap.ph': '12',
    'kccp.ph': '12',
    'ktap.ph': '12',
    'named.ca': '12',
    'okta.ph': '12',
    'philakorean.org': '12',
    'koreanday.go.kr': '12',
    'koreanday.org': '12',
    'teenkorean.co.kr': '12',
    'teenkorean.com': '12',
    'fwkorean.com': '12',
    'virtualkorea.net': '12',
    'ksberlin.com': '12',
    'studykorean.co.kr': '12',
    'teenkorean.net': '12',
    'teenkorean.or.kr': '12',
    'www.hanminjok.net': '12',
    'www.kscp.ph': '12',
    'www.kbap.ph': '12',
    'www.kccp.ph': '12',
    'www.ktap.ph': '12',
    'power0k.korean.net': '12',
    'www.okta.ph': '12',
    'www.philakorean.org': '12',
    'www.koreanday.go.kr': '12',
    'www.koreanday.org': '12',
    'www.teenkorean.co.kr': '12',
    'www.teenkorean.com': '12',
    'www.fwkorean.com': '12',
    'www.virtualkorea.net': '12',
    'www.ksberlin.com': '12',
    'www.studykorean.co.kr': '12',
    'www.teenkorean.net': '12',
    'www.teenkorean.or.kr': '12',
    'conf.korean.net': '12',
    'hostman.korean.net': '12',
    'host.korean.net': '12',
    'new.korean.net': '12',
    'webhosting.korean.net': '12',
    'localhost:8088': '12',
    'localhost:8091': '12',
    'localhost:8080': '12',
    'localhost:8081': '12',
    'tkorean.net': '12',
    'twww.korean.net': '12',
    'tssl.korean.net': '12',
    'teng.korean.net': '12',
    'tjpn.korean.net': '12',
    'tchn.korean.net': '12',
    'tspn.korean.net': '12',
    'trus.korean.net': '12',
    'tokf.or.kr': '12',
    'teng.okf.or.kr': '12',
    'tstudy.korean.net': '12',
    'twww.hansang.net': '12',
    'thansang.net': '12',
    'thansang.korean.net': '12',
    'twww.okf.or.kr': '12',
    'thomepy.koean.net': '12',
    'thome.korean.net': '12',
    'tm.korean.net': '12',
    'tm.hansang.net': '12',
    'tfestival.korean.net': '12',
    'rkorean.net': '12',
    'rwww.korean.net': '12',
    'rssl.korean.net': '12',
    'reng.korean.net': '12',
    'rjpn.korean.net': '12',
    'rchn.korean.net': '12',
    'rrus.korean.net': '12',
    'rokf.or.kr': '12',
    'reng.okf.or.kr': '12',
    'rstudy.korean.net': '12',
    'rwww.hansang.net': '12',
    'rhansang.net': '12',
    'rhansang.korean.net': '12',
    'rwww.okf.or.kr': '12',
    'rhomepy.koean.net': '12',
    'rhome.korean.net': '12',
    'rm.korean.net': '12',
    'rm.hansang.net': '12',
    'thanin.korean.net': '12',
    'nkorean.net': '12',
    'nwww.korean.net': '12',
    'nssl.korean.net': '12',
    'neng.korean.net': '12',
    'njpn.korean.net': '12',
    'nchn.korean.net': '12',
    'nspn.korean.net': '12',
    'nrus.korean.net': '12',
    'nokf.or.kr': '12',
    'neng.okf.or.kr': '12',
    'nstudy.korean.net': '12',
    'nwww.hansang.net': '12',
    'nhansang.net': '12',
    'nhansang.korean.net': '12',
    'nwww.okf.or.kr': '12',
    'nhomepy.koean.net': '12',
    'nhome.korean.net': '12',
    'nm.korean.net': '12',
    'nm.hansang.net': '12',
    'nfestival.korean.net': '12',
    'lkorean.net': '12',
    'lwww.korean.net': '12',
    'lssl.korean.net': '12',
    'leng.korean.net': '12',
    'ljpn.korean.net': '12',
    'lchn.korean.net': '12',
    'lspn.korean.net': '12',
    'lrus.korean.net': '12',
    'lokf.or.kr': '12',
    'leng.okf.or.kr': '12',
    'lstudy.korean.net': '12',
    'lwww.hansang.net': '12',
    'lhansang.net': '12',
    'lhansang.korean.net': '12',
    'lwww.okf.or.kr': '12',
    'lhomepy.koean.net': '12',
    'lhome.korean.net': '12',
    'lm.korean.net': '12',
    'lm.hansang.net': '12',
    'nhanin.korean.net': '12',
    'nocdn.korean.net': '12',
    'odbs.korean.net': '12',
    'neti.korean.net': '12',
    'afs.korean.net': '12',
    'lms.korean.net': '12',
    'wlog.korean.net:8001': '12',
    'cms.korean.net:9900': '12',
    'localhost': '12',
    'nmis.okf.or.kr:8080': '12',
	'frame1.korean.net' : '13',
    'frame1.korean.net:8088' : '13'
}

for (var _GU in _GCODELIST) {
    if (_GU == location.host) {
        EL_GCD = _GCODELIST[_GU];
        _GCDT = '1'
    }
}
var _gX = '/?xuid=' + EL_GCD + '&sv=' + _JV,
    _gF = '/?fuid=' + EL_GCD + '&sv=' + _JV,
    _gU = '/?uid=' + EL_GCD + '&sv=' + _JV + "&FCV=" + _FCV,
    _gE = '/?euid=' + EL_GCD + '&sv=' + _JV,
    _gW = '/?wuid=' + EL_GCD + '&sv=' + _JV,
    _gO = '/?ouid=' + EL_GCD + '&sv=' + _JV,
    _gB = '/?buid=' + EL_GCD + '&sv=' + _JV;

function _IDV(a) {
    return (typeof a != _UD) ? 1 : 0
}
if (!_IDV(ELEL_GUL)) var ELEL_GUL = 'wlog.korean.net';
if (!_IDV(EL_GPT)) var EL_GPT = '10070';
var _d = _rf = _end = _fwd = _arg = _xrg = _av = _bv = _rl = _ak = _xrl = _cd = _cu = _bz = '',
    _sv = 11,
    _tz = 20,
    _ja = _sc = _ul = _ua = _UA = _os = _vs = _UN,
    _je = 'n',
    _bR = 'blockedReferrer';
_tz = Math.floor((new Date()).getTimezoneOffset() / 60) + 29;
if (_tz > 24) _tz = _tz - 24;
// Javascript Variables
if (!_IDV(_amt)) var _amt = 0;
if (!_IDV(_pk)) var _pk = '';
if (!_IDV(_pd)) var _pd = '';
if (!_IDV(_ct)) var _ct = '';
if (!_IDV(_ll)) var _ll = '';
if (!_IDV(_ag)) var _ag = 0;
if (!_IDV(_id)) var _id = '';
if (!_IDV(_mr)) var _mr = _UN;
if (!_IDV(_gd)) var _gd = _UN;
if (!_IDV(_jn)) var _jn = '';
if (!_IDV(_jid)) var _jid = '';
if (!_IDV(_skey)) var _skey = '';
if (!_IDV(_ud1)) var _ud1 = '';
if (!_IDV(_ud2)) var _ud2 = '';
if (!_IDV(_ud3)) var _ud3 = '';
if (!_ag) {
    _ag = 0;
} else {
    _ag = parseInt(_ag);
}
if (_ag < 0 || _ag > 150) {
    _ag = 0;
}
if (_gd != 'man' && _gd != 'woman') {
    _gd = _UN;
};
if (_mr != 'married' && _mr != 'single') {
    _mr = _UN;
};
if (_jn != 'join' && _jn != 'withdraw') {
    _jn = '';
};
_je = (navigator.javaEnabled() == true) ? '1' : '0';
_bn = navigator.appName;
if (_bn.substring(0, 9) == "Microsoft") _bn = "MSIE";
_bN = (_bn == "Netscape"), _bI = (_bn == "MSIE"), _bO = (_IX(navigator.userAgent, "Opera") > -1);
if (_bO) _bI = '';
_bz = navigator.appName;
_pf = navigator.platform;
_av = navigator.appVersion;
_bv = parseFloat(_av);
if (_bI) {
    _cu = navigator.cpuClass;
} else {
    _cu = navigator.oscpu;
};
if ((_bn == "MSIE") && (parseInt(_bv) == 2)) _bv = 3.01;
_rf = document.referrer;
var _prl = '';
var _frm = false;

function _WO(a, b, c) {
    window.open(a, b, c)
}

function ACEF_Tracking(a, b, c, d, e, f) {
    if (!_IDV(b)) {
        var b = 'FLASH';
    };
    if (!_IDV(e)) {
        var e = '0';
    };
    if (!_IDV(c)) {
        var c = '';
    };
    if (!_IDV(d)) {
        var d = '';
    };
    var a_org = a;
    b = b.toUpperCase();
    var b_org = b;
    if (b_org == 'FLASH_S') {
        b = 'FLASH';
    };
    if (typeof CU_rl == 'undefined') var CU_rl = _PT();
    if (_IDV(EL_GCD)) {
        var _AF_rl = document.URL;
        if (a.indexOf('://') < 0 && b_org != 'FLASH_S') {
            var _AT_rl = '';
            if (_AF_rl.indexOf('?') > 0) {
                _AF_rl = _AF_rl.substring(0, _AF_rl.indexOf('?'));
            };
            var spurl = _AF_rl.split('/');
            for (var ti = 0; ti < spurl.length; ti++) {
                if (ti == spurl.length - 1) {
                    break;
                };
                if (_AT_rl == '') {
                    _AT_rl = spurl[ti];
                } else {
                    _AT_rl += '/' + spurl[ti];
                };
            };
            var _AU_arg = '';
            if (a.indexOf('?') > 0) {
                _AU_arg = a.substring(a.indexOf('?'), a.length);
                a = a.substring(0, a.indexOf('?'));
            };
            var spurlt = a.split('/');
            if (spurlt.length > 0) {
                a = spurlt[spurlt.length - 1];
            };
            a = _AT_rl + '/' + a + _AU_arg;
            _AF_rl = document.URL;
        };
        _AF_rl = _AF_rl.substring(_AF_rl.indexOf('//') + 2, _AF_rl.length);
        if (typeof f == 'undefined') {
            var f = a
        } else {
            f = 'http://' + _AF_rl.substring(0, _AF_rl.indexOf('/') + 1) + f
        };
        var _AS_rl = CU_rl + '/?xuid=' + EL_GCD + '&url=' + escape(_AF_rl) + '&xlnk=' + escape(f) + '&fdv=' + b + '&xidx=' + e + '&';
        var _AF_img = new Image();
        _AF_img.src = _AS_rl;
        if (b_org == 'FLASH' && a_org != '') {
            if (c == '') {
                window.location.href = a_org;
            } else {
                if (d == '') {
                    window.open(a_org, c);
                } else {
                    window.open(a_org, c, d);
                };
            };
        };
    };
}

function _RPS(a, b, c) {
    var d = a.indexOf(b),
        e = b.length > 0 ? c.length : 1;
    while (a && d >= 0) {
        a = a.substring(0, d) + c + a.substring(d + b.length);
        d = a.indexOf(b, d + e);
    }
    return a
}

function _PT() {
    return location.protocol == "https:" ? "https://" + EL_GUL : "http://" + EL_GUL + ":" + EL_GPT
}

function _EL(a, b, c) {
    if (a.addEventListener) {
        a.addEventListener(b, c, false)
    } else if (a.attachEvent) {
        a.attachEvent("on" + b, c)
    }
}

function _NA(a) {
    return new Array(a ? a : 0)
}

function _ER(a, b, c, d) {
    _xrg = _PT() + _gW + "&url=" + escape(_UL(document.URL)) + "&err=" + ((typeof a == "string") ? a : "Unknown") + "&ern=" + c + "&bz=" + _bz + "&bv=" + _vs + "&RID=" + Math.random() + "&";
    if (_IX(_bn, "Netscape") > -1 || _bn == "Mozilla") {
        setTimeout("_AIW.src=_xrg;", 1);
    } else {
        _AIW.src = _xrg;
    }
}

function _BO(a, b, c) {
    _xrg = _PT() + _gB + "&url=" + escape(_UL(document.URL)) + "&ref=" + escape(_UL(document.referrer)) + "&RID=" + Math.random() + "&";
    _AIB.src = _xrg;
}

function _OL(a, b, c) {
    _xrg = _PT() + _gO + "&url=" + escape(_UL(document.URL)) + "&ref=" + escape(_UL(document.referrer)) + "&RID=" + Math.random() + "&";
    _AIO.src = _xrg;
}

function _PL(a) {
    //20110613 KW
    if (EL_GCD == 3) {
        var _UHOST = location.host;
        var _ULS = a.split('.'); //site
        var _ULD = a.split('/'); //directory
        var _UDD = a.replace(_ULD[0], '');
        if (_ULD[1] == undefined) {
            if (_ULS[0] == 'www') {
                var _ULT = _UHOST + '/' + _ULS[1] + '/'; // add '/'
            } else {
                var _ULT = _UHOST + '/' + _ULS[0] + '/'; // add '/'
            }
        } else {
            if (_ULS[0] == 'www') {
                var _ULT = _UHOST + '/' + _ULS[1] + _UDD; //input directory
            } else {
                var _ULT = _UHOST + '/' + _ULS[0] + _UDD;
            }
        }
        a = _ULT;
    }
    if (!_IL(a)) a = _UL(document.URL);
    _arg = _PT() + _gU;
    if (typeof _ERR != _UD && _ERR == 'err') {
        _arg = _PT() + _gE;
    };
    if (_ll.length > 0) _arg += "&md=b";
    _AIU.src = _arg + "&url=" + escape(a) + "&ref=" + escape(_rf) + "&cpu=" + _cu + "&bz=" + _bz + "&bv=" + _vs + "&os=" + _os + "&dim=" + _d + "&cd=" + _cd + "&je=" + _je + "&jv=" + _sv + "&tz=" + _tz + "&ul=" + _ul + "&ad_key=" + escape(_ak) + "&skey=" + _RPS(escape(_skey), "+", "%2B") + "&age=" + _ag + "&gender=" + _gd + "&marry=" + _mr + "&join=" + _jn + "&member_key=" + _id + "&jid=" + _jid + "&udf1=" + _ud1 + "&udf2=" + _ud2 + "&udf3=" + _ud3 + "&amt=" + _amt + "&frwd=" + _fwd + "&pd=" + _RPS(escape(_pd), "+", "%2B") + "&ct=" + _RPS(escape(_ct), "+", "%2B") + "&ll=" + _RPS(escape(_ll), "+", "%2B") + "&RID=" + Math.random() + "&";
    _IMGAMZ.push(_AIU);
}
//20110201 KW
function _PL_T(a) {
    var EL_GCD_T = _GCDT;
    var _gX = '/?xuid=' + EL_GCD_T + '&sv=' + _JV,
        _gF = '/?fuid=' + EL_GCD_T + '&sv=' + _JV,
        _gU = '/?uid=' + EL_GCD_T + '&sv=' + _JV + "&FCV=" + _FCV,
        _gE = '/?euid=' + EL_GCD_T + '&sv=' + _JV,
        _gW = '/?wuid=' + EL_GCD_T + '&sv=' + _JV,
        _gO = '/?ouid=' + EL_GCD_T + '&sv=' + _JV,
        _gB = '/?buid=' + EL_GCD_T + '&sv=' + _JV;
    var _ULS = a.split('.'); //site
    var _ULD = a.split('/'); //directory
    var _UDD = a.replace(_ULD[0], '');
    if (_ULD[1] == undefined) {
        if (_ULS[0] == 'www') {
            var _ULT = 'total.Korean.net' + '/' + _ULS[1] + '/'; // add '/'
        } else {
            var _ULT = 'total.Korean.net' + '/' + _ULS[0] + '/'; // add '/'
        }
    } else {
        if (_ULS[0] == 'www') {
            var _ULT = 'total.Korean.net' + '/' + _ULS[1] + _UDD; //input directory
        } else {
            var _ULT = 'total.Korean.net' + '/' + _ULS[0] + _UDD;
        }
    }
    a = _ULT;
    if (!_IL(a)) a = _UL(document.URL);
    _arg = _PT() + _gU;
    if (typeof _ERR != _UD && _ERR == 'err') {
        _arg = _PT() + _gE;
    };
    if (_ll.length > 0) _arg += "&md=b";
    _AIUT.src = _arg + "&url=" + escape(a) + "&ref=" + escape(_rf) + "&cpu=" + _cu + "&bz=" + _bz + "&bv=" + _vs + "&os=" + _os + "&dim=" + _d + "&cd=" + _cd + "&je=" + _je + "&jv=" + _sv + "&tz=" + _tz + "&ul=" + _ul + "&ad_key=" + escape(_ak) + "&skey=" + _RPS(escape(_skey), "+", "%2B") + "&age=" + _ag + "&gender=" + _gd + "&marry=" + _mr + "&join=" + _jn + "&member_key=" + _id + "&jid=" + _jid + "&udf1=" + _ud1 + "&udf2=" + _ud2 + "&udf3=" + _ud3 + "&amt=" + _amt + "&frwd=" + _fwd + "&pd=" + _RPS(escape(_pd), "+", "%2B") + "&ct=" + _RPS(escape(_ct), "+", "%2B") + "&ll=" + _RPS(escape(_ll), "+", "%2B") + "&RID=" + Math.random() + "&";
    _IMGAMZ.push(_AIUT);
}
_EL(window, "error", _ER); //window Error
if (typeof window.screen == 'object') {
    _sv = 12;
    _d = screen.width + '*' + screen.height;
    _sc = _bI ? screen.colorDepth : screen.pixelDepth;
    if (_sc == _UD) _sc = _UN;
}
_ro = _NA();
if (_ro.toSource || (_bI && _ro.shift)) _sv = 13;
if (top && typeof top == 'object' && _ILF(top.frames)) {
    eval("try{_rl=top.document.URL;}catch(_e){_rl='';};");
    if (_rl != document.URL) _frm = true;
};
if (_frm) {
    eval("try{_prl = top.document.URL;}catch(_e){_prl=_bR;};");
    if (_prl == '') eval("try{_prl=parent.document.URL;}catch(_e){_prl='';};");
    if (_IX(_prl, '#') > 0) _prl = _prl.substring(0, _IX(_prl, '#'));
    _prl = _LST(_prl, '#');
    if (_IX(_rf, '#') > 0) _rf = _rf.substring(0, _IX(_rf, '#'));
    _prl = _LST(_prl, '/');
    _rf = _LST(_rf, '/');
    if (_rf == '') eval("try{_rf=parent.document.URL;}catch(_e){_rf=_bR;}");
    if (_rf == _bR || _prl == _bR) {
        _rf = '', _prl = '';
    };
    if (_rf == _prl) {
        eval("try{_rf=top.document.referrer;}catch(_e){_rf='';}");
        if (_rf == '') {
            _rf = 'bookmark';
        };
        if (_IX(document.cookie, 'ACEN_CK=' + escape(_rf)) > -1) {
            _rf = _prl;
        } else {
            if (_IX(_prl, '?') > 0) {
                _ak = _prl.substring(_IX(_prl, '?') + 1, _prl.length);
                _prl = _ak;
            }
            _fwd = _GV(_ak, 'FWDIDX', '&', '=');
            if (_IX(_prl.toUpperCase(), 'OVRAW=') >= 0) {
                _ak = 'src=overture&kw=' + _GV(_prl.toUpperCase(), 'OVRAW', '&', '=') + '&OVRAW=' + _GV(_prl.toUpperCase(), 'OVRAW', '&', '=') + '&OVKEY=' + _GV(_prl.toUpperCase(), 'OVKEY', '&', '=') + '&OVMTC=' + _GV(_prl.toUpperCase(), 'OVMTC', '&', '=').toLowerCase()
            };
            if (_IX(_prl, 'gclid=') >= 0) {
                _ak = 'src=adwords';
            };
            if (_IX(_prl, 'DWIT=') >= 0) {
                _ak = 'src=dnet_cb';
            };
            if (_IX(_prl, "rcsite=") >= 0 && _IX(_prl, "rctype=") >= 0) {
                _prl += '&';
                _ak = _prl.substring(_IX(_prl, 'rcsite='), _prl.indexOf('&', _IX(_prl, 'rcsite=') + 7)) + '-' + _prl.substring(_IX(_prl, 'rctype=') + 7, _prl.indexOf('&', _IX(_prl, 'rctype=') + 7)) + '&';
            };
            if (_GV(_prl, 'src', '&', '=')) _ak += '&src=' + _GV(_prl, 'src', '&', '=');
            if (_GV(_prl, 'kw', '&', '=')) _ak += '&kw=' + _GV(_prl, 'kw', '&', '=');
            if (_prl.length > 0) {
                _prl = _XV(_prl, 'FWDRL', '&', '=', '_rf');
                _rf = unescape(_rf);
                _ak = _XV(_ak, 'FWDRL', '&', '=', '_prl');
            };
            if (typeof FD_ref == 'string' && FD_ref != '') _rf = FD_ref;
            document.cookie = 'ACEN_CK=' + escape(_rf) + ';path=/;';
        };
        if (document.URL.indexOf('?') > 0 && (_IX(_ak, 'rcsite=') < 0 && _IX(_ak, 'NVAR=') < 0 && _IX(_ak, 'src=') < 0 && _IX(_ak, 'source=') < 0)) _ak = document.URL.substring(document.URL.indexOf('?') + 1, document.URL.length);
    };
} else {
    _rf = _LST(_rf, '#');
    _ak = _CST(document.URL, '?');
    if (_IX(_ak, "rcsite=") > 0 && _IX(_ak, "rctype=") > 0) {
        _ak += '&';
        _ak = _ak.substring(_IX(_ak, 'rcsite='), _ak.indexOf('&', _IX(_ak, 'rcsite=') + 7)) + '-' + _ak.substring(_IX(_ak, 'rctype=') + 7, _ak.indexOf('&', _IX(_ak, 'rctype=') + 7)) + '&';
    }
}
_rl = document.URL;
var _trl = _rl.split('?');
if (_trl.length > 1) {
    _trl[1] = _XV(_trl[1], 'FWDRL', '&', '=', '_rf');
    _rf = unescape(_rf);
    _fwd = _GV(_trl[1], 'FWDIDX', '&', '=');
    _rl = _trl.join('?');
    _ak = _XV(_ak, 'FWDRL', '&', '=', '_prl');
};
if (typeof FD_ref == 'string' && FD_ref != '') _rf = FD_ref;
if (_rf.indexOf('googlesyndication.com') > 0) {
    var _rf_idx = _rf.indexOf('&url=');
    if (_rf_idx > 0) {
        var _rf_t = unescape(_rf.substring(_rf_idx + 5, _rf.indexOf('&', _rf_idx + 5)));
        if (_rf_t.length > 0) {
            _rf = _rf_t;
        };
    };
};
_rl = _UL(_rl);
_rf = _UL(_rf);
if (typeof _rf_t != 'undefined' && _rf_t != '') _rf = _rf_t;
if (typeof _ak_t != 'undefined' && _ak_t != '') _ak = _ak_t;
if (_ak.length > 512) {
    _ak = _ak.substring(0, 512);
};
if (typeof _rf == _UD || (_rf == '')) _rf = 'bookmark';
_cd = (_bI) ? screen.colorDepth : screen.pixelDepth;
_UA = navigator.userAgent;
_ua = navigator.userAgent.toLowerCase();
if (navigator.language) {
    _ul = navigator.language.toLowerCase();
} else if (navigator.userLanguage) {
    _ul = navigator.userLanguage.toLowerCase();
};
_st = _IX(_UA, ';');
if (_st > 0) {
    _end = _UA.indexOf(')', _st);
};
_str = _UA.substring(_st, _end);
_if = _str.split('; ');
_cmp = _UN;
if (_bI) {
    _cmp = navigator.appName;
    _str = _if[1].substring(5, _if[1].length);
    if (_IX(_cmp, 'Mobile') >= 0) _str = _if[3].substring(8, _if[3].length);
    _vs = (parseFloat(_str)).toString();
} else if ((_st = _IX(_ua, "opera")) >= 0) {
    _cmp = "Opera";
    _vs = _ua.substring(_st + 6, _ua.indexOf('.', _st + 6));
} else if ((_st = _IX(_ua, "firefox")) >= 0) {
    _cmp = "Firefox";
    _vs = _ua.substring(_st + 8, _ua.indexOf('.', _st + 8));
} else if ((_st = _IX(_ua, "netscape6")) >= 0) {
    _cmp = "Netscape";
    _vs = _ua.substring(_st + 10, _ua.length);
    if ((_st = _IX(_vs, "b")) > 0) {
        _str = _vs.substring(0, _IX(_vs, "b"));
        _vs = _str;
    };
} else if ((_st = _IX(_ua, "netscape/7")) >= 0) {
    _cmp = "Netscape";
    _vs = _ua.substring(_st + 9, _ua.length);
    if ((_st = _IX(_vs, "b")) > 0) {
        _str = _vs.substring(0, _IX(_vs, "b"));
        _vs = _str;
    };
} else {
    if (_IX(_ua, "gecko") > 0) {
        if (_IX(_ua, "safari") >= 0) {
            _cmp = "Safari";
            _ut = _ua.split(' ');
            for (var ii = 0; ii < _ut.length; ii++)
                if (_IX(_ut[ii], 'version') >= 0) {
                    _vst = (_ut[ii] + '/').split('/');
                    _vs = _vst[1];
                }
        } else {
            _cmp = navigator.vendor;
        }
    } else if (_IX(_ua, "nav") >= 0) {
        _cmp = "Netscape Navigator";
    } else {
        _cmp = navigator.appName;
    };
    _av = _UA;
}
if (_IX(_vs, '.') < 0) {
    _vs = _vs + '.0'
}
_bz = _cmp;
var Asp_Link_ssn = {
    s: 20100707,
    n: EL_GCD,
    g: EL_GUL,
    p: EL_GPT,
    pu: _rl,
    m: [],
    run: Asp_Link_ssn ? Asp_Link_ssn.n : this.n
};

function ACEF_Click(file, menu) {
    if ((typeof file != 'number') && (file != '') && (typeof menu != 'number') && (menu != '')) {
        eval("LA_" + Asp_Link_ssn.n + "('" + file + "','" + menu + "')");
    }
};

function LA_Click() {
    var ssn = Asp_Link_ssn;
    var f = {
        tt: function(o) {
            var r;
            r = o.getAttribute(s.tt);
            if (typeof r != 'object') {
                if (r.length != 0) {
                    return '{:' + r + ':}';
                };
            };
            return '';
        },
        a: function(s) {
            var r = '';
            r = s;
            if ((r.indexOf('//') <= -1) && (r.indexOf('http') <= -1) && (r != '')) {
                if (r.charAt(0) == '/') {
                    r = r.substr(1, r.length);
                };
                if (r.substr(r.length - 1, 1) == '/') {
                    r = r.substr(0, r.length - 1)
                }
                return r;
            };
            return '';
        },
        b: function(s) {
            var re = "/[~!@\#$%<>^&*\/()\=+\']/gi";
            var so = '';
            so = s;
            if (re.test(so)) {
                return 1;
            } else {
                return 0;
            }
        },
        d: function(s) {
            var r = String(s);
            return r.toUpperCase();
        },
        e: function(s, t) {
            return s.indexOf(t);
        },
        f: function(o) {
            var a;
            a = o;
            if (f.d(a.tagName) == 'A' || f.d(a.tagName) == 'AREA') {
                return a;
            } else if (f.d(a.tagName) == 'BODY') {
                return 0;
            } else {
                return f.f(a.parentNode);
            }
        },
        g: function(sr) {
            var r = '';
            var ar = '';
            r = sr.substr(f.e(sr, '{'), sr.length);
            r = r.replace('{', '');
            r = r.replace('}', '');
            return r;
        },
        n: function(s) {
            return s.replace(/\n|\s|/g, '');
        },
        ea: function(c, f) {
            var wd;
            if (c == 'click') {
                wd = window.document;
            } else {
                wd = window;
            }
            if (wd.addEventListener) {
                wd.addEventListener(c, f, false)
            } else if (wd.attachEvent) {
                wd.attachEvent("on" + c, f)
            }
        }
    };
    var p = {
        h: location.host,
        p: (location.protocol == 'https:') ? "https://" + ssn.g : "http://" + ssn.g + ":" + ssn.p,
        s: '/?xuid=' + ssn.n + '&sv=' + ssn.s,
        u: function() {
            var r = '';
            r = String(ssn.pu);
            var sh = r.indexOf('#');
            if (sh != -1) {
                r = r.substring(0, sh);
            }
            return r + '';
        },
        ol: new Image(0, 0),
        olf: new Image(0, 0),
        xL: function(x) {
            if (typeof(Amz_T_e) == s.u) {
                p.ol.src = p.p + p.s + '&url=' + escape(p.u()) + '&xlnk=' + escape(x) + '&xidx=0&' + 'crn=' + Math.random() + '&';
                ssn.m.push(p.ol);
            }
        },
        xF: function(x) {
            if (typeof(Amz_T_e) == s.u) {
                p.olf.src = p.p + p.s + '&url=' + escape(p.u()) + '&xlnk=http://' + p.h + '/' + escape(x) + '&fdv=FLASH&xidx=0&';
                ssn.m.push(p.olf);
            }
        }
    };
    var s = {
        Lp: 'a.tagName=="IMG"||a.tagName=="B" || a.tagName=="I" || a.tagName== "U" || a.tagName== "FONT" || a.tagName=="STRONG" || a.tagName=="I" || a.tagName=="A" || a.tagName=="AREA"',
        tt: 'title',
        l: 'load',
        c: 'click',
        f: 'function',
        j: 'javascript:',
        u: 'undefined',
        n: 'number'
    };
    var c = {
        Run: function() {
            if (f.e(navigator.userAgent, 'Chrome/1') > -1) {
                return 0;
            }
            f.ea('click', this.ec);
        },
        ec: function(e) {
            var ok = '';
            var m = document.all ? event.srcElement : e.target;
            var a = m;
            if (eval(s.Lp)) {
                ok = c.lc(m);
                if (ok.length != 0) {
                    p.xL(unescape(ok));
                };
            }
        },
        lc: function(o) {
            try {
                var ar = '',
                    tf = 0,
                    obj = o;
                var a = o;
                if ((f.d(o.tagName) == 'IMG') && (typeof o.onclick == s.f)) {
                    tf = 1;
                    ar = String(o.onclick);
                } else if (eval(s.Lp)) {
                    obj = f.f(o);
                    if (typeof obj.onclick == s.f) {
                        tf = 1;
                        ar = String(obj.onclick);
                    } else if (typeof obj != s.n) {
                        tf = 0;
                        ar = String(obj.href);
                    };
                }
                if (ar.length == 0) {
                    return '';
                };
                ar = f.n(ar);
                ar = ar.replace(/'|"|#/g, ' ');
                if (f.e(ar, 'void(') == -1 && f.e(ar, 'void0') == -1) {
                    if (tf == 1) {
                        ar = f.g(ar);
                        if (ar == '') {
                            return '';
                        };
                        if (f.e(ar, s.j) == -1) {
                            return s.j + ar;
                        } else {
                            return ar;
                        };
                    } else {
                        return ar;
                    };
                } else {
                    return s.j + 'void(0)';
                };
                return '';
            } catch (_e) {
                alert(_e);
                return '';
            };
        }
    };
    if (p.u().charAt(1) != ':') {
        switch (arguments.length) {
            case 0:
                if ((ssn.n != ssn.run)) {
                    c.Run();
                }
                break;
            case 2:
                if (ssn.n != ssn.run) {
                    if ((f.e(f.d(arguments[0]), '.SWF') > -1) && (f.b(arguments[0]) != 1)) {
                        if (f.a(arguments[1]) != '') {
                            p.xF(arguments[0] + '/' + f.a(arguments[1]));
                        };
                    }
                }
                break;
        };
    }
};
eval('LA_Click();');
if (_IX(_pf, _UD) >= 0 || _pf == '') {
    _os = _UN;
} else {
    _os = _pf;
};
if (_IX(_os, 'Win32') >= 0) {
    if (_IX(_av, '98') >= 0) {
        _os = 'Windows 98';
    } else if (_IX(_av, '95') >= 0) {
        _os = 'Windows 95';
    } else if (_IX(_av, 'Me') >= 0) {
        _os = 'Windows Me';
    } else if (_IX(_av, 'NT') >= 0) {
        _os = 'Windows NT';
    } else {
        _os = 'Windows';
    };
    if (_IX(_ua, 'nt 5.0') >= 0) {
        _os = 'Windows 2000';
    };
    if (_IX(_ua, 'nt 5.1') >= 0) {
        _os = 'Windows XP';
        if (_IX(_ua, 'sv1') > 0) {
            _os = 'Windows XP SP2';
        };
    };
    if (_IX(_ua, 'nt 5.2') >= 0) {
        _os = 'Windows Server 2003';
    };
    if (_IX(_ua, 'nt 6.0') >= 0) {
        _os = 'Windows Vista';
    };
    if (_IX(_ua, 'nt 6.1') >= 0) {
        _os = 'Windows 7';
    };
};
_pf_s = _pf.substring(0, 4);
if (_pf_s == 'Wind') {
    if (_pf_s == 'Win1') {
        _os = 'Windows 3.1';
    } else if (_pf_s == 'Mac6') {
        _os = 'Mac';
    } else if (_pf_s == 'MacO') {
        _os = 'Mac';
    } else if (_pf_s == 'MacP') {
        _os = 'Mac';
    } else if (_pf_s == 'Linu') {
        _os = 'Linux';
    } else if (_pf_s == 'WebT') {
        _os = 'WebTV';
    } else if (_pf_s == 'OSF1') {
        _os = 'Compaq Open VMS';
    } else if (_pf_s == 'HP-U') {
        _os = 'HP Unix';
    } else if (_pf_s == 'OS/2') {
        _os = 'OS/2';
    } else if (_pf_s == 'AIX4') {
        _os = 'AIX';
    } else if (_pf_s == 'Free') {
        _os = 'FreeBSD';
    } else if (_pf_s == 'SunO') {
        _os = 'SunO';
    } else if (_pf_s == 'Drea') {
        _os = 'Drea';
    } else if (_pf_s == 'Plan') {
        _os = 'Plan';
    } else {
        _os = _UN;
    };
};
if (_cu == 'x86') {
    _cu = 'Intel x86';
} else if (_cu == 'PPC') {
    _cu = 'Power PC';
} else if (_cu == '68k') {
    _cu = 'Motorola 680x';
} else if (_cu == 'Alpha') {
    _cu = 'Compaq Alpa';
} else if (_cu == 'Arm') {
    _cu = 'ARM';
} else {
    _cu = _UN;
};
if (_d == '' || typeof _d == _UD) {
    _d = '0*0';
}
_PL(_rl); // Site Logging
if (_GCDT == '1') {
    _PL_T(_rl);
} // Site Total Logging