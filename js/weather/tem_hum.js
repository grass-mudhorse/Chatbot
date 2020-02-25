var tem_hum = {
  dl: config.displayLanguage || 'en',
  temperatureLocation: '.temhum',
  updateInterval: 10000,

}

tem_hum.updateTemHum = function () {
  $.ajax({
    type: 'GET',
    datatype:'jsonp',
    url: 'controllers/thsensor.php',
    success: function (data) {
      // console.info(data);
      var ths = JSON.parse(data);

      if (tem_hum.dl == 'cn') {
        // var thtext = '室内温湿 ' + ths.temperature + '°, ' + ths.humidity + '%';
        var thtext1 = '<div>' + ths.temperature + '°</div><div class="xxsmall">室温</div>'
        var thtext2 = '<div>' + ths.humidity    + '%</div><div class="xxsmall">湿度</div>'
        var thtext  = '<div><span class="th">'+thtext1+'</span> <span class="th" style="width: 20;"></span> <span class="th">'+thtext2+'</span></div>'
      } else {
        var thtext = '温度:' + ths.temperature + '℃, 湿度:' + ths.humidity + '%';
      }

      $(this.temperatureLocation).updateWithText(thtext, this.fadeInterval);
    }.bind(this),
    error: function () {
      // non-specific error message that should be updated
      console.error('No thsensor results');
    }
  });

}

tem_hum.init = function () {

this.updateTemHum();

this.intervalId = setInterval(function () {
this.updateTemHum();
}.bind(this), this.updateInterval)

}