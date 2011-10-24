Ext.define('Senchaslide.view.DinamicLoad', {
    extend: 'Ext.Panel',
    id: 'viewDinamicLoad',
    
    config: {
        cls: 'dinamic',
        scrollable: true,
        html: [
            '<div>',            
            '<p>La mayoría del tiempo, unas clases dependen de otras. En el ejemplo anterior, la clase <code>Vip</code> depende de la clase <code>Customer</code>, ',
            'y por lo tanto, el archivo donde se define la clase <code>Customer</code> debe estar presente a la hora de definir la clase <code>Vip</code>.</p>',
            '<p>Sencha Touch 2 define un mecanismo capaz de definir requerimientos y cargarlos automáticamente. Para hacerlo, podemos utiolizar la propiedad ',
            '<code>requires</code> en la configuración de la clase:</p>',
            '<pre class="prettyprint lang-javscript">',
            'Ext.define(\'Vip\', {<br />',
            '   extend: \'Animal\',<br />',
            '   requires: \'Ext.MessageBox\',<br />',
            '   <br />',
            '   buy: function() {<br />',
            '       alert(this.getName()+\' is buying with 30% of discount as VIP customer!\');<br />',
            '   }<br />',
            '});<br />',
            '</pre>',
            '<p>Cuando se crea una clase de esta manera, Sencha Touch comprueba que la clase <code>Ext.MessageBox</code> esté cargada y si no la carga de forma automática.</p>',
            '</div>'
        ].join("")
    }
});