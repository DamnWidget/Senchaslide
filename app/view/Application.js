Ext.define('Senchaslide.view.Application', {
    id: 'viewApplication',
    extend: 'Ext.Panel',
    
    config: {        
        cls: 'application',
        scrollable: true,
        html: [
            '<div class="main">',
            '<p>Toda aplicación desarrollada con Sencha Touch debe instanciar un objeto del tipo <b><code>Ext.app.Application</code></b> ',
            'para configurar e iniciar la aplicación. Dicho objeto se crea utilizando el método <b><code>Ext.application( Object config )</code></b></p>',
            '<p>La instancia puede implementar un <code>launcher</code>:<br />',
            '<pre class="prettyprint lang-javascript">',
            'Ext.application({<br />',
            '   name: \'MyApp\',<br />',
            '   <br />',
            '   launch: function() {<br />',
            '       ....<br />',
            '   }<br />',
            '});<br />',
            '</pre></p>',
            '<p>También se puede utilizar el modelo MVC, las referencias y la auto carga de dependencias sin usar un launcher:<br />',
            '<pre class="prettyprint lang-javascript">',
            'Ext.Loader.setConfig({ enabled: true });<br />',
            '<br />',
            'Ext.application({<br />',
            '   name: \'MyApp\',<br />',
            '   models: [\'MyModel\'], <br />',
            '   controllers: [\'MyController\']',
            '   <br />',            
            '});<br />',
            '<br />',
            '   ...',
            '</pre></p>',
            '</div>'
        ].join("")   
    }
});