Ext.define('Senchaslide.view.Validadores', {
    extend: 'Ext.Panel',   
    id: 'viewValidadores',
    
    config: {
        cls: 'validadores',        
        scrollable: true,
        html: [
            '<div>', 
            '<p>Los modelos pueden validar sus datos de forma nativa en Sencha Touch 2. Añadir validación a nuestros modelos es muy sencillo: ',                                   
            '<pre class="prettyprint lang-javascript">',
            'Ext.define(\'User\', {<br />',
            '   extend: \'Ext.data.Model\',<br />',
            '   fields: ...,<br />',
            '<br />',
            '   validations: [<br />',
            '       {type: \'presence\', name: \'name\'},<br />',
            '       {type: \'length\', name: \'name\', min: 5},<br />',
            '       {type: \'format\', name: \'age\', matcher: /\d+/},<br />',
            '       {type: \'inclusion\', name: \'gender\', list: [\'male\', \'female\']},<br />',
            '       {type: \'exclusion\', name: \'name\', list: [\'admin\']}<br />',
            '   ]<br />',
            '<br />',
            '   proxy: ...{<br />',
            '});<br />',
            '</pre></p>',         
            '<p>Para comprobar la validez de una instancia de un modelo, solo tenemos que utilizar el método <code>validate()</code> ',
            'que nos devuelve un objeto de tipo error al que podemos consultar la validez de los datos mediante el método <code>isValid()</code>.</p>',
            '</div>'
        ].join("")
    }
});