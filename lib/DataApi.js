class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }

  getUserData() {
    const userData = this.rawData.data.person;
    return userData;
  }

  getAllQuotes(){
    const allQuotes = this.rawData.data.quotes;
    return allQuotes;
  }

  getRandoNumber(max){
    return Math.floor(Math.random() * Math.floor(max));
  }

  getRandomQuote() {
    const arrQuoLen = this.rawData.data.quotes.length;
    const randomInt = this.getRandoNumber(arrQuoLen);
    const allQuoteArr = this.getAllQuotes();
    return allQuoteArr[randomInt];
  }

}

export default DataApi;
