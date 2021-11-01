package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func handler(request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	name := request.QueryStringParameters["name"]
	var mongo = os.Getenv("mongo")
	response := fmt.Sprintf("mongo : %s %s!", mongo, name)

	return &events.APIGatewayProxyResponse{
		StatusCode:        200,
		MultiValueHeaders: http.Header{"Set-Cookie": {"Ding", "Ping"}},
		Headers:           map[string]string{"Content-Type": "text/html; charset=UTF-8"},
		Body:              response,
	}, nil
}

func main() {
	// Make the handler available for Remote Procedure Call by AWS Lambda
	lambda.Start(handler)
}
