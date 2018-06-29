var intervalID;

$(document).ready(function(){

    function PhKitty () {
        this.counter = 0;
        this.totalRate = 0;
        this.masterArray = [];
        this.cursors = [];                  // constructor function that has a counter
        this.domains = [];                  // and rate of the counter, along with
        this.gifs = [];                     // arrays for each building power up
        this.buzzwords = [];
        this.posts = [];
        this.articles = [];
        this.hooverTweets = [];
        this.garyV = [];
        this.artificalIntel = [];
        this.blockchains = [];
        this.shipPH = [];
        this.elons = [];
    }
    
    PhKitty.prototype.addCounter = function () {
        this.counter ++;
        // adds one to counter when image is clicked
    }

    PhKitty.prototype.replaceCounter = function () {
        $(".counter").text("▲ " + parseInt(this.counter).toLocaleString('en'));
        // replaces the static html "Counter: 0" with a scaling number
    }

    PhKitty.prototype.replaceRate = function () {
        $(".number-color").text(this.totalRate.toLocaleString('en'));
    }

    PhKitty.prototype.runPowerUps = function () {
        clearInterval(intervalID);
        var that = this;
        intervalID = setInterval(function(){
            that.counter += that.totalRate/100;
            theGame.replaceCounter();
        },10);
        // the clearInterval makes it so it adds 1, then 2, then 3 to the rate
        // as opposed to 1, then 1 + 2, then 1 + 2 + 3 to the rate

        // setInterval function takes the counter and adds the total rate to it 
        // and checks the value of counter 100 times per second.
    }

    PhKitty.prototype.calcTotalRate = function () {
        var sum = 0;
        
        this.masterArray.forEach(function(eachBuilding){
            sum += eachBuilding.rate;
        })

        this.totalRate = sum;
    }

    PhKitty.prototype.incurCost = function (cost) {
        if (this.counter >= cost) {
        this.counter -= cost;
        return true;
        } 
        return false;
    }

    function Cursor () {
        this.type = ""; //defines the cursor building constructor
        this.rate = 0.5;
        this.cost = parseInt(10 * (1.15 ** theGame.cursors.length));
    }

    Cursor.prototype.replaceCost = function () {
        $(".cost-curs").text("▼ " + (this.cost).toLocaleString('en'));
    }

    Cursor.prototype.replaceQuant = function () {
        $(".quant-curs").text(theGame.cursors.length);
    }

    function IoDomain () {
        this.type = "";
        this.rate = 1;
        this.cost = parseInt(100 * (1.15 ** theGame.domains.length));
    }

    IoDomain.prototype.replaceCost = function () {
        $(".cost-dom").text("▼ " + (this.cost).toLocaleString('en'));
    }

    IoDomain.prototype.replaceQuant = function () {
        $(".quant-dom").text(theGame.domains.length);
    }

    function GifImage () {
        this.type = "";
        this.rate = 5;
        this.cost = parseInt(500 * (1.15 ** theGame.gifs.length));
    }

    GifImage.prototype.replaceCost = function () {
        $(".cost-gif").text("▼ " + (this.cost).toLocaleString('en'));
    }

    GifImage.prototype.replaceQuant = function () {
        $(".quant-gif").text(theGame.gifs.length);
    }

    function Buzzwords () {
        this.type = "";
        this.rate = 10;
        this.cost = parseInt(1000 * (1.15 ** theGame.buzzwords.length));
    }

    Buzzwords.prototype.replaceCost = function () {
        $(".cost-buzzwords").text("▼ " + (this.cost).toLocaleString('en'));
    }

    Buzzwords.prototype.replaceQuant = function () {
        $(".quant-buzzwords").text(theGame.buzzwords.length);
    }

    function Post () {
        this.type = "";
        this.rate = 20;
        this.cost = parseInt(2000 * (1.15 ** theGame.posts.length));
    }

    Post.prototype.replaceCost = function () {
        $(".cost-post").text("▼ " + (this.cost).toLocaleString('en'));
    }

    Post.prototype.replaceQuant = function () {
        $(".quant-post").text(theGame.posts.length);
    }

    function Feed () {
        this.type = "";
        this.rate = 50;
        this.cost = parseInt(5000 * (1.15 ** theGame.articles.length));
    }

    Feed.prototype.replaceCost = function () {
        $(".cost-feed").text("▼ " + (this.cost).toLocaleString('en'));
    }

    Feed.prototype.replaceQuant = function () {
        $(".quant-feed").text(theGame.articles.length);
    }

    function HooverTweet () {
        this.type = "";
        this.rate = 100;
        this.cost = parseInt(10000 * (1.15 ** theGame.hooverTweets.length));
    }

    HooverTweet.prototype.replaceCost = function () {
        $(".cost-tweet").text("▼ " + (this.cost).toLocaleString('en'));
    }

    HooverTweet.prototype.replaceQuant = function () {
        $(".quant-tweet").text(theGame.hooverTweets.length);
    }

    function Gary () {
        this.type = "";
        this.rate = 500;
        this.cost = parseInt(50000 * (1.15 ** theGame.garyV.length));
    }

    Gary.prototype.replaceCost = function () {
        $(".cost-gary").text("▼ " + (this.cost).toLocaleString('en'));
    }

    Gary.prototype.replaceQuant = function () {
        $(".quant-gary").text(theGame.garyV.length);
    }

    function ArtIntel () {
        this.type = "";
        this.rate = 1000;
        this.cost = parseInt(1000000 * (1.15 ** theGame.artificalIntel.length));
    }

    ArtIntel.prototype.replaceCost = function () {
        $(".cost-ai").text("▼ " + (this.cost).toLocaleString('en'));
    }

    ArtIntel.prototype.replaceQuant = function () {
        $(".quant-ai").text(theGame.artificalIntel.length);
    }

    function Blockchain () {
        this.type = "";
        this.rate = 100000;
        this.cost = parseInt(10 * (1.15 ** theGame.blockchains.length));
    }

    Blockchain.prototype.replaceCost = function () {
        $(".cost-blockchain").text("▼ " + (this.cost).toLocaleString('en'));
    }

    Blockchain.prototype.replaceQuant = function () {
        $(".quant-blockchain").text(theGame.blockchains.length);
    }

    function Ship () {
        this.type = "";
        this.rate = 1000000;
        this.cost = parseInt(1000000000 * (1.15 ** theGame.shipPH.length));
    }

    Ship.prototype.replaceCost = function () {
        $(".cost-ship").text("▼ " + (this.cost).toLocaleString('en'));
    }

    Ship.prototype.replaceQuant = function () {
        $(".quant-ship").text(theGame.shipPH.length);
    }

    function Elon () {
        this.type = "";
        this.rate = 1000000000;
        this.cost = parseInt(1000000000000 * (1.15 ** theGame.elons.length));
    }

    Elon.prototype.replaceCost = function () {
        $(".cost-elon").text("▼ " + (this.cost).toLocaleString('en'));
    }

    Elon.prototype.replaceQuant = function () {
        $(".quant-elon").text(theGame.elons.length);
    }

    function News () {
      this.stories = [
        "Your Mom calls to congratulate you on \"starting your little business\"",
        "You get your first user...",
        "...who gives your first poor review on the App Store :(",
        "Six seperate startups with MIT grad student developers launch as your direct competitors",
        "Your Co-Founder files a cease and desist because you did not give them 80% equity",
      ];
    }

    News.prototype.chooseStory = function (i) {
      return this.stories[i];
    }

    // this is where that shit that makes the html and js connect go below bruh 
    
    var theGame = new PhKitty();

    $(".kitty").click(function(){
        theGame.addCounter();
        theGame.replaceCounter();
    });

    $(".upvote").click(function(){
        theGame.addCounter();
        theGame.replaceCounter();
    })

    $(".btn-icon-one").click(function(){
        var build = new Cursor();
        
        if (theGame.incurCost(build.cost)) {
            
            theGame.cursors.push(build);
            theGame.masterArray.push(build);
            build = new Cursor();
            build.replaceCost();
            build.replaceQuant();
            theGame.calcTotalRate();
            theGame.runPowerUps();
            theGame.replaceRate();
        }
    });

    $(".btn-icon-two").click(function(){
        var build = new IoDomain();

        if (theGame.incurCost(build.cost)) {
            
            theGame.domains.push(build);
            theGame.masterArray.push(build);
            build = new IoDomain();
            build.replaceCost();
            build.replaceQuant();
            theGame.calcTotalRate();
            theGame.runPowerUps();
            theGame.replaceRate();
        }
    })

    $(".btn-icon-three").click(function(){
        var build = new GifImage();
       
        if (theGame.incurCost(build.cost)) {
            
            theGame.gifs.push(build);
            theGame.masterArray.push(build);
            build = new GifImage();
            build.replaceCost();
            build.replaceQuant();
            theGame.calcTotalRate();
            theGame.runPowerUps();
            theGame.replaceRate(); 
        }
    })

    $(".btn-icon-four").click(function(){
        var build = new Buzzwords();
       
        if (theGame.incurCost(build.cost)) {
            
            theGame.buzzwords.push(build);
            theGame.masterArray.push(build);
            build = new Buzzwords();
            build.replaceCost();
            build.replaceQuant();
            theGame.calcTotalRate();
            theGame.runPowerUps();
            theGame.replaceRate();
        }
    })

    $(".btn-icon-five").click(function(){
        var build = new Post();
       
        if (theGame.incurCost(build.cost)) {
            
            theGame.posts.push(build);
            theGame.masterArray.push(build);
            build = new Post();
            build.replaceCost();
            build.replaceQuant();
            theGame.calcTotalRate();
            theGame.runPowerUps();
            theGame.replaceRate(); 
        }
    })

    $(".btn-icon-six").click(function(){
        var build = new Feed();
       
        if (theGame.incurCost(build.cost)) {
            
            theGame.articles.push(build);
            theGame.masterArray.push(build);
            build = new Feed();
            build.replaceCost();
            build.replaceQuant();
            theGame.calcTotalRate();
            theGame.runPowerUps();
            theGame.replaceRate(); 
        }
    })

    $(".btn-icon-seven").click(function(){
        var build = new HooverTweet();
       
        if (theGame.incurCost(build.cost)) {
            
            theGame.hooverTweets.push(build);
            theGame.masterArray.push(build);
            build = new HooverTweet();
            build.replaceCost();
            build.replaceQuant();
            theGame.calcTotalRate();
            theGame.runPowerUps();
            theGame.replaceRate(); 
        }
    })

    $(".btn-icon-eight").click(function(){
        var build = new Gary();
       
        if (theGame.incurCost(build.cost)) {
            
            theGame.garyV.push(build);
            theGame.masterArray.push(build);
            build = new Gary();
            build.replaceCost();
            build.replaceQuant();
            theGame.calcTotalRate();
            theGame.runPowerUps();
            theGame.replaceRate(); 
        }
    })

    $(".btn-icon-nine").click(function(){
        var build = new ArtIntel();
       
        if (theGame.incurCost(build.cost)) {
            
            theGame.artificalIntel.push(build);
            theGame.masterArray.push(build);
            build = new ArtIntel();
            build.replaceCost();
            build.replaceQuant();
            theGame.calcTotalRate();
            theGame.runPowerUps();
            theGame.replaceRate(); 
        }
    })

    $(".btn-icon-ten").click(function(){
        var build = new Blockchain();
       
        if (theGame.incurCost(build.cost)) {
            
            theGame.blockchains.push(build);
            theGame.masterArray.push(build);
            build = new Blockchain();
            build.replaceCost();
            build.replaceQuant();
            theGame.calcTotalRate();
            theGame.runPowerUps();
            theGame.replaceRate(); 
        }
    })

    $(".btn-icon-eleven").click(function(){
        var build = new Ship();
       
        if (theGame.incurCost(build.cost)) {
            
            theGame.shipPH.push(build);
            theGame.masterArray.push(build);
            build = new Ship();
            build.replaceCost();
            build.replaceQuant();
            theGame.calcTotalRate();
            theGame.runPowerUps();
            theGame.replaceRate(); 
        }
    })

    $(".btn-icon-twelve").click(function(){
        var build = new Elon();
       
        if (theGame.incurCost(build.cost)) {
            
            theGame.elons.push(build);
            theGame.masterArray.push(build);
            build = new Elon();
            build.replaceCost();
            build.replaceQuant();
            theGame.calcTotalRate();
            theGame.runPowerUps();
            theGame.replaceRate(); 
        }
    })

    var slurp = new News();
    var storyIndex = 0;
    
    setInterval(function(){
      if(storyIndex < 5) {
        $(".slurp").text(slurp.chooseStory(storyIndex));
        storyIndex++;
      } else {
        storyIndex = 0;
      }
    },4000);



});