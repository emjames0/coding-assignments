//the code below establishes the class for Video Games and represents a single game in the library. 
class videoGame {
    constructor(title, genre, platform) {
        this.title = title;
        this.genre = genre; 
        this.platform = platform;
    }
//this code gives unique description to the video game(s)
    describe() {
        return `${this.title} is a ${this.genre} game available on ${this.platform}.`
    }
}

//the code below establishes the class for the Video Game Library that will hold each Video Game instance,
//it includes methods to add games to the library and to describe games in the library. 
class videoGameLibrary {
    constructor() {
        this.games = [];
    }
//this method allows a game to be added to the video game library array 
    addGame(game) {
        if (game instanceof videoGame) {
            this.games.push(game);
        }
        else {
            throw new Error(`You can only add an instance of videoGame. Argument is not game: ${game}.`);
        }
    }
//this method simply describes the games that the library holds
    describe() {
        return `Library has ${this.games.length} games.`; 
    }
}

//the code below establishes the Menu class which handles the users interactions with the video game library.
//it is responsible for creating, deleting, and keeping track of games within the library class. 
class Menu {
    constructor() {
        this.library = new videoGameLibrary();
        this.selectedGame = null;
    }
//this method below is the entry of the application where a user can navigate each option to perform an action
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch(selection) {
                case '1':
                    this.createGame();
                    break;
                case '2':
                    this.viewGame();
                    break;
                case '3':
                    this.deleteGame();
                    break;
                case '4':
                    this.displayGames();
                    break;
                default: 
                    selection = 0;
            }
        selection = this.showMainMenuOptions();
        }
    alert(`Goodbye!`);
    }
//this code below displays the main library options and retrieves user input
    showMainMenuOptions() {
        return prompt(`
            0) Exit
            1) Create a new game
            2) View a game 
            3) Delete a game 
            4) Display all games
            `);
    }
//this code below displays options related to the indvidual game selection and retrieves user input 
    showGameMenuOptions(gameInfo) {
        return prompt(`
            0) Back 
            1) Add a new game
            2) Delete a game
            --------------------
            ${gameInfo}
            `);
    }
//the code below displays a list of all the games in the library
    displayGames() {
        let gameString = '';
        for (let i = 0; i < this.library.games.length; i++) {
            gameString += i + ')' + this.library.games[i].title + '\n';
        }
        alert(gameString);
    }
//the code below will prompt a user to enter information related to a new video game being added to the library 
    createGame() {
        let title = prompt('Enter title for new game:');
        let genre = prompt('Enter genre for new game:');
        let platform = prompt('Enter platform for new game:');
        this.library.addGame(new videoGame(title, genre, platform));
    }
//the code below allows the user to view the specific details of a selected video game
//side-note ... this one was a doozy for me. 
    viewGame() {
        let index = prompt('Enter the index of the game you want to view:');
        if (index > -1 && index < this.library.games.length) {
            this.selectedGame = this.library.games[index]; 
            let description = 'Game Title: ' + this.selectedGame.title + '\n' +
                              'Genre: ' + this.selectedGame.genre + '\n' +
                              'Platform: ' + this.selectedGame.platform + '\n'; 
            let selection1 = this.showGameMenuOptions(description);
            switch(selection1) {
                case '1':
                    this.createGame();
                    break;
                case '2': 
                    this.deleteGame();
                    break;
            }
        }
    }
//the code below allows a user to delete a single video game from the video game library 
    deleteGame() {
        let index = prompt('Enter the index of the game you wish to delete:');
        if (index > -1 && index < this.library.games.length) {
            this.library.games.splice(index,1); 
        }
    }
}

let menu = new Menu();
menu.start(); 


