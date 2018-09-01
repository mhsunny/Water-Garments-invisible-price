<?php
//global $user;
/* if ($primary_local_tasks and $user->uid != 0 ): ?>
<ul class="tabs primary clearfix"><?php print render($primary_local_tasks); ?></ul>
<?php endif; */
?>
<?php
$layout_basepath = '/sites/all/themes/tds/layouts/page/water_garments/';
// Trigger System metatags
render($page['content']['metatags']);
?>
<?php //print render($page['content']); ?>
<?php // print !empty($node->body) ? check_markup($node->body['und']['0']['value'], $node->body['und'][0]['format']) : ''; ?>
<div style="cursor: pointer;" class="scroll">
<img class="down" src="<?php echo $layout_basepath; ?>image/drop-down.gif" alt=""></div>
<div id="overlay"></div>
<div  id="nav" class="mainnav">
<a id="nav-home" class="homeicon"  href="#home">Home</a>
<p class="smalltext">Click to the navigation bullet to go specific chapter</p>
<div class="dropdown">
    <a class="btn js-scroll-trigger" href="#chapter0"><i class="ion-ios-arrow-down"></i></a>
    <div class="vertical-line"  /></div>
    <div class="dropdown-content">
        <div>
            <p>Chapter Info graphics</p>
            <h3>Info graphics</h3>
            <img src="<?php echo $layout_basepath; ?>image/info.JPG" id="nav-content-img">
            <p>Bangladesh boasts as the world’s number two garment exporter.Every third European has a t-shirt made in Bangladesh on his back.</p>
        </div>
    </div>
</div>
<div class="dropdown">
    <a class="btn js-scroll-trigger" href="#chapter1"><i class="ion-ios-arrow-down"></i></a>
    <div class="vertical-line"  /></div>
    <div class="dropdown-content">
        <div>
            <p>Chapter 1</p>
            <h3>The Boom</h3>
            <img src="<?php echo $layout_basepath; ?>image/water_garments_1.jpg" id="nav-content-img">
            <p>Bangladesh boasts as the world’s number two garment exporter.Every third European has a t-shirt made in Bangladesh on his back.</p>
        </div>
    </div>
</div>
<div class="dropdown">
    <a class="btn js-scroll-trigger" href="#chapter2"><i class="ion-ios-arrow-down"></i></a>
    <div class="vertical-line"  /></div>
    <div class="dropdown-content">
        <p>Chapter 2</p>
        <h3>Overuse of groundwater</h3>
        <img src="<?php echo $layout_basepath; ?>image/water_garments_3.jpg" id="nav-content-img">
        <p>But the success comes at an enormous environmental cost. We don’t even know about it. Every year 1,500 billion..</p>
    </div>
</div>
<div class="dropdown">
    <a class="btn js-scroll-trigger" href="#chapter3"><i class="ion-ios-arrow-down"></i></a>
    <div class="vertical-line" /></div>
    <div class="dropdown-content">
        <p>Chapter 3</p>
        <h3>Outcome</h3>
        <img src="<?php echo $layout_basepath; ?>image/water_garments_3.jpg" id="nav-content-img">
        <p>Two things happen when such huge quantity of water is pumped out. First, we create a hollow underground.</p>
    </div>
</div>
<div class="dropdown">
    <a class="btn js-scroll-trigger" href="#chapter4"><i class="ion-ios-arrow-down"></i></a>
    <div class="vertical-line"  /></div>
    <div class="dropdown-content">
        <p>Chapter 4</p>
        <h3>The pollution point</h3>
        <img src="<?php echo $layout_basepath; ?>image/water_garments_4.jpg" id="nav-content-img">
        <p>The garment industries pump out this water after use into rivers and canals. By this time, the water becomes highly polluted with toxic chemicals and dyes.</p>
    </div>
</div>
<div class="dropdown">
    <a class="btn js-scroll-trigger" href="#chapter5"><i class="ion-ios-arrow-down"></i></a>
    <div class="vertical-line"  /></div>
    <div class="dropdown-content">
        <p>Chapter 5</p>
        <h3>More water, more pollution</h3>
        <img src="<?php echo $layout_basepath; ?>image/water_garments_5.jpg" id="nav-content-img">
        <p>As the inefficient plants draw more water to treat the same quantity of fabrics, they use more chemical to do the job.</p>
    </div>
