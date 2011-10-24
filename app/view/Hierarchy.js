Ext.define('Senchaslide.view.Hierarchy', {
    extend: 'Ext.Panel',
    
    config: {
        cls: 'hierarchy',
        scrollable: true,
        html: [
            '<div><img src="/media/jerarquia.png" /></div>',
            '<div class="list"><ul>',
            '<li>Creamos un directorio en la raiz llamado <i><b>lib</b></i></li>',
            '<li>Creamos un enlace simbólico a nuestro SDK de Sencha Touch llamado <i><b>touch</b></i> dentro de <i>lib</i></li>',
            '<li>Si vamos a usar JavaScript adicional creamos un directorio llamdo <i><b>js</b></i> dentro de <i>lib</i> y colocamos allí los scripts (opcional)</li>',
            '<li>Creamos un directorio <b><i>media</i></b> en la raiz donde colocaremos los archivos multimedia (imágenes, vídeo, audio) (opcional)</li>',
            '<li>Creamos un directorio <b><i>css</i></b> en la raiz donde alojaremos nuestro CSS propio (opcional)</li>',
            '<li>Creamos un directorio <i><b>app</b></i> donde colocaremos el script principal <b><code>app.js</code></b> y donde crearemos la estructura <b>MVC</b> de la aplicación</li>',
            '</ul></div>',
            '<div><p>La estructura MVC solo la utilizaremos en el entorno de desarrollo, en producción minificaremos todos los archivos JavaScript en un único archivo para optimizar la carga.</p></div>'
        ].join("")
    }
});