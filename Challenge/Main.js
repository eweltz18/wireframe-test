var images = ["http://news.nationalgeographic.com/content/dam/news/photos/000/783/78393.ngsversion.1422283303146.jpg",
              "http://dreamatico.com/data_images/ocean/ocean-2.jpg", 
              "http://awesomeocean.com/wp-content/uploads/2014/10/life_under_the_ocean-wide.jpg", 
              "http://news.nationalgeographic.com/content/dam/news/photos/000/786/78625.ngsversion.1422285259310.jpg", 
              "http://www.globalchange.gov/sites/globalchange/files/ocean-reef-fish-noC.jpg", 
              "http://blairoracle.com/wp-content/uploads/2015/11/ocean-stock.jpg", 
              "http://www.boem.gov/uploadedImages/BOEM/Environmental_Stewardship/NOP/CliffBEACH.jpg?n=1249", 
              "http://ocean.nationalgeographic.com/u/TvyamNb-BivtNwpvn7Sct0VFDulyAfA9wBcU0gVHVnqC5ghshvdl0ag4wJ5t_LQ8mtgYjJvO0QGGCCKW4Lk/", 
              "http://www.psych2go.net/wp-content/uploads/2014/10/ocean.jpg", 
              "http://myteachermissoh.weebly.com/uploads/4/5/3/7/45371531/4792504_orig.jpg"];
(function(){
  for (var i=0; i < images.length; i++) {
    document.getElementById("content").innerHTML += "<div class='galleryImg' id=" + i + "></div>";
    document.getElementById(i).style.backgroundImage = 'url(' + images[i] + ')';
  }
})();