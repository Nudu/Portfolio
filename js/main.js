console.log('Starting up');

function init() {
    renderProjects(gProjs)
}

function renderProjects(projs) {
    var strHtml = ''
    for (var i = 0; i < projs.length; i++) {
        strHtml += `
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a onclick="readProj('Safe')" class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/${gProjs[i].id}-thumbnail.jpg" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${gProjs[i].title}</h4>
          <p class="text-muted">${gProjs[i].desc}</p>
        </div>
        </div>
        `
    }
    $('#projects').html(strHtml);
}

function readProj(projId) {
    var proj = getProjById(projId)
    // console.log(bookPicLocation);
    var $modal = $('.modal-body')
    $modal.find('h2').text(proj.name)
    $modal.find('#shortdescription').text(proj.desc)
    $modal.find('#fulldescription').text('Mouthfull of hype words basicly saying the same thing as the title above - WITH AI AND MACHINE LEARNING!')
    $modal.find('#modal-picture').html(`<img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.name}.jpg" alt="ProjectPic">`)
    $modal.find('#list-date').text('Date: ' + proj.publishedAt.toUTCString())
    $modal.find('#list-client').text('Client: ' + proj.client)
    $modal.find('#list-category').text('Category: ' + proj.labels)
    $modal.show()
}

function onSubmitForm() {
  var form = $('.form-group')
  var subject = form.find('#exampleInputEmail1').val()
  var txt = form.find('#exampleFormControlTextarea1').val()
  window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&to=Nadav.Abuhatsira@gmail.com&su='+subject+'&body='+txt+'&tf=1', '_blank');
}

$('#formsubmit').click(function(){
  onSubmitForm();
});

