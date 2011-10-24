Ext.define('Senchaslide.view.NamingConventions', {
    extend: 'Ext.Panel',
    id: 'viewNamingConventions',
    
    config: {
        cls: 'dinamic',        
        scrollable: true,
        html: [
            '<div>', 
            '<p>La convención de nombres es algo que se echaba de menos en el mundo ExtJS y Sencha 1.x pero ahora existe docuementación específica sobre ello.</p> ',           
            '<p>No solo se dan consejos sobre los nombres que dar a las clases sino que además, debido en gran medida a la nueva característica de auto carga de clases, ',
            'las clases se buscan en el disco duro en el path de la jerarquía del nombre de la clase. Así por ejemplo la clase <code>MyClass.utils.Trocolizador</code>, ',
            'se bsucaría en el path <code>proyecto/MyClass/utils/Trocolizador.js</code>.</p> ',
            '<p>La nueva sintaxis de delcaración de clases es mucho más clara y sencilla que la anterior:',
            '<pre class="prettyprint lang-javascript">',
            '// Método antiguo<br />',
            'var MyPanel = Ext.extend(Object, { ... });<br />',
            '<br />',
            '// Método nuevo<br />',
            'Ext.define(className, members, onClassCreated);<br />',
            '</pre>',            
            '</div>'
        ].join("")
    }
});