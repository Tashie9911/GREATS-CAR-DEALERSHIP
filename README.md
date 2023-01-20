## Project description
This Web App provides a system that allows it to register its new cars and track its sales to client. Browse new cars online and get full information about car and schedule test drive.

## Who uses it?
This App will be used by both dealer and potential customers.

## Outputs from GREATS System Car Dealership Web App
Outputs for users
  * Browse cars by Year
  * Browse cars by Make
  * Browse cars by Body Type
  * Browse cars by Price Range
  * Schedule Test Drive

Outputs for Admin
  * GetAssetPrivateProperties
  *GetAssetSalesPrice
  *GetAssetId
  *QueryAssetSalesAgreements
  *QueryAssetBuyAgreements
  *QueryAssetHistory
## Inputs are needed to generate outputs
Following inputs will be needed to generate above listed outputs
  * ID
  * Year
  * Make
  * Model
  * Trim
  * Engine
  * Drive Type
  * Body Type
  * Transmission Type
  * Price
  * Sale Price
  * Images
  * Features list

## Technologies
This CRUD app will use following technologies

Front End
  * React
    * React-router
  * Redux
    * Redux-form
  * Reactstrap

Backend
  * Node.js
  * Express.js
  * Knex.js
  * Postgresql
  * Bookshelf.js
  * AWS - S3

## Feature list
User
  * User will see list of cars
  * User will see different filters in order to browse particular type of car
  * User will click on car from list and will see detailed information about that car
  * User will see a message form to send an interest for car also can be used for schedule test drive

Admin
  * Admin will see dashboard
  * Admin will see a list of inventory
  * Admin will be able to Add, Edit and Delete cars from inventory
  * Admin will see a list of messages by users
  * Admin will read user's messages and follow up

## User - Home Page

![user home page]()

## User - Search car by make

![search car by make]()

## User - Car detail

![user car detail]()

## Admin - Dashboard

![admin dashboard]()

## Admin - Add car

![admin add car]()

## Admin - Edit car

![admin edit car]()

## Admin - Messages

![admin messages]()
