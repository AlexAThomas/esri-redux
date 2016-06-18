export const initialState = {
  locateModalVisible: false,
  shareModalVisible: false,
  viewReady: false,
  itemInfo: {}
};

export const text = {
  title: 'Esri Material UI'
};

export const mapOptions = {
  basemap: 'streets-navigation-vector'
};

export const viewOptions = {
  ui: { components: ['logo', 'attribution'] },
  center: [-35.55, 26.53],
  zoom: 2
};

export const urls = {
  itemInfo: (appid: string) => `//www.arcgis.com/sharing/rest/content/items/${appid}/data`
};
