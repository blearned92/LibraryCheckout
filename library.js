class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._rating = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    
    get rating() {
      return this._rating;
    }
    //proper setter
    set isCheckedOut(newCheckoutStatus) {
        this._isCheckedOut = newCheckoutStatus;
      }
    //works as intended
    toggleCheckoutStatus() {
      if (this._isCheckedOut === true) {
        this._isCheckedOut = false;
      } else {
        this._isCheckedOut = true;
      }
    }
    //takes rating array values, adds them together, and divides by total number of elements in the array
    getAverageRating() {
      const reducer = (previousValue, currentValue) => previousValue + currentValue;
      return this._rating.reduce(reducer)/(this._rating.length);
    }
    //takes one argument to add a number to rating array
    addRating(newRating) {
        this._rating.push(newRating);
    }
  };

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}



//general media
const moulinRouge = new Media("Moulin Rouge!");
const perfume = new Book("Perfume: Story of a Murderer", 
"Patrick Suskind", 370);
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)

//books
console.log("Title: " + perfume.title)
console.log("Author: " + perfume.author)
console.log("Page Amount: " + perfume.pages)
perfume.addRating(5)
perfume.addRating(6)
perfume.addRating(8)
console.log("Average Book Rating: " + perfume.getAverageRating())
perfume.toggleCheckoutStatus()
console.log("Is the book checked out?: " + perfume.isCheckedOut)
console.log("==============================")
console.log("Title: " + historyOfEverything.title)
console.log("Author: " + historyOfEverything.author)
console.log("Page Amount: " + historyOfEverything.pages)
historyOfEverything.toggleCheckoutStatus()
console.log("Is the book checked out?: " + historyOfEverything.isCheckedOut)
console.log("==============================")
//Movies
console.log("Movie Title: " + moulinRouge.title)
console.log("Is the movie checked out? " + moulinRouge.isCheckedOut)
moulinRouge.toggleCheckoutStatus()
console.log("Is the movie checked out? " + moulinRouge.isCheckedOut)
moulinRouge.addRating(5)
moulinRouge.addRating(4)
console.log("Average Movie Rating: " + moulinRouge.getAverageRating())
console.log("==============================")