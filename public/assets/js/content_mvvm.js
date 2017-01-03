new Vue({
    el: '#content_wrapper',
    mounted: function() {
        $(window).on('popstate', (event) => {
            if (event.originalEvent.state && event.originalEvent.state.module === 'content') {
                this.updateContent();
            }
        });
        
        this.updateContent();
    },
    data: {
        
    },
    methods: {
        getContentPath: function() {
            var filename = document.location.pathname.split('/').pop();
            
            if (filename === '' || filename === 'index.html') {
                return 'content/news.html';
            } else {
                return 'content/' + filename;
            }
        },
        updateContent: function() {
            this.$http.get(this.getContentPath())
            .then((response) => {
                response.text().then((content) => {
                    $(this.$el).html(content);
                }, () => {
                    alert('Sorry, could not load content');
                });
            }, () => {
                alert('Sorry, could not get content');
            });
        }
    }
});