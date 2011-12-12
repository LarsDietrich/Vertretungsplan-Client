$(document).ready(function(){ 
  
  var url = 'http://ong-api.heroku.com/day/' + (Date.today().add(1).days().toString('dddd')).toLowerCase();

  $.getJSON(url + '?callback=?', function(plan){
    
    
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

document.addEventListener('touchstart', function(event) {
    // Prevent text selection
    //event.preventDefault();
}, false);

document.addEventListener('mousedown', function(event) {
    // Prevent text selection
    event.preventDefault();
}, false);




