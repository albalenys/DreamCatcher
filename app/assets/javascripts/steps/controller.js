function StepsController(){};
StepsController.prototype.getNewDreamForm = function(eventTarget){
  DreamCatcher.send({callback: StepView.showNewDreamForm,
                    params: eventTarget});
}
StepsController.prototype.getEditDreamForm = function(eventTarget){
  DreamCatcher.send({callback: StepView.showEditDreamForm,
                    params: eventTarget});
};
StepsController.prototype.removeStep = function(eventTarget){
  DreamCatcher.send({data: Obj.fromForm(eventTarget),
                    callback: StepView.removeStepDiv,
                    params: eventTarget});
};
StepsController.prototype.postStep = function(eventTarget){
  DreamCatcher.send({data: Obj.fromForm(eventTarget),
                    callback: StepView.showNewStep,
                    params: eventTarget});
};
StepsController.prototype.updateStep = function(eventTarget){
  DreamCatcher.send({data: Obj.fromForm(eventTarget),
                    callback: StepView.showUpdatedStep,
                    params: eventTarget});
};