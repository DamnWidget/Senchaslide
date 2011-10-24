Ext.define('Senchaslide.view.DataIntegration', {
    extend: 'Ext.Panel',
    
    config: {
        cls: 'dataintegration',
        scrollable: true,
        html: [
            '<div>',
            '<img src="/media/cajica.png" />',
            '<p>Sencha Touch implementa el patrón de diseño <b>MVC</b> (Model View Controller) al igual que lo hace ',
            'su hermano mayor ExtJS 4. Además nos ofrece una API rica y poderosa para manejar flujos de datos ',
            'desde <b>gran variedad de fuentes</b>.</p>',
            '<p>Podemos beber datos directamente a través de AJAX, JSONP o YQL. Podemos enlazar dichos datos a ',
            'nuestras vistas y podemos trabajar con esos datos sin conexión gracias al <b>almacenamiento local de HTML5</b>.</p>',
            '</div>'
        ].join("")
    }
});