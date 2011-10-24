Ext.define('Senchaslide.view.ViewIntro', {
    extend: 'Ext.Panel',
    
    config: {
        cls: 'viewintro',        
        scrollable: true,
        html: [
            '<div>', 
            '<img class="sencha" src="media/sencha.png" />',
            '<p>En Sencha Touch, una vista es todo aquel script o código JavaScript que dibuje una salida de datos en pantalla.</p>',                                   
            '<p>El patrón de diseño MVC en Sencha Touch 2 Preview r1 aún no está lo suficientemente maduro y el asunto de la vista ',
            'es quizás aún un poco abstracto.</p>',
            '<p>Las vistas se definen por regla general a la hora de ser usadas por los controladores. Además son las encargadas de enviar eventos hacia los controladores</p>',
            '</div>'
        ].join("")
    }
});