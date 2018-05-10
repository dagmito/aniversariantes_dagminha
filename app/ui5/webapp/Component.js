sap.ui.define([
    'sap/ui/core/UIComponent',
    'aniver/ui5/model/model'
], function (UIComponent, model) {
    'use strict';

    return UIComponent.extend('aniver.ui5.Component', {

        metadata: {
            manifest: 'json'
        },

        init: function () {

            var that = this;

            UIComponent.prototype.init.apply(this, arguments);
            var url = window.URI()._parts;

            if (url.port) {
                this.serviceUrl = "http://" + url.hostname + ":" + url.port;
            } else {
                this.serviceUrl = "http://" + url.hostname;
            }

            this.setModel(model.createModel(this));

            // this.getModel().attachEventOnce("requestCompleted", function () {
                that.getRouter().initialize();
            // });

        }
    });
});