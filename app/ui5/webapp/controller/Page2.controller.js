sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/core/routing/History'
], function(Controller, History) {
    'use strict';
    
    return Controller.extend('aniver.ui5.controller.Page2',{
        
        onNavPress: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            }else{
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Page1");
            }
        }

    });

});