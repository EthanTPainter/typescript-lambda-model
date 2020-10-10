import { APIGatewayEvent, Context, Callback } from "aws-lambda";

import { ResponseFormatter } from "./response-formatter/response-formatter";
import { LambdaEvent } from "./lambda-event/lambda-event";
import { Controller } from "./controller";
import { Manager } from "./manager";

/**
 * Lambda Event handler
 * Entry point for all lambda requests
 *
 * @param event AWS Lambda Event (In this example, the lambda is
 *   connected to an API Gateway resource, so it's an APIGateway Event)
 * @param context AWS Lambda Context Object
 * @param callback AWS Lambda Callback
 */

export function handler(
	event: APIGatewayEvent,
	context: Context,
	callback: Callback
) {
	/**
	 * Create LambdaEvent class and pass through API Gateway Event
	 * Use LambdaEvent functions to parse data and setup controller layer
	 */
	const lambdaEvent = new LambdaEvent(event);

	const controller = new Controller();

	const result = new Manager();
	const response = new ResponseFormatter(result);
	const formattedResponse = response.formatToJson();
	return formattedResponse;
}
