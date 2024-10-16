function goBack() {

}

var CustomConfirm = new function () {
    this.show = function (callback) {
        var dlg = document.getElementById('dialogCont');
        var dlg1 = document.getElementById('dialogCont1');
        dlg.style.top = '30%';
        dlg.style.position = 'fixed';
        dlg1.style.top = '30%';
        dlg1.style.position = 'fixed';
        dlg.style.opacity = 1;
        dlg1.style.opacity = 0;
        document.getElementById('freezeLayer').style.display = '';
    };

    this.close = function () {
        var dlg = document.getElementById('dialogCont');
        var dlg1 = document.getElementById('dialogCont1');
        dlg.style.opacity = 0;
        dlg1.style.opacity = 1;
        document.getElementById('freezeLayer').style.display = '';
    };

    this.okay = function () {
        var dlg = document.getElementById('dialogCont');
        var dlg1 = document.getElementById('dialogCont1');
        dlg.style.top = '-100%';
        dlg1.style.top = '-100%';
        dlg.style.opacity = 0;
        dlg1.style.opacity = 0;
        document.getElementById('freezeLayer').style.display = 'none';
        document.getElementById('body').style.overflowY = 'scroll';
    };
}