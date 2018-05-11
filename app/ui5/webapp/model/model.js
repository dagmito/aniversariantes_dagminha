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
           
            $.ajax({
                url: URL,
                method: 'GET',
                crossDomain: true,
                async: 'true',
                headers: {
                    'Accept': 'application/json'
                },
                success: function (res){
                    var oData = [];
                    var item = {};
                    var cnpj;
                    
                    for (var i = 0; i < res.length; i++){
                        var obj = {};

                        obj.cnpj      = res[i].cnpj;
                        obj.nome      = res[i].nome;
                        obj.sobrenome = res[i].sobrenome;
                        obj.apelido   = res[i].apelido;
                        obj.data_nasc = res[i].data_nasc;
                        obj.ativo     = res[i].ativo;

                        oData.push(obj);
                    }
                    oModel.setData(oData);
					oModel.fireEvent("requestCompleted");
					return oModel;
                },
                error: function (error){
                }
            });
            return oModel;
        }
    }
});