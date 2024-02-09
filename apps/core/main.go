package main

import (
	"fmt"
	"os"
)

// - provide path for templates
// - provide preferences (struct)
// - provide output path

func main() {
	fmt.Println("You provided:", os.Args[1])
}
