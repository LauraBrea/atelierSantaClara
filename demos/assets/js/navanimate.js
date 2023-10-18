function saltarA(id, tiempo) {
    var tiempo = tiempo || 1000;
    $("html, body").animate({ scrollTop: $(id).offset().top }, tiempo);
  }