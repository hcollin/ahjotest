import { types } from 'mobx-state-tree';

const ServerStore = function(baseStoreModel) {
    return types.compose(
        baseStoreModel,
        types.model({})
            .actions(self => ({
                
                
                requestHandler: () => {
                                             
                }
            }))
            .views(self => ({
                isAhjoStore: () => true
            }))
        );
};

export default ServerStore;