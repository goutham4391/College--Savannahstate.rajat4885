/*jslint browser: true*/
/*global $, jQuery, alert*/

function displayNewData(data, status, heroElement, element, isFrontPage) {
    'use strict';
    if (status === "success") {
        if (data.length >= 0) {
            var count, formattedDate, unformattedDate, postType, content, url, image, title, socialLinkText;
            var xml = data;
            var xmlDoc = $.parseXML(xml);
            var $xml = $(xmlDoc);
            var blnHeroFound = false;
            if (!isFrontPage) {
                blnHeroFound = true;
            }
            $xml.find("Article").each(function (index) {
                postType = $(this).find('ArticleType').text();
                unformattedDate = $(this).find('DatePublished').text();
                url = $(this).find('Id').text();
                content = $(this).find('Body').text();
                image = $(this).find('Image').text();
                title = $(this).find('Title').text();
                socialLinkText = $(this).find('Link').text();
                if (typeof unformattedDate === "string") {
                    formattedDate = timeConversion(unformattedDate);
                }

                if (typeof postType !== "string") {
                    postType = "";
                }
                if (image.length > 0) {
                    if (image != "https://www.savannahstate.edu/graduate/ssu_small.jpg") {
                        content = "<img src='https://www.savannahstate.edu/content/mediakitfiles/" + image + "' /><p>" + content + "</p>";
                    }
                }

                //url = websiteURL + "news/article.shtml?id=" + url+"&j=1";
                url = websiteURL + "News/" + formattedDate.substring(6, 10) + "/" + formattedDate.substring(0, 2) + "/" + formattedDate.substring(3, 5) + "/" + socialLinkText

                var $newItems;
                if (!blnHeroFound) {
                    if (content.indexOf("<img") > -1) {
                        blnHeroFound = true;
                        var myRegex = /<img[^>]+>/;
                        var images = myRegex.exec(content);
                        var stripped = content.replace(/<(?:.|\n)*?>/gm, '');
                        $newItems = $(images[0] + "<div class='newsHeroDetails'><h2>" + title + "</h2><span class='posttime'>" + formattedDate + "</span><br/><a class='btn-standard' href='" + url + "'>Read More</a></div>");
                        $newItems.prependTo("#" + heroElement);
                    } else {
                        $newItems = $("<li><a href='" + url + "'>" + title + "</a><span class='posttime'> &nbsp;" + formattedDate + "</span></li>");
                        $newItems.appendTo("#" + element);
                    }
                } else {
                    $newItems = $("<li><a href='" + url + "'>" + title + "</a><span class='posttime'> &nbsp;" + formattedDate + "</span></li>");
                    $newItems.appendTo("#" + element);
                }
            });

            $("#newsPreloader").hide();
        }
    }
}

function displayArticle(data, status) {
    'use strict';
    if (status === "success") {
        if (data.length >= 0) {
            var count, formattedDate, unformattedDate, postType, content, url, image, title, link, disabled;
            var tags = [];
            var xml = data;
            var xmlDoc = $.parseXML(xml);
            var $xml = $(xmlDoc);
            $xml.find("Article").each(function (index) {
                postType = $(this).find('ArticleType').text();
                unformattedDate = $(this).find('DatePublished').text();
                url = $(this).find('Id').text();
                content = $(this).find('Body').text();
                if (content != "") {
                    content = content.replace("src=\"https://www.savannahstate.edu/news/", "src=\"http://www.savannahstate.edu/news/");
                }
                image = $(this).find('Image').text();
                title = $(this).find('Title').text();
                link = $(this).find('Link').text();
                disabled = $(this).find('Disabled').text();

                $(this).find('Tags string').each(function () {
                    tags.push($(this).text());
                });

                if (typeof unformattedDate === "string") {
                    formattedDate = timeConversion(unformattedDate);
                }

                if (typeof postType !== "string") {
                    postType = "";
                }
                if (image.length > 0) {
                    if (image != "https://www.savannahstate.edu/graduate/ssu_small.jpg") {
                        content = "<img src='" + image + "' /><p>" + content + "</p>";
                    }
                }

                var x = 0;
                for (x == 0; x < tags.length; x++) {
                    $("<a class='btn-standard' href='" + websiteURL + "news/search.shtml?type=tags&keyword=" + encodeURIComponent(tags[x]) + "'>" + tags[x] + "</a>").appendTo("#tags");
                }

                if (title != "") {
                    $(".title").html(title);
                    var breadcrumbTitle = $(".breadCrumbs span:last-of-type");
                    $(breadcrumbTitle).html("/&nbsp;" + title);
                    $("#newsDate").html(formattedDate);
                    $("#newsContent").html(content);
                    if (link != "") {
                        //window.open(link);
                        //$("#links").html("Please use the link below if the you have a pop-up blocker enabled.<br/> <a target='_blank' href='" + link + "'>" + link + "</a>");
                    }
                    if (disabled == "true") {
                        $(".archived").html("<span class='glyphicon glyphicon-folder-open' title='Archived'></span>&nbsp;&nbsp;FOR ARCHIVAL PURPOSES ONLY");
                    }
                } else {
                    $("#newsContent").html("The article you are looking for was not found. Please try again.");
                    $("#newsDate").html("");
                    $("#relatedTopics").hide();

                }
                var $newItems;
                $newItems = $("<div class='suggest-story'><a href='http://www.savannahstate.edu/story/suggest' target='_blank'>suggest a story</a></div>");
                $newItems.appendTo("#newsContent");
            });

            $("#newsPreloader").hide();
        }
    }
}

