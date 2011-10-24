Ext.define('Senchaslide.view.ControllerIntro', {
    extend: 'Ext.Panel',
    id: 'viewControllerIntro',
    
    config: {
        cls: 'controllerintro',        
        scrollable: true,
        html: [
            '<div>',            
            '<p>Los controladores se encargan de escuchar eventos (usualmente provenientes de las vistas) y realizar alguna acción:</p>',                                   
            '<pre class="prettyprint lang-javascript"><br />',
            'Ext.define(\'MyApp.controller.Users\', {<br />',
            '   extend: \'Ext.app.Controller\',<br />',
            '<br />',
            '   init: function() {<br />',
            '       console.log(\'Initialized Users!\');<br />',
            '   }<br />',
            '});<br />',
            '</pre><br />',
            '<p>La función <code>init</code> es una función especial que es invocada cuando la aplicación inicia. Es invocada <b>antes</b> de que ',
            'la función <code>launch</code> de la aplicación sea invocada así que ofrece un hook donde ejecutar cualquier código antes de que el ',
            'Viewport sea creado y renderizado.</p>',
            '<p>Generalmente se usa la función init para configurar los listeners que van a escuchar eventos desde los diferentes componentes y contenedores ',
            'de nuestras vistas y se <i>bindearán</i> a una función o método al ser recibidos. La forma de referirse a un componente en Sencha TOuch 2 ',
            'ha mejorado también y ahora se pueden usar pseudo selectores de CSS para ello.</p>',
            '<p>Otra mejora importante introducida en Sencha Touch 2 es el uso de referencias (<i>refs</i>) que sirven para referenciar vistas en la página ',
            'y configurar valores en ellas tan útiles como la posibilidad de que se auto dibujen al inicio.</p>',
            '</div>'
        ].join("")
    }
});