</div>
<div class="dropdown">
    <a class="btn js-scroll-trigger" href="#chapter6"><i class="ion-ios-arrow-down"></i></a>
    <div class="vertical-line"  /></div>
    <div class="dropdown-content">
        <p>Chapter 6</p>
        <h3>A way out</h3>
        <img src="<?php echo $layout_basepath; ?>image/water_garments.jpg" id="nav-content-img">
        <p>It does not need to use all that water to wash every kg of apparel. As we said earlier, Bangladesh uses 250 litres of water.</p>
    </div>
</div>
<div class="dropdown">
    <a class="btn js-scroll-trigger" href="#chapter7"><i class="ion-ios-arrow-down"></i></a>
    <div class="dropdown-content">
        <p>Chapter 7</p>
        <h3>Some factories are waking up</h3>
        <img src="<?php echo $layout_basepath; ?>image/water_more _pollution.jpg" id="nav-content-img">
        <p>A handful few factories are changing their operation to be more water efficient. International Finance Corporation (IFC) has introduced a programme styled Partnership..</p>
    </div>
</div>
<div class="buttons">
    <div class="icon">
        <div id="play-button" class="playicon"></div>
    </div>
    <div class="icon">
        <div id="pause-button" class="pauseicon"></div>
    </div>
</div>
<a  class="homeicon pintotop"  href="#home">Top</a>
</div>
<div id="container">
<div class="section chapter" id="home">
    <div class="video-background" >
        <div class="video-foreground">
        </div>
    </div>
    <div class="gradient-overlay">
        <div class="text-container">
            <!--<a href="http://www.thedailystar.net/"><img src="http://www.thedailystar.net/sites/default/files/ds-logo-white.png" alt="Daily Star logo" width="200" height="34"></a>-->
            <br>
            <h2 class="heading-to" style="color: white">Water: Garments’ <br>invisible price</h2>
            <h1 id="heading_one" class="heading" style="color: white"></h1>
            <p class="sub-text">Bangladesh boasts as the world’s number two garment exporter. <span class="highlight focus-text">Every third</span> European has a t-shirt made in Bangladesh on his back.  <span class="highlight highlight2 focus-text">Every fifth</span> American wears jeans manufactured in Bangladesh.<br><br>
            But this is not a story of how many million pieces we export. This is a story of the <span class="highlight   focus-text">invisible
            price</span> we pay every time a jeans rolls out of a factory in Bangladesh. The western buyers little
            know how much <span class="highlight highlight2 focus-text">water</span>,  that precious resource, was used to wash and dye his trousers. <br><br>
            The figures are mind boggling.
        </p>
        <br>
        <p class="exp-text">Scroll down &amp; find out </p>
        <img style="cursor: pointer;" class="homescroll" src="<?php echo $layout_basepath; ?>image/drop-down.gif" alt="scroll-down" height="50" width="auto">
        <br>
        <!--                <div id="iframe1" style="position:relative;height:0;padding-bottom:56.25%">
            <iframe src="https://www.youtube.com/embed/pa0YhYFnUqo?ecver=2"
            style="position:absolute;width:100%;height:100%;left:0"
            width="640" height="360" frameborder="0" allowfullscreen>
            </iframe>
        </div>-->
        <div class="blank-space"></div>
    </div>
</div>
</div>
<div class="section chapter chapter0" id="chapter0">
<div class="video-background">
    <div class="video-foreground">
    </div>
</div>
<div class="gradient-overlay">
    <div class="text-container">
        <!--<h1 class="heading">Info Graphics </h1>-->
        <br>
        <div>
            <iframe id="viz1505283466034" style="width:600px; height: 860px;" src="http://public.tableau.com/views/GlobalShareofGarmentExportsin2014/Dashboard1?:
            embed=y&:showVizHome=no&:host_url=https%3A%2F%2Fpublic.tableau.com%2F&:tabs=no&:
            toolbar=yes&:animate_transition=yes&:display_static_image=no&
            :display_spinner=no&:display_overlay=yes&:display_count=yes&publish=yes&:loadOrderID=0">
            </iframe>
        </div>
        <div class="blank-space-small"></div>
    </div>
