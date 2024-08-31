function copyToClipboard(element) {
  // Get the text field
  var copyText = document.getElementById(element);

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  document.execCommand('copy');

  // Alert the copied text
  $.toast({
    class: 'teal',
    position: 'bottom right',
    showIcon: 'clipboard',
    message:  '"' + copyText.value + '" was added to your clipboard',
    showProgress: 'bottom'
  })
  ;

}
