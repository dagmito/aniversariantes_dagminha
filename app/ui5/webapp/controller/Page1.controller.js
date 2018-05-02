sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
    'aniver/ui5/model/Formatter'
], function(Controller, Filter, FO, Formatter) {
    'use strict';
    return Controller.extend('aniver.ui5.controller.Page1',{
        
        formatter: Formatter,

        onPress: function (evt) {
            var oColumnListItem = evt.getSource();

            this.getOwnerComponent().getRouter().navTo("Page2",{
                value: oColumnListItem.getCells()[1].getBinding("title")._getValue()
            });
        },

        onSearch: function (evt) {
            var aFilter = [];
            var sQuery = evt.getParameter("query");

            if (sQuery) {
                aFilter.push(new Filter("ProductName", FO.Contains, sQuery));
            }

            var oTable = this.byId("table");
            var oBinding = oTable.getBinding("items");
            oBinding.filter(aFilter);
        }
    });
});