</div>
</div>
<div class="section chapter chapter1" id="chapter1">
<div class="video-background" >
    <div class="video-foreground">
    </div>
</div>
<div class="gradient-overlay">
    <div class="text-container">
        <h1 class="heading">The Boom</h1>
        <div class="garments_desktop" style="position: absolute;left: 660px;top:2345px;">
            <h2 id="heading_two" class="heading" style="display: none;"></h2>
            <ul id="heading-list" style=" list-style-type: none;">
                <li><img id="imageid3"   height="50" src="<?php echo $layout_basepath; ?>image/icon/1.png"><p class="headingitems"  id="heading_three"></p></li>
                <li><img id="imageid4"    height="50" src="<?php echo $layout_basepath; ?>image/icon/2.png"><p class="headingitems"  id="heading_four"></p></li>
                <li><img id="imageid5"    height="50" src="<?php echo $layout_basepath; ?>image/icon/3.png"><p class="headingitems"  id="heading_five"></p></li>
                <li><img id="imageid6"    height="50" src="<?php echo $layout_basepath; ?>image/icon/6.png"><p class="headingitems"  id="heading_six"></p></li>
                <li><img  id="imageid7"   height="50" src="<?php echo $layout_basepath; ?>image/icon/5.png"><p class="headingitems"  id="heading_seven"></p></li>
                <li><img id="imageid8"    height="50" src="<?php echo $layout_basepath; ?>image/icon/4.png"><p class="headingitems"  id="heading_eight"></p></li>
            </ul>
        </div>
        <p class="sub-text">Thirty-nine years ago Bangladesh tentatively stepped into the global apparel scene with a small consignment of 13 million Francs to a Paris-based firm in 1978.
            Today it exports $28.14 billion or 6.4% of the global apparel pie. The country’s trade critically depends on this commodity that represents 82% of Bangladesh’s exports.
            <br><br><br>
        By 2021 the export target has been set at $50 billion. With the decline of China in the apparel world, especially in the cheap and medium categories, the target looks possible.                </p>
        <div class="sub-text">
            <iframe  src="" id="charted-5289991" height="600px" width="100%" scrolling="no"  style="border: 1px solid rgb(204, 204, 204); transition: height 200ms; height: 676px;"></iframe>
        </div>
        <div class="garments_mobile">
            <h2 class="heading">Bangladesh garment industry at a glance</h2>
            <ul style="list-style-type: none;">
                <li style="padding: 3px; "><img class="mobileimg"  height="100" src="<?php echo $layout_basepath; ?>image/icon/1.png"><p class="mobiletext">$28.14 billion from garment export in 2016</p></li>
                <li style="padding: 3px; "><img class="mobileimg"  height="100" src="<?php echo $layout_basepath; ?>image/icon/2.png"><p class="mobiletext">Global market share 6.4%</p></li>
                <li style="padding: 3px; "><img class="mobileimg"  height="100" src="<?php echo $layout_basepath; ?>image/icon/3.png"><p class="mobiletext">RMG sector 82% of country’s total export</p></li>
                <li style="padding: 3px; "><img class="mobileimg"  height="100" src="<?php echo $layout_basepath; ?>image/icon/5.png"><p class="mobiletext">4000 garment factories</p></li>
                <li style="padding: 3px; "><img class="mobileimg"  height="100" src="<?php echo $layout_basepath; ?>image/icon/6.png"><p class="mobiletext">4.4 million workers</p></li>
                <li style="padding: 3px; "><img class="mobileimg"  height="100" src="<?php echo $layout_basepath; ?>image/icon/4.png"><p class="mobiletext">$50bn export target by 2021</p></li>
            </ul>
        </div>
        <!--                <div id="iframe1" style="position:relative;height:0;padding-bottom:56.25%">
            <iframe src="https://www.youtube.com/embed/HRc29a6COlY?ecver=2"
            style="position:absolute;width:100%;height:100%;left:0"
            width="640" height="360" frameborder="0" allowfullscreen>
            </iframe>
        </div>-->
        <!--<div id="player1"></div>-->
        <div class="blank-space"></div>
    </div>
