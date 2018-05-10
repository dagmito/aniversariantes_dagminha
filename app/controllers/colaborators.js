module.exports = function (app) {

    var Colaborators = {

        colaborators: function (req, res) {
            var colaboreDAO = new app.infra.colaboreDAO(app);
            // var colaboreModel = new app.models.colaborators();

            colaboreDAO.selectAll(function (err, result) {

                if (err) {
                    console.log("Deu Shit foda no banco" + err);
                }
                else {
                    res.format({
                        json: function () {
                            res.json(result);
                        }
                    });
                }
            });
        }
    }
    return Colaborators;
}