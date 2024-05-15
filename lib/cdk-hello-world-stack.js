"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkHelloWorldStack = void 0;
const cdk = require("aws-cdk-lib");
const lambda = require("aws-cdk-lib/aws-lambda");
const apigateway = require("aws-cdk-lib/aws-apigateway");
class CdkHelloWorldStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // Define the lambda function
        const helloWorldFunction = new lambda.Function(this, 'HelloWorldFunction', {
            runtime: lambda.Runtime.NODEJS_20_X,
            code: lambda.Code.fromAsset('lambda'),
            handler: 'hello.handler',
        });
        // Define the API Gateway resource
        const api = new apigateway.LambdaRestApi(this, 'HelloWorldApi', {
            handler: helloWorldFunction,
            proxy: false,
        });
        // Define the '/hello' resource with a GET method
        const helloResource = api.root.addResource('hello');
        helloResource.addMethod('GET');
    }
}
exports.CdkHelloWorldStack = CdkHelloWorldStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWhlbGxvLXdvcmxkLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLWhlbGxvLXdvcmxkLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUVuQyxpREFBaUQ7QUFDakQseURBQXlEO0FBRXpELE1BQWEsa0JBQW1CLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDL0MsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUM5RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4Qiw2QkFBNkI7UUFDN0IsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1lBQ3pFLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztZQUNyQyxPQUFPLEVBQUUsZUFBZTtTQUN6QixDQUFDLENBQUM7UUFFSCxrQ0FBa0M7UUFDbEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDOUQsT0FBTyxFQUFFLGtCQUFrQjtZQUMzQixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUMsQ0FBQztRQUVILGlEQUFpRDtRQUNqRCxNQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRCxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpDLENBQUM7Q0FDRjtBQXRCRCxnREFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnYXdzLWNkay1saWIvYXdzLWxhbWJkYSc7XG5pbXBvcnQgKiBhcyBhcGlnYXRld2F5IGZyb20gJ2F3cy1jZGstbGliL2F3cy1hcGlnYXRld2F5JztcblxuZXhwb3J0IGNsYXNzIENka0hlbGxvV29ybGRTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIC8vIERlZmluZSB0aGUgbGFtYmRhIGZ1bmN0aW9uXG4gICAgY29uc3QgaGVsbG9Xb3JsZEZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnSGVsbG9Xb3JsZEZ1bmN0aW9uJywge1xuICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzIwX1gsXG4gICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJ2xhbWJkYScpLFxuICAgICAgaGFuZGxlcjogJ2hlbGxvLmhhbmRsZXInLFxuICAgIH0pO1xuXG4gICAgLy8gRGVmaW5lIHRoZSBBUEkgR2F0ZXdheSByZXNvdXJjZVxuICAgIGNvbnN0IGFwaSA9IG5ldyBhcGlnYXRld2F5LkxhbWJkYVJlc3RBcGkodGhpcywgJ0hlbGxvV29ybGRBcGknLCB7XG4gICAgICBoYW5kbGVyOiBoZWxsb1dvcmxkRnVuY3Rpb24sXG4gICAgICBwcm94eTogZmFsc2UsXG4gICAgfSk7XG4gICAgICAgIFxuICAgIC8vIERlZmluZSB0aGUgJy9oZWxsbycgcmVzb3VyY2Ugd2l0aCBhIEdFVCBtZXRob2RcbiAgICBjb25zdCBoZWxsb1Jlc291cmNlID0gYXBpLnJvb3QuYWRkUmVzb3VyY2UoJ2hlbGxvJyk7XG4gICAgaGVsbG9SZXNvdXJjZS5hZGRNZXRob2QoJ0dFVCcpO1xuXG4gIH1cbn1cbiJdfQ==