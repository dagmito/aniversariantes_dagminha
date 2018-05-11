sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
    'aniver/ui5/model/Formatter'
], function (Controller, Filter, FO, Formatter) {
    'use strict';
    return Controller.extend('aniver.ui5.controller.Page1', {

        formatter: Formatter,

        onInit: function () {

        },

        onAfterRendering: function (evt) {

            setInterval(function () {
                // $('.sapMCrslNext').click()
            }, 6000);

        },

        onRegister: function (evt) {
            var oColumnListItem = evt.getSource();

            this.getOwnerComponent().getRouter().navTo("Page2");
        },

    });
});