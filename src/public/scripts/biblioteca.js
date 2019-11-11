
$.ajaxSetup({cache:false});
$(function() {
  $("#search").click(function() {
    var form = $("#searchQueryForm").serializeArray();
    var url = $(location).attr("origin");
    url += "/libros/search";
    console.log(url);
    $.ajax({
      type: "GET",
      url: url,
      data: { form: form },
      dataType: "json",
      cache: "true",
      success: function(data) {
        console.log("success");
        var currentTemplateHtml;
        $.ajax({
          type: "GET",
          data: { form: form },
          url: $(location).attr("origin") + "/libros/list.hbs",
          cache: "true",
          success: (ff) => {
            console.log('aaaaaaaaa');
            currentTemplateHtml = ff;
            var compliledTemplateHtml = Handlebars.compile(currentTemplateHtml,{ data });
            var contextualHtml = compliledTemplateHtml(data, );
            $("#LibTable").html(contextualHtml);
          },
          error: function(er) {
            console.log(er.message);
          }
        });
      },
      error: function(e) {
        console.log(e.message);
      }
    });
  });
});
function toggle_message(){
  if ($('#collapser').text() === 'Abrir Búsqueda') 
  {
      setTimeout($('#collapser').text('Cerrar Búsqueda'),500);
      
  }
  else {
      setTimeout($('#collapser').text('Abrir Búsqueda'),500);
  }
}
function addToCart(libro){
    console.log(libro);
}