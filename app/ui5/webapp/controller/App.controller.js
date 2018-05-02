sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageBox'
], function (Controller, MessageBox) {
    'use strict';

    return Controller.extend('aniver.ui5.controller.App', {

        onInit: function () {
            MessageBox.success("",{
                title: 'Bem vindo Nelson!'
            });
        },

        onBeforeRendering: function () {},

        onAfterRendering: function () {},

        onExit: function () {},

        onPress: function () {
            alert('Foi inputado: ' + this.byId('input').getValue());
        }

    });
});