</div>
</div>
<div class="section chapter chapter2" id="chapter2">
<div class="video-background" >
    <div class="video-foreground">
    </div>
</div>
<div id="vidtop-content">
    <div class="gradient-overlay"><!-- overlay-gradient-effect -->
    <div class="text-container">
        <h1 class="heading">Overuse of groundwater</h1>
        <div class="video-info">
            <p class="sub-text" >But the success comes at a huge environmental cost. We don’t even know about it.<br><br>
                Every year 1,500 billion litres of water is used to dye and wash the cotton and clothes for the garment industry, according to a study of the International Finance Corporation. This is enough to fill up 600,000 Olympic swimming pools.<br><br>
                Or you may think it this way. This same water can meet the demand of 8 lakh people for a whole year.
            </p>
            <br>
            <video poster="http://www.thedailystar.net/sites/default/files/water-poster.png" autoplay="yes" loop="yes" width="100%">
                <source src="http://www.thedailystar.net/sites/default/files/video/water_overuse.mp4" type="video/mp4">
                <source src="http://www.thedailystar.net/sites/default/files/video/water_overuse.ogv" type="video/ogg">
                <source src="http://www.thedailystar.net/sites/default/files/video/water_overuse.webm" type="video/webm">
                Your browser does not support the video tag. I suggest you upgrade your browser.
            </video>
            <br>
            <br>
            <p class="sub-text">For the average jeans you wear that weighs 1kg, it takes 250 litres of water to wash.
                And all this has to be sweet water, a precious commodity, pumped out from underground.
            </p>
            <div class="highlitertext">
                <img id="imageid9"  height="50" src="<?php echo $layout_basepath; ?>image/icon/7.png">
                <p id="heading_nine">
                    <span class="highlight highlight2">250-litre</span> <span>water used for washing </span>
                    <br><span class="highlight">1kg jeans</span>
                </p>
                <img id="imageid10"  height="50" src="<?php echo $layout_basepath; ?>image/icon/8.png">
                <p id="heading_ten">
                    <span class="highlight highlight2">100,000m3</span> <span>water used</span>  <span class="highlight">1 month</span> <span>by over </span>
                    <span  class="highlight">789</span> <span> dyeing and finishing factories</span>
                </p>
            </div>
            <p class="sub-text">The Water Supply and Sewerage Authority charges a
                piffling Tk 0.0326 for a litre of water. Even at this rate, the current market
                price of 1500 billion litres of groundwater is $ 611 million.
            </p>
            <div class="blank-space"></div>
        </div>
    </div>
</div>
</div>
<div class="section chapter chapter3" id="chapter3">
<div class="gradient-overlay">
    <div class="text-container">
        <br><br>
        <h1 class="heading">Outcome </h1>
        <p class="sub-text"> Two things happen when such a huge quantity of water is pumped out.
            First, we create a hollow underground. As the hollow grows, it creates chances for
            the earth to cave in.
            <iframe id="iframe21" src=""
            width="640" height="360" frameborder="0" allowfullscreen>
            </iframe>
            <br><br><br>
            And secondly, as more and more water is pumped out, the water table goes down.
            We can find this actually happening in Dhaka where every year the water level
            is dropping by 2.5 percent. This means we have to dig deeper and deeper to pump the
            same water out.
            The water table is not infinite. One day, it will go dry if not recharged.
            We will not have any more water to pump out. A real disaster will take place.
        </p>
        <div id="iframe1" style="position:relative;height:0;padding-bottom:56.25%">
            <iframe src="https://www.youtube.com/embed/rpbVKMEKch4?ecver=2"
            style="position:absolute;width:100%;height:100%;left:0"
            width="640" height="360" frameborder="0" allowfullscreen>
            </iframe>
        </div>
        <div class="blank-space"></div>
    </div>
</div>
</div>
<div class="section chapter chapter4" id="chapter4">
<div class="video-background" >
    <div class="video-foreground">
    </div>
