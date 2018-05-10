sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device",
	"sap/m/MessageBox"
], function (JSONModel, Device, MessageBox) {
	"use strict";

    return {
        createModel: function (oComponent) {
            var oModel = new JSONModel();

            var URL = oComponent.serviceUrl + '/colaborators';
            var json = {};
            
        }
    }

});