/**
 * Responsible for formatting the response of the lambda event
 *
 * Accepts the response of the
 */
export class ResponseFormatter {
	response;

	constructor(response: any) {
		this.response = response;
	}

	formatToJson() {}
}
