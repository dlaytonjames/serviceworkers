<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <meta name="description" content="Example">
    <meta name="author" content="Tom Lindley">
    <link rel="icon" href="">

    <title>Service Worker Example</title>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="assets/vendor/bootstrap/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="assets/vendor/bootstrap/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    
    <!-- jQuery -->
    <script src="assets/vendor/jquery/jquery-3.1.1.min.js" crossorigin="anonymous"></script>

    <!-- Latest compiled and minified JavaScript -->
    <script src="assets/vendor/bootstrap/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    
    <script src="assets/vendor/vuejs/vue.js"></script>
    <script src="assets/vendor/vuejs/vue-resource.min.js"></script>

    <script src="assets/js/swivel.min.js"></script>
  </head>

  <body>

    <div class="container" id="news_wrapper">
        
        <div class="col-md-12">
                <h1>
                    <transition name="fade" mode="out-in">
                        <span v-if="showArticle" key="article">
                            <img v-on:click="viewList" src="assets/images/back-icon.png" style="height: 40px; cursor: pointer;" alt="Back to list" />
                            {{ news[selectedArticle].title }}
                        </span>
                        <span v-if="showList" key="list">
                            News Articles
                        </span>
                    </transition>
                </h1>
        </div>
        
        <transition name="slide-fade" mode="out-in">
            <div v-if="showList" key="list">
                <div class="col-md-12 col-xs-18 col-md-12" style="margin-bottom: 10px;" v-for="(article, index) in news">
                    <div class="col-md-4">
                        <img src="assets/images/placeholder.png" style="width: 100%; height: 100%;" />
                    </div>
                    <div class="col-md-8 col-md-12 col-xs-18">
                    <h3>
                        <a href="" v-on:click.prevent="selectArticle(index)">{{ article.title }}</a>
                    </h3>
                    <p>{{ article.teaser }}</p>
                    </div>

                </div>
            </div>
            
            <div v-if="showArticle" key="article">
                <div class="col-md-4">
                    <img src="assets/images/placeholder.png" style="width: 100%; height: 100%;" />
                </div>
                <div class="col-md-8 col-md-12 col-xs-18">
                    <p>{{ news[selectedArticle].teaser }}</p>
                </div>
            </div>
        </transition>
        
    </div>
      
    <style>
        .fade-enter-active, .fade-leave-active {
          transition: opacity .3s
        }
        .fade-enter, .fade-leave-active {
          opacity: 0
        }
        /* Enter and leave animations can use different */
        
        
        /* durations and timing functions.              */
        .slide-fade-enter-active {
          transition: all .3s ease;
        }
        .slide-fade-leave-active {
          transition: all .3s;
        }
        
        .slide-fade-enter, .slide-fade-leave-active {
          transform: translateX(-50px);
          opacity: 0;
        }
    </style>
    
    <script src="assets/js/index.js"></script>
    <script src="assets/js/index_mvvm.js"></script>
    
  </body>
</html>