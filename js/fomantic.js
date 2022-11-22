// set a defaultValue
  $.flyout('prompt',{
    title: 'Enter your name',
    defaultValue: 'mommy',
    handler: function(name){
        $.toast({message: 'Your name is ' + (name || 'CANCELLED')});
    }
  });
