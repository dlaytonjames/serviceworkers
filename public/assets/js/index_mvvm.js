new Vue({
    el: '#news_wrapper',
    mounted: function() {
        this.$http.get('assets/json/news.json')
            .then((response) => {
                response.json().then((json) => {
                    this.news = json.list;
                }, () => {
                    alert('Sorry, news is an invalid format');
                });
            }, () => {
                alert('Sorry, could not get the news');
            });
    },
    data: {
        news: [],
        selectedArticle: null,
        showArticle: false,
        showList: true
    },
    methods: {
        selectArticle: function(index) {
            this.selectedArticle = index;
            this.showList = false;
            this.showArticle = true;
        },
        
        viewList: function() {
            this.showArticle = false;
            this.showList = true;
            this.selectedArticle = null;
        },
        
        expandArticle: function(aaa) {
            console.log('expandArticle', aaa);
            this.expandSelectedArticle = true;
        }
    }
});