'use strict';
if (this.QUnitPractice === undefined) this.QUnitPractice = {};

(function(context) {

function arabicAuthorsCount(authors) {
  var arabicAuthors = authors.filter(function(author) {
    return author.language === 'Arabic';
  });
  return arabicAuthors.length;
}

  function englishAuthorsCount(authors) {
    var englishAuthors = authors.filter(function(author){
      return author.language === 'English';
    });
    return englishAuthors.length;
  }

  function russianAuthorsCount(authors) {
    var russianAuthors = authors.filter(function(author) {
      return author.language === 'Russian';
    });
    return russianAuthors.length;
  }

  function authorsPublishedOver500(authors) {
    var authorsMoreThan500 = authors.filter(function(author) {
      return author.publishedWorks > 500;
    });
    return authorsMoreThan500.length;
  }

  function authorMostPublishedWorks(authors) {
    var mostWorks = authors[0];
    authors.forEach(function(author) {
      if (author.publishedWorks > mostWorks.publishedWorks) {
        mostWorks = author;
      }
    });
    return mostWorks.name;
  }

  function nameBeginsWithA(authors) {
    var filteredAuthors = [];
    for (var author of authors) {
      if (author.name.indexOf("A") === 0) {
        filteredAuthors.push(author);
      }
    }
    return filteredAuthors.length;
  }

  function nameBeginsWithK(authors) {
    var filteredAuthors = [];
    for (var author of authors) {
      if (author.name.indexOf('K') === 0) {
        filteredAuthors.push(author);
      }
    }
    return filteredAuthors.length;
  }

  function avgPublishedWorks(authors) {
    var sum = 0;
    for (var idx = 0; idx < authors.length; idx++) {
      var author = authors[idx];
      sum += author.publishedWorks;
    }
    var avg = sum/authors.length;
    avg = Math.round(avg);
    return avg;
  }

  function avgPublishedWorksByEnglish(authors) {
    var filteredList = [];
    for (var idx = 0; idx < authors.length; idx++) {
      var author = authors[idx];
      if (author.language === "English") {
        filteredList.push(author);
      }
    }
    var sum = 0;
    for (var x of filteredList) {
      sum += x.publishedWorks;
    }
    var avg = sum/filteredList.length;
    avg = Math.floor(avg);
    return avg;
  }

  function avgPublishedWorksInJapanese(author) {
    var filteredList = [];
    for (var idx = 0; idx < authors.length; idx++) {
      var author = authors[idx];
      if (author.language === "Japanese") {
      filteredList.push(author);
      }
    }
      var sum = 0;
      for (var author of filteredList) {
      sum += author.publishedWorks;
      }
    var avg = sum/filteredList.length;
    avg = Math.floor(avg);
    return avg;
  }

  context.arabicAuthorsCount = arabicAuthorsCount;
  context.englishAuthorsCount = englishAuthorsCount;
  context.russianAuthorsCount = russianAuthorsCount;
  context.authorsPublishedOver500 = authorsPublishedOver500;
  context.authorMostPublishedWorks = authorMostPublishedWorks;
  context.nameBeginsWithA = nameBeginsWithA;
  context.nameBeginsWithK = nameBeginsWithK;
  context.avgPublishedWorks = avgPublishedWorks;
  context.avgPublishedWorksByEnglish = avgPublishedWorksByEnglish;
  context.avgPublishedWorksInJapanese = avgPublishedWorksInJapanese;

})(window.QUnitPractice);
