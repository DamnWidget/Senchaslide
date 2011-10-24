Ext.define('Senchaslide.view.WebStandards', {
    extend: 'Ext.Panel',
    
    config: {
        cls: 'webstandards',
        scrollable: true,
        html: [            
            '<div><img src="/media/HTML5_logo.png" width="450px" />',            
            '<p>Sencha Touch fue el <b>primer</b> framework de aplicaciones web ',
            'completa y específicamente desarrollado para aprovechar la mayor potencia y ',
            'flexibilidad de HTML5, CSS3 y JavaScript.</p>',
            '<p>Sencha touch hace uso de las nuevas especificaciones de los estándares HTML5 ',
            'y CSS3 además de incorporar una <b>extensa capa</b> de estilo CSS3 ',
            'que lo dota de un <b>aspecto nativo</b> independientemente de la ',
            'plataforma donde se ejecutan las aplicaciones.</p>',
            '</div>'
        ].join("")
    }
});
