sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/core/routing/History',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel'
], function (Controller, History, Toast, JSONModel) {
    'use strict';

    return Controller.extend('aniver.ui5.controller.Page2', {

        onInit: function () {
            
        },

        onNavPress: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Main");
            }
        }

    });
});