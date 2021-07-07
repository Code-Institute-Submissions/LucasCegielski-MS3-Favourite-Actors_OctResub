$(document).ready(function(){
    $('.sidenav').sidenav({edge: "right"});
    $('select').formSelect();
    $('.datepicker').datepicker({
      format: 'dd mmmm, yyyy',
      yearRange: [1900, 2000],
      showClearBtn: true,
      i18n: {
        done: 'Select'
      }
    });
  });