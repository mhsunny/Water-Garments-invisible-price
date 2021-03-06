
    $(".homescroll").click(function () {
        $('html, body').animate({
            scrollTop: $("#chapter0").offset().top
        }, 2000);
    });

    var curr_el_index = 0;
    var els_length = $(".chapter").length;


    $('.scroll').click(function () {
        var className = $('.scroll img').attr('class');
        if (className == 'down') {
            curr_el_index++;
            if (curr_el_index >= els_length)
                curr_el_index = 0;
            $("html, body").animate({
                scrollTop: $(".chapter").eq(curr_el_index).offset().top - 20
            }, 700);
        } else {
            curr_el_index--;
            if (curr_el_index < 0)
                curr_el_index = els_length - 1;
            $("html, body").animate({
                scrollTop: $(".chapter").eq(curr_el_index).offset().top - 20
            }, 700);
        }

    });

    $('#nav-home, .pintotop').each(function () {
        $(this).click(function () {
            //$('.mainnav .dropdown').removeClass('current');
            $("#nav>div.current").removeClass("current");
            $(".scroll img").addClass('down').removeClass('up');

            $('html,body').animate({scrollTop: 0}, 'slow');
            return false;
        });
    });
    // start initial loading youtube player
    $(".scroll img").addClass('down').removeClass('up');
    $(".scroll img").css('display', 'none');
    $(".video-foreground iframe").remove();
    var ifrm = document.createElement("iframe");
    ysrc = "http://www.youtube.com/embed/pa0YhYFnUqo?wmode=opaque&autohide=1&autoplay=1&loop=1&playlist=pa0YhYFnUqo&enablejsapi=1";
    ifrm.setAttribute("src", ysrc);
    ifrm.setAttribute("id", 'video');
    ifrm.style.width = "100%";
    ifrm.style.height = "360";
    ifrm.style.frameborder = "0";
    ifrm.style.allowfullscreen = "1";
    $("#home .video-foreground").html(ifrm);
    // end initial loading youtube player

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            // alert(1);
            //onYouTubeIframeAPIReady('player', 'py6GDNgye6k'); 
            $(".scroll img").addClass('down').removeClass('up');
            $("#nav>div.current").removeClass("current");
            $(".video-foreground iframe").remove();
            var ifrm = document.createElement("iframe");
            ysrc = "http://www.youtube.com/embed/pa0YhYFnUqo?wmode=opaque&autohide=1&autoplay=1&loop=1&playlist=pa0YhYFnUqo&enablejsapi=1";
            ifrm.setAttribute("src", ysrc);
            ifrm.style.width = "100%";
            ifrm.style.height = "360";
            ifrm.style.frameborder = "0";
            ifrm.style.allowfullscreen = "1";
            $("#home .video-foreground").html(ifrm);
            $(".scroll img").css('display', 'none');
        }
    });
    $(function () {
        $('#pause-button').click(function () {
            //            $('iframe').attr('src', $('iframe').attr('src'));
            //            $('iframe')[0].pause();
            //            players('stopVideo');

            $('#video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        });
        $('#play-button').click(function () {
            //            $('iframe').attr('src', $('iframe').attr('src'));
            //            $('iframe')[0].pause();
            //            players('stopVideo');

            $('#video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
        });
    });
    function players(func, args) {
        var iframes = document.getElementsByTagName('iframe');
        for (var i = 0; i < iframes.length; ++i) {
            if (iframes[i]) {
                var src = iframes[i].getAttribute('src');
                if (src) {
                    if (src.indexOf('youtube.com/embed') != -1) {
                        iframes[i].contentWindow.postMessage(JSON.stringify({'event': 'command', 'func': func, 'args': args || []}), "*");
                    }
                }
            }
        }
    }

    // Inject YouTube API script
    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;
    function onYouTubePlayerAPIReady() {
        player = new YT.Player('video', {
            events: {
                'onReady': onPlayerReady
            }
        });
    }
    function onPlayerReady(event) {
        var playButton = document.getElementById("play-button");
        playButton.addEventListener("click", function () {
            player.playVideo();
        });
        var pauseButton = document.getElementById("pause-button");
        pauseButton.addEventListener("click", function () {
            player.pauseVideo();
        });
    }


    var tag = document.createElement('script')
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)


    $('#nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {
            //I get fired when the animation is starting
        },
        end: function () {
            //I get fired when the animation is ending
        },
        scrollChange: function ($currentListItem) {

            var currentChapter = $currentListItem.prevObject.selector;
            if (currentChapter.indexOf('home') > -1) {
                $(".scroll img").css('display', 'none');
                $(".scroll img").addClass('down').removeClass('up');


                $(".video-foreground iframe").remove();
                var ifrm = document.createElement("iframe");
                ysrc = "http://www.youtube.com/embed/pa0YhYFnUqo?wmode=opaque&autohide=1&autoplay=1&loop=1&playlist=pa0YhYFnUqo&enablejsapi=1";
                ifrm.setAttribute("src", ysrc);
                ifrm.setAttribute("id", 'video');
                ifrm.style.width = "100%";
                ifrm.style.height = "360";
                ifrm.style.frameborder = "0";
                ifrm.style.allowfullscreen = "1";
                $("#home .video-foreground").html(ifrm);
                $("#chapter1 .video-foreground").show('slow', function () {
                    $(this).html(ifrm);
                });

                $("#iframe21").attr("src", "https://www.youtube.com/embed/rpbVKMEKch4?autoplay=0&loop=0&playlist=rpbVKMEKch4");
                $("#iframe22").attr("src", "https://www.youtube.com/embed/9sqMwENhZ7Q?autoplay=0&loop=0&playlist=9sqMwENhZ7Q");
                $("#iframe23").attr("src", "https://www.youtube.com/embed/rjZVu4dxyT4?autoplay=0&loop=1&playlist=rjZVu4dxyT4");

            } else if (currentChapter.indexOf('chapter0') > -1) {
                $(".scroll img").css('display', 'block');
            } else if (currentChapter.indexOf('chapter1') > -1) {
                $("#charted-5289991").attr("src", "http://www.charted.co/embed/5289991");
                $(".scroll img").css('display', 'block');
                $(".video-foreground iframe").remove();
                var ifrm = document.createElement("iframe");
                ysrc = "http://www.youtube.com/embed/HRc29a6COlY?wmode=opaque&autohide=1&autoplay=1&loop=1&playlist=HRc29a6COlY&enablejsapi=1";
                ifrm.setAttribute("src", ysrc);
                ifrm.setAttribute("id", 'video');
                ifrm.style.width = "100%";
                ifrm.style.height = "360";
                ifrm.style.frameborder = "0";
                ifrm.style.allowfullscreen = "1";
                //  $("#chapter1 .video-foreground").html(ifrm);
                $("#chapter1 .video-foreground").show('slow', function () {
                    $(this).html(ifrm);
                });
                var heading_two = "Bangladesh garment industry at a glance";
                var heading_three = "$28.14 billion from garment export in 2016";
                var heading_four = "Global market share  6.4%";
                var heading_five = "RMG sector 82% of country’s total export";
                var heading_six = "4.4 million workers";
                var heading_seven = "4000 garment factories";
                var heading_eight = "$50bn export target by 2021";
                var heading_three_time = (heading_two.length * 100) + 50;
                if ($('.text-container #heading_two').is(':empty')) {
                    setTimeout(function () {
                        jQuery("#heading_two").fadeIn(500).writeText(heading_two);
                    }, 50);
                }

                if ($('#heading-list #heading_three').is(':empty')) {
                    setTimeout(function () {
                        jQuery("#imageid3").show("slow");
                        jQuery("#heading_three").fadeIn(500).writeText(heading_three);
                    }, heading_three_time);
                }

                var heading_four_time = (heading_three.length * 100) + heading_three_time;
                if ($('#heading-list #heading_four').is(':empty')) {
                    setTimeout(function () {
                        jQuery("#imageid4").show("slow");
                        jQuery("#heading_four").fadeIn(500).writeText(heading_four);
                    }, heading_four_time);
                }
                var heading_five_time = (heading_four.length * 100) + heading_four_time;
                if ($('#heading-list #heading_five').is(':empty')) {
                    setTimeout(function () {
                        jQuery("#imageid5").show("slow");
                        jQuery("#heading_five").fadeIn(500).writeText(heading_five);
                    }, heading_five_time);
                }
                var heading_six_time = (heading_five.length * 100) + heading_five_time;
                if ($('#heading-list #heading_six').is(':empty')) {
                    setTimeout(function () {
                        jQuery("#imageid6").show("slow");
                        jQuery("#heading_six").fadeIn(500).writeText(heading_six);
                    }, heading_six_time);
                }
                var heading_seven_time = (heading_six.length * 100) + heading_six_time;
                if ($('#heading-list #heading_seven').is(':empty')) {
                    setTimeout(function () {
                        jQuery("#imageid7").show("slow");
                        jQuery("#heading_seven").fadeIn(500).writeText(heading_seven);
                    }, heading_seven_time);
                }
                var heading_eight_time = (heading_seven.length * 100) + heading_seven_time;
                if ($('#heading-list #heading_eight').is(':empty')) {
                    setTimeout(function () {
                        jQuery("#imageid8").show("slow");
                        jQuery("#heading_eight").fadeIn(500).writeText(heading_eight);
                    }, heading_eight_time);
                }
                $("#iframe21").attr("src", "https://www.youtube.com/embed/rpbVKMEKch4?autoplay=0&loop=0&playlist=rpbVKMEKch4");
                $("#iframe22").attr("src", "https://www.youtube.com/embed/9sqMwENhZ7Q?autoplay=0&loop=0&playlist=9sqMwENhZ7Q");
                $("#iframe23").attr("src", "https://www.youtube.com/embed/rjZVu4dxyT4?autoplay=0&loop=1&playlist=rjZVu4dxyT4");

                // load Youtube API code asynchronously

            } else if (currentChapter.indexOf('chapter2') > -1) {
                $(".video-foreground iframe").remove();
                // $(".video-foreground iframe").remove();
                var ifrm = document.createElement("iframe");
                ysrc = "http://www.youtube.com/embed/gv4jg5DoC4o?wmode=opaque&autohide=1&autoplay=1&loop=1&playlist=gv4jg5DoC4o&enablejsapi=1";
                ifrm.setAttribute("src", ysrc);
                ifrm.setAttribute("id", 'video');
                ifrm.style.width = "100%";
                ifrm.style.height = "360";
                ifrm.style.frameborder = "0";
                ifrm.style.allowfullscreen = "1";
                //$("#chapter2 .video-foreground").html(ifrm);
                $("#chapter2 .video-foreground").show('slow', function () {
                    $(this).html(ifrm);
                });
                $("#iframe21").attr("src", "https://www.youtube.com/embed/rpbVKMEKch4?autoplay=0&loop=0&playlist=rpbVKMEKch4");
                $("#iframe22").attr("src", "https://www.youtube.com/embed/9sqMwENhZ7Q?autoplay=0&loop=0&playlist=9sqMwENhZ7Q");
                $("#iframe23").attr("src", "https://www.youtube.com/embed/rjZVu4dxyT4?autoplay=0&loop=1&playlist=rjZVu4dxyT4");

            } else if (currentChapter.indexOf('chapter3') > -1) {
                $("#iframe22").attr("src", "https://www.youtube.com/embed/9sqMwENhZ7Q");
                $("#iframe23").attr("src", "https://www.youtube.com/embed/rjZVu4dxyT4");
                $("#iframe21").attr("src", "https://www.youtube.com/embed/rpbVKMEKch4?autoplay=1&loop=1&playlist=rpbVKMEKch4");
            } else if (currentChapter.indexOf('chapter5') > -1) {
                $("#iframe21").attr("src", "https://www.youtube.com/embed/rpbVKMEKch4");
                $("#iframe23").attr("src", "https://www.youtube.com/embed/rjZVu4dxyT4");
                $("#iframe22").attr("src", "https://www.youtube.com/embed/9sqMwENhZ7Q?autoplay=1&loop=1&playlist=9sqMwENhZ7Q");
            } else if (currentChapter.indexOf('chapter6') > -1) {
                $("#iframe21").attr("src", "https://www.youtube.com/embed/rpbVKMEKch4");
                $("#iframe22").attr("src", "https://www.youtube.com/embed/9sqMwENhZ7Q");
                $("#iframe23").attr("src", "https://www.youtube.com/embed/rjZVu4dxyT4?autoplay=1&loop=1&playlist=rjZVu4dxyT4");

            } else if (currentChapter.indexOf('chapter4') > -1) {
                $(".video-foreground iframe").remove();
                var ifrm = document.createElement("iframe");
                ysrc = "http://www.youtube.com/embed/flRt1uBM4h8?wmode=opaque&autohide=1&autoplay=1&loop=1&playlist=flRt1uBM4h8&enablejsapi=1";
                ifrm.setAttribute("src", ysrc);
                ifrm.setAttribute("id", 'video');
                ifrm.style.width = "100%";
                ifrm.style.height = "360";
                ifrm.style.frameborder = "0";
                ifrm.style.allowfullscreen = "1";
                // $("#chapter2 .video-foreground").html(ifrm);  
                $("#chapter4 .video-foreground").show('slow', function () {
                    $(this).html(ifrm);
                });
                $("#pollution-iframe").attr("src", "http://sandbox.thedailystar.net/water/pie/index.html");
                $("#iframe21").attr("src", "https://www.youtube.com/embed/rpbVKMEKch4?autoplay=0&loop=0&playlist=rpbVKMEKch4");
                $("#iframe22").attr("src", "https://www.youtube.com/embed/9sqMwENhZ7Q?autoplay=0&loop=0&playlist=9sqMwENhZ7Q");
                $("#iframe23").attr("src", "https://www.youtube.com/embed/rjZVu4dxyT4?autoplay=0&loop=1&playlist=rjZVu4dxyT4");

            } else if (currentChapter.indexOf('chapter7') > -1) {
                $(".scroll img").addClass('up').removeClass('down');
                $(".video-foreground iframe").remove();
                var ifrm = document.createElement("iframe");
                ysrc = "http://www.youtube.com/embed/SKy82DqaJrs?wmode=opaque&autohide=1&autoplay=1&loop=1&playlist=SKy82DqaJrs&enablejsapi=1";
                ifrm.setAttribute("src", ysrc);
                ifrm.setAttribute("id", 'video');
                ifrm.style.width = "100%";
                ifrm.style.height = "360";
                ifrm.style.frameborder = "0";
                ifrm.style.allowfullscreen = "1";
                // $("#chapter2 .video-foreground").html(ifrm);  


                $("#chapter4 .video-foreground").show('slow', function () {
                    $(this).html(ifrm);
                });
                $("#iframe21").attr("src", "https://www.youtube.com/embed/rpbVKMEKch4?autoplay=0&loop=0&playlist=rpbVKMEKch4");
                $("#iframe22").attr("src", "https://www.youtube.com/embed/9sqMwENhZ7Q?autoplay=0&loop=0&playlist=9sqMwENhZ7Q");
                $("#iframe23").attr("src", "https://www.youtube.com/embed/rjZVu4dxyT4?autoplay=0&loop=1&playlist=rjZVu4dxyT4");

            } else {
            }
        }
    });



    //////////////////////////////////////////////////////////////////////////////////////////////////////////////       

    //  $(document).ready(function () {
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        //alert(this.hash.slice(1));
        if (this.hash.slice(1) == 'home') {

            $(".scroll img").addClass('down').removeClass('up');
            $(".video-foreground iframe").remove();
            var ifrm = document.createElement("iframe");
            ysrc = "http://www.youtube.com/embed/pa0YhYFnUqo?wmode=opaque&autohide=1&autoplay=1&loop=1&playlist=pa0YhYFnUqo&enablejsapi=1";
            ifrm.setAttribute("src", ysrc);
            ifrm.setAttribute("id", 'video');
            ifrm.style.width = "600px";
            ifrm.style.height = "460px";
            ifrm.style.frameborder = "0";
            ifrm.style.allowfullscreen = "1";
            $("#home .video-foreground").html(ifrm);
        } else if (this.hash.slice(1) == 'chapter1') {
            $("#charted-5289991").attr("src", "http://www.charted.co/embed/5289991");
            $(".scroll img").css('display', 'block');
            $(".video-foreground iframe").remove();
            var ifrm = document.createElement("iframe");
            ysrc = "http://www.youtube.com/embed/HRc29a6COlY?wmode=opaque&autohide=1&autoplay=1&loop=1&playlist=HRc29a6COlY&enablejsapi=1";
            ifrm.setAttribute("src", ysrc);
            ifrm.setAttribute("id", 'video');
            ifrm.style.width = "100%";
            ifrm.style.height = "360";
            ifrm.style.frameborder = "0";
            ifrm.style.allowfullscreen = "1";
            $("#chapter1 .video-foreground").html(ifrm);
            var heading_two = "Bangladesh garment industry at a glance";
            var heading_three = "$28.14 billion from garment export in 2016";
            var heading_four = "Global market share  6.4%";
            var heading_five = "RMG sector 82% of country’s total export";
            var heading_six = "4.4 million workers";
            var heading_seven = "4000 garment factories";
            var heading_eight = "$50bn export target by 2021";
            var heading_three_time = (heading_two.length * 100) + 50;
            if ($('.text-container #heading_two').is(':empty')) {
                setTimeout(function () {
                    jQuery("#heading_two").fadeIn(500).writeText(heading_two);
                }, 50);
            }

            if ($('#heading-list #heading_three').is(':empty')) {
                setTimeout(function () {
                    jQuery("#imageid3").show("slow");
                    jQuery("#heading_three").fadeIn(500).writeText(heading_three);
                }, heading_three_time);
            }

            var heading_four_time = (heading_three.length * 100) + heading_three_time;
            if ($('#heading-list #heading_four').is(':empty')) {
                setTimeout(function () {
                    jQuery("#imageid4").show("slow");
                    jQuery("#heading_four").fadeIn(500).writeText(heading_four);
                }, heading_four_time);
            }
            var heading_five_time = (heading_four.length * 100) + heading_four_time;
            if ($('#heading-list #heading_five').is(':empty')) {
                setTimeout(function () {
                    jQuery("#imageid5").show("slow");
                    jQuery("#heading_five").fadeIn(500).writeText(heading_five);
                }, heading_five_time);
            }
            var heading_six_time = (heading_five.length * 100) + heading_five_time;
            if ($('#heading-list #heading_six').is(':empty')) {
                setTimeout(function () {
                    jQuery("#imageid6").show("slow");
                    jQuery("#heading_six").fadeIn(500).writeText(heading_six);
                }, heading_six_time);
            }
            var heading_seven_time = (heading_six.length * 100) + heading_six_time;
            if ($('#heading-list #heading_seven').is(':empty')) {
                setTimeout(function () {
                    jQuery("#imageid7").show("slow");
                    jQuery("#heading_seven").fadeIn(500).writeText(heading_seven);
                }, heading_seven_time);
            }
            var heading_eight_time = (heading_seven.length * 100) + heading_seven_time;
            if ($('#heading-list #heading_eight').is(':empty')) {
                setTimeout(function () {
                    jQuery("#imageid8").show("slow");
                    jQuery("#heading_eight").fadeIn(500).writeText(heading_eight);
                }, heading_eight_time);
            }
            $("#iframe21").attr("src", "https://www.youtube.com/embed/rpbVKMEKch4?autoplay=0&loop=0&playlist=rpbVKMEKch4");
            $("#iframe22").attr("src", "https://www.youtube.com/embed/9sqMwENhZ7Q?autoplay=0&loop=0&playlist=9sqMwENhZ7Q");
            $("#iframe23").attr("src", "https://www.youtube.com/embed/rjZVu4dxyT4?autoplay=0&loop=1&playlist=rjZVu4dxyT4");


        } else if (this.hash.slice(1) == 'chapter2') {
            $(".scroll img").css('display', 'block');
            $(".video-foreground iframe").remove();
            var ifrm = document.createElement("iframe");
            ysrc = "http://www.youtube.com/embed/gv4jg5DoC4o?wmode=opaque&autohide=1&autoplay=1&loop=1&playlist=gv4jg5DoC4o&enablejsapi=1";
            ifrm.setAttribute("src", ysrc);
            ifrm.setAttribute("id", 'video');
            ifrm.style.width = "100%";
            ifrm.style.height = "360";
            ifrm.style.frameborder = "0";
            ifrm.style.allowfullscreen = "1";
            $("#chapter2 .video-foreground").html(ifrm);
            $("#iframe21").attr("src", "https://www.youtube.com/embed/rpbVKMEKch4?autoplay=0&loop=0&playlist=rpbVKMEKch4");
            $("#iframe22").attr("src", "https://www.youtube.com/embed/9sqMwENhZ7Q?autoplay=0&loop=0&playlist=9sqMwENhZ7Q");
            $("#iframe23").attr("src", "https://www.youtube.com/embed/rjZVu4dxyT4?autoplay=0&loop=1&playlist=rjZVu4dxyT4");


        } else if (this.hash.slice(1) == 'chapter3') {
            $(".scroll img").css('display', 'block');
            $("#iframe22").attr("src", "https://www.youtube.com/embed/9sqMwENhZ7Q");
            $("#iframe23").attr("src", "https://www.youtube.com/embed/rjZVu4dxyT4");
            $("#iframe21").attr("src", "https://www.youtube.com/embed/rpbVKMEKch4?autoplay=1&loop=1&playlist=rpbVKMEKch4");

        } else if (this.hash.slice(1) == 'chapter5') {
            $(".scroll img").css('display', 'block');
            $("#iframe21").attr("src", "https://www.youtube.com/embed/rpbVKMEKch4");
            $("#iframe23").attr("src", "https://www.youtube.com/embed/rjZVu4dxyT4");
            $("#iframe22").attr("src", "https://www.youtube.com/embed/9sqMwENhZ7Q?autoplay=1&loop=1&playlist=9sqMwENhZ7Q");

        } else if (this.hash.slice(1) == 'chapter6') {
            $(".scroll img").css('display', 'block');
            $("#iframe21").attr("src", "https://www.youtube.com/embed/rpbVKMEKch4");
            $("#iframe22").attr("src", "https://www.youtube.com/embed/9sqMwENhZ7Q");
            $("#iframe23").attr("src", "https://www.youtube.com/embed/rjZVu4dxyT4?autoplay=1&loop=1&playlist=rjZVu4dxyT4");

        } else if (this.hash.slice(1) == 'chapter4') {
            $(".scroll img").css('display', 'block');
            $(".video-foreground iframe").remove();
            var ifrm = document.createElement("iframe");
            ysrc = "http://www.youtube.com/embed/flRt1uBM4h8?wmode=opaque&autohide=1&autoplay=1&loop=1&playlist=flRt1uBM4h8&enablejsapi=1";
            ifrm.setAttribute("src", ysrc);
            ifrm.setAttribute("id", 'video');
            ifrm.style.width = "100%";
            ifrm.style.height = "360";
            ifrm.style.frameborder = "0";
            ifrm.style.allowfullscreen = "1";
            $("#chapter4 .video-foreground").html(ifrm);
            $("#pollution-iframe").attr("src", "http://sandbox.thedailystar.net/water/pie/index.html");
            $("#iframe21").attr("src", "https://www.youtube.com/embed/rpbVKMEKch4?autoplay=0&loop=0&playlist=rpbVKMEKch4");
            $("#iframe22").attr("src", "https://www.youtube.com/embed/9sqMwENhZ7Q?autoplay=0&loop=0&playlist=9sqMwENhZ7Q");
            $("#iframe23").attr("src", "https://www.youtube.com/embed/rjZVu4dxyT4?autoplay=0&loop=1&playlist=rjZVu4dxyT4");

        } else if (this.hash.slice(1) == 'chapter7') {
            $(".scroll img").css('display', 'block');
            $(".scroll img").addClass('up').removeClass('down');
            $(".video-foreground iframe").remove();
            var ifrm = document.createElement("iframe");
            ysrc = "http://www.youtube.com/embed/SKy82DqaJrs?wmode=opaque&autohide=1&autoplay=1&loop=1&playlist=SKy82DqaJrs&enablejsapi=1";
            ifrm.setAttribute("src", ysrc);
            ifrm.setAttribute("id", 'video');
            ifrm.style.width = "100%";
            ifrm.style.height = "360";
            ifrm.style.frameborder = "0";
            ifrm.style.allowfullscreen = "1";
            $("#chapter4 .video-foreground").html(ifrm);
            $("#iframe21").attr("src", "https://www.youtube.com/embed/rpbVKMEKch4?autoplay=0&loop=0&playlist=rpbVKMEKch4");
            $("#iframe22").attr("src", "https://www.youtube.com/embed/9sqMwENhZ7Q?autoplay=0&loop=0&playlist=9sqMwENhZ7Q");
            $("#iframe23").attr("src", "https://www.youtube.com/embed/rjZVu4dxyT4?autoplay=0&loop=1&playlist=rjZVu4dxyT4");

        } else {
        }
    }
    );
    // });
    (function (jQuery) {
        jQuery.fn.writeText = function (content) {
            var contentArray = content.split(""),
                    current = 0,
                    elem = this;
            setInterval(function () {
                if (current < contentArray.length) {
                    elem.html(elem.html() + contentArray[current++]);
                }
            }, 100);
        };
    })(jQuery);
    var heading_one = "Water: Garments’ invisible price";
    jQuery("#heading_one").writeText(heading_one);