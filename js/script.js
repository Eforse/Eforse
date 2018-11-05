jQuery('document').ready(function() {
		jQuery('#amount, #myselect').on('keyup keypress click', function() {
				var  amount, value, money;


            var value = document.getElementById('myselect').value;

			amount = jQuery('#amount').val();
			money = value*amount;

			jQuery('#info').html('Стоимость заказа составляет:'+ money + ' ₽' )

		})

})