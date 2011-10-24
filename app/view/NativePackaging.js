Ext.define('Senchaslide.view.NativePackaging', {
    extend: 'Ext.Panel',
    
    config: {
        cls: 'packaging',
        scrollable: true,
        html: [
            '<div>',
            '<img src="/media/kirsch2.png" width="400px;" />',
            '<p>En Sencha Touch 2 se ha añadido un mecanismo de empaquetado nativo para poder empaquetar nuestras ',
            'aplicaciones utilizando <b>un único comando</b> sin necesidad de utilizar ningún SDK externo, tan solo ',
            'tenemos que utilizar el SDK de Sencha Touch 2 para ello.</p>',
            '<p>De esta manera eliminamos la dependencia de PhoneGap a la hora de empaquetar las aplicaciones que ',
            'desarrollemos con Sencha Touch 2 para poder subirlas al Marketplace o a la App Store.</p>',
            '</div>'
        ].join("")
    }
});