const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');

// URL of the page we want to scrape
const url = 'https://www.writerswrite.co.za/literary-birthday-calendar/';

//Async function which scrapes the data

async function scrapeData() {
  try {
    //Fetch HTML of the page we want to scrape

    const { data } = await axios.get(url);
    // Loads all the HTML of the page we fetched in the previous line
    const $ = cheerio.load(data);

    //Select all the list of writers
    const listWriters = $('li, p');
    //Store data for all writers
    const writers = [];
    //Use each method to loop through the li we selected
    listWriters.each((idx, el) => {
      const writer = { name: this.name, birthday: this.birthday };
      writer.name = $(el).children('a').text();
      writer.birthday = $(el).children('strong').text(); // find a solution here!

      //Populate writers array with data
      writers.push(writer);
    });
    // Logs countries array to the console
    console.log(writers);
    // Write countries array in countries.json file
    fs.writeFile(
      'writers-birthday.json',
      JSON.stringify(writers, null, 2),
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('Successfully written data to file');
      }
    );
  } catch (err) {
    console.error(err);
  }
}


// Invoke the above function
scrapeData();
