$(function () {
$('.search-btn').click(function() {
  var input = $('.input-search').val();
  var ip = input;
  var api_key = "at_N4q3QRquFSEgT8PYNmUpVLcPj702M";
        $.ajax({
          url: "https://geo.ipify.org/api/v1",
          data: {apiKey: api_key, ipAddress: ip, domain: ip},
          success: function(data) {
            if (input === '') {
              $('.container .error').css('display', 'block')
            } else {
              $('.container .error').css('display', 'none')
              $('.ip-address span').html(data.ip)
              $('.location span').html(data.location.country + '-' + data.location.city)
              $('.timezone span').html('UTC' + data.location.timezone)
              $('.isp span').html(data.isp)
              $('.show-result').show();
              var latitude = data.location.lat,
              longitude = data.location.lng;
              var mymap = L.map('map').setView([latitude, longitude], 9);
              var marker = L.marker([latitude, longitude]).addTo(mymap);
                L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=7jMBQ7wbzh3Xlo3idsNE', {
                    attribution: '\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
                }).addTo(mymap);
            }
          }
        });
})
});
