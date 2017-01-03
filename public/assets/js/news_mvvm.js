new Vue({
    el: '#news_wrapper',
    mounted: function() {
        this.$http.get('assets/json/news.json')
            .then((response) => {
                response.json().then((json) => {
                    this.news = json.list;
                    this.setViewFromUrl();
                }, () => {
                    alert('Sorry, news is an invalid format');
                });
            }, () => {
                alert('Sorry, could not get the news');
            });
            
            $(window).on('popstate', (event) => {
                this.setViewFromUrl();
            });
    },
    data: {
        news: [],
        selectedArticle: null,
        showArticle: false,
        showList: true
    },
    methods: {
        selectArticle: function(index, disableHistoryPush) {
            this.selectedArticle = index;
            this.showList = false;
            this.showArticle = true;
            
            if (disableHistoryPush === undefined || !disableHistoryPush) {
                window.history.pushState({newsArticle: index, module: 'news'}, '', '#newsArticle=' + index);
            }
        },
        
        viewList: function(disableHistoryPush) {
            this.showArticle = false;
            this.showList = true;
            this.selectedArticle = null;
            
            console.log(disableHistoryPush, disableHistoryPush === undefined || !disableHistoryPush);
            
            if (disableHistoryPush === undefined || !disableHistoryPush) {
                window.history.pushState({newsArticle: null, module: 'news'}, '', document.location.pathname);
            }
        },
        
        setViewFromUrl: function() {
            if (this.getArticleIdFromUrl() === null) {
                this.viewList(true);
            } else {
                this.selectArticle(this.getArticleIdFromUrl(), true);
            }
        },
        
        getArticleIdFromUrl: function() {
            if (document.location.hash.substr(0, 13) === '#newsArticle=') {
                return document.location.hash.substr(13);
            } else {
                return null;
            }
        }
    }
});