Ext.define('Senchaslide.view.InlineData', {
    extend: 'Ext.Panel',   
    id: 'viewInlineData',
    
    config: {
        cls: 'inlinedata',        
        scrollable: true,
        html: [
            '<div>', 
            '<p>Los almaceneces (stores) también pueden cargar datos en linea. El almacén convierte cada uno de los objetos que pasamos como datos en instancias de objetos Model.</p> ',           
            '<pre class="prettyprint lang-javascript">',
            'Ext.create(\'Ext.data.Store\', {<br />',
            '   model: \'User\',<br />',
            '   data: [<br />',
            '       {firstName: \'Oscar\',     lastName: \'Campos\' },<br />',
            '       {firstName: \'Víctor\',    lastName: \'Rodríguez\' },<br />',
            '       {firstName: \'Lydia\',     lastName: \'Olivera\' }<br />',            
            '   ]<br />',            
            '});<br />',
            '</pre>',                        
            '</div>'
        ].join("")
    }
});