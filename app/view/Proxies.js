Ext.define('Senchaslide.view.Proxies', {
    extend: 'Ext.Panel',   
    id: 'viewProxies',
    
    config: {
        cls: 'proxies',        
        scrollable: true,
        html: [
            '<div>', 
            '<p>Los proxies son usados por los stores para cargar o guardar los datos de los modelos. Existen dos tipos de proxy, Cliente y Servidor. ',
            'Los proxy cliente son aquellos que utilizan las nuevas especificaciones del estándard HTML5, Memory y Local Storage, los proxy servidor son ',
            'aquellos que cargan los datos de algún servicio remoto com Ajax, JsonP o Rest.</p>',
            '<p>Los proxies pueden ser definidos directamente en un modelo:',           
            '<pre class="prettyprint lang-javascript">',
            'Ext.define(\'User\', {<br />',
            '   extend: \'Ext.data.Model\',<br />',
            '   fields: [\'id\', \'name\', \'age\', \'gender\'],<br />',
            '   proxy: {<br />',
            '       type: \'rest\',<br />',
            '       url: \'data/users\',<br />',
            '       reader: {<br />',
            '           type: \'json\',<br />',
            '           root: \'users\'<br />',
            '       }<br />',
            '   }<br />',
            '});<br />',
            '<br />',
            '// Usa el proxy del modelo User<br />',
            'Ext.create(\'Ext.data.Store\', {<br />',
            '   model: \'User\'<br />',
            '});<br />',
            '</pre></p>',  
            '<p>Esto supone una mejora con respecto a versiones anteriores de los productos ExtJS y Sencha Touch 1.x ya que de esta manera, todos los stores ',
            'que necesiten usar el modelo User, cargaran los datos de la misma forma y no duplicaremos la definición del proxy en cada store. También podemos ',
            'cargar y guardar datos directamente desde el modelo sin necesidad de un store.</p>',                      
            '</div>'
        ].join("")
    }
});