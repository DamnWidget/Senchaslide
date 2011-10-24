Ext.define('Senchaslide.view.Classes', {
    extend: 'Ext.Panel',
    
    config: {
        cls: 'classes',
        scrollable: true,
        html: [
            '<div>',
            '<img src="media/sencha.png" />',
            '<p>En Sencha Touch 2 se usa <b>el mismo tipo de sistema de clases desarrollado para ExtJS4</b>. Dicho sistema ',
            'hace sencilla la tarea de crear nuevas clases en JavaScript, surtiéndonos de herencia, autocarga ',
            'de dependencias, mixins, y componentes dirigidos por configuración.</p>',
            '<p>El sistema de configuración de Sencha Touch 2 permite reconfigurar nuestros componentes  ',
            '<b>incluso después de haber sido renderizados</b> y la forma de fijar valores ahora siempre sigue ',
            'el mismo patrón de <i>setters</i> y <i>getters</i> por lo que siempre sabremos a que funcion llamar.</p>',
            '</div>'
        ].join("")
    }
});