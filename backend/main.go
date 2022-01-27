package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func GetAllMlbPlayer(w http.ResponseWriter, r *http.Request){
	json.NewEncoder(w).Encode("Hello Gorilla")
}

func main() {
	router := mux.NewRouter()

	// Routes
	router.HandleFunc("/", GetAllMlbPlayer).Methods("GET")

	log.Fatal(http.ListenAndServe(":3001", router))
}