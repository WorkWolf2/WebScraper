const axios = require('axios');
const cheerio = require('cheerio');
const { response } = require('express');
const express = require('express');


const app = express();
const PORT = 3300;

const url = 'put your url here'

axios(url)
    .then(response => {
        const html = response.data
         const $ = cheerio.load(html)
         const articles = []
         $('put the class of articles here', html).each(function() {
            const title =  $(this).text()
            const news = $(this).find('a').attr('href')
            articles.push({
                title, 
                news
            })
         })
         console.log(articles)
    }).catch(err => console.log(err))


