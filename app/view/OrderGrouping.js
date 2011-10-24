Ext.define('Senchaslide.view.OrderGrouping', {
    extend: 'Ext.Panel',   
    id: 'viewOrderGrouping',
    
    config: {
        cls: 'ordergroup',        
        scrollable: true,
        html: [
            '<div>', 
            '<p>Los almaceneces (stores) son capaces de realizar ordenación, filtrado y agrupado local, también soportan ordenamiento remoto, filtrado y agrupado:</p> ',           
            '<pre class="prettyprint lang-javascript">',
            'Ext.create(\'Ext.data.Store\', {<br />',
            '   model: \'User\',<br />',
            '<br />',
            '   sorters: [\'name\', \'id\'],<br />',
            '   filters: {<br />',
            '       property: \'name\'<br />',
            '       value: \'Oscar\'<br />',
            '   },<br />',
            '   groupField: \'age\'',
            '   groupDir: \'DESC\'<br />',            
            '});<br />',
            '</pre>',                        
            '</div>'
        ].join("")
    }
});