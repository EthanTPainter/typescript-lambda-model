import { APIGatewayEvent } from "aws-lambda";

/**
 * Class for parsing data from the lambda event
 */
export class LambdaEvent {

	/**
	 * Constructor with 
	 * @param event 
	 */
	constructor(event: APIGatewayEvent){}

	/**
	 * Functions to retrieve event values 
	 * body, id, token, etc.
	 */
	getBody() {}
	getId(){}
	getToken(){}
}
