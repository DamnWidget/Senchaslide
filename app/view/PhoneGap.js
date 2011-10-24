Ext.define('Senchaslide.view.PhoneGap', {
    extend: 'Ext.Panel',
    
    config: {
        cls: 'phonegap',
        scrollable: true,
        html: [
            '<div>',
            '<img src="/media/PhoneGap.svg" />',
            '<p>Sencha Touch funciona <b>perfectamente</b> junto a PhoneGap que nos permite hacer uso de la ',
            'API nativa del dispositivo para acceder a la lista de contactos, la cámara, el giroscopio y ',
            'otras muchas características.</p>',
            '<p>Además, PhoneGap nos permite <b>empaquetar</b> nuestras aplicaciones desarrolladas en Sencha Touch 1.x ',
            'y subirlas así al Android Marketplace o a la App Store.</p>',
            '</div>'
        ].join("")
    }
});