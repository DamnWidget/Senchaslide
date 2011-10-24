Ext.define('Senchaslide.view.ModelIntro', {
    extend: 'Ext.Panel',   
    
    config: {
        cls: 'modelintro',        
        scrollable: true,
        html: [
            '<div>', 
            '<p>La carga y guardado de datos en Sencha Touch se controlan con el paquete de datos. Este paquete incluye Modelos, Almacenes y Proxies (Model, Store, Proxy)</p> ',           
            '</div><div class="list"><p><ul><li><strong>Model</strong> - un modelo representa un tipo de cosa de la que nuestra aplicación se preocupa.</li> ',
            '<li><strong>Store</strong> - un almacen es una colección de instancias de modelos.</li>',
            '<li><strong>Proxy</strong> - Los proxies son los responsables de cargar y guardar los datos.</li>',
            '</ul></p></div>',
            '<div><img src="media/model.png" />',                        
            '</div>'
        ].join("")
    }
});