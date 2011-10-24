Ext.define('Senchaslide.view.TouchDevices', {
    extend: 'Ext.Panel',
    
    config: {
        cls: 'touchdevices',
        scrollable: true,
        html: [
            '<div>',
            '<img src="/media/dispositivos.png" />',
            '<p>Sencha Touch ha sido diseñado <b>específicamente</b> con el fin de desarrollar aplicaciones ',
            'para dispositivos táctiles por lo que incluye una amplia gama de eventos y <i>gestures</i>.</p>',
            '<p>Algunos de esos nuevos eventos son por ejemplo <i>tap</i>, <i>double tap</i> o <i>rotate</i>.',
            '</div>'
        ].join("")
    }
});
