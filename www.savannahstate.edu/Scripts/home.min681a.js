﻿function buildSlider(e) { var s = "", a = "", t = !1; for (i = 0; i < e.slides.length; i++) {var c = new Date; if (c.getTime() >= new Date(e.slides[i].startDate).getTime() && c.getTime() < new Date(e.slides[i].endDate).getTime()) { for (t ? (s = '<div class="item">', a = '<li data-target="#myCarousel" data-slide-to="' + i + '" class=""></li>') : (s = '<div class="item active">', a = '<li data-target="#myCarousel" data-slide-to="' + i + '" class="active"></li>', t = !0), s += "<picture>", s += '<source media="print" srcset="' + e.slides[i].images[0].normal + '">', s += '<source media="(max-width: 640px)" srcset="' + e.slides[i].images[0].size640 + '">', s += '<source media="(min-width: 960px) and (max-width: 1279px)" srcset="' + e.slides[i].images[0].size1280 + '">', s += '<source media="(min-width: 1280px) and (max-width: 1599px)" srcset="' + e.slides[i].images[0].size1600 + '">', s += '<source media="(min-width: 1600px) and (max-width: 1919px)" srcset="' + e.slides[i].images[0].size2560 + '">', s += '<source media="(min-width: 1920px)" srcset="' + e.slides[i].images[0].size2560 + '">', s += '<img src="' + e.slides[i].images[0].normal + '" alt="' + e.slides[i].altText + '" />', s += "</picture>", s += '<div class="container caption-container">', s += '<div class="carousel-caption">', s += "<h3>" + e.slides[i].title + "</h3>", s += "<p>" + e.slides[i].message + "</p>", s += "<p>", x = 0; x < e.slides[i].links.length; x++) s += '<a class="btn-standard" href="' + e.slides[i].links[x].link + '">' + e.slides[i].links[x].text + "</a>&nbsp;"; s += "</p>", s += "</div>", s += "</div>", s += "</div>", $(s).appendTo(".carousel-inner"), $(a).appendTo(".carousel-indicators") } } } function buildBlocks(e) { var s = 0, a = []; for (i = 0; i < e.blocks.length; i++) { var t = new Date; 3 >= s && t.getTime() >= new Date(e.blocks[i].startDate).getTime() && t.getTime() < new Date(e.blocks[i].endDate).getTime() && (a[s] = i, s++) } if (s > 0) { var c = ""; switch (a.length) { case 1: c = '<div class="col-md-12 content-block">', c += '<div class="content-block-header-image-wrapper">', c += '<img src="' + e.blocks[a[0]].imageBase + '960.jpg" alt="' + e.blocks[a[0]].altText + '">', c += "</div>", c += '<div class="caption">', c += "<h2>" + e.blocks[a[0]].title + "</h2>", c += "<p>" + e.blocks[a[0]].message + "</p>", c += "</div>", c += "</div>"; break; case 2: c = '<div class="col-md-6 col-sm-12 content-block">', c += '<div class="content-block-header-image-wrapper">', c += "<picture>", c += '<source media="print" srcset="' + e.blocks[a[0]].imageBase + '480.jpg">', c += '<source media="(max-width: 959px)" srcset="' + e.blocks[a[0]].imageBase + '960.jpg">', c += '<img src="' + e.blocks[a[0]].imageBase + '480.jpg" alt="' + e.blocks[a[0]].altText + '">', c += "</picture>", c += "</div>", c += '<div class="caption">', c += "<h2>" + e.blocks[a[0]].title + "</h2>", c += "<p>" + e.blocks[a[0]].message + "</p>", c += "</div>", c += "</div>", c += '<div class="col-md-6 col-sm-12 content-block">', c += '<div class="content-block-header-image-wrapper">', c += "<picture>", c += '<source media="print" srcset="' + e.blocks[a[1]].imageBase + '480.jpg">', c += '<source media="(max-width: 959px)" srcset="' + e.blocks[a[1]].imageBase + '960.jpg">', c += '<img src="' + e.blocks[a[1]].imageBase + '480.jpg" alt="' + e.blocks[a[1]].altText + '">', c += "</picture>", c += "</div>", c += '<div class="caption">', c += "<h2>" + e.blocks[a[1]].title + "</h2>", c += "<p>" + e.blocks[a[1]].message + "</p>", c += "</div>", c += "</div>"; break; case 3: c = '<div class="col-md-3 col-sm-12 content-block">', c += '<div class="content-block-header-image-wrapper">', c += "<picture>", c += '<source media="print" srcset="' + e.blocks[a[0]].imageBase + '480.jpg">', c += '<source media="(max-width: 959px)" srcset="' + e.blocks[a[0]].imageBase + '960.jpg">', c += '<img src="' + e.blocks[a[0]].imageBase + '240.jpg" alt="' + e.blocks[a[0]].altText + '">', c += "</picture>", c += "</div>", c += '<div class="caption">', c += "<h2>" + e.blocks[a[0]].title + "</h2>", c += "<p>" + e.blocks[a[0]].message + "</p>", c += "</div>", c += "</div>", c += '<div class="col-md-6 col-sm-12 content-block">', c += '<div class="content-block-header-image-wrapper">', c += "<picture>", c += '<source media="print" srcset="' + e.blocks[a[1]].imageBase + '480.jpg">', c += '<source media="(max-width: 959px)" srcset="' + e.blocks[a[1]].imageBase + '960.jpg">', c += '<img src="' + e.blocks[a[1]].imageBase + '480.jpg" alt="' + e.blocks[a[1]].altText + '">', c += "</picture>", c += "</div>", c += '<div class="caption">', c += "<h2>" + e.blocks[a[1]].title + "</h2>", c += "<p>" + e.blocks[a[1]].message + "</p>", c += "</div>", c += "</div>", c += '<div class="col-md-3 col-sm-12 content-block">', c += '<div class="content-block-header-image-wrapper">', c += "<picture>", c += '<source media="print" srcset="' + e.blocks[a[2]].imageBase + '480.jpg">', c += '<source media="(max-width: 959px)" srcset="' + e.blocks[a[2]].imageBase + '960.jpg">', c += '<img src="' + e.blocks[a[2]].imageBase + '240.jpg" alt="' + e.blocks[a[2]].altText + '">', c += "</picture>", c += "</div>", c += '<div class="caption">', c += "<h2>" + e.blocks[a[2]].title + "</h2>", c += "<p>" + e.blocks[a[2]].message + "</p>", c += "</div>", c += "</div>"; break; case 4: c = '<div class="col-md-3 col-sm-12 content-block">', c += '<div class="content-block-header-image-wrapper">', c += "<picture>", c += '<source media="print" srcset="' + e.blocks[a[0]].imageBase + '480.jpg">', c += '<source media="(max-width: 959px)" srcset="' + e.blocks[a[0]].imageBase + '960.jpg">', c += '<img src="' + e.blocks[a[0]].imageBase + '240.jpg" alt="' + e.blocks[a[0]].altText + '">', c += "</picture>", c += "</div>", c += '<div class="caption">', c += "<h2>" + e.blocks[a[0]].title + "</h2>", c += "<p>" + e.blocks[a[0]].message + "</p>", c += "</div>", c += "</div>", c += '<div class="col-md-3 col-sm-12 content-block">', c += '<div class="content-block-header-image-wrapper">', c += "<picture>", c += '<source media="print" srcset="' + e.blocks[a[1]].imageBase + '480.jpg">', c += '<source media="(max-width: 959px)" srcset="' + e.blocks[a[1]].imageBase + '960.jpg">', c += '<img src="' + e.blocks[a[1]].imageBase + '240.jpg" alt="' + e.blocks[a[1]].altText + '">', c += "</picture>", c += "</div>", c += '<div class="caption">', c += "<h2>" + e.blocks[a[1]].title + "</h2>", c += "<p>" + e.blocks[a[1]].message + "</p>", c += "</div>", c += "</div>", c += '<div class="col-md-3 col-sm-12 content-block">', c += '<div class="content-block-header-image-wrapper">', c += "<picture>", c += '<source media="print" srcset="' + e.blocks[a[2]].imageBase + '480.jpg">', c += '<source media="(max-width: 959px)" srcset="' + e.blocks[a[2]].imageBase + '960.jpg">', c += '<img src="' + e.blocks[a[2]].imageBase + '240.jpg" alt="' + e.blocks[a[2]].altText + '">', c += "</picture>", c += "</div>", c += '<div class="caption">', c += "<h2>" + e.blocks[a[2]].title + "</h2>", c += "<p>" + e.blocks[a[2]].message + "</p>", c += "</div>", c += "</div>", c += '<div class="col-md-3 col-sm-12 content-block">', c += '<div class="content-block-header-image-wrapper">', c += "<picture>", c += '<source media="print" srcset="' + e.blocks[a[3]].imageBase + '480.jpg">', c += '<source media="(max-width: 959px)" srcset="' + e.blocks[a[3]].imageBase + '960.jpg">', c += '<img src="' + e.blocks[a[3]].imageBase + '240.jpg" alt="' + e.blocks[a[3]].altText + '">', c += "</picture>", c += "</div>", c += '<div class="caption">', c += "<h2>" + e.blocks[a[3]].title + "</h2>", c += "<p>" + e.blocks[a[3]].message + "</p>", c += "</div>", c += "</div>" } $(c).appendTo("#content-blocks") } $("#content-blocks").width() >= 960 && ($(".content-block .caption").animate({ height: "35px" }, 500), $(".content-block .caption").mouseenter(function () { $(this).stop().animate({ height: "152px" }, 500) }), $(".content-block .caption").mouseleave(function () { $(this).stop().animate({ height: "35px" }, 500) })), $(window).resize(function () { $("#content-blocks").width() >= 960 ? ($(".content-block .caption").animate({ height: "35px" }, 500), $(".content-block .caption").mouseenter(function () { $(this).stop().animate({ height: "152px" }, 500) }), $(".content-block .caption").mouseleave(function () { $(this).stop().animate({ height: "35px" }, 500) })) : ($(".content-block .caption").clearQueue().finish(), $(".content-block .caption").unbind("mouseenter mouseleave"), $(".content-block .caption").attr("style", "")) }) } function getSliders() { $.getJSON("scripts/sliders.json", function (e) { buildSlider(e) }).error(function () { buildSlider(defaultSlider) }) } function getInfoBlocks() { $.getJSON("scripts/blocks.json", function (e) { buildBlocks(e) }).error(function () { buildBlocks(defaultBlocks) }) } var currentPostViewing = 1; $(document).ready(function () { "use strict"; var e = 21, s = (new Date, new Date), a = new Date; a.setDate(a.getDate() + e); var i = s.getMonth() + 1 + "/" + s.getDate() + "/" + s.getFullYear(), t = a.getMonth() + 1 + "/" + a.getDate() + "/" + a.getFullYear(); getEventData("", "", "", i, t, 3, "tileEvents", !1, !0, !0), newsSearch(3, "", "", "tileNews", !0), getSocialStreamData(1, "all", !1, "", "", "", "container", !1), getSliders(), getInfoBlocks() }); var defaultSlider = { slides: [{ title: "COBA", message: "College of Business Administration", images: [{ normal: "images/homepage/howard-jordan.jpg", size640: "images/homepage/howard-jordan-640.jpg", size1280: "images/homepage/howard-jordan-1280.jpg", size1600: "images/homepage/howard-jordan-1600.jpg", size2560: "images/homepage/howard-jordan-2560.jpg" }], altText: "Howard Jordan Building", links: [{ link: "coba/", text: "Explore COBA" }], startDate: "August 01, 2015 20:50:10", endDate: "September 01, 2115 20:50:10" }, { title: "CLASS", message: "College of Liberal Arts & Social Sciences", images: [{ normal: "images/homepage/social-science.jpg", size640: "images/homepage/social-science-640.jpg", size1280: "images/homepage/social-science-1280.jpg", size1600: "images/homepage/social-science-1600.jpg", size2560: "images/homepage/social-science-2560.jpg" }], altText: "Social Science Building", links: [{ link: "class/", text: "Explore CLASS" }], startDate: "August 01, 2015 20:50:10", endDate: "September 01, 2115 20:50:10" }, { title: "COST", message: "College of Sciences & Technology", images: [{ normal: "images/homepage/hubert-technology.jpg", size640: "images/homepage/hubert-technology-640.jpg", size1280: "images/homepage/hubert-technology-1280.jpg", size1600: "images/homepage/hubert-technology-1600.jpg", size2560: "images/homepage/hubert-technology-2560.jpg" }], altText: "B.F. Hubert Technical Sciences Center", links: [{ link: "cost/", text: "Explore COST" }], startDate: "August 01, 2015 20:50:10", endDate: "September 01, 2115 20:50:10" }, { title: "SOTE", message: "School of Teacher Education", images: [{ normal: "images/homepage/morgan-hall.jpg", size640: "images/homepage/morgan-hall-640.jpg", size1280: "images/homepage/morgan-hall-1280.jpg", size1600: "images/homepage/morgan-hall-1600.jpg", size2560: "images/homepage/morgan-hall-2560.jpg" }], altText: "Morgan Hall", links: [{ link: "sote/", text: "Explore SOTE" }], startDate: "August 01, 2015 20:50:10", endDate: "September 01, 2115 20:50:10" }] }, defaultBlocks = { blocks: [{ title: "SSU Admissions", message: 'Learn more about <a href="prospective-student/undergrad.shtml">undergraduate</a> and <a href="graduate/index.shtml">graduate</a> admissions.', imageBase: "images/homepage/science-professor-student-block-", altText: "SSU student Enow Ayuk posing in front of marsh", startDate: "August 01, 2014 20:50:10", endDate: "September 01, 2115 20:50:10" }, { title: "Tuition, Housing, & Financial Aid", message: 'Residents of FL, SC & AL qualify for <br />in-state tuition rates. <a href="http://www.savannahstate.edu/news/article.shtml?id=508" target="_blank">Find more about border state options</a>', imageBase: "images/homepage/morning-marsh-large-tree-block-", altText: "Morning marsh large tree", startDate: "August 01, 2014 20:50:10", endDate: "September 01, 2114 20:50:10" }] };