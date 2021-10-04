# Cars Crud


To run the app:

First, create a .env file, you can copy paste the contents of .env.example to start.


To run it in development mode, first install the dependencies, then use docker-compose like below
```
npm install
docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up
```
To run it in production mode, use
```
docker-compose up
```


## Architecture

I chose a clean architecturish design for this project.

As you can see there's a dependency inversion between the business logic(domain) layer and the data layer(stared by the domain's layer abstract repositories that are implemented in the data layer).
The repository is injected in the usecase through the class constructor rather than just imported and having it's methods called.

This allows for easier testing and facilitates future implementations of the repositories. New implementations for the same repository will be valid as long as they keep the contract estabilished in the abstract class. If we want to change the database for example, we only have to change the data layer, we don't have to change the code in the domain layer at all.

It's better for testing because we can test the usecases with implementations of the repository that will not rely on a database, this way we can make unit tests without having to go for chicky solutions like mocking databases on memory or things like that.

Another thing you can realize is that only by looking at the folder structure, you can already see what the project is about.

Here are some of the objects you're gonna find in this architecture and their responsabilities:

- controllers
  Controllers in this case serve as input/output adapters, passing the necessary data to methods of deeper levels of the architecture and later formating the responses of this methods into the standard response model for this api and returning them to the user

- usecases
  Usecases hold the business logic of the architecture. All possible actions that a user could perform on the system are implemented as a usecase

- entities
  Entities are business objects. They only hold the necessary information for the business logic to work and don't have any of the methods a model from mongoose would have for example. This is by design so our usecases are "repositorie's implementation agnostics".

- repositories
  Repositories serve data to the usecases, they will often query databases and apis, and pass the data to the usecases in a way that fulfills the contract estabilished with the domain layer.

## Response standartization

Responses in this api will contain the following properties:

- success
- data
- failures

The succees property indicates if the api behaved in an expected manner. Please note that success: true doesn't necesserily mean the api made what the user wanted, but rather that there weren't any unexpected errors.
Success is a boolean;

data is an object or a list. It contains the data.

failures is always a list and it contains failures that may have happened during the request lifecycle.

When there's no data/failures, null is sent instead of ommiting the property or sending an empty array. This will prevent errors on the frontend and facilitate if checks.