</div>
<div id="vidtop-content">
    <div class="gradient-overlay"><!-- overlay-gradient-effect -->
    <div class="text-container">
        <h1 class="heading">The pollution point </h1>
        <div class="video-info">
            <p class="sub-text">The garment industries pump out this water and dump it
                into rivers and canals after use. By this time, the water becomes highly
                polluted with toxic chemicals and dyes. Only a handful of factories
                have effluent treatment plants. Most of them simply drain out untreated toxins.
            </p>
            <div id="custom_piechart">
                <iframe id="pollution-iframe" height="650" seamless frameborder="0" scrolling="no" src=""></iframe> <br>
            </div>
            <p class="sub-text">The dyeing and finishing plants are the major pollutants
                of our water. Turag that flows by Tongi is almost dead with pollution.
                Its water looks ink black and gives out such a foul smell that one c
                an literally feel their lungs tingling with each breath.
            </p>
            <p class="sub-text">Bangladesh has some 789 dyeing and finishing factories to serve
                some 4,000 garment factories, according to IFC. They are the major consumers
                of underground water and also contributor to pollution.
            </p>
            <p class="sub-text">IFC looked closely at Konabari area in Gazipur,
                which houses 33 washing, dyeing and finishing units.  They consume
                about 13 billion litres of fresh water a year.
            </p>
            <p class="sub-text">For the average jeans you wear that weighs 1kg, it takes 250 litres of water to wash.
                And all this has to be sweet water, a precious commodity, pumped out from underground.
                This implies that the textile factories are also the largest contributors of the cluster’s water scarcity as well as pollution challenges.
            </p>
            <div class="blank-space"></div>
            
        </div>
    </div>
</div>
</div>
</div>
<div class="section chapter chapter5" id="chapter5">
<div class="gradient-overlay">
<div class="text-container">
    <h1 class="heading">More water, more pollution</h1>
    <p class="sub-text">
        As the inefficient plants draw more water to treat the same quantity of fabrics, they use more chemicals to do the job. More chemicals mean more pollution.
        If they could cut their water requirement by one fourth, which is very much possible with available technology, they could have substantially cut use of chemicals and thereby pollution too.
        <br>
        <iframe id="iframe22" src=""
        width="640" height="360" frameborder="0" allowfullscreen>
        </iframe>
        <br>
        Also more water needs more gas to heat for the dyeing and finishing of fabrics.
        Gas is a scarce commodity. Bangladesh is already running short of gas.
        The inefficient plants are just adding to the crisis.
    </p>
    <div id="iframe1" style="position:relative;height:0;padding-bottom:56.25%">
        <iframe src="https://www.youtube.com/embed/9sqMwENhZ7Q?ecver=2"
        style="position:absolute;width:100%;height:100%;left:0"
        width="640" height="360" frameborder="0" allowfullscreen>
        </iframe>
    </div>
    <div class="blank-space"></div>
</div>
</div>
</div>
<div class="section chapter chapter6" id="chapter6">
<div class="gradient-overlay">
<div class="text-container">
    <h1 class="heading">A way out</h1>
    <iframe id="iframe23" src=""
    width="640" height="360" frameborder="0" allowfullscreen>
    </iframe>
    <p class="sub-text">It does not need to use all that water to wash every kg of apparel. As we said earlier, Bangladesh uses 250 litres of water whereas the global standard is <span class="highlight highlight2">60 to 70 litres</span> . That is four times less than what we use. Experts say this use of water can be further reduced to 13.5 liters.  </p>
    <p class="sub-text">Every year, around 21.6 million cubic metres of water were saved by the intervention of Partnership for Cleaner Textile (PaCT) programme of International Finance Corporation (IFC), which worked with 200 factories.
    </p>
    <p class="sub-text">Nishat Shahid Chowdhury, programme manger at PaCT, said these 200 factories could save $16 million a year just by reducing water consumption. </p>
    <p id="heading_nine_one" class="highlitertext" >
        <img id="imageid9" height="50" src="<?php echo $layout_basepath; ?>image/save-water.png">
        <span  class=" highlight highlight2">21.6 million cubic metres</span><br>
        <span> water is what </span><span class=" highlight">804000 people</span><br>
        <span> consume in</span> <span class=" highlight" >1 year</span>
    </p>
    <br>
    <div id="iframe1" style="position:relative;height:0;padding-bottom:56.25%">
        <iframe src="https://www.youtube.com/embed/rjZVu4dxyT4?ecver=2"
        style="position:absolute;width:100%;height:100%;left:0"
        width="640" height="360" frameborder="0" allowfullscreen>
        </iframe>
    </div>
    <div class="blank-space"></div>
