sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    return Controller.extend('aniver.ui5.controller.Page1',{
        
        onPress: function () {
            this.getOwnerComponent().getRouter().getRoute("Page2").attachPatternMatched(this._onObjectMatched, this);
        }
    });
});