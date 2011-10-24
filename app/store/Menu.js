Ext.define('Presentación.data.MenuStore', {
    extend: 'Ext.data.TreeStore',
    
    model: 'Presentacion.model.Menu',
    proxy: {
        type: 'ajax',
        url: '/data/menus.json',
        reader: {
            type: 'tree',
            root: 'items'
        }
    }
});