function displayNewsResults(data, status, element) {
    'use strict';
    if (status === "success") {
        if (data.length > 0) {
            $("#" + element).html("");
            var count, formattedDate, unformattedDate, postType, content, url, image, title, link, formattedDateDisabled, unformattedDateDisabled, disabled;
            var xml = data;
            var xmlDoc = $.parseXML(xml);
            var $xml = $(xmlDoc);
            var blnHeroFound = false;
            var articleCnt = 0;
            $xml.find("Article").each(function (index) {
                articleCnt++;
                postType = $(this).find('ArticleType').text();
                unformattedDate = $(this).find('DatePublished').text();
                unformattedDateDisabled = $(this).find('DateDisabled').text();
                url = $(this).find('Id').text();
                content = $(this).find('Body').text();
                image = $(this).find('Image').text();
                title = $(this).find('Title').text();
                link = $(this).find('Link').text();
                disabled = $(this).find('Disabled').text();
                if (typeof unformattedDate === "string") {
                    formattedDate = timeConversion(unformattedDate);
                }

                if (typeof unformattedDateDisabled === "string") {
                    if (unformattedDateDisabled != "0001-01-01T00:00:00") {
                        formattedDateDisabled = timeConversion(unformattedDateDisabled);
                    } else {
                        formattedDateDisabled = "";
                    }
                } else {
                    formattedDateDisabled = "";
                }

                if (typeof postType !== "string") {
                    postType = "";
                }
                if (image.length > 0) {
                    if (image != "https://www.savannahstate.edu/graduate/ssu_small.jpg") {
                        content = "<img src='" + image + "' /><p>" + content + "</p>";
                    }
                }

                url = websiteURL + "News/" + formattedDate.substring(6, 10) + "/" + formattedDate.substring(0, 2) + "/" + formattedDate.substring(3, 5) + "/" + link


                var $newItems;
                if (disabled == "true") {
                    $newItems = $("<li><span class='glyphicon glyphicon-folder-open' title='Archived'></span>&nbsp;&nbsp;<a href='" + url + "'>" + title + "</a><span class='posttime'> &nbsp;" + formattedDate + "</span></li>");
                } else {
                    $newItems = $("<li><a href='" + url + "'>" + title + "</a><span class='posttime'> &nbsp;" + formattedDate + "</span></li>");
                }
                $newItems.appendTo("#" + element);

            });

            if (articleCnt == 0) {
                $("#" + element).html("");
                var $newItems = $("<li>No recent news articles found for this category.</li>");
                $newItems.appendTo("#" + element);
            }

            $("#newsPreloader").hide();
        } else {
            $("#" + element).html("");
            var $newItems = $("<li>No recent news articles found for this category.</li>");
            $newItems.appendTo("#" + element);
        }


        $newItems = $("<li class='suggest-story'><a href='http://www.savannahstate.edu/story/suggest' target='_blank'>suggest a story</a></li>");
        $newItems.appendTo("#" + element);
    }
}

function getNewsData(numberOfPosts, mediaType, keyword, type, heroElement, element, isFrontPage) {
    'use strict';

    var url = domainName + "NewsService.asmx/GetAllArticles?onlyActive=true&numberOfArticles=" + numberOfPosts;
    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
        //alert('CORS not supported');
        return;
    }

    // Response handlers.
    xhr.onload = function () { displayNewData(xhr.responseText, "success", heroElement, element, isFrontPage); };

    xhr.onerror = function () {
        streamError(element);
    };

    xhr.send();
}

function getNewsById() {
    'use strict';


    var Id = getUrlVars()["id"];

    var url = domainName + "NewsService.asmx/GetArticleById?id=" + Id;
    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
        //alert('CORS not supported');
        return;
    }

    // Response handlers.
    xhr.onload = function () { displayArticle(xhr.responseText, "success"); };

    xhr.onerror = function () {
        streamError();
    };

    xhr.send();
}

function newsSearch(numberOfPosts, type, keyword, element, onlyActive) {
    'use strict';
    var url = "";
    if (type == "tags") {
        url = domainName + "NewsService.asmx/SearchByType?type=" + keyword + "&onlyActive=" + onlyActive + "&numberOfArticles=" + numberOfPosts;
    } else {
        url = domainName + "NewsService.asmx/Search?keyword=" + keyword + "&onlyActive=" + onlyActive + "&numberOfArticles=" + numberOfPosts;
    }


    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
        //alert('CORS not supported');
        return;
    }

    // Response handlers.
    xhr.onload = function () { displayNewsResults(xhr.responseText, "success", element); };

    xhr.onerror = function () {
        streamError();
    };

    xhr.send();
}

$(document).ready(function () {
    'use strict';

    $("#btnNewsSearch").click(function () {
        $("#newsPreloader").show();
        var keyword = $("#txtNewsSearch").val();
        newsSearch(0, "title", keyword, "searchNewsResults", false);
    });
});