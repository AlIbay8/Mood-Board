// If mood not found, display Kerosene: http://images6.fanpop.com/image/photos/39700000/-Koro-sensei-s-Many-Faces-ansatsu-kyoushitsu-39732605-400-400.gif
var found = false;

var happy = {
    Keys: ["happy", "great", "good", "content", "cheer", "merry", "jolly", "glee"],
    Imgs: ["https://ih0.redbubble.net/image.455323426.7293/pp,550x550.u2.jpg", "https://dg.imgix.net/do-you-think-you-re-happy-jgdbfiey-en/landscape/do-you-think-you-re-happy-jgdbfiey-9bb0198eeccd0a3c3c13aed064e2e2b3.jpg?ts=1520525855&ixlib=rails-3.0.2&auto=format%2Ccompress&fit=min&w=700&h=394&dpr=2&ch=Width%2CDPR", "http://i60.tinypic.com/9vcnqr.jpg"],
    Color: "yellow"
};

var sad = {
    Keys: ["sad", "bad", "terrible", "not good", "unhappy", "sorrowful", "dejected", "regretful", "depressed", "not doing good", "miserable", "feeling down", "a bit down"],
    Imgs: ["https://i.imgur.com/lkQYxbY.jpg", "https://i.imgur.com/xn0J0hI.png", "https://wallpapercollection.net/wp-content/uploads/2018/03/5la9tz8.jpg"],
    Color: "#204ec1"
};

var hungry = {
    Keys: ["hungry", "hunger", "starving", "starve", "ravenous", "famished", "peckish"],
    Imgs: ["https://i.imgur.com/ZtncYzo.gif", "https://d1fs8ljxwyzba6.cloudfront.net/assets/editorial/2017/04/little-nightmares-story-summary-bread.jpg", "https://tasteforlife.com/sites/default/files/styles/desktop/public/tools/quizzes/quiz-how-hungry-are-you-really/quiz-how-hungry-are-you-really.jpg?itok=-pGgwbmX"],
    Color: "orange"
};
var excited = {
    Keys: ["excited", "pumped", "enthusiastic", "revved up", "fired up", "energetic"],
    Imgs: ["https://i.imgur.com/jbQ3Vv1.jpg", "https://lzerbnaiva.files.wordpress.com/2019/02/seasonal-uniform-change.png?w=700", "https://i0.wp.com/www.thenerddaily.com/wp-content/uploads/2018/08/One-Punch-Man-Season-2.jpg"],
    Color: "cyan"
};

var mad = {
    Keys: ["mad", "angry", "furious", "aggravate", "fuming", "vexed", "exasperated", "frustrate", "frustrating"],
    Imgs: ["https://i.ytimg.com/vi/EPu1aVJiyoE/maxresdefault.jpg", "https://i.kym-cdn.com/photos/images/newsfeed/001/068/225/2a0.png", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3c6090b4-c181-4717-9483-e57e9a28f609/d9q6eq6-2cf8ccab-193c-48b9-a66d-714bbd3d8c1e.png/v1/fill/w_1192,h_670,q_70,strp/koro_sensei__extreme_anger__by_ovieswifty_d9q6eq6-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzNjNjA5MGI0LWMxODEtNDcxNy05NDgzLWU1N2U5YTI4ZjYwOVwvZDlxNmVxNi0yY2Y4Y2NhYi0xOTNjLTQ4YjktYTY2ZC03MTRiYmQzZDhjMWUucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.2bqQSJ6woTB_rjngX-0hkhROC2PVlMei6cFms8XFPoU"],
    Color: "red"
};
var infuriating = {
    Keys: ["infuriating", "infuriated", "irritating", "irritated", "annoying", "annoy", "enrage", "maddened"],
    Imgs: ["https://i.ytimg.com/vi/pBJ3Fj54Ij4/maxresdefault.jpg", "http://bucket.trending.com/trending/reddit/2018-07-18/the-way-apple-wants-me-to-recharge-my-mouse-is-mildly-this-is-a-silly-design.jpg", "https://thechive.files.wordpress.com/2017/12/mildly-infuriating-things-annoying-awful-28.jpg?quality=85&strip=info&w=600"],
    Color: "red"
};
var tired = {
    Keys: ["tired", "worn out", "exhausted", "fatigued", "weary", "sleepy", "drowsy"],
    Imgs: ["https://i.kinja-img.com/gawker-media/image/upload/s--VG-hq8an--/c_scale,f_auto,fl_progressive,q_80,w_800/kku6l8wo74rr0mgksi0x.jpg", "https://images.theconversation.com/files/108832/original/image-20160121-9760-e1bi33.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip", "https://i.kym-cdn.com/photos/images/newsfeed/001/034/720/901.gif"],
    Color: "gray"
};

var scared = {
    Keys: ["scared", "afraid", "nervous", "frightened", "fearful", "panic", "anxious", "anxiety"],
    Imgs: ["https://i.ytimg.com/vi/WrjpCChfib8/maxresdefault.jpg", "https://pics.me.me/mom-come-pick-me-up-im-scared-43413181.png", "https://image.shutterstock.com/image-photo/little-boy-nervous-450w-376680250.jpg"],
    Color: "darkred"
};

var moods = [happy, sad, hungry, excited, mad, infuriating, scared];

$(".submit").click(function() {
    var mood = $("input").val().toLowerCase();
    found = false;

    if (mood !== "") {
        moods.forEach(function(emotion) {
            if (!found) {
                emotion["Keys"].forEach(function(keyword) {
                    if (mood.includes(keyword)) {
                        displayMood(emotion["Color"], emotion);
                    }
                });
            }
            
            if (!found) {
                if (mood !== "") {
                    $(".output").html("<div><img src='" + "http://images6.fanpop.com/image/photos/39700000/-Koro-sensei-s-Many-Faces-ansatsu-kyoushitsu-39732605-400-400.gif" + "'><p>It seems that we couldn't find your mood. So here's a bunch of different moods.</p></div>");
                    changeBackground("white");
                }
            }
        });
    }


});

function displayMood(color, object) {
    found = true;
    $(".output").html("");
    changeBackground(color);

    object["Imgs"].forEach(function(img) {
        $(".output").append("<div><img src='" + img + "'></div>");
    });
}

function changeBackground(color) {
    $("body").css("background-color", color);
}