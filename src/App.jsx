import './App.css'
import Header from './Header.jsx';
import Card from './Card.jsx';
import githubuserfinder from "./assets/githubuserfinder.png";
import recipefinder from "./assets/recipefinder.png";
import currencyconverter from "./assets/currencyconverter.png";
import todoapp from "./assets/todoapp.png";
import expensetracker from "./assets/expensetracker.png";
import colorpalette from "./assets/colorpalette.png";
import bookmarksaver from "./assets/bookmarksaver.png";
import quizz from "./assets/quizz.png";
import kanbanboard from "./assets/kanbanboard.png";
import formvalidator from "./assets/formvalidator.png";
import weatherapp from "./assets/weatherapp.png";
import todoappretro from "./assets/todoapp-retro.png";

function App() {
    const projects = [
        {
            img: githubuserfinder,
            title: "GitHub User Finder",
            text: "Uses the GitHub API to find and display user data",
            link: "https://sabith1238.github.io/GithubFinder/",
        },
        {
            img: todoappretro,
            title: "Retro TodoApp (React JS)",
            text: "Uses LocalStorage and React JS",
            link: "https://sabith1238.github.io/TodoApp-Retro/",
        },
        {
            img: recipefinder,
            title: "Recipe Finder",
            text: "Uses TheMealDB API to find recipes",
            link: "https://sabith1238.github.io/RecipeFinder/",
        },
        {
            img: weatherapp,
            title: "Weather App (ReactJS)",
            text: "Weather App using OpenWeather and OpenStreet API",
            link: "https://sabith1238.github.io/weatherapp-react/",
        },
        {
            img: currencyconverter,
            title: "Currency Converter",
            text: "A Currency Converter using free ExchangeRate API",
            link: "https://sabith1238.github.io/CurrencyConverter/",
        },
        {
            img: todoapp,
            title: "Todo App",
            text: "Todo App with Local Storage",
            link: "https://sabith1238.github.io/TodoApp/",
        },
        {
            img: expensetracker,
            title: "Expense Tracker",
            text: "An Expense Tracker with Local Storage",
            link: "https://sabith1238.github.io/ExpenseTracker/",
        },
        {
            img: colorpalette,
            title: "Color Palette Generator",
            text: "A Color Palette Generator with copy functionality",
            link: "https://sabith1238.github.io/ColorPalette/",
        },
        {
            img: bookmarksaver,
            title: "Bookmark Saver",
            text: "A Bookmark Saver with Local Storage",
            link: "https://sabith1238.github.io/BookmarkSaver/",
        },
        {
            img: quizz,
            title: "Quiz App",
            text: "A Quiz App with progress-bar and points count",
            link: "https://sabith1238.github.io/Quiz/",
        },
        {
            img: kanbanboard,
            title: "Kanban Board",
            text: "A simple Kanban Board with drag and drop",
            link: "https://sabith1238.github.io/KanbanBoard/",
        },
        {
            img: formvalidator,
            title: "Form Validator",
            text: "A Form Validator app for registration",
            link: "https://sabith1238.github.io/FormValidation/",
        },
    ];

    return (
        <>
            <Header/>
            <main>
                <div className="container mb-4">
                    <div className="row gy-5">
                        {projects.map(({ img, title, text, link}) => (<Card key={title} img={img} title={title} text={text} link={link}/>))}
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
