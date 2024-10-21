function fetchFilmDetails(){
    fetch('http://localhost:3000/films/1')
    .then(response => response.json())
    .then(film => {
        document.getElementById('poster').src = film.poster
        document.getElementsByClassName('card')
        document.getElementById('title').textContent = film.title
        document.getElementById('runtime').textContent = `${film.runtime} minutes`
        document.getElementById('film-info').textContent = film.description
        document.getElementById('showtime').textContent = film.showtime
        availableTickets = film.capacity - film.tickets_sold
        document.getElementById('ticket-num').textContent = availableTickets
  })
}
fetchFilmDetails()
 

function fetchFilmList(){
    fetch('http://localhost:3000/films')
    .then(response => response.json())
    .then(filmList => {
        const films = document.getElementById('films')
        filmList.forEach(film => {
            const li = document.createElement('li')
            li.textContent = film.title
            films.appendChild(li)
        });
    })
 }
fetchFilmList()

const buyTicket = document.getElementById('buy-ticket')               
buyTicket.addEventListener('click', (e) => {
    if (availableTickets > 0) {
        availableTickets--
        document.getElementById('ticket-num').textContent = availableTickets
    
    if (availableTickets === 0) {
        buyTicket.textContent = 'sold-out'
    }
  }
})
