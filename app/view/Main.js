if (Ext.os.deviceType == 'Phone') {
    Ext.define('Senchaslide.view.Main', {
        id: 'mainNestedList',
        extend: 'Ext.dataview.NestedList',
        requires: [
            'Ext.NavigationBar'
        ],
        config: {
            store: 'Secciones',
            title: 'Conociendo Sencha Touch',
            useTitleAsBackText: false,
            toolbar: {
                id: 'mainNavigationBar'
            },
            fullscreen: true
        }
    });
} else {
    Ext.define('Senchaslide.view.Main', {
        extend: 'Ext.Container',
        requires: [
            'Ext.dataview.NestedList',
            'Ext.NavigationBar'
        ],
        config: {
            fullscreen: true,
            layout: {
                type: 'card',
                animation: {
                    type: 'slide',
                    direction: 'left',
                    duration: 250
                }
            },
            items: [{
                id: 'mainview',
                cls: 'mainview',
                scrollable: true,
                html: [                    
                    '<img class="sencha" src="media/sencha.png" />',
                    '<h1>Conociendo Sencha Touch</h1>',
                    '<p>Una introducción al framework de desarrollo de aplicaciones web basado en ',
                    'los estándares web HTML5 y CSS3</p>',
                    '<h2>Por Oscar Campos - Open Phoenix IT - Delirium Coder</h2><br />',
                    '<p><img class="open-phoenix" src="media/open-phoenix.png" width="400px"/></p>',
                    '<p><img class="delirium-coder" src="media/dc.png" width="400px" /></p>',
                    '<p>Twitter: <a href="http://twitter.com/damnwidget">@damnwidget</a></p>'
                ].join("")
            }, {
                id: 'mainNestedList',
                xtype: 'nestedlist',
                useTitleAsBackText: false,
                docked: 'left',
                width: 250,
                store: 'Secciones'
            }, {
                id: 'mainNavigationBar',
                xtype: 'navigationbar',
                docked: 'top',
                title: 'Conociendo Sencha Touch'                
            }]
        }
    });
}
