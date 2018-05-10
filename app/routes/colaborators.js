module.exports = function (app) {
    controller = app.controllers.colaborators;

    app.get('/colaborators', controller.colaborators);
}