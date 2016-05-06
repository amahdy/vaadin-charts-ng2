(function() {
  window.getJSON = function(url, callback) {
    if (url.indexOf('population') > -1) {
      setTimeout(callback, 300, population);
    }
  };

  window.getMaleData = function() {
    var data = Array();
    for(var c of population) {
      data = data.concat([c.category, c.male]);
    }

    return data;
  }

  window.getFemaleData = function() {
    var data = Array();
    for(var c of population) {
      data = data.concat([c.category, c.female]);
    }

    return data;
  }

  var population = [
    {"category" : "0-4", "male" : 1746181, "female" : 1656154},
    {"category" : "5-9", "male" : 1884428, "female" : 1787564},
    {"category" : "10-14", "male" : 2089758, "female" : 1981671},
    {"category" : "15-19", "male" : 2222362, "female" : 2108575},
    {"category" : "20-24", "male" : 2537431, "female" : 2403438},
    {"category" : "25-29", "male" : 2507081, "female" : 2366003},
    {"category" : "30-34", "male" : 2443179, "female" : 2301402},
    {"category" : "35-39", "male" : 2664537, "female" : 2519874},
    {"category" : "40-44", "male" : 3556505, "female" : 3360596},
    {"category" : "45-49", "male" : 3680231, "female" : 3493473},
    {"category" : "50-54", "male" : 3143062, "female" : 3050775},
    {"category" : "55-59", "male" : 2721122, "female" : 2759560},
    {"category" : "60-64", "male" : 2229181, "female" : 2304444},
    {"category" : "65-69", "male" : 2227768, "female" : 2426504},
    {"category" : "70-74", "male" : 2176300, "female" : 2568938},
    {"category" : "75-79", "male" : 1329968, "female" : 1785638},
    {"category" : "80-84", "male" : 836804, "female" : 1447162},
    {"category" : "85-89", "male" : 354784, "female" : 1005011},
    {"category" : "90-94", "male" : 90569, "female" : 330870},
    {"category" : "95-99", "male" : 28367, "female" : 130632},
    {"category" : "100 +", "male" : 3878, "female" : 21208}
  ];

})();
