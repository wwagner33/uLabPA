function Alma(){
  //console.log("classe Alma");
};

var Activity = require('../models/activityModel'),
  Laboratory = require('../models/laboratoryModel'),
  UserContext = require('../models/userContextModel'),
  UserInteraction = require('../models/userInteractionModel'),
  User = require('../models/userModel'),
  WidgetContext = require('../models/widgetContextModel');

Alma.prototype.list_all_activities = function() {
  var promise = Activity.find();
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.create_a_activity = function(data) {
  //Recebe no formato { name: 'nome teste2', description: 'desc teste2' }
  //pode ser lido como data.name
  var content = new Activity(data);
  content.save(function(err){
    if(err)
      return err;
  });
};

Alma.prototype.list_all_laboratories = function() {
  var promise = Laboratory.find();
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.list_all_userContexts = function() {
  var promise = UserContext.find();
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.list_all_users = function() {
  var promise = User.find();
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.list_all_userInteractions = function() {
  var promise = UserInteraction.find();
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.list_all_widgetContexts = function() {
  var promise = WidgetContext.find();
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

/*
exports.read_a_activity = function(req, res) {
  Activity.findById(req.params.activityId, function(err, activity) {
    if (err)
      res.send(err);
    res.json(activity);
  });
};

exports.update_a_activity = function(req, res) {
  //{upsert: true} // (opcional) se nao existir com esse criterio, sera criado
  //{new: true}    // (opcional) para retornar o documento atualizado
  Activity.findOneAndUpdate({_id: req.params.activityId}, req.body, {new: true}, function(err, activity) {
    if (err)
      res.send(err);
    res.json(activity);
  });
};

exports.delete_a_activity = function(req, res) {
  Activity.remove({_id: req.params.activityId}, function(err, activity) {
    if (err)
      res.send(err);
    res.json({ message: 'Activity deleted' });
  });
};
*/



module.exports = Alma;
