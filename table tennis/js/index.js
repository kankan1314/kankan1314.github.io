
$(function() {
	$('.bot-img ul li').click(function() {
		var _this = $(this);
		_this.addClass('active').siblings('li').removeClass('active');
		var int = _this.index();
		$('.activeimg').animate({
			left: int * -960
		}, "slow");
	});
	var list = $('.bot-img ul li').length;
	$('.activeimg').css({
		width: list * 960,
	});
	$('.right').click(function() {
		next(list)

	})
	$('.left').click(function() {
		prev(list)
	});

	//�Զ����� 2�벥��һ�� ����ѭ��
	var timer = '';
	var num = 0;
	timer = setInterval(function() { //�򿪶�ʱ��
		num++;
		if(num > parseFloat(list) - 1) {
			num = 0;
			$('.activeimg').animate({
				left: num * -960
			}, "slow");
		} else {
			$('.activeimg').animate({
				left: num * -960
			}, "slow");
		}
	}, 2000);
})
var index = 0;
//��һ��
function next(list) {
	if(index < list - 1) {
		index++;
		$('.activeimg').animate({
			left: index * -960
		}, "slow");
		$('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active')
	} else {
		index = 0;
		$('.activeimg').animate({
			left: index * -960
		}, "slow");
		$('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active')
	}
}
//        ��һ��
function prev(list) {
	index--;
	if(index < 0) {
		index = list - 1;
		$('.activeimg').animate({
			left: index * -960
		}, "slow");
		$('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active')
	} else {
		$('.activeimg').animate({
			left: index * -960
		}, "slow");
		$('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active')
	}
}