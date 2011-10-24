Ext.define('Senchaslide.view.Empaquetado', {
    extend: 'Ext.Panel',   
    
    config: {
        cls: 'empaquetado',        
        scrollable: true,
        html: [
            '<div>',            
            '<img src="/media/cajica.png" />',
            '<p>El empaquetado para iOS y Android se realiza con el SDK Tools y con los mismos comandos desde la consola. Con <code>sencha pcakage generate &lt;configTemplate.json></code> ',
            'podemos crear un archivo en formato JSON que nos sirva como configuración del paquete, en el podremos configurar múltiples valores del paquete objetivo.</p>',
            '<p>Ejecutando <code>sencha package run &lt;configFile.json></code> podremos crear un paquete para depurar nuestro paquete en el emulador correspondiente. Por último, hacienod uso ',
            'del comando <code>sencha package &lt;configFile.json> podremos empaquetar de forma definitiva nuestra aplicación.</p>',
            '</div>'
        ].join("")
    }
});