import {viewCreated, toggleLocateModal, toggleShareModal, getItemInfo, updateShareText} from 'js/reducers/mapReducers';
import {combineReducers} from 'redux';

// This is my state model and each reducer maps to each store property
export default combineReducers({
  locateModalVisible: toggleLocateModal,
  shareModalVisible: toggleShareModal,
  shareText: updateShareText,
  viewReady: viewCreated,
  itemInfo: getItemInfo
});
