Ext.define('Senchaslide.view.ClassesIntro', {
    id: 'viewClassesIntro',
    extend: 'Ext.Carousel',
    
    config: {        
        cls: 'intro',        
        
        items: [{
            xtype: 'panel',
            scrollable: true,
            html: [
                '<div class="main">',
                '<p>Una clase es simplemente un objeto con algunas funciones y propiedades adheridas a él. Ya no tenemos que extender las clases de las que queremos derivar ',
                'tal y como hacíamos en Sencha Touch 1.x y ExtJS 3. Ya no tenemos que usar la sintáxis de initComponente y llamar al super constructor de la clase padre, ',
                'ahora podemos usar el método define para definir una nueva clase y el método create para crear instancias de ella:<br />',
                '<pre class="prettyprint lang-javascript">',
                'Ext.define(\'Customer\', {<br />',
                '   config: {<br />',
                '       name: null<br />',
                '   },<br />',
                '<br />',
                '   buy: function() {<br />',
                '       alert(\'Buying\');<br />',
                '   }<br />',
                '});<br />',
                '<br />',
                'var cliente = Ext.create(\'Customer\', {)<br />',
                '   name: \'Miguel\'<br />',
                '});<br />',
                '<br />',
                'cliente.buy();',
                '</pre></p>',
                '</div>'
            ].join("")
        }, {
            xtype: 'panel',
            scrollable: true,
            html: [
                '<div class="main2">',
                '<p>Una vez hemos creado una clase, podemos potenciarla a través de la herencia y crear un nuevo objeto a través de ella:<br />',
                '<pre class="prettyprint lang-javascript">',
                'Ext.define(\'Vip\', {<br />',
                '   extend: \'Customer\',<br />',
                '<br />',
                '   buy: function() {<br />',
                '       alert(this.getName()+\' is buying with 30% of discount as VIP customer!\');<br />',
                '   }<br />',
                '});<br />',
                '<br />',
                'clienteVip = Ext.create(\'Vip\', {<br />',
                '   name: \'Felipe\'<br />',
                '});<br />',
                '<br />',
                'clienteVip.buy();<br />',
                '</pre></p>',
                '<p>Hemos usado el método <b>mágico</b> <code>getName()</code> que el sistema de clases de Sencha Touch 2 genera junto a su <i>setter</i> (<code>setName()</code>) para nosotros</p>',
                '</div>'
            ].join("")
        }]   
    }
});