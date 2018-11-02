String.prototype.endsWith = function(suffix) {
  return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
String.prototype.startsWith = function(needle) {
  return(this.indexOf(needle) == 0);
};


$('#formdown').keyup(function(){
  
  var inputs = $(this).val().split('\n');
  var x = '';
  var j = '';
  var radio = false;
  var description;
  var radiogroup = 0;
  var uniqueID = Math.floor(Math.random()*999999)+1;
  $.each( inputs, function( i, val ) {
    
    if (val) {
      name = val.split(' ').join('-');
      
      if (val.startsWith('r ')) {
        if (!radio) {
          radiogroup++;
        }
        radio = true;

        val = val.split('r ').join('');
        name = name.split('r-').join('');
        x += '<label class="radio"><input type=radio name='+questionname+' value="'+name+'"> '+val+'</label>\n';
        j += $('input[name="'+name+'"]').val(val);

      } else if (val.startsWith('cb ')) {
        val = val.split('cb ').join('');
        name = name.split('cb-').join('');
        x += '<label><input type=checkbox name='+name+'> '+val+'</label>\n';
        j += $('input[name="'+name+'"]').val(val);
        
      } else if (val.startsWith('t ')) {
        radio = false;
        val = val.split('t ').join('');
        name = name.split('t-').join('');   
        x += '<label>\n\t'+val+'\n\t<input type="text" name="'+name+'">\n</label>\n';
        j += $('input[name="'+name+'"]').val(val);

      } else if (val.startsWith('d ')) {
        val = val.split('d ').join('');
        name = name.split('d-').join('');
        x += '<h3>'+val+'</h3>\n';
        j += $('input[name="'+name+'"]').val(val);
        
      } else {
        questionname = val.split(' ').join('-');
        x += '<label for="'+name+'">'+val+'</label>\n';
        
      }
      
    }
  });
  
  // <form id="questions" class="form-horizontal"> <div class="form-group">
  //  <div class="form-group"> <button type="submit" class="btn btn-primary btn-lg">Submit</button> </div> </form>
  x = '<form id="questions" class="form-horizontal"> <div class="form-group">\n'+x+'<div class="form-group"> <button type="submit" class="btn btn-primary btn-lg">Submit</button> </div> </form>';


  
  //console.log("Survey ID is " +uniqueID);

  document.getElementById("generate").innerHTML =  `${x}`;
  $('#output').html(x);
  var test = $('#output').html(x);
  $('#code').text(x);
  var codetest =  $('#code').text(x);

  console.log(test);

  console.log( $('#code').text(x));

  var json=$(codetest).serialize();
  console.log("json:" +json);
});