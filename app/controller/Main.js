Ext.define('Senchaslide.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        profile: Ext.os.deviceType.toLowerCase()
    },
    
    views: [
        'Main',
        'PhoneGap',
        'TouchDevices',
        'WebStandards',
        'NativePackaging',
        'DataIntegration',
        'Classes'
        //'NestedList'
    ],
    
    stores: ['Secciones'],
    
    refs: [
        {
            ref         : 'main',
            selector    : 'mainview',
            autoCreate  : true,
            xtype       : 'mainview'
        },
        {
            ref         : 'toolbar',
            selector    : '#mainNavigationBar'
        },        
        {
            ref     : 'navigation',
            selector: '#mainNestedList'
        },
        {
            ref         : 'viewport',
            selector    : 'viewport'
        }
    ],
    
    init: function() {
        this.control({
            '#mainNestedList': {
                leafitemtap: this.onLeafTap,
                back: this.onBack
            },
            
            '#viewApplication': {
                show: function() {
                    window.prettyPrint();
                }
            },
            
            '#viewHelloWorld': {
                show: function() {
                    window.prettyPrint();
                }
            },
            
            '#viewClassesIntro': {
                show: function() {
                    window.prettyPrint();
                }
            }
        });
    },
    
    onBack: function(list, index) {         
    },
    
    onLeafTap: function(list, index) {
        if (this.mainAnimating) {
            return false;
        }
        
        var navigation = this.getNavigation(),
            mainView = this.getMain(),
            mainLayout = mainView.getLayout(),
            record = list.getStore().getAt(index),
            viewTitle = record.get('text'),
            viewName = record.get('view') || viewTitle,
            xtype = viewName.toLowerCase() + 'view',
            getter = 'get' + Ext.String.capitalize(viewName),            
            profile = this.getProfile(),
            animationRecord = record.get('animation'),
            card, initialAnimation;
                
        if (!viewName.length) {
            return;
        }
        
        if (!this.hasRef(viewName)) {
            this.getView(viewName, {
                profile: profile
            });
            this.addRef({
                ref       : viewName,
                selector  : xtype,
                xtype     : xtype,
                autoCreate: true
            });
        }
        
        card = this[getter]();        
        
        if (this.getMain().getActiveItem() == card) {
            var navigation = this.getNavigation(),
            card = this.getMain().getItems().items[0];
         
            navigation.setDetailCard(card);                                    
            return;
        }
        
        this.initialAnimation = initialAnimation = this.initialAnimation || mainLayout.getAnimation();
        
        navigation.setDetailCard(card);
        
        if (animationRecord) {
            mainLayout.setAnimation(animationRecord);            
            if (Ext.os.name != 'Android') {
                mainLayout.getAnimation().getOutAnimation().setOnEnd(Ext.Function.bind(function() {
                    Ext.getBody().dom.style.pointerEvents = 'auto';
                }, this));
            }
        }
        else {
            mainLayout.setAnimation(initialAnimation);            
            if (Ext.os.name != 'Android') {
                mainLayout.getAnimation().getOutAnimation().setOnEnd(Ext.Function.bind(function() {
                    Ext.getBody().dom.style.pointerEvents = 'auto';
                }, this));
            }
        }
        
        if (Ext.os.name != 'Android') {
            Ext.getBody().dom.style.pointerEvents = 'none';
        }

        this.getToolbar().setTitle(viewTitle);

        if (card.setProfile) {
            card.setProfile(profile);
        }        
    },
    
    mainAnimating: false,
    
    updateProfile: function(profile) {
        this.getMain();
        var navigation = this.getNavigation(), toolbar;
        switch (profile) {
            case 'desktop':
            case 'tablet':
                navigation.setDetailContainer(this.getMain());
                break;
            case 'phone':
                break;
        }
    }
});
