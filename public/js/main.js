$(document).ready(function(){ 
  var date = Date.today().add(1).days();
  var url = 'http://ong-api.heroku.com/day/' + (date.toString('dddd')).toLowerCase();

  $('.bar').text(date.toString('d.M'));

  $.getJSON(url + '?callback=?', function(plan){
    
    $('#loading').hide();
    
    $.each(plan, function(key, val){
      s = '<li class="form" id="fm' + key.replace(".", "-").replace(".", "-").replace(" ", "") + '">';
        s += key;
        s += '<ul>';
          $.each(val, function(key, val){
            s += '<li class="lesson">';
              s += key;
              s += '<ul>';
                $.each(val, function(key, val){
                  s += '<li class="replacement">';
                    s += val['was'];
                    s += ' --> ';
                    s += val['is'];
                    
                  s += '</li>';
                });
              s += '</ul>';
             s += '</li>';
          });
        s += '</ul>';
      s = s + '</li>';
      $('#substitutes').append(s);
    });
    
  });
});