</div>
</div>
</div>
<div class="section chapter chapter7" id="chapter7">
<div class="gradient-overlay"><!-- overlay-gradient-effect -->
<div class="text-container">
<h1 class="heading">Some factories are waking up </h1>
<p class="sub-text">In Bangladesh, works are underway. A few factories are changing their operations to be more water efficient.
    International Finance Corporation (IFC) has introduced a programme styled Partnership for Cleaner Textile (PaCT) to reduce water, energy and chemical use in the textiles industry. It has partnered with 200 textile factories to help them implement cleaner operations.
    <br>
</p>
<p id="heading_nine" class="highlitertext" >
    <span class="highlight highlight2">Cleaner Production</span> <span> reduce water use from </span>
    <span class="highlight highlight2">174 to 52 </span>litre/kg<br> <br>
    <span class="highlight">70% less</span> <span> use of water in </span> <span class="highlight">2 years</span>
</p>
<p class="sub-text"> Fakir Apparels Limited of Narayanganj is one of them to adopt clean operation.
    Before this, it used 24.96 crore litres of water to wash and dye 1,200 tonnes of fabric a month. But after changing technology, it has reduced water use to 6.96 crore litres. This is a saving of 70 percent of water.
</p>
<p class="sub-text"> Fakir Apparels recovered its investment of $2.65 lakh only in six months.
    Mondol Fabrics of Gazipur has been able to save 27 percent of water by using new technologies. It needed 120 litres of water to process one kilogramme of fabric. Now it needs 80 litres only. It is working to cut down water use further by putting in more technologies.
</p>
<div class="blank-space"></div>
</div>
</div>
</div>
<div  class="section chapter chapter8" id="creative">
<div class="creditbg">
<div class="text-container credit-content">
<div id="share-icon">
    <a href="https://www.facebook.com/sharer.php?u=http://www.thedailystar.net/bangladesh-readymade-gament-rmg-top-export-dhaka-groundwater-water-pollution-invisible-price"><img src="<?php echo $layout_basepath; ?>image/icon/facebook.png"></a>
    <a href="https://twitter.com/intent/tweet?url=http://www.thedailystar.net/bangladesh-readymade-gament-rmg-top-export-dhaka-groundwater-water-pollution-invisible-price"><img src="<?php echo $layout_basepath; ?>image/icon/twitter.png"></a>
    <a href="https://plus.google.com/share?url=http://www.thedailystar.net/bangladesh-readymade-gament-rmg-top-export-dhaka-groundwater-water-pollution-invisible-price"><img src="<?php echo $layout_basepath; ?>image/icon/google_plus.png"></a>
</div><br><br>
<h2 class="heading-credits">Credits</h2>
<div class="creditlines">
    <p class="credit-lbl">Director:</p>
    <p>Inam Ahmed</p>
    <p class="credit-lbl">Project Supervisor:</p>
    <p>Zaid Kalam</p>
    <p class="credit-lbl">Writers:</p>
    <p>Inam Ahmed</p>
    <p>Refayet Ullah Mirdha</p>
    <p class="credit-lbl">Development:</p>
    <p>Zaid Kalam</p>
    <p class="credit-lbl">Videography:</p>
    <p>Zahed Khan</p>
    <p>Ananta Yusuf</p>
    <p class="credit-lbl">Technology:</p>
    <p>MH Sunny</p>
    <p>Toufiqul Islam</p>
    <p>Arif Hossain</p>
    <p class="credit-lbl">Infographics:</p>
    <p>Zaid Kalam</p>
    <p class="credit-lbl">Creative:</p>
    <p>Iftakhar Shihir</p>
    <p>Anwar Shohel</p>
    <p class="credit-lbl">Research:</p>
    <p>Zaid Kalam</p>
    <p>Refayet Ullah Mirdha</p>
    <br>
    <br>
    <br>
</div>
</div>
</div>
</div>
</div>
</div>