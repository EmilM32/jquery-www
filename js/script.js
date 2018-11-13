$(document).ready(function(){


    $("#hp_h1").load("text/home_page.txt #hp_title");
    $("#hp_p1").load("text/home_page.txt #hp_text1");
    $("#hp_p2").load("text/home_page.txt #hp_text2");

    $("#sf_h1").load("text/sans_forgetica.txt #f_h1");
    $("#sf_h3").load("text/sans_forgetica.txt #f_h3");
    $("#sf_p1").load("text/sans_forgetica.txt #f_p1");
    $("#sf_h3b").load("text/sans_forgetica.txt #f_h3b");
    $("#sf_p2").load("text/sans_forgetica.txt #f_p2");

    $("#homeMenu").click(function(){
      $("#gallery, #animateBox, #contact, #forgetica").hide("slow", noCards);
      $("#home").show("slow", noCards);
      $("#topBar").removeClass().addClass("homeColor");
    });

    $("#galleryMenu").click(function(){
      $("#home, #animateBox, #contact, #forgetica").hide("slow", noCards);
      $("#gallery").toggle("slow", noCards);
      $("#topBar").removeClass().addClass("galleryColor");
    });

    $("#animateBoxMenu").click(function(){
      $("#home, #gallery, #contact, #forgetica").hide("slow", noCards);
      $("#animateBox").toggle("slow", noCards);
      $("#topBar").removeClass().addClass("animateBoxColor");
    });

    $("#contactMenu").click(function(){
      $("#home, #gallery, #animateBox, #forgetica").hide("slow", noCards);
      $("#contact").toggle("slow", noCards);
      $("#topBar").removeClass().addClass("contactColor");
    });

    $("#forgeticaMenu").click(function(){
      $("#home, #gallery, #animateBox, #contact").hide("slow", noCards);
      $("#forgetica").toggle("slow", noCards);
      $("#topBar").removeClass().addClass("forgeticaColor");
    });

    function noCards() {
      if ( ($("#gallery").css('display') == 'none' || $("#gallery").css("visibility") == "hidden") &&
           ($("#animateBox").css('display') == 'none' || $("#animateBox").css("visibility") == "hidden") &&
           ($("#contact").css('display') == 'none' || $("#contact").css("visibility") == "hidden") &&
           ($("#home").css('display') == 'none' || $("#home").css("visibility") == "hidden") &&
           ($("#forgetica").css('display') == 'none' || $("#forgetica").css("visibility") == "hidden") ) {

         $("#home").show("slow");
      }
    }

    //https://jackrugile.com/jrumble/
    $("#twitter").jrumble();
    $("#twitter").mouseenter(function(){
      $(this).trigger('startRumble');
    });
    $("#twitter").mouseleave(function(){
      $(this).trigger('stopRumble');
    });

    $(".photo1").click({n: "1"},changeBigPhoto);
    $(".photo2").click({n: "2"},changeBigPhoto);
    $(".photo3").click({n: "3"},changeBigPhoto);
    $(".photo4").click({n: "4"},changeBigPhoto);
    $(".photo5").click({n: "5"},changeBigPhoto);
    $(".photo6").click({n: "6"},changeBigPhoto);
    $(".photo7").click({n: "7"},changeBigPhoto);
    $(".photo8").click({n: "8"},changeBigPhoto);

      function changeBigPhoto(nr) {
        $(".photo" + nr.data.n).attr("src", function(i, thisSrc){
           $("#bigPhoto").attr("src", thisSrc);
        });
      };

    $(".arrow_right").click(function(){
      if ($(".arrow_right i").hasClass("right")) {
            $(".arrow_right i").removeClass("right").addClass("left");
            $(".photo1, .photo2, .photo3, .photo4").hide();
            $(".photo5, .photo6, .photo7, .photo8").show();
      } else if ($(".arrow_right i").hasClass("left")) {
        $(".arrow_right i").removeClass("left").addClass("right");
        $(".photo1, .photo2, .photo3, .photo4").show();
        $(".photo5, .photo6, .photo7, .photo8").hide();
      }
    });

    $("#imgPhone").mouseenter(function(){
      $(".contactField").text($(".phoneContact").text());
    });

    $("#imgMail").mouseenter(function(){
      $(".contactField").text($(".mailContact").text());
    });

    $("#imgAddress").mouseenter(function(){
      $(".contactField").text($(".addressContact").text());
    });

    $("#imgGithub").mouseenter(function(){
      $(".contactField").text($(".githubContact").text());
    });

      //http://jqueryrotate.com
      $(".homephoto").rotate({
        bind:
        {
          mouseover : function() {
          $(this).rotate({animateTo:180})
        },
        mouseout : function() {
          $(this).rotate({animateTo:0})
          }
        }
      });

      $("#createBox").click(function(){
        $(".arrowsBox").fadeIn("slow");
        $("#magicBox").css("width", $("#inputWidth").val());
        $("#magicBox").css("height", $("#inputHeight").val());
      });

      $("#boxArrowUp").click(function(){
        $("#magicBox").animate({bottom: "+=100px"}, "slow");
      });
      $("#boxArrowLeft").click(function(){
        $("#magicBox").animate({left: "-=100px"}, "slow");
      });
      $("#boxArrowDown").click(function(){
        $("#magicBox").animate({bottom: "-=100px"}, "slow");
      });
      $("#boxArrowRight").click(function(){
        $("#magicBox").animate({left: "+=100px"}, "slow");
      });

        var value = 0
        $("#magicBox").rotate({
           bind:
             {
                mouseover: function(){
                    value +=45;
                    $(this).rotate({ animateTo:value})
                }
             }

        })

        $(".containerHome h1").mouseenter(function(){
          $(this).text("Espetanto");
        });
        $(".containerHome h1").mouseleave(function(){
          $(this).text("Home Page");
        });

        $(".arrow_mailp").click(function(){
          if($(".arrow_mailp i").hasClass("right")) {
            $("#hp_p1").load("text/home_page.txt #hp_text1b");
            $("#hp_p2").load("text/home_page.txt #hp_text2b");
            $(".arrow_mailp i").removeClass("right").addClass("left");
            $(".containerHome h1").mouseenter(function(){
              $(this).text("Lorem Ipsum");
            });
            $(".homephoto").attr("src", "img/homephoto2.jpg");
          } else if ($(".arrow_mailp i").hasClass("left")) {
            $("#hp_p1").load("text/home_page.txt #hp_text1");
            $("#hp_p2").load("text/home_page.txt #hp_text2");
            $(".arrow_mailp i").removeClass("left").addClass("right");
            $(".containerHome h1").mouseenter(function(){
              $(this).text("Espetanto");
            });
            $(".homephoto").attr("src", "img/homephoto.jpg");
          }
        });
});
