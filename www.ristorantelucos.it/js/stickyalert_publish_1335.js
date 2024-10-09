$(document).ready(function() {
  var tracking = $('.stickyalertwrapper').attr('data-tracking');
  var cltracking = $('.stickyalertwrapper').attr('data-cltracking');
  var obj_track = {};
  obj_track['alerttrack'] = 'no';
  obj_track['closetrack'] = 'no';
  var trackData = new FormData();
  $.each(obj_track, function(k, v) { // apply object key/values to textData
    trackData.append(k, v);
  });
  $.ajax({
    method: 'POST',
    dataType: 'json',
    processData: false,
    contentType: false,
    url: 'includes/setsacookie.php',
    data: trackData
  })
  .done (function(data) {
    if (data.exists == true) {$('.stickyalertwrapper, .stickyalert-bg').hide()}
  })
  .fail(function(data) {
  });
  var bgcol = $('.stickyalertwrapper').attr('data-bgcolor');
  var bshad = $('.stickyalertwrapper').attr('data-bshadow');
  var linkbor = $('.stickyalertwrapper').attr('data-linkborcolor');
  var linkborhv = $('.stickyalertwrapper').attr('data-linkborhvcolor');
  var linktxt = $('.stickyalertwrapper').attr('data-linktxtcolor');
  var linktxthv = $('.stickyalertwrapper').attr('data-linktxthvcolor');
  var showpol = $('.stickyalertwrapper').attr('data-showpolicy');
  var showag = $('.stickyalertwrapper').attr('data-showagree');
  var showlv = $('.stickyalertwrapper').attr('data-showleave');
  var showcl = $('.stickyalertwrapper').attr('data-showclose');
  var showpu = $('.stickyalertwrapper').attr('data-showpopup');
  var showpucol = $('.stickyalertwrapper').attr('data-showpopupcolor');
  var loc = $('.stickyalertwrapper').attr('data-loc');
  var wd = $('.stickyalertwrapper').attr('data-width');
  if (wd != '100%') {var mleft = (100 - parseInt(wd)) / 2 + '%'}
  else {var mleft = '0%'}
  var align = $('.stickyalertwrapper').attr('data-txtalign');
  var voffset = $('.stickyalertwrapper').attr('data-voffset');
  var tsize = $('.stickyalertwrapper p.stickyalert-txt').attr('data-tsize');
  var tlnht = $('.stickyalertwrapper p.stickyalert-txt').attr('data-tlnht');
  var tcoli = $('.stickyalertwrapper p.stickyalert-txt').attr('data-tcolor');
  var tcol = "'color': " + tcoli;
  var butrad = $('.stickyalertwrapper').attr('data-butrad');
  var clicon = $('.stickyalertwrapper span.fa').attr('data-icolor');
  if (showpu == 'no') {$('.stickyalert-bg').remove()}
  if (showpu == 'yes') {$('.stickyalert-bg').css({'background-color': showpucol})}
  $('.stickyalertwrapper').css({'position': 'fixed', 'width': wd, 'margin-left': mleft, 'text-align': align, 'background-color': bgcol, 'box-shadow': bshad, 'top': voffset});
  if (loc == 'bottom') {$('.stickyalertwrapper').css({'top': '', 'bottom': voffset})}
  $('.stickyalertwrapper p.stickyalert-txt').css({tcol, 'font-size': tsize, 'line-height': tlnht});
  $('.stickyalertwrapper p.stickyalert-policy, .stickyalertwrapper p.stickyalert-agree, .stickyalertwrapper p.stickyalert-leave').css({'font-size': tsize, 'line-height': tlnht, 'border-radius': butrad});
  var mylinktxt = linktxt;
  var mylinkbor = '2px solid ' + linkbor;
  if (showpol == 'no') {$('.stickyalertwrapper p.stickyalert-policy').remove()}
  if (showag == 'no') {$('.stickyalertwrapper p.stickyalert-agree').remove()}
  if (showlv == 'no') {$('.stickyalertwrapper p.stickyalert-leave').remove()}
  if (showcl == 'no') {
    $('.stickyalertwrapper .fa').remove();
    $('.stickyalertwrapper').css({'padding-right': '1%'});
  }
  $('.stickyalertwrapper p.stickyalert-policy, .stickyalertwrapper p.stickyalert-agree, .stickyalertwrapper p.stickyalert-leave').on('mouseenter', function() {
    var mylinktxthv = linktxthv;
    var mylinkborhv = '2px solid ' + linkborhv;
    $(this).find('a').css({'color': mylinktxthv, 'border': mylinkborhv});
  });
  $('.stickyalertwrapper p.stickyalert-policy, .stickyalertwrapper p.stickyalert-agree, .stickyalertwrapper p.stickyalert-leave').on('mouseleave', function() {
    $(this).find('a').css({'color': mylinktxt, 'border': mylinkbor});
  });
  $('.stickyalertwrapper span.fa').css({'color': clicon});
  $('.stickyalert-bg, .stickyalertwrapper').prependTo('.page-container');
  $('.stickyalertwrapper .stickyalert-agree').on('click', function() {
    $('.stickyalertwrapper, .stickyalert-bg').fadeOut(1000);
    if (tracking == 'yes') {
      var obj_track = {};
      obj_track['alerttrack'] = tracking;
      obj_track['closetrack'] = cltracking;
      var trackData = new FormData();
      $.each(obj_track, function(k, v) { // apply object key/values to textData
	    trackData.append(k, v);
      });
      $.ajax({
        method: 'POST',
        dataType: 'json',
        processData: false,
        contentType: false,
        url: 'includes/setsacookie.php',
        data: trackData
      })
      .done (function(data) {
      })
      .fail(function(data) {
      });
    }  
  });
  $('.stickyalertwrapper span.fa').on('click', function() {
    $('.stickyalertwrapper, .stickyalert-bg').fadeOut(1000);
    if (cltracking == 'yes') {
      var obj_track = {};
      obj_track['alerttrack'] = tracking;
      obj_track['closetrack'] = cltracking;
      var trackData = new FormData();
      $.each(obj_track, function(k, v) { // apply object key/values to textData
	    trackData.append(k, v);
      });
      $.ajax({
        method: 'POST',
        dataType: 'json',
        processData: false,
        contentType: false,
        url: 'includes/setsacookie.php',
        data: trackData
      })
      .done (function(data) {
      })
      .fail(function(data) {
      });
    } 
  });
});