
import { types } from 'mobx-state-tree';

const ServerModel = function(baseModel) {
    return types.compose(
        baseModel, 
        types.model({})
            .actions(self => ({
                
                
                
            }))
            .views(self => ({
                isAhjoModel: () => true
            }))
        );
};

export default ServerModel;