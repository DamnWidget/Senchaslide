(function() {
    var root = {
        items: [{
            text: 'Características',
            cls: 'launchscreen',
            items: [{
                text: 'Estándares Web',
                view: 'WebStandards',
                leaf: true
            }, {
                text: 'Dispositivos Táctiles',
                view: 'TouchDevices',
                leaf: true
            }, {
                text: 'Integración PhoneGap',
                view: 'PhoneGap',
                leaf: true
            }, {
                text: 'Integración de Datos',
                view: 'DataIntegration',
                leaf: true
            }, {
                text: 'Sistema de Clases',
                view: 'Classes',
                leaf: true
            }, {
                text: 'Empaquetado Nativo',
                view: 'NativePackaging',
                leaf: true
            }]
        }, {
            text: 'Estructura',
            cls: 'estructura',
            items: [{
                text: 'Jerarquía de Directorios',
                view: 'Hierarchy',
                leaf: true
            }, {
                text: 'Ext.Application',
                view: 'Application',                
                leaf: true                 
            }]
        }, {
            text: 'En Materia',
            cls: 'materia',
            items: [{
                text: '¡Hola Mundo!',
                view: 'HelloWorld',
                leaf: true
            }, {
                text: 'MVC',
                view: 'MVC',
                items: [{
                    text: 'Model',                    
                    items: [{
                        text: 'Clases a lo ExtJS 4',
                        view: 'ExtClasses',
                        items: [{
                            text: 'Introducción',
                            view: 'ClassesIntro',
                            leaf: true
                        },{
                            text: 'Dependencias y Carga Dinámica',
                            view: 'DinamicLoad',
                            leaf: true
                        }, {
                            text: 'Convención de Nombres',
                            view: 'NamingConventions',
                            leaf: true
                        }]
                    }, {
                        text: 'Models y Stores',
                        view: 'ModelStore',
                        items: [{
                            text: 'Introducción',
                            view: 'ModelIntro',
                            leaf: true
                        }, {
                            text: 'Inline Data',
                            view: 'InlineData',
                            leaf: true
                        }, {
                            text: 'Ordenación y Agrupado',
                            view: 'OrderGrouping',
                            leaf: true
                        }, {
                            text: 'Proxies',
                            leaf: true
                        }, {
                            text: 'Asociaciones',
                            leaf: true
                        }, {
                            text: 'Validadores',
                            leaf: true
                        }]
                    }]
                }, {
                    text: 'View',
                    view: 'ViewIntro',
                    leaf: true                    
                }, {
                    text: 'Controller',
                    view: 'ControllerIntro',
                    leaf: true
                }]
            }]
        }, {
            text: 'Empaquetado',
            cls: 'empaquetado',
            leaf: true
        }, {
            text: 'Preguntas',
            cls: 'preguntas',
            leaf: true
        }]
    };   
    
    Ext.define('Senchaslide.store.Secciones', {
        extend  : 'Ext.data.TreeStore',
        model   : 'Senchaslide.model.Seccion',
        requires: ['Senchaslide.model.Seccion'],
        
        root: root,
        defaultRootProperty: 'items'
    });
})();
