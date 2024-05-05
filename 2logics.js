$(document).ready(function() {
  $('.btn-form').click(function(event) {
    $('.form-view').removeClass('active');
    var num = $(this).attr('data-num');
    $('#form-view' + num).addClass('active');
  });
});
.form-view {
  display: none;
}

.active {
  display: block;
}
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<div class="col-lg-3 col-md-6 col-12">
  <a class="btn btn-form text-left" href="#" id="btn-form1" data-num="1">
  Таб 1
  </a>
</div>
<div class="col-lg-3 col-md-6 col-12">
  <a class="btn btn-form text-left" href="#" id="btn-form2" data-num="2">
      Таб 2
  </a>
</div>

<div class="form-group form-view my-5 pb-5 active" id="form-view1">
  результат таба 1
</div>
<div class="form-group form-view my-5 pb-5" id="form-view2">
  результат таба 2
</div>
