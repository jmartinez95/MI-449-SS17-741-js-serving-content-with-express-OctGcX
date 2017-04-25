var express = require('express')
var app = express()
var port = process.env.PORT || 8080

app.set('view engine', 'ejs')

app.use(express.static('public'))

var pages = {}

function createPage (page) {
  var id = Object.keys(pages).length
  pages[id] = page
}

createPage({
  pageTitle: 'Gaurdians of the Galaxy',
  pageUrl: '/gaurdians/',
  pageImage: 'Gaurdians.jpg',
  releaseDate: 'May 5th, 2017',
  pageLink: 'https://www.rottentomatoes.com/m/guardians_of_the_galaxy_vol_2/'
})

createPage({
  pageTitle: 'Pirates of the Caribean',
  pageUrl: '/pirates/',
  pageImage: 'Pirates.jpg',
  releaseDate: 'May 26th, 2017',
  pageLink: 'https://www.rottentomatoes.com/m/pirates_of_the_caribbean_dead_men_tell_no_tales'
})

createPage({
  pageTitle: 'Captain Underpants',
  pageUrl: '/underpants/',
  pageImage: 'Captain.jpg',
  releaseDate: 'June 2nd, 2017',
  pageLink: 'https://www.rottentomatoes.com/m/captain_underpants_the_first_epic_movie'
})

app.get('/', function (request, response) {
  response.render('pages/index', {
    pages: pages,
    page: {pageTitle: 'Home'}
  })
})

app.get('/gaurdians', function (request, response) {
  response.render('pages/movie-template', {
    pages: pages,
    page: pages[0]
  })
})

app.get('/pirates', function (request, response) {
  response.render('pages/movie-template', {
    pages: pages,
    page: pages[1]
  })
})

app.get('/underpants', function (request, response) {
  response.render('pages/movie-template', {
    pages: pages,
    page: pages[2]
  })
})

app.listen(port)
