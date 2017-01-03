new Vue({
    el: '#nav_wrapper',
    mounted: function() {
        $(window).on('popstate', () => {
            this.currentPath = document.location.pathname;
        });
        
        this.currentPath = document.location.pathname;
    },
    data: {
        links: [
            {'path': 'index.html', 'name': 'News'},
            {'path': 'about.html', 'name': 'About'},
        ],
        currentPath: null,
        activeLinkIndex: null
    },
    methods: {
       onNavClick: function(event) {
           var pathExcludingDomainAndProtocol = event.target.href.replace(/.*?:\/\//g, "").substr(document.location.hostname.length);
           this.currentPath = pathExcludingDomainAndProtocol;
       },
       setActiveLink: function(path) {
           this.links.forEach((link, index) => {
               if (link.path === path) {
                   this.activeLinkIndex = index;
                   return true;
               }
           });
           
           if (this.activeLinkIndex === null) {
               this.activeLinkIndex = 0;
           }
       }
    },
    watch: {
        currentPath: function(path) {
            var fileName = path.split('/').pop();
            
            if (path !== document.location.pathname) {
                var state = {path: path, module: 'nav'};
                window.history.pushState(state, '', path);
                
                // Notify the content module to update the content
                dispatchEvent(new PopStateEvent('popstate', { state: {module: 'content'} }));
            }
            
            this.setActiveLink(fileName);
        }
    }
});