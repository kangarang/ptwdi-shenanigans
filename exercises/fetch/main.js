document.addEventListener('DOMContentLoaded', loaded)

function loaded() {
    var first = document.getElementById('first')
    var second = document.getElementById('second')
    var third = document.getElementById('third')

    first.addEventListener('click', function () {
        goFetch('first ', 0)
    })
    second.addEventListener('click', function () {
        goFetch('second', 10)
    })
    third.addEventListener('click', function () {
        goFetch('third', 20)
    })

    var endpoint = 'https://data.cityofnewyork.us/resource/xx67-kt59.json?zipcode=10038&$limit=10'

    function thirdButtonClicked() {
        fetch(fullQuery, {
                method: 'post',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                body: 'foo=bar&lorem=ipsum'
            })
            .then(json)
            .then(function (data) {
                console.log('Request succeeded with JSON response', data)
            })
            .catch(function (error) {
                console.log('Request failed', error)
            })
    }

    function goFetch(whichButton, offset) {
        console.log(whichButton + 'button')

        var fullQuery = endpoint + '&$offset=' + offset.toString()

        return fetch(fullQuery)
            .then(function (data) {
                if (data.ok) {
                    return data.json()
                }
                throw new Error('network error')
            })
            .then(function (json) {
                if (json.error) {
                    throw new Error(json.error)
                    return
                }
                console.log(json)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}
