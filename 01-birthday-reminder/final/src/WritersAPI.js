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

//MANIPULATE THE ARRAY

//What do I want to do?

// #First remove clutter manually: everything before and after the list => done
// #Then Divide the array in one array per date
//      ## if name is empty, "cut" the array. (how? slice -> returns subarray.  method match? filter?)
let array = './writers-birthday.json'
//  #then give the objects the right birthday date => map? 
// is it better to have one birthday date per writer? or have an array per date with all the writers?
// ## Change the string "Writer born 1 January" to a date format. First split(?) the string "Writer born". 
// Then change month into number and add "0" and "." (e.g. 01.01) => will it match the date format?

// Invoke the above function
scrapeData();
