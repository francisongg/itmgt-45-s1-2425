/**
 * Relationship status
 */

let socialGraph;
socialGraph = {
    "@bongolpoc":{"first_name":"Joselito",
                  "last_name":"Olpoc",
                  "following":[
                  ]
    },
    "@joaquin":  {"first_name":"Joaquin",
                  "last_name":"Gonzales",
                  "following":[
                      "@chums","@jobenilagan"
                  ]
    },
    "@chums" : {"first_name":"Matthew",
                "last_name":"Uy",
                "following":[
                    "@bongolpoc","@miketan","@rudyang","@joeilagan"
                ]
    },
    "@jobenilagan":{"first_name":"Joben",
                   "last_name":"Ilagan",
                   "following":[
                    "@eeebeee","@joeilagan","@chums","@joaquin"
                   ]
    },
    "@joeilagan":{"first_name":"Joe",
                  "last_name":"Ilagan",
                  "following":[
                    "@eeebeee","@jobenilagan","@chums"
                  ]
    },
    "@eeebeee":  {"first_name":"Elizabeth",
                  "last_name":"Ilagan",
                  "following":[
                    "@jobenilagan","@joeilagan"
                  ]
    },
}

/**
 * Tic tac toe
 */
let board1 = [
['X','X','O'],
['O','X','O'],
['O','','X'],
]

let board2 = [
['X','X','O'],
['O','X','O'],
['','O','X'],
]

let board3 = [
['O','X','O'],
['','O','X'],
['X','X','O'],
]

let board4 = [
['X','X','X'],
['O','X','O'],
['O','','O'],
]

let board5 = [
['X','X','O'],
['O','X','O'],
['X','','O'],
]

let board6 = [
['X','X','O'],
['O','X','O'],
['X','',''],
]

let board7 = [
['X','X','O',''],
['O','X','O','O'],
['X','','','O'],
['O','X','','']
]

/**
 * ETA
 *
 * "fromStop,toStop"
 */

let route_map = {
     "upd,admu":{
         "travel_time_mins":10
     },
     "admu,dlsu":{
         "travel_time_mins":35
     },
     "dlsu,upd":{
         "travel_time_mins":55
     }
}

route_map = {
    "a1,a2": {
        'travel_time_mins': 10
    },
    "a2,b1": {
        'travel_time_mins': 10230
    },
    "b1,a1": {
        'travel_time_mins': 1
    }
}
