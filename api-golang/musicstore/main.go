package main

import (
	"log"
	"net/http"

	"github.com/gorilla/handlers"

	albumRoutes "musicstore/album"
)

func main() {
	router := albumRoutes.NewRouter()

	// launch server
	log.Fatal(http.ListenAndServe(":9000",
		handlers.CORS(handlers.AllowedOrigins([]string{"*"}), handlers.AllowedMethods([]string{"GET", "POST", "DELETE", "OPTIONS", "PUT", "UPDATE"}))(router)))

}
