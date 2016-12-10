/*
* @Author: lenovo
* @Date:   2016-12-06 22:26:00
* @Last Modified by:   lenovo
* @Last Modified time: 2016-12-08 17:05:06
*/

'use strict';

$(function () {
	function resize(){
		var windowWidth=$(window).width();
		var isSmallScreen = windowWidth < 768;
		$('#main_ad > .carousel-inner > .item').each(function(i, item) {
			var $item = $(item);
			var imgSrc =
		        isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');

		  	$item.css('backgroundImage', 'url("' + imgSrc + '")');
		      
		    if (isSmallScreen) {
		      $item.html('<img src="' + imgSrc + '" alt="" />');
		    } else {
		      $item.empty();
		    }		  	
		});
	}
	$(window).on('resize',resize).trigger('resize');
    
    $('[data-toggle="tooltip"]').tooltip();


  // 控制标签页宽度
  var $ulContainer = $('.nav-tabs');

  var width = 30; 

  $ulContainer.children().each(function(index, element) {
    // console.log(element.clientWidth);
    // console.log($(element).width());
    width += element.clientWidth;
  });

  if (width > $(window).width()) {

    $ulContainer
      .css('width', width)
      .parent().css('overflow-x', 'scroll');
  } 

  // a点击注册事件
  var $newTitle = $('.news-title');
  $('#news .nav-pills a').on('click', function() {
    // 获取当前点击元素
    var $this = $(this);
    // 获取对应的title值
    var title = $this.data('title');
    // 将title设置到相应的位置
    $newTitle.text(title);
  });

  // 获取界面上的轮播图容器
  var $carousels = $('.carousel');
  var startX, endX;
  var offset = 50;
  // 注册滑动事件
  $carousels.on('touchstart', function(e) {
    // 手指触摸开始时记录一下手指所在的坐标X
    startX = e.originalEvent.touches[0].clientX;
    // console.log(startX);
  });

  $carousels.on('touchmove', function(e) {
    // 变量重复赋值
    endX = e.originalEvent.touches[0].clientX;
    // console.log(endX);
  });
  $carousels.on('touchend', function(e) {
    console.log(e);
    // 结束触摸一瞬间记录最后的手指所在坐标X
    // 比大小
    // console.log(endX);
    // 控制精度
    // 获取每次运动的距离，当距离大于一定值时认为是有方向变化
    var distance = Math.abs(startX - endX);
    if (distance > offset) {
      // 有方向变化
      // console.log(startX > endX ? '←' : '→');
      // 2. 根据获得到的方向选择上一张或者下一张
      //     - $('a').click();
      //     - 原生的carousel方法实现 http://v3.bootcss.com/javascript/#carousel-methods
      $(this).carousel(startX > endX ? 'next' : 'prev');
    }
  });








});














