Ext.define('Senchaslide.view.Preguntas', {
    extend: 'Ext.Panel',    
    
    config: {
        cls: 'preguntas',        
        scrollable: true,
        html: [
            '<div>',            
            '<img src="/media/futurama_bender.jpg" />',
            '<p>Esta presentación ha sido programada íntegramente con Sencha Touch 2 Preview r1</p>',
            '<p>El código de la misma puede descargarse de GitHub en la siguiente dirección:<br /> ',
            '<a href="https://github.com/DamnWidget/Senchaslide">https://github.com/DamnWidget/Senchaslide</a></p>',
            '<p>Sígueme en Twitter: <a href="http://twitter.com/damnwidget">@damnwidget</a></p>',
            '</div>'
        ].join("")
    }
});