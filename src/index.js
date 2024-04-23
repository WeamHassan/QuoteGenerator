import "./style.css";

const quotes = [
  {
    person: "Nelson Mandela",
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  },
  {
    person: "Walt Disney",
    quote: "The way to get started is to quit talking and begin doing.",
  },
  {
    person: "Steve Jobs",
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma , which is living with the results of other people's thinking.",
  },
  {
    person: "Eleanor Roosevelt",
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
  },
  {
    person: "Oprah Winfrey",
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  },
  {
    person: "James Cameron",
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. ",
  },
];

const newQuotebtn = document.querySelector("#new-quote");

const quoteText = document.querySelector(".quote");
const personText = document.querySelector(".person");

newQuotebtn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomNumber].quote;
  personText.textContent = quotes[randomNumber].person;
});
