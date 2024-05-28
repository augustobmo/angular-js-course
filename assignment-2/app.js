(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('BuyingListService', BuyingListService);


    ToBuyController.$inject = ['BuyingListService'];
    function ToBuyController(BuyingListService) {
        var toBuy = this;

        var names = ['Cookies', 'Banana(s)', 'Apple(s)', 'Soda(s)', 'Chocolate bar(s)'];
        var quantities = [10, 5, 1, 1, 15];

        for (let i = 0; i < names.length; i++) {
            BuyingListService.addItemToBuy(names[i], quantities[i]);
        }

        toBuy.items = BuyingListService.getItemsToBuy();

        toBuy.changeItem = function (itemIndex) {
            BuyingListService.changeItemToBought(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = ['BuyingListService'];
    function AlreadyBoughtController(BuyingListService) {
        var bought = this;
        
        bought.items = BuyingListService.getItemsBought();

    }

    function BuyingListService() {
        var service = this;

        var itemsToBuy = [];
        var itemsBought = [];

        service.addItemToBuy = function (itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };
            itemsToBuy.push(item);
        };

        service.changeItemToBought = function (itemIndex) {
            var new_item = itemsToBuy.splice(itemIndex, 1);
            console.log("item alterado: ",new_item[0]);
            itemsBought.push(new_item[0]);
        };

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };

        service.getItemsBought = function () {
            return itemsBought;
        };
    }